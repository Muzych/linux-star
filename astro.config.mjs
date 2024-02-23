import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Linux-Star',
			social: {
				github: 'https://github.com/Muzych/clip',
				telegram: "https://t.me/Muzy_ch",
				twitter: "https://twitter.com/1Haxk4541",
				mastodon: "https://mastodon.social/@Muzych",
			},
			sidebar: [
				
			],
		}),
	],
});
