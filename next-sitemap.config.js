/** @type {import('next-sitemap').IConfig} */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

module.exports = {
    siteUrl: `${siteUrl}/`,
    generateRobotsTxt: true,
    generateIndexSitemap: false
}
