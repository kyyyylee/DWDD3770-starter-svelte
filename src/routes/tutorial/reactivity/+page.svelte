<script lang='ts'>
    let count = 0
    $: doubled = count * 2

    $: if (count >= 10) {
        alert('count is dagerously high!')
        count = 0 
    }

    $: console.log(`the count is ${count}`)

    function handleClick() {
        count += 1
    }



</script>

<div class="w-3/4 bg-slate-200 m-4 p-4">
    <h3 class="text-slate-800 text-center">Button Clicker</h3>
<button class="btn btn-md bg-pink-400 rounded-full m-4" on:click={handleClick}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
<p class="text-slate-800 ml-5">{count} doubled is {doubled}</p>
</div>