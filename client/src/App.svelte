<script>
  import Header from "./components/Header.svelte";
  import Home from "./components/Home.svelte";
  import Card from "./components/Card.svelte";
  import Error from "./components/Error.svelte";

  let activeRoute = "home";
  let error;
  function handleNavigate(event) {
    if (event.detail.error) {
      error = event.detail.error;
    } else {
      error = null;
    }
    activeRoute = event.detail.route;
  }
</script>

<style>

</style>

<Header />
<main>
  {#if !error}
    <section class="namecard">
      <div class="namecard-hello">
        <p class="namecard-greeting">Welcome, student!</p>
      </div>
      {#if activeRoute === 'home'}
        <Home on:navigate={handleNavigate} />
      {:else if activeRoute === 'cards'}
        <Card on:navigate={handleNavigate} />
      {:else}
        <Home on:navigate={handleNavigate} />
      {/if}
    </section>
  {:else}
    <Error on:navigate={handleNavigate} {error} />
  {/if}
</main>
