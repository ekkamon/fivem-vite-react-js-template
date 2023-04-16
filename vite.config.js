import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';

import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), jsconfigPaths({})],
});
