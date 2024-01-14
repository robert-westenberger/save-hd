import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import {viteStaticCopy} from 'vite-plugin-static-copy';
import webExtension from 'vite-plugin-web-extension';


export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      webExtension({
        webExtConfig: {
          startUrl: env.VITE_WEB_EXT_START_URL,
          chromiumBinary: env.VITE_WEB_EXT_CHROMIUM_BINARY_PATH,
          chromiumProfile: env.VITE_WEB_EXT_CHROMIUM_PROFILE_PATH
        }
      }),
      viteStaticCopy({
        targets: [
          // { src: 'public/manifest.json', dest: '.' },
          { src: 'public/16.png', dest: '.' },
          { src: 'public/48.png', dest: '.' },
          { src: 'public/128.png', dest: '.' },
        ],
      }),
    ]
  }
})
