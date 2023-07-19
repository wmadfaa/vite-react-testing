/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, UserConfigExport } from 'vite';
import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export function generateConfig(config: UserConfigExport) {
  return {
    plugins: [
      react(),
      istanbul({
        exclude: ['node_modules', 'coverage/'],
        extension: ['.js', '.jsx', '.ts', '.tsx'],
        cypress: true,
        requireEnv: false,
        forceBuildInstrument: true,
      }),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      transformMode: { web: [/\.test\.[jt]sx?$/] },
      setupFiles: './vitest-setup.ts',
    },
  };
}
export default defineConfig(generateConfig);
