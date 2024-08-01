<script lang="ts">
  import { goto } from "$app/navigation";
  import Search from "./Search.svelte";

  let options: string[] = ["lesson"];
  let selectorWidth: string = "0px";
  let selectorLeft: string = "0px";
  let focusedElement: HTMLElement | null = null;

  const navigateTo = (url: string) => {
    goto(url);
  };

  function updateSelectorPosition(element: HTMLElement) {
    const navItemRect = element.getBoundingClientRect();
    const navContainerRect = document
      .querySelector(".nav-section nav ul")!
      .getBoundingClientRect();

    //Manual adjustment for now
    const leftOffset = navItemRect.left - navContainerRect.left + 512;
    const navContainerPaddingLeft = parseFloat(
      getComputedStyle(document.querySelector(".nav-section nav ul")!)
        .paddingLeft
    );
    const navContainerBorderLeft = parseFloat(
      getComputedStyle(document.querySelector(".nav-section nav ul")!)
        .borderLeftWidth
    );

    selectorLeft = `${leftOffset + navContainerPaddingLeft + navContainerBorderLeft}px`;
    selectorWidth = `${navItemRect.width}px`;
  }

  function handleMouseOver(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    updateSelectorPosition(target);
  }

  function handleFocus(event: FocusEvent) {
    const target = event.currentTarget as HTMLElement;
    focusedElement = target;
    updateSelectorPosition(target);
  }

  function handleMouseLeave() {
    if (focusedElement) {
      updateSelectorPosition(focusedElement);
    } else {
      selectorWidth = "0px";
    }
  }

  function handleBlur() {
    //Reset selector-bar when focus is lost
    if (focusedElement) {
      updateSelectorPosition(focusedElement);
    } else {
      selectorWidth = "0px";
    }
  }
</script>

<header>
  <div class="logo">
    <a class="image-link" href="/">
      <img class="logo" src="msmg-logo.png" alt="MSMG" />
    </a>
  </div>
  <div class="nav-section">
    <nav>
      <ul>
        {#each options as _option}
          <li>
            <!-- SvelteKit tries to resolve the links that leads to errors. -->
            
            <a
              href="/{_option}"
              on:click|preventDefault={() => navigateTo(_option)}
              on:mouseover={handleMouseOver}
              on:focus={handleFocus}
              on:blur={handleBlur}
              on:mouseleave={handleMouseLeave}
              tabindex="0"
            >
              {#if _option.length === 0}HOME
              {:else}{_option.toUpperCase()}{/if}
            </a>
           
          </li>
        {/each}
      </ul>
    </nav>
    <div
      class="selector-bar"
      style="width: {selectorWidth}; left: {selectorLeft};"
    />
  </div>
  <div class="title">
    <Search />
  </div>
</header>

<style>
  .logo {
    max-width: 200px;
  }

  header {
    background-color: #fff;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo img {
    max-width: 100%;
  }

  .nav-section {
    position: relative;
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .nav-section nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    position: relative;
    padding-bottom: 10px;
  }

  .nav-section nav ul li {
    margin-right: 1rem;
    position: relative;
  }

  .nav-section nav ul li a {
    color: #ababab;
    text-decoration: none;
    font-weight: bold;
    position: relative;
    display: inline-block;
    padding-bottom: 2px;
  }

  .nav-section nav ul li a:hover::after,
  .nav-section nav ul li a:focus::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    height: 2px;
    background-color: #fff;
  }

  .title {
    color: black;
    text-decoration: none;
    font-weight: bold;
  }

  .selector-bar {
    position: absolute;
    bottom: 0;
    height: 2px;
    background-color: #ababab;
    transition:
      width 0.3s ease,
      left 0.3s ease;
    width: 0;
    left: 0;
  }
</style>
