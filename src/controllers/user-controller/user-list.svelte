<script>
  export let preload;
  import {CurrentQuery} from "slick-for-svelte"
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<div class="flex flex-col flex-wrap">
  <div class="flex flex-row justify-between">
    <a href={`?page=${parseInt(CurrentQuery.value.page)-1}`}>
      <button class="p-2 px-3">Prev</button>
    </a>
    <a href={`?page=${parseInt(CurrentQuery.value.page)+1}`}>
      <button class="p-2 px-3">Next</button>
    </a>
  </div>
  <div class="flex flex-row flex-wrap">
  {#each preload as user}
    <a href={`/user/${user.login}`}>
    <div class="p-5 flex flex-row items-center">
      <div class="pb-3 flex-col">
        <img class="mb-3" width="150" src={user.avatar_url} alt="avatar" />
        <div class="capitalize">{user.login}</div>
      </div>
    </div>
    </a>
  {/each}
  </div>
</div>
