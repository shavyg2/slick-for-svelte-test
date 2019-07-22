
<script>
    import {CurrentQuery} from "slick-for-svelte";
    import {spa} from "../../actions/spa"
</script>

<div class="flex flex-col p-2">
    
    <div class="flex flex-col flex-wrap">
  
  
  
  <div class="flex flex-row justify-between">
    <a href={`?page=${Math.max(parseInt(CurrentQuery.value.page||"1")-1,1)}`}  use:spa>
      <button class="p-2 px-3">Prev</button>
    </a>
    <a href={`?page=${parseInt(CurrentQuery.value.page||"1")+1}`} use:spa>
      <button class="p-2 px-3">Next</button>
    </a>
  </div>
    
    
    <slot></slot>

</div>
</div>