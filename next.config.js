const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  images: {
    // Optional: Enable image optimization by removing `unoptimized: true` unless needed
    // unoptimized: true, // remove this if you want to use Next.js image optimization
  },
  assetPrefix: isProd ? "/portfolio/" : "",
  basePath: isProd ? "/portfolio" : "",
  output: "export", // Use export for static site generation
};

module.exports = nextConfig;
