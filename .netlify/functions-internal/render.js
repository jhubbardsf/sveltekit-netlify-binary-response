import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-71120fdb.js","js":["start-71120fdb.js","chunks/index-dd64db13.js"],"css":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "image.png",
				pattern: /^\/image\.png$/,
				names: [],
				types: [],
				load: () => import('../server/entries/endpoints/image.png.js')
			},
			{
				type: 'endpoint',
				id: "image",
				pattern: /^\/image\/?$/,
				names: [],
				types: [],
				load: () => import('../server/entries/endpoints/image.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
