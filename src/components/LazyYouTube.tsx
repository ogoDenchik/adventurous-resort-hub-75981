import React, { useEffect, useRef, useState } from 'react';

interface LazyYouTubeProps {
  videoId: string;
  title: string;
  className?: string;
}

/**
 * Defers YouTube iframe creation until the container is near the viewport.
 * Saves ~1MB+ of YT player JS on initial mobile load.
 */
const LazyYouTube: React.FC<LazyYouTubeProps> = ({ videoId, title, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (!ref.current || shouldLoad) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          obs.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [shouldLoad]);

  const thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div ref={ref} className={className}>
      {shouldLoad ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <img
          src={thumb}
          alt={title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </div>
  );
};

export default LazyYouTube;
