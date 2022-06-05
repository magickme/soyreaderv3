export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/about.svelte"),
	() => import("../../src/routes/components/buttons/addSub/addSub.svelte"),
	() => import("../../src/routes/components/buttons/delSub/delSub.svelte"),
	() => import("../../src/routes/components/feed/feed.svelte"),
	() => import("../../src/routes/components/footer/footer.svelte"),
	() => import("../../src/routes/components/nav/nav.svelte"),
	() => import("../../src/routes/components/search/search.svelte"),
	() => import("../../src/routes/index.svelte")
];

export const dictionary = {
	"": [[0, 9], [1]],
	"about": [[0, 2], [1]],
	"components/feed/feed": [[0, 5], [1]],
	"components/footer/footer": [[0, 6], [1]],
	"components/nav/nav": [[0, 7], [1]],
	"components/search/search": [[0, 8], [1]],
	"components/buttons/addSub/addSub": [[0, 3], [1]],
	"components/buttons/delSub/delSub": [[0, 4], [1]]
};