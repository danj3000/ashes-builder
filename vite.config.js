import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import postcssNesting from 'postcss-nesting'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        postcssNesting
      ],
    },
  },
  server: {
    proxy: {
      '/live': {
        target: 'https://api.ashes.live/v2/',
        changeOrigin: true,
        ws: true,
        secure: true,
        rewrite: path => path.replace(/^\/live/, ''),
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('ashes live proxy error', err);
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('Sending Request to ashes live target:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.log('Received Response from ashes live target:', proxyRes.statusCode, req.url);
          });
        },
      },

      // // Using the proxy instance
      // '/api': {
      //   target: 'http://localhost:4000',
      //   changeOrigin: true,
      //   secure: false,
      //   ws: true,
      //   configure: (proxy, _options) => {
      //     proxy.on('error', (err, _req, _res) => {
      //       console.log('proxy error', err);
      //     });
      //     proxy.on('proxyReq', (proxyReq, req, _res) => {
      //       console.log('Sending Request to the Target:', req.method, req.url);
      //     });
      //     proxy.on('proxyRes', (proxyRes, req, _res) => {
      //       console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
      //     });
      //   },
      // }
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'nested/index.html'),
      },
    },
  },
})
