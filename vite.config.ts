// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
// We are temporarily disabling componentTagger to resolve the conflict
// import { componentTagger } from "lovable-tagger";

export default defineConfig({
  server: {
    host: '::',
    port: 8080,
  },
  plugins: [
    react(),
    // Temporarily disable the tagger plugin during testing
    // mode === 'development' && componentTagger(),
  ].filter(Boolean),
  
  // This 'resolve' block is the most robust fix for the dev server issue
  resolve: {
    alias: {
      // Your existing alias for src
      '@': path.resolve(__dirname, './src'),
      
      // Force Vite to use the correct instance of these libraries
      'three': path.resolve(__dirname, 'node_modules/three'),
      '@react-three/fiber': path.resolve(__dirname, 'node_modules/@react-three/fiber'),
      '@react-three/drei': path.resolve(__dirname, 'node_modules/@react-three/drei'),
    },
  },
});