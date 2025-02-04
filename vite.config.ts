import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
    dts({
      // Output directory for .d.ts files (you can customize this)
      outDir: 'dist/types', 
      // Optionally, exclude some files from being declared
      include: ['src/**/*'],
      // You can use other options like `beforeWriteFile`, etc.
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),  // Your component entry point
      name: 'SelectBox',    // Name of your library
      fileName: (format) => `index.${format}.js`,  // Output file names
    },
    rollupOptions: {
      // External dependencies (don't bundle them in the component)
      external: ['react', 'react-dom'],
      output: {
        // Ensures the global variable name in the UMD build is correct
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,  
  },
})
