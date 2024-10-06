<script lang="ts">
  import type { UserAPIResponse } from "$lib/types/profile.type";
  import type { ResponseDataWrapper } from "$lib/types/wrapper.type";
  import { timeConverter } from "$lib/utils/converter";

  export let data: ResponseDataWrapper<UserAPIResponse>;
</script>

<h1>
  Hello <span class={data.data.privilige_level}>{data.data.username}</span>!
</h1>
<p>Great to have you here!</p>

<p>User created: {timeConverter(data.data.created_at)}</p>
<p>User updated: {timeConverter(data.data.updated_at)}</p>

<p>Email: {data.data.email}</p>

<h2>You Profile</h2>
<p>Bio: {data.data.profile.bio}</p>
<p>Fullname: {data.data.profile.name}</p>

<style>
  .admin {
    color: green;
  }

  .moderator {
    color: red;
  }

  .user {
    color: blue;
  }
</style>
