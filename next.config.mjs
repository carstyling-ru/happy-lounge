/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? ""
const isProjectPagesRepo =
  process.env.GITHUB_ACTIONS === "true" &&
  repoName.length > 0 &&
  !repoName.endsWith(".github.io")

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProjectPagesRepo ? `/${repoName}` : "",
  assetPrefix: isProjectPagesRepo ? `/${repoName}/` : "",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
