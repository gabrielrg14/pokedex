/** @type {import('next-sitemap').IConfig} */
const siteUrl =
  process.env.SITE_URL || 'https://pokedex-gabrielrg.vercel.app'

module.exports = {
  siteUrl: siteUrl,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [`${siteUrl}/server-sitemap.xml`]
  }
}
