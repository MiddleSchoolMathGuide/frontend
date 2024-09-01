<script lang="ts">
  import { onMount } from "svelte";

  let currentInput: string = "";

  interface Lesson {
    title: string;
    description: string;
  }

  let lessons: Lesson[] = [];

  let lessonsSearchedFor: Lesson[] = [];
  

   const fetchLessons = async (topic?: string) => {
    try {
      const url = topic ? `/api/list/${topic}` : '/api/list/';
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: Lesson[] = await response.json();
      lessons = data;
    } catch (error) {
      console.error('Failed to fetch lessons:', error);
    }
  };
  
  $: updateSearch();

  const updateSearch = () => {
    const lowerCaseInput = currentInput.trim().toLowerCase();

    if (lowerCaseInput === "") {
      lessonsSearchedFor = [];
    } else {
      fetchLessons(lowerCaseInput);
      lessonsSearchedFor = lessons;
    }
  };

  onMount(() => {
    fetchLessons();
  });
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
    {#each lessonsSearchedFor as { title }}
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
