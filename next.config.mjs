// Google Business Profile review link. jdrock.com/review points here, so printed
// QR codes and shared links keep working if this ever changes.
const GOOGLE_REVIEW_URL = "https://g.page/r/CYyU0Jm3UAIUEAE/review";

/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "build",
    async redirects() {
        return [
            {
                source: "/review",
                destination: GOOGLE_REVIEW_URL,
                // Temporary so browsers don't cache it if the destination changes
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
