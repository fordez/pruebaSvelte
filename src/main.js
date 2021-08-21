import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Fernando',
		lastName: "Ordoñez"
	}
});

export default app;