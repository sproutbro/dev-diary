import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
	plugins: [
		sveltekit(),
		basicSsl({
			/** name of certification */
			name: 'jackie',
			/** custom trust domains */
			domains: ['*.diving.run'],
			/** custom certification directory */
			certDir: '/etc/letsencrypt/live/diving.run/'
		})
	]
});