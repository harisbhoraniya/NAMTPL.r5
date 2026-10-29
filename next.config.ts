const nextConfig = {
  output: 'export',   // 👈 THIS is required
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true, // 👈 required for export
  },
};

export default nextConfig;