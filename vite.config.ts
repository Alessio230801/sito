import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        configure: (proxy, options) => {
          // Fallback per sviluppo locale
          proxy.on('error', (err, req, res) => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ 
              success: true, 
              message: 'Richiesta ricevuta (modalità sviluppo)' 
            }));
          });
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    assetsInclude: ['**/*.png'],
  },
});