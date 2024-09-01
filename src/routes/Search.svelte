<script lang="ts">
  import type { ResponseDataWrapper } from "$lib/types/wrapper.type";

  interface Wrapper<T> {
    topics: T[];
    units: T[];
    lessons: T[];
  }
  interface Data {
    title: string;
    description: string;
  }

  let currentInput: string = "";
  let fetched: Wrapper<Data>;

  const fetchMatches = async (tag: string) => {
    try {
      const response = await fetch(`/api/search/${tag}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: ResponseDataWrapper<Wrapper<Data>> = await response.json();
      fetched = data.data;
    } catch (error) {
      console.error("Failed to fetch lessons:", error);
    }
  };

  $: updateSearch();

  const updateSearch = () => {
    const lowerCaseInput = currentInput.trim().toLowerCase();

    if (lowerCaseInput === "") {
      fetched = { topics: [], units: [], lessons: [] };
    } else {
      fetchMatches(lowerCaseInput);
    }
  };
</script>

<div class="search-box">
  <div class="search-icon">
    <img src="magnifying-glass-solid.svg" alt="search" />
  </div>
  <input
    type="text"
    placeholder="Search..."
    bind:value={currentInput}
    on:input={updateSearch}
  />
</div>

<div class="results">
  <div class="lesson-result">
    <!-- Unable to fix w/o hub for now, -->
    {#each fetched.topics as { title }}
      <p class="lesson"><a class="lesson-clickable" href="">{title}</a></p>
    {/each}
  </div>
</div>

<style>
  .search-box {
    display: flex;
    align-items: center;
    max-width: 300px;
    margin-bottom: 20px;
  }

  .search-icon {
    padding: 10px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-right: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .search-icon img {
    width: 16px;
    height: 16px;
  }

  input[type="text"] {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-left: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    font-size: 14px;
  }

  .results {
    margin-top: 10px;
  }

  .lesson {
    margin: 5px 0;
    padding: 10px;
    background-color: #f9f9f9;
    border: 1px solid #eee;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .lesson-clickable {
    color: black;
    text-decoration: none;
  }

  .lesson-result {
    max-height: 139px;
    overflow-y: auto;
  }
</style>
