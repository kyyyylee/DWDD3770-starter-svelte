<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function sayHello() {
		dispatch('message', {
			text: 'Hello!'
		});
	}
</script>

<button class="btn btn-lg bg-orange-400 mx-8" on:click={sayHello}>
	Click to say hello
</button>