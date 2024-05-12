import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import fs from 'fs';

export default defineConfig({
	plugins: [
		sveltekit()
	],
	server: {
        https: {
            key: fs.readFileSync(`${__dirname}/mkcert/key.pem`),
            cert: fs.readFileSync(`${__dirname}/mkcert/cert.pem`)
        },
		proxy: {}
    }
});