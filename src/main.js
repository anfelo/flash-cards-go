import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'Flash Cards App',
  },
});

export default app;
