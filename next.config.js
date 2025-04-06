/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'farshaxan.blr1.cdn.digitaloceanspaces.com' },
            { protocol: 'https', hostname: 'upload.wikimedia.org' },
            { protocol: 'https', hostname: 'a.cdn-hotels.com' },
            { protocol: 'https', hostname: 'www.togethertoeat.com' },
            { protocol: 'https', hostname: 'realfood.tesco.com' },
            { protocol: 'https', hostname: 'www.snackandbakery.com' },
            { protocol: 'https', hostname: 'images.immediate.co.uk' },
        ]
    }
}

module.exports = nextConfig
