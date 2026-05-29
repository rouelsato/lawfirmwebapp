import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import fs from "fs";
import path from "path";

export default defineConfig({
  // SPA mode - let TanStack Start handle client build with our HTML entry
  vite: {
    plugins: [
      {
        name: "inject-client-bundle",
        apply: "build",
        enforce: "post",
        async writeBundle() {
          // Find the main client bundle
          const distClient = path.join(process.cwd(), "dist/client");
          const assetsDir = path.join(distClient, "assets");
          
          if (fs.existsSync(assetsDir)) {
            const files = fs.readdirSync(assetsDir);
            const jsFiles = files.filter((f) => f.startsWith("index-") && f.endsWith(".js"));
            
            if (jsFiles.length > 0) {
              const mainBundle = jsFiles[0];
              const indexPath = path.join(distClient, "index.html");
              
              let html = fs.readFileSync(indexPath, "utf-8");
              
              // Replace the script tag
              html = html.replace(
                '<script type="module" src="/src/client.tsx"></script>',
                `<script type="module" src="/assets/${mainBundle}"></script>`
              );
              
              fs.writeFileSync(indexPath, html);
              console.log(`✓ Injected client bundle: ${mainBundle}`);
            }
          }
        },
      },
    ],
  },
});

