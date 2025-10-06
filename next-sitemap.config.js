// /** @type {import('next-sitemap').IConfig} */

// module.exports = {
//     siteUrl: process.env.SITE_URL || 'https://example.com',
//     generateRobotsTxt: true, // (optional)
//      // Default transformation function
//   }


  /** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://irenemyronova.netlify.app', 
  generateRobotsTxt: true, 
  changefreq: 'daily',
  priority: 0.7,
};
