<script lang="ts">
  import UserData from "$lib/components/user/UserData.svelte";
  import type { UserAPIResponse } from "$lib/types/profile.type";
  import type { ResponseDataWrapper } from "$lib/types/wrapper.type";
  import { onMount } from "svelte";

  /* Default data */
  let data: ResponseDataWrapper<UserAPIResponse> = {
    ok: false,
    msg: "Loading...",
    data: {
      username: "Mr. Default",
      email: "default@email.com",
      privilige_level: "user",
      created_at: new Date(),
      updated_at: new Date(),
      profile: {
        bio: "Lorem ipsum dolor sit amet",
        name: "Default Default the III.",
      },
    },
  };

  onMount(async () => {
    fetch("/user/me/profile")
      .then((response) => response.json())
      .then((responseJson: ResponseDataWrapper<UserAPIResponse>) => {
        if (responseJson.ok) {
          data = responseJson;
        } else {
          console.error("Failed fetching profile: " + responseJson.msg);
        }
      });
  });
</script>

<UserData {data} />
