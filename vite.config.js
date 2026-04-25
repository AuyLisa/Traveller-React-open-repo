import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Главный алиас на src
      '@': path.resolve(__dirname, './src'),
      
      // Алиасы для основных папок
      '@components': path.resolve(__dirname, './src/components'),
      '@common': path.resolve(__dirname, './src/components/common'),
      '@public': path.resolve(__dirname, './src/components/public'),
      '@private': path.resolve(__dirname, './src/components/private'),
      
      // Алиасы для конкретных разделов common (самое важное!)
      '@ui': path.resolve(__dirname, './src/components/common/ui'),
      '@home': path.resolve(__dirname, './src/components/common/home'),
      '@trips': path.resolve(__dirname, './src/components/common/trips'),
      '@avias': path.resolve(__dirname, './src/components/common/avias'),
      '@hotels': path.resolve(__dirname, './src/components/common/hotels'),
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