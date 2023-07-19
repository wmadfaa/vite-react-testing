/* eslint-disable */
import { generateConfig } from './vite.config';
import { defineConfig, UserConfig } from 'vite';

export default defineConfig(({ mode }) => {
  const config: UserConfig = generateConfig({ mode });

  config.preview = {
    port: 5004,
  };

  config.build = {
    watch: {},
    target: 'esnext',
    minify: false,
    rollupOptions: { ...config.build?.rollupOptions, treeshake: false },
    outDir: './dist-rollup/',
  };

  return config;
});
