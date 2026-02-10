import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    server: {
        port: 3000,
        open: true
    },
    assetsInclude: ['**/*.sql', '**/*.db', '**/*.wasm'],
    build: {
        outDir: 'dist',
        assetsInlineLimit: 0, // Ensure large files are not inlined as base64
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                archive: resolve(__dirname, 'archive-index.html'),
                caseIndex: resolve(__dirname, 'case-index.html'),
                caseView: resolve(__dirname, 'case-view.html'),
                fragmentIndex: resolve(__dirname, 'fragment-index.html'),
                fragmentView: resolve(__dirname, 'fragment-view.html'),
                search: resolve(__dirname, 'search.html'),
                browsePhenomenology: resolve(__dirname, 'browse-phenomenology.html'),
                browseChronological: resolve(__dirname, 'browse-chronological.html'),
            }
        }
    }
});
