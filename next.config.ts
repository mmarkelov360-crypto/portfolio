import type { NextConfig } from "next";

const nextConfig: NextConfig = {
<<<<<<< HEAD
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
=======
  // УБЕРИ output: 'export' для Vercel!
  // output: 'export',  ← ЗАКОММЕНТИРУЙ ИЛИ УДАЛИ
  
  images: {
    // unoptimized: true,  ← тоже закомментируй
  },
  // basePath: '/portfolio',  ← тоже закомментируй для Vercel
};

export default nextConfig;
>>>>>>> 79aa2faa7ce58d26a7fc84db93a365cf8141666d
