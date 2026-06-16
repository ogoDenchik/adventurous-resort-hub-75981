import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Helmet>
        <title>Page Not Found | OGO Kite Academy</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to OGO Kite Academy for kitesurfing lessons in Cyprus and trips to Egypt and Brazil." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </Link>
      </main>
    </div>
  );
};

export default NotFound;
