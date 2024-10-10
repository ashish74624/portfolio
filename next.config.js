/** @type {import('next').NextConfig} */
const nextConfig = {
   env: {
        BACKEND : process.env.BACKEND,
        EMAIL_USER : process.env.EMAIL_USER,
        EMAIL_PASS : process.env.EMAIL_PASS,
        EMAIL_TO : process.env.EMAIL_TO
      },
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'picsum.photos',
              port: '',
              pathname: '/200/300',
            },
          ],
          domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
    }
}

module.exports = nextConfig
