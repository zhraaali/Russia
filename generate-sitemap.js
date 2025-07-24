const fs = require('fs');
const path = require('path');

const baseUrl =  'https://russia-gulf.vercel.app'; 
const routes = [
  { path: '/', priority: '1.0' },
  { path: '/activity', priority: '0.8' },
  { path: '/informations', priority: '0.8' },
  { path: '/contact', priority: '0.7' }
];
const outputDir = path.join(__dirname, './public'); 

const currentDate = new Date().toISOString();

function generateSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  routes.forEach(route => {
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}${route.path}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>`;
  return xml;
}

function generateRobotsTxt() {
  let txt = `# robots.txt\n`;
  txt += `User-agent: *\n`;
  txt += `Allow: /\n\n`;
  txt += `Sitemap: ${baseUrl}/sitemap.xml\n`;
  return txt;
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(path.join(outputDir, 'sitemap.xml'), generateSitemap(), 'utf8');
fs.writeFileSync(path.join(outputDir, 'robots.txt'), generateRobotsTxt(), 'utf8');

console.log('Sitemap and robots.txt generated successfully in build folder');