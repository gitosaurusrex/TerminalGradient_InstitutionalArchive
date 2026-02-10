import { defineConfig } from 'vite';
import { resolve } from 'path';
import { globSync } from 'glob';

const htmlFiles = globSync('*.html').reduce((acc, file) => {
    const name = file.replace(/\.html$/, '');
    acc[name] = resolve(__dirname, file);
    return acc;
}, {});

export default defineConfig({
    base: '/',
    appType: 'mpa',
    server: {
        port: 3000,
        open: true
    },
    assetsInclude: ['**/*.sql', '**/*.db', '**/*.wasm'],
    build: {
        outDir: 'dist',
        assetsInlineLimit: 0,
        rollupOptions: {
            input: htmlFiles
        }
    }
});
