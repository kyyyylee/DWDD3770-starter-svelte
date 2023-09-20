<script lang="ts">
	let count = 0;
	$: doubled = count * 2;

	$: if (count >= 10) {
		alert('count is dagerously high!');
		count = 0;
	}

	$: console.log(`the count is ${count}`);

	function handleClick() {
		count += 1;
	}
</script>

<h1 class="m-4 text-center">
	At the heart of Svelte is a powerful system of reactivity for keeping the DOM in sync with your
	application state. Svelte's reactivity is triggered by assignments
</h1>
<div class="bg-slate-200 m-4 p-4 flex flex-col items-center">
	<h3 class="text-slate-800">Button Clicker</h3>
	<button class="btn btn-md w-1/2 bg-pink-400 rounded-full m-4" on:click={handleClick}>
		Clicked {count}
		{count === 1 ? 'time' : 'times'}
	</button>
	<p class="text-slate-800">{count} doubled is {doubled}</p>
</div>
