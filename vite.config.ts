import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: 'src/main.tsx',  // Your component entry point
      name: 'SelectBox',    // Name of your library
      fileName: (format) => `selectbox.${format}.js`,  // Output file names
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
  },
})
