<script>
  import { onMount } from 'svelte';

  function navigateToNewTopic() {
    window.location.href = "/topic/editor?topic=new";
  }

  onMount(() => {
        const button = document.querySelector('.centered-button');
        if (button !== null) button.classList.add('gradient-transition');
    });
</script>

<div class="container">
  <button on:click={navigateToNewTopic} class="centered-button">
    New Topic
  </button>
</div>

<style>
  .container {
    height: 90vh;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .centered-button {
    width: 500px;
    padding: 10px;
    font-size: 24px;
    text-align: center;
    border: none;
    border-radius: 5px;
    background: linear-gradient(45deg, #007BFF, #00CFFF);
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .centered-button:hover {
    background-color: #0056b3;
  }
</style>
