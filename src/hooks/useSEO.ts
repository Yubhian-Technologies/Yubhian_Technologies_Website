// Custom SEO Hook for Yubhian Technologies
// Advanced SEO management with React hooks

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../components/Analytics';
import type { SEOMetadata } from '../lib/seo';

export interface UseSEOOptions {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
  canonical?: string;
}

export const useSEO = (options: UseSEOOptions = {}) => {
  const location = useLocation();

  useEffect(() => {
    // Track page view for analytics
    const pageTitle = options.title || document.title;
    const pageUrl = window.location.href;
    
    // Update document title if provided
    if (options.title) {
      document.title = options.title.includes('Yubhian Technologies') 
        ? options.title 
        : `${options.title} | Yubhian Technologies LLP`;
    }

    // Track the page view
    trackPageView(pageUrl, pageTitle);

    // Add viewport meta tag if not exists
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(viewport);
    }

    // Add charset meta tag if not exists
    if (!document.querySelector('meta[charset]')) {
      const charset = document.createElement('meta');
      charset.setAttribute('charset', 'UTF-8');
      document.head.insertBefore(charset, document.head.firstChild);
    }

  }, [location.pathname, options.title]);

  // Return utility functions
  return {
    updateTitle: (newTitle: string) => {
      document.title = newTitle.includes('Yubhian Technologies') 
        ? newTitle 
        : `${newTitle} | Yubhian Technologies LLP`;
    },
    getCurrentPath: () => location.pathname,
    getFullUrl: () => window.location.href,
  };
};

// Hook for dynamic meta tag management
export const useMetaTags = (metadata: Partial<SEOMetadata>) => {
  useEffect(() => {
    const metaTags: { [key: string]: string } = {};

    // Build meta tags object
    if (metadata.description) {
      metaTags['description'] = metadata.description;
    }
    if (metadata.keywords && metadata.keywords.length > 0) {
      metaTags['keywords'] = metadata.keywords.join(', ');
    }
    if (metadata.author) {
      metaTags['author'] = metadata.author;
    }

    // Add or update meta tags
    Object.entries(metaTags).forEach(([name, content]) => {
      let metaTag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.name = name;
        document.head.appendChild(metaTag);
      }
      
      metaTag.content = content;
    });

    // Cleanup function to remove added meta tags
    return () => {
      Object.keys(metaTags).forEach((name) => {
        const metaTag = document.querySelector(`meta[name="${name}"]`);
        if (metaTag && metaTag.getAttribute('data-react-helmet') !== 'true') {
          metaTag.remove();
        }
      });
    };
  }, [metadata]);
};

// Hook for structured data injection
export const useStructuredData = (structuredData: object) => {
  useEffect(() => {
    const scriptId = `structured-data-${Math.random().toString(36).substr(2, 9)}`;
    
    // Create script tag for structured data
    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [structuredData]);
};

// Hook for canonical URL management
export const useCanonical = (canonicalUrl?: string) => {
  useEffect(() => {
    const url = canonicalUrl || window.location.href.split('?')[0].split('#')[0];
    
    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      document.head.appendChild(canonicalTag);
    }
    
    canonicalTag.href = url;

    return () => {
      if (canonicalTag && canonicalTag.getAttribute('data-react-helmet') !== 'true') {
        canonicalTag.remove();
      }
    };
  }, [canonicalUrl]);
};

// Combined SEO hook with all features
export const useAdvancedSEO = (options: {
  metadata?: Partial<SEOMetadata>;
  structuredData?: object;
  canonical?: string;
  noIndex?: boolean;
}) => {
  const seoResult = useSEO({
    title: options.metadata?.title,
    description: options.metadata?.description,
    keywords: options.metadata?.keywords,
    image: options.metadata?.image,
    noIndex: options.noIndex,
    canonical: options.canonical,
  });

  useMetaTags(options.metadata || {});
  
  if (options.structuredData) {
    useStructuredData(options.structuredData);
  }

  if (options.canonical || !options.noIndex) {
    useCanonical(options.canonical);
  }

  return seoResult;
};
