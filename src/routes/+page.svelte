<script lang='ts'>
	let name = 'Svelte'
	import Nested from '$lib/components/Nested.svelte';
	import nested from '$lib/components/Nested.svelte'
</script>

<h1 class="text-yellow-400 font-bold">Welcome to my {name} page!</h1>
<Nested />
<!-- <style>
	h1 {
		color:goldenrod;
		font-family: 'Courier New', 'Serif';
	}
</style> -->