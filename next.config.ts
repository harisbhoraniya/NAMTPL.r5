const nextConfig = {
  output: 'export',   // 👈 static export (required for your shared hosting)
  trailingSlash: true, // 👈 THIS is the fix — generates products/zirconia-beads/index.html
                        //     instead of products/zirconia-beads.html, so clean URLs
                        //     resolve correctly on static/Apache-style hosting.
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true, // 👈 required for export
  },
};

export default nextConfig;