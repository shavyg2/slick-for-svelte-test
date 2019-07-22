<script>
  export let users;
  import {CurrentQuery} from "slick-for-svelte";
  import {spa} from "../../actions/spa"

</script>



  <div class="flex flex-row flex-wrap">
  {#each users as user}
    <a href={`/user/${user.login}`}  use:spa>
    <div class="p-5 flex flex-row items-center">
      <div class="pb-3 flex-col">
        <img class="mb-3" width="150" src={user.avatar_url} alt="avatar" />
        <div class="capitalize">{user.login}</div>
      </div>
    </div>
    </a>
  {/each}
  </div>
