import { defineConfig } from 'vite';

export default defineConfig( {
    build: {
        lib: {
            entry: './src/index.js', // Entry point for your library
            formats: [ 'es' ],
            fileName: 'index'
        }
    },
    server: {
        open: true
    }
} );