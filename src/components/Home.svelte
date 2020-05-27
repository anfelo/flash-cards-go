<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export function onStartClick() {
    dispatch("navigate", {
      route: "cards"
    });
  }
</script>

<h1 class="namecard-prompt">Let's get started</h1>
<button on:click|once={onStartClick} class="namecard-submit">Begin!</button>
