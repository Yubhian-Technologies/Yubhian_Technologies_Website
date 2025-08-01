// Google Analytics 4 Integration for Yubhian Technologies
// Enterprise-level analytics with TypeScript support

import { useEffect } from 'react';

// Google Analytics 4 Configuration
export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 ID

// Initialize Google Analytics 4
export const initializeGA = () => {
  if (typeof window === 'undefined') return;

  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track page views
export const trackPageView = (url: string, title: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: title,
    page_location: url,
  });
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Business-specific event tracking
export const trackBusinessEvent = {
  // Contact form submission
  contactSubmission: (method: 'form' | 'phone' | 'email') => {
    trackEvent('contact_submission', 'engagement', method);
  },

  // Service interest tracking
  serviceInterest: (service: string) => {
    trackEvent('service_interest', 'business', service);
  },

  // Career page interactions
  careerInteraction: (action: 'view_opening' | 'apply' | 'download_info') => {
    trackEvent(action, 'careers');
  },

  // Technology stack interest
  techStackView: (technology: string) => {
    trackEvent('tech_interest', 'technology', technology);
  },

  // Download tracking
  downloadResource: (resource: string) => {
    trackEvent('download', 'resource', resource);
  }
};

// React Hook for Analytics
export const useAnalytics = () => {
  useEffect(() => {
    initializeGA();
  }, []);

  return {
    trackPageView,
    trackEvent,
    trackBusinessEvent,
  };
};

// Analytics Component
const Analytics: React.FC = () => {
  useAnalytics();
  return null; // This component doesn't render anything
};

export default Analytics;

// TypeScript declarations for global gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
