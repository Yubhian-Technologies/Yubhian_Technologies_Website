// SEO Utilities and Configuration for Yubhian Technologies
// Comprehensive SEO management utilities

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export interface StructuredDataOrganization {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo: string;
  description: string;
  foundingDate: string;
  founders: Array<{
    '@type': string;
    name: string;
  }>;
  address: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint: Array<{
    '@type': string;
    telephone: string;
    contactType: string;
    email: string;
  }>;
  sameAs: string[];
  services: Array<{
    '@type': string;
    name: string;
    description: string;
  }>;
}

// Default SEO configuration
export const defaultSEO: SEOMetadata = {
  title: 'Yubhian Technologies LLP - AI & Technology Solutions',
  description: 'Leading AI startup specializing in machine learning, artificial intelligence, and innovative technology solutions. Transform your business with cutting-edge AI applications.',
  keywords: [
    'AI startup',
    'artificial intelligence',
    'machine learning',
    'technology solutions',
    'AI development',
    'innovation',
    'tech consulting',
    'digital transformation'
  ],
  image: 'https://www.yubhiantechnologies.in/logo_bg.png',
  url: 'https://www.yubhiantechnologies.in',
  type: 'website'
};

// Generate complete metadata object
export const generateMetadata = (pageMeta: Partial<SEOMetadata>): SEOMetadata => {
  return {
    ...defaultSEO,
    ...pageMeta,
    title: pageMeta.title ? `${pageMeta.title} | Yubhian Technologies LLP` : defaultSEO.title,
    keywords: pageMeta.keywords ? [...defaultSEO.keywords!, ...pageMeta.keywords] : defaultSEO.keywords,
  };
};

// Organization structured data
export const organizationStructuredData: StructuredDataOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Yubhian Technologies LLP',
  url: 'https://www.yubhiantechnologies.in',
  logo: 'https://www.yubhiantechnologies.in/logo_bg.png',
  description: 'Innovative AI startup delivering cutting-edge artificial intelligence and machine learning solutions',
  foundingDate: '2023',
  founders: [
    {
      '@type': 'Person',
      name: 'Yubhian Technologies Team'
    }
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Technology Hub',
    addressLocality: 'Innovation District',
    addressRegion: 'Tech Valley',
    postalCode: '000000',
    addressCountry: 'IN'
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-XXXXXXXXXX',
      contactType: 'customer service',
      email: 'contact@yubhiantechnologies.in'
    }
  ],
  sameAs: [
    'https://linkedin.com/company/yubhian-technologies',
    'https://twitter.com/yubhiantech',
    'https://github.com/yubhian-technologies'
  ],
  services: [
    {
      '@type': 'Service',
      name: 'AI Development',
      description: 'Custom artificial intelligence solutions and machine learning models'
    },
    {
      '@type': 'Service',
      name: 'Technology Consulting',
      description: 'Strategic technology consulting and digital transformation services'
    },
    {
      '@type': 'Service',
      name: 'Innovation Solutions',
      description: 'Cutting-edge technology solutions for modern business challenges'
    }
  ]
};

// Page-specific structured data generators
export const generateBreadcrumbStructuredData = (items: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
};

export const generateJobPostingStructuredData = (job: {
  title: string;
  description: string;
  location: string;
  employmentType: string;
  datePosted: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Yubhian Technologies LLP',
      sameAs: 'https://www.yubhiantechnologies.in'
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location,
        addressCountry: 'IN'
      }
    },
    employmentType: job.employmentType,
    datePosted: job.datePosted,
    validThrough: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString() // 90 days from now
  };
};

// SEO validation utilities
export const validateSEO = (metadata: SEOMetadata): { isValid: boolean; issues: string[] } => {
  const issues: string[] = [];

  if (!metadata.title || metadata.title.length < 10) {
    issues.push('Title is too short (minimum 10 characters)');
  }
  if (metadata.title && metadata.title.length > 60) {
    issues.push('Title is too long (maximum 60 characters)');
  }
  if (!metadata.description || metadata.description.length < 120) {
    issues.push('Description is too short (minimum 120 characters)');
  }
  if (metadata.description && metadata.description.length > 160) {
    issues.push('Description is too long (maximum 160 characters)');
  }
  if (!metadata.keywords || metadata.keywords.length < 3) {
    issues.push('Not enough keywords (minimum 3)');
  }

  return {
    isValid: issues.length === 0,
    issues
  };
};

// URL utilities
export const generateCanonicalUrl = (path: string): string => {
  const baseUrl = 'https://www.yubhiantechnologies.in';
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
};

export const generateOpenGraphUrl = (path: string): string => {
  return generateCanonicalUrl(path);
};
