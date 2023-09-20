<script lang='ts'>
    let count =0 ;
    function increment() {
        count += 1;
    }
</script>

<h1 class='text-center m-4'>Logic</h1>
<p class="text-center m-4">HTML doesn't have a way of expressing logic, like conditionals and loops. Svelte does. To do this, you wrap it in an <code>if</code> block</p>
<button class="btn btn-md bg-pink-300 m-4" on:click={increment}>Clicked {count} {count === 1 ? 'time' : 'times'} 
</button>

{#if count >10}
    <p class="m-4">{count} is greater than 10</p>
{:else if count < 5}
    <p class="m-4">{count} is less than 5</p>
{:else}
    <p class="m-4">{count} is somewhere between 0 & 10</p>
{/if}