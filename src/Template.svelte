<script>
    export let view;
    export let preload;
    export let layout;
    export let NotFound;
    let {view:v,preload:p,layout:l,...props} = $$props;


</script>
{#if NotFound}
    <svelte:component this={NotFound}  />
{:else}
    {#await preload then preload}
        {#if layout}
            <svelte:component this={layout} {preload} {...props}>
                <svelte:component this={view} {preload} {...props}/>
            </svelte:component>
        {:else}
            <svelte:component this={view} {preload} {...props}/>
        {/if}
    
    {/await}
{/if}