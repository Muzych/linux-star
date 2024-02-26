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
				{
					"label": "2011",
					autogenerate: { "directory": "2011" }
				},
				{
					"label": "2012",
					autogenerate: { "directory": "2012" }
				},
				{
					"label": "2013",
					autogenerate: { "directory": "2013" }
				},
				{
					"label": "2014",
					autogenerate: { "directory": "2014" }
				},
				{
					"label": "2015",
					autogenerate: { "directory": "2015" }
				},
			],
		}),
	],
});
