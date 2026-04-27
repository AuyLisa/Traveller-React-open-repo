import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      // Главный алиас на src
      '@': path.resolve(__dirname, './src'),
      
      // Алиасы для основных папок
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@common': path.resolve(__dirname, './src/components/common'),
      '@public': path.resolve(__dirname, './src/components/public'),
      '@private': path.resolve(__dirname, './src/components/private'),
      
      // Алиасы для конкретных разделов 
      // для common 
      '@ui': path.resolve(__dirname, './src/components/common/ui'),
      '@home': path.resolve(__dirname, './src/components/common/home'),
      '@trips': path.resolve(__dirname, './src/components/common/trips'),
      '@avias': path.resolve(__dirname, './src/components/common/avias'),
      '@hotels': path.resolve(__dirname, './src/components/common/hotels'),
      '@rooms': path.resolve(__dirname, './src/components/common/rooms'),
      '@cart': path.resolve(__dirname, './src/components/common/cart'),
      '@checkout': path.resolve(__dirname, './src/components/common/checkout'),
      '@down-select': path.resolve(__dirname, './src/components/common/down-select'),
      
      // Остальные папки
      '@constants': path.resolve(__dirname, './src/constants'),
      '@context': path.resolve(__dirname, './src/context'),
      '@data': path.resolve(__dirname, './src/data'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@utils': path.resolve(__dirname, './src/utils'),
    }
  }
});