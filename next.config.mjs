/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://cyeju.github.io/travel/"
      : "",
};

export default nextConfig;
