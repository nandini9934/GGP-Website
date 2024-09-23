/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MONGODB_URI: "mongodb+srv://organikkanpur:d6fpbA3irM6wQgSC@customerdb.mvlkwaq.mongodb.net/customerDB",
        RAZORPAY_KEY_ID: "rzp_live_o4DfwC4wYMqvkv",
        RAZORPAY_KEY_SECRET: "U2S8EoN42yMmxxAkjqeCzmFG"
    },
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    }
}

export default nextConfig;
