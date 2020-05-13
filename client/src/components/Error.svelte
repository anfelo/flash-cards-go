<script>
  export let error;

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export function onGoBack() {
    dispatch("navigate", {
      route: "home"
    });
  }
</script>

<section class="desk">
  <h1>{error.message} - Status: {error.status}</h1>
  <img class="desk-items" src="/img/desk.svg" alt="" />
  <button class="button-primary-small" on:click|once={onGoBack}>Go Home</button>
  <div class="paper">
    <pre class="stack-trace">{error.stack}</pre>
  </div>
</section>
