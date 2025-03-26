/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MONGODB_URI: "mongodb+srv://organikkanpur:d6fpbA3irM6wQgSC@customerdb.mvlkwaq.mongodb.net/customerDB",
        RAZORPAY_KEY_ID: "rzp_live_CsSzI7vjFe2QjR",
        RAZORPAY_KEY_SECRET: "eyBhWUe0eqSF8aWGMHbZExDG",
        NEXT_PUBLIC_RAZORPAY_KEY_ID: "rzp_live_CsSzI7vjFe2QjR"
    },
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    }
}

export default nextConfig;
