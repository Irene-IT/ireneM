  /** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://irenemyronova-b2b.netlify.app',
  generateRobotsTxt: true, 
  changefreq: 'daily',
  priority: 0.7,
};
