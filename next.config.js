/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("next-pwa")({
    dest: "public",
    disable: process.env.NODE_ENV !== "production"
})

const nextConfig = withPWA({
    reactStrictMode: true,
    output: process.env.BUILD_STANDALONE === "true" ? "standalone" : undefined,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "raw.githubusercontent.com"
            }
        ]
    }
})

module.exports = {
    ...nextConfig,
    async headers() {
        const headers = []
        if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
            headers.push({
                headers: [
                    {
                        key: "X-Robots-Tag",
                        value: "index, follow"
                    }
                ],
                source: "/:path*"
            })
        }
        return headers
    }
}
