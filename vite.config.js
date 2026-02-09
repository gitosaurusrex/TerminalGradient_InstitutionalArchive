import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        port: 3000,
        open: true
    },
    assetsInclude: ['**/*.sql', '**/*.db', '**/*.wasm'],
    build: {
        outDir: 'dist',
        assetsInlineLimit: 0 // Ensure large files are not inlined as base64
    }
});
