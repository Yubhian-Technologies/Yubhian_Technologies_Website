import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
  twitterCard?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  schema?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = "Yubhian Technologies LLP - Leading AI & Technology Solutions Provider",
  description = "Yubhian Technologies LLP is a cutting-edge AI startup specializing in artificial intelligence, machine learning, web development, blockchain solutions, and custom software development. Transform your business with enterprise-grade technology solutions.",
  keywords = "AI startup, artificial intelligence, machine learning, web development, blockchain, software development, technology solutions, Yubhian Technologies, enterprise AI, custom software, digital transformation, tech consulting, AI consulting, ML solutions",
  image = "https://yubhian-technologies-website.vercel.app/logo_bg.png",
  url = "https://yubhian-technologies-website.vercel.app/",
  type = "website",
  siteName = "Yubhian Technologies LLP",
  twitterCard = "summary_large_image",
  author = "Yubhian Technologies LLP",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  schema
}) => {
  const structuredData = schema || {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Yubhian Technologies LLP",
    "description": description,
    "url": url,
    "logo": image,
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "Yubhian Technologies Team"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8500401091",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/company/yubhian-technologies",
      "https://twitter.com/yubhiantech"
    ],
    "services": [
      "Artificial Intelligence Solutions",
      "Machine Learning Development",
      "Web Development",
      "Blockchain Development",
      "Custom Software Development",
      "Technology Consulting"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />
      
      {/* Article specific Open Graph tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@yubhiantech" />
      <meta name="twitter:creator" content="@yubhiantech" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="application-name" content={siteName} />
      
      {/* Mobile/Responsive */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.country" content="India" />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="en-IN" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
