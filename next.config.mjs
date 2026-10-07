const repo = "mediconnect"; // must match your GitHub repository name exactly
const isProd = process.env.NODE_ENV === "production";

export default {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : "",
  reactStrictMode: true,
};
