import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // УБЕРИ output: 'export' для Vercel!
  // output: 'export',  ← ЗАКОММЕНТИРУЙ ИЛИ УДАЛИ
  
  images: {
    // unoptimized: true,  ← тоже закомментируй
  },
  // basePath: '/portfolio',  ← тоже закомментируй для Vercel
};

export default nextConfig;
