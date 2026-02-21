const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://ips-archive.org';
const SEED_PATH = path.join(__dirname, '..', 'public', 'assets', 'database', 'seed.sql');
const OUTPUT_PATH = path.join(__dirname, '..', 'dist', 'sitemap.xml');

const seed = fs.readFileSync(SEED_PATH, 'utf-8');

// Extract case IDs (CS-S##)
const caseIds = [];
const caseRe = /INSERT INTO cases\s*\([^)]+\)\s*VALUES\s*\('(CS-S\d+)'/g;
let m;
while ((m = caseRe.exec(seed)) !== null) caseIds.push(m[1]);

// Extract fragment IDs (RF-#### and TOU-###)
const fragmentIds = [];
const fragRe = /INSERT INTO fragments\s*\([^)]+\)\s*VALUES\s*\('((?:RF-\d+|TOU-\d+))'/g;
while ((m = fragRe.exec(seed)) !== null) fragmentIds.push(m[1]);

// Static pages
const staticPages = [
  { loc: '/', priority: '1.0', changefreq: 'weekly' },
  { loc: '/about', priority: '0.7', changefreq: 'monthly' },
  { loc: '/case-index', priority: '0.8', changefreq: 'weekly' },
  { loc: '/fragment-index', priority: '0.8', changefreq: 'weekly' },
  { loc: '/archive-index', priority: '0.8', changefreq: 'weekly' },
  { loc: '/browse-phenomenology', priority: '0.7', changefreq: 'weekly' },
  { loc: '/browse-chronological', priority: '0.7', changefreq: 'weekly' },
  { loc: '/search', priority: '0.5', changefreq: 'monthly' },
];

const today = new Date().toISOString().split('T')[0];

function urlEntry(loc, priority, changefreq) {
  return `  <url>
    <loc>${SITE_URL}${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const entries = [
  ...staticPages.map(p => urlEntry(p.loc, p.priority, p.changefreq)),
  ...caseIds.map(id => urlEntry(`/case-view?id=${id}`, '0.6', 'monthly')),
  ...fragmentIds.map(id => urlEntry(`/fragment-view?id=${id}`, '0.5', 'monthly')),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;

fs.writeFileSync(OUTPUT_PATH, sitemap, 'utf-8');
console.log(`Sitemap generated: ${entries.length} URLs written to ${OUTPUT_PATH}`);
