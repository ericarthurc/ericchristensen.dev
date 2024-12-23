import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: ['./_posts']
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern'
			}
		}
	}
});
