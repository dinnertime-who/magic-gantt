import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'Gantt',
            fileName: 'magic-gantt',
        },
        rollupOptions: {
            output: {
                format: 'cjs',
                assetFileNames: 'magic-gantt[extname]',
                entryFileNames: 'magic-gantt.[format].js',
            },
        },
    },
    output: { interop: 'auto' },
    server: { watch: { include: ['dist/*', 'src/*'] } },
});
