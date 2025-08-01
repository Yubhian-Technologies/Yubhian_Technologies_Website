#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Yubhian Technologies - Comprehensive SEO Verification');
console.log('=' .repeat(60));

let score = 0;
let totalChecks = 12;
let issues = [];
let passes = [];

// Check 1: SEO Component exists and has content
try {
  const seoComponent = fs.readFileSync(path.join(__dirname, 'src/components/SEO.tsx'), 'utf8');
  if (seoComponent.includes('react-helmet-async') && 
      seoComponent.includes('application/ld+json') && 
      seoComponent.includes('og:title') &&
      seoComponent.length > 1000) {
    score++;
    passes.push('✅ SEO Component is comprehensive and properly implemented');
  } else {
    issues.push('❌ SEO Component missing key features');
  }
} catch (error) {
  issues.push('❌ SEO Component file not found or readable');
}

// Check 2: Analytics Component exists
try {
  const analyticsComponent = fs.readFileSync(path.join(__dirname, 'src/components/Analytics.tsx'), 'utf8');
  if (analyticsComponent.includes('gtag') && analyticsComponent.includes('GA_MEASUREMENT_ID')) {
    score++;
    passes.push('✅ Google Analytics component implemented');
  } else {
    issues.push('❌ Analytics component incomplete');
  }
} catch (error) {
  issues.push('❌ Analytics component not found');
}

// Check 3: SEO Utilities exist
try {
  const seoUtils = fs.readFileSync(path.join(__dirname, 'src/lib/seo.ts'), 'utf8');
  if (seoUtils.includes('generateMetadata') && 
      (seoUtils.includes('structuredData') || seoUtils.includes('StructuredData')) &&
      seoUtils.includes('validateSEO') &&
      seoUtils.includes('generateCanonicalUrl')) {
    score++;
    passes.push('✅ SEO utilities and helpers implemented');
  } else {
    issues.push('❌ SEO utilities incomplete');
  }
} catch (error) {
  issues.push('❌ SEO utilities not found');
}

// Check 4: SEO Hook exists
try {
  const seoHook = fs.readFileSync(path.join(__dirname, 'src/hooks/useSEO.ts'), 'utf8');
  if (seoHook.includes('useSEO') && seoHook.includes('useEffect')) {
    score++;
    passes.push('✅ Custom SEO hook implemented');
  } else {
    issues.push('❌ SEO hook incomplete');
  }
} catch (error) {
  issues.push('❌ SEO hook not found');
}

// Check 5: Homepage has SEO integration
try {
  const homepage = fs.readFileSync(path.join(__dirname, 'src/pages/Index.tsx'), 'utf8');
  if (homepage.includes('SEO') && homepage.includes('Yubhian Technologies')) {
    score++;
    passes.push('✅ Homepage has SEO integration');
  } else {
    issues.push('❌ Homepage missing SEO component');
  }
} catch (error) {
  issues.push('❌ Homepage not found or unreadable');
}

// Check 6: Other pages have SEO
const pages = ['Careers_Page.tsx', 'TermsConditions.tsx', 'PrivacyPolicies.tsx', 'NotFound.tsx'];
let pagesSeoCount = 0;
pages.forEach(page => {
  try {
    const pageContent = fs.readFileSync(path.join(__dirname, 'src/pages', page), 'utf8');
    if (pageContent.includes('SEO')) {
      pagesSeoCount++;
    }
  } catch (error) {
    // Page might not exist
  }
});

if (pagesSeoCount >= 3) {
  score++;
  passes.push(`✅ Multiple pages (${pagesSeoCount}/${pages.length}) have SEO integration`);
} else {
  issues.push(`❌ Only ${pagesSeoCount}/${pages.length} pages have SEO integration`);
}

// Check 7: App.tsx has HelmetProvider
try {
  const appFile = fs.readFileSync(path.join(__dirname, 'src/App.tsx'), 'utf8');
  if (appFile.includes('HelmetProvider') && appFile.includes('react-helmet-async')) {
    score++;
    passes.push('✅ App.tsx has HelmetProvider wrapper');
  } else {
    issues.push('❌ App.tsx missing HelmetProvider');
  }
} catch (error) {
  issues.push('❌ App.tsx not found or unreadable');
}

// Check 8: Robots.txt exists
try {
  const robotsTxt = fs.readFileSync(path.join(__dirname, 'public/robots.txt'), 'utf8');
  if (robotsTxt.includes('User-agent') && robotsTxt.includes('Sitemap')) {
    score++;
    passes.push('✅ Robots.txt properly configured');
  } else {
    issues.push('❌ Robots.txt incomplete');
  }
} catch (error) {
  issues.push('❌ Robots.txt not found');
}

// Check 9: Sitemap exists
try {
  const sitemap = fs.readFileSync(path.join(__dirname, 'public/sitemap.xml'), 'utf8');
  if (sitemap.includes('<urlset') && sitemap.includes('yubhiantechnologies.in')) {
    score++;
    passes.push('✅ XML Sitemap properly configured');
  } else {
    issues.push('❌ Sitemap incomplete or incorrect');
  }
} catch (error) {
  issues.push('❌ Sitemap not found');
}

// Check 10: Manifest.json exists
try {
  const manifest = fs.readFileSync(path.join(__dirname, 'public/manifest.json'), 'utf8');
  if (manifest.includes('Yubhian Technologies') && manifest.includes('icons')) {
    score++;
    passes.push('✅ PWA Manifest properly configured');
  } else {
    issues.push('❌ Manifest incomplete');
  }
} catch (error) {
  issues.push('❌ Manifest not found');
}

// Check 11: .htaccess exists
try {
  const htaccess = fs.readFileSync(path.join(__dirname, 'public/.htaccess'), 'utf8');
  if (htaccess.includes('RewriteEngine') && htaccess.includes('index.html')) {
    score++;
    passes.push('✅ .htaccess file configured for SPA routing');
  } else {
    issues.push('❌ .htaccess incomplete');
  }
} catch (error) {
  issues.push('❌ .htaccess not found');
}

// Check 12: Package.json has SEO dependencies
try {
  const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
  if (packageJson.dependencies && packageJson.dependencies['react-helmet-async']) {
    score++;
    passes.push('✅ SEO dependencies properly installed');
  } else {
    issues.push('❌ Missing react-helmet-async dependency');
  }
} catch (error) {
  issues.push('❌ Package.json not found or malformed');
}

console.log('\n📊 RESULTS:');
console.log('-'.repeat(40));

passes.forEach(pass => console.log(pass));
if (issues.length > 0) {
  console.log('\n⚠️  ISSUES TO ADDRESS:');
  issues.forEach(issue => console.log(issue));
}

const percentage = Math.round((score / totalChecks) * 100);
console.log(`\n🎯 SEO IMPLEMENTATION SCORE: ${score}/${totalChecks} (${percentage}%)`);

if (score === totalChecks) {
  console.log('🎉 EXCELLENT! Your SEO implementation is complete and comprehensive.');
} else if (score >= totalChecks * 0.8) {
  console.log('✨ GREAT! Your SEO implementation is mostly complete with minor improvements needed.');
} else if (score >= totalChecks * 0.6) {
  console.log('📈 GOOD! Your SEO implementation is on track but needs some attention.');
} else {
  console.log('🔧 NEEDS WORK! Several SEO components need to be implemented or fixed.');
}

console.log('\n💡 NOTE: In React applications, meta tags are added dynamically at runtime.');
console.log('   To verify the final output, check the browser\'s "View Source" when running the app.');
console.log('\n🚀 Run the dev server and inspect element to see dynamic meta tags in action!');

process.exit(score === totalChecks ? 0 : 1);
