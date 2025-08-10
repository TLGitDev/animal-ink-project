import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Template Vite config: expose as ES module for the shell and dev server CORS
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5180,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  },
  build: {
    target: 'es2015',
    lib: {
      entry: 'src/main.tsx',
      name: 'MFETemplate',
      formats: ['es'],
      fileName: () => `mfe-template.es.js`
    }
  },
  define: {
    global: 'globalThis',
    'process.env.NODE_ENV': JSON.stringify('production'),
    process: JSON.stringify({})
  }
})


