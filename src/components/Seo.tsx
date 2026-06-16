import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  path: string; // e.g. "/", "/kite-safari"
  image?: string;
  jsonLd?: object | object[];
}

const SITE = 'https://ogokiteacademy.com';
const DEFAULT_IMAGE =
  'https://storage.googleapis.com/gpt-engineer-file-uploads/a1t2DDCIfRg0ny8VzbGk9R2nnG52/social-images/social-1775853137635-images_(3).webp';

const Seo: React.FC<SeoProps> = ({ title, description, path, image, jsonLd }) => {
  const url = `${SITE}${path}`;
  const urlRu = `${SITE}${path}${path.includes('?') ? '&' : '?'}lang=ru`;
  const img = image ?? DEFAULT_IMAGE;
  const ldArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="ru" href={urlRu} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={img} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="ru_RU" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      {ldArray.map((obj, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(obj)}</script>
      ))}
    </Helmet>
  );
};

export default Seo;
