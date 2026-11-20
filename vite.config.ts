import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  // host: true also serves the site on this PC's Wi-Fi address, so you can open it on your phone.
  // Port 3100 so it doesn't clash with the Liams Cafe dev server on 3000.
  server: { port: 3100, host: true },
  resolve: { tsconfigPaths: true },
  plugins: [tanstackStart({ srcDirectory: 'src' }), viteReact(), nitro()],
})
