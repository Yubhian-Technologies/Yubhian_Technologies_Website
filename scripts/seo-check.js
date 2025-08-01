#!/usr/bin/env node

/**
 * SEO Verification Script for Yubhian Technologies LLP
 * Checks if all SEO elements are properly implemented
 */

import fs from 'fs';
import path from 'path';

console.log('🔍 SEO Implementation Verification for Yubhian Technologies LLP\n');

const checks = [
  {
    name: 'React Helmet Async installed',
    check: () => {
      try {
        const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        return packageJson.dependencies['react-helmet-async'] !== undefined;
      } catch {
        return false;
      }
    }
  },
  {
    name: 'SEO Component exists',
    check: () => fs.existsSync('src/components/SEO.tsx')
  },
  {
    name: 'Analytics Component exists',
    check: () => fs.existsSync('src/components/Analytics.tsx')
  },
  {
    name: 'SEO utilities exist',
    check: () => fs.existsSync('src/lib/seo.ts')
  },
  {
    name: 'Robots.txt configured',
    check: () => fs.existsSync('public/robots.txt')
  },
  {
    name: 'Sitemap.xml exists',
    check: () => fs.existsSync('public/sitemap.xml')
  },
  {
    name: 'Manifest.json exists',
    check: () => fs.existsSync('public/manifest.json')
  },
  {
    name: '.htaccess configured',
    check: () => fs.existsSync('public/.htaccess')
  },
  {
    name: 'Index.html has proper meta tags',
    check: () => {
      try {
        const indexHtml = fs.readFileSync('index.html', 'utf8');
        return indexHtml.includes('og:title') && 
               indexHtml.includes('twitter:card') && 
               indexHtml.includes('application/ld+json');
      } catch {
        return false;
      }
    }
  },
  {
    name: 'All pages have SEO components',
    check: () => {
      try {
        const indexPage = fs.readFileSync('src/pages/Index.tsx', 'utf8');
        const careersPage = fs.readFileSync('src/pages/Careers_Page.tsx', 'utf8');
        const termsPage = fs.readFileSync('src/pages/TermsConditions.tsx', 'utf8');
        const privacyPage = fs.readFileSync('src/pages/PrivacyPolicies.tsx', 'utf8');
        
        return indexPage.includes('import SEO') && 
               careersPage.includes('import SEO') && 
               termsPage.includes('import SEO') && 
               privacyPage.includes('import SEO');
      } catch {
        return false;
      }
    }
  }
];

let passed = 0;
let total = checks.length;

checks.forEach((check, index) => {
  const result = check.check();
  const status = result ? '✅' : '❌';
  console.log(`${index + 1}. ${status} ${check.name}`);
  if (result) passed++;
});

console.log(`\n📊 SEO Implementation Score: ${passed}/${total} (${Math.round(passed/total*100)}%)\n`);

if (passed === total) {
  console.log('🎉 Congratulations! All SEO elements are properly implemented.');
  console.log('🚀 Your website is ready for production with enterprise-level SEO!');
} else {
  console.log('⚠️  Some SEO elements need attention. Please review the failed checks above.');
}

console.log('\n📝 Next Steps:');
console.log('1. Replace placeholder values in Analytics component with real IDs');
console.log('2. Verify all meta descriptions are compelling and under 160 characters');
console.log('3. Test website on Google PageSpeed Insights');
console.log('4. Submit sitemap to Google Search Console');
console.log('5. Monitor SEO performance regularly\n');

console.log('🔗 Useful Resources:');
console.log('- Google Search Console: https://search.google.com/search-console');
console.log('- PageSpeed Insights: https://developers.google.com/speed/pagespeed/insights/');
console.log('- Structured Data Testing: https://search.google.com/structured-data/testing-tool');
console.log('- SEO Implementation Guide: ./SEO-IMPLEMENTATION.md');
