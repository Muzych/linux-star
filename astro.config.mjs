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
				{
					"label": "2016",
					autogenerate: { "directory": "2016" }
				},
				{
					"label": "2017",
					autogenerate: { "directory": "2017" }
				},
				{
					"label": "2018",
					autogenerate: { "directory": "2018" }
				},
				{
					"label": "2019",
					autogenerate: { "directory": "2019" }
				},
				{
					"label": "2020",
					autogenerate: { "directory": "2020" }
				},
				{
					"label": "2021",
					autogenerate: { "directory": "2021" }
				},
				{
					"label": "2022",
					autogenerate: { "directory": "2022" }
				},
				{
					"label": "2023",
					autogenerate: { "directory": "2023" }
				},
			],
		}),
	],
});
