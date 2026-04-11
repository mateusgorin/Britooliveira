
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { 
    // @ts-ignore - user requested this specific property
    historyApiFallback: true 
  }
});
