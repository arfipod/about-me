import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves project sites under /<repo-name>/.
// If you rename the repository, update this base path accordingly.
export default defineConfig({
  base: '/about-me/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});
