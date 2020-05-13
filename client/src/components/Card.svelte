<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  let cards = [
    {
      question: "What language are Express apps written in?",
      hint: 'It starts with a "J"',
      answer: "JavaScript"
    },
    {
      question: "What is one way a website can store data in a user's browser?",
      hint: "They are delicious with milk",
      answer: "Cookies"
    },
    {
      question:
        "What is a common way to shorten the response object's name inside middleware?",
      hint: 'It has the same abbreviation as "resolution"',
      answer: "res"
    },
    {
      question: "How many different values can booleans have?",
      hint: "Think: binary",
      answer: "2"
    },
    {
      question: "Which HTML element can contain JavaScript?",
      hint: 'It starts with an "s"',
      answer: "<script>"
    }
  ];
  let isShowHint = false;
  let side = "question";
  let cardIndex = 0;

  function onShowHint() {
    isShowHint = !isShowHint;
  }

  function onFlipCard() {
    side = side === "question" ? "answer" : "question";
  }

  function onNextCard() {
    let nextIndex = cardIndex + 1;
    if (nextIndex >= cards.length) {
      const error = {
        status: 404,
        message: "No more cards in the list",
        stack: "Sorry there are no more cards in the list."
      };
      dispatch("navigate", {
        route: "error",
        error: error
      });
      return;
    }
    cardIndex++;
  }
</script>

<section class="flashcards">
  <div class={`card card-${side}`}>
    <div class="card-header" />
    <h1 class="card-title">{side}</h1>
    <div id="content">
      <h2>{cards[cardIndex][side]}</h2>
      {#if cards[cardIndex].hint}
        <button on:click={onShowHint} id="show-btn">Show Hint</button>
        <p id="hint" class={!isShowHint ? 'hidden' : ''}>
          <i>Hint: {cards[cardIndex].hint}</i>
        </p>
      {/if}
    </div>
    <div class="card-flip-wrap">
      <span on:click={onFlipCard}>
        <img class="card-flip" src="/img/flip.svg" alt="" />
      </span>
    </div>
    <div class="card-next">
      <span on:click={onNextCard}>
        <img src="/img/next.svg" alt="" />
      </span>
    </div>
  </div>
</section>
