<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function sayHello() {
		dispatch('foo', {
			text: 'Hello from the dispatched Foo event!'
		});
	}
</script>

<button class="btn btn-lg bg-secondary-400 mt-10 m-4 p-4 text-surface-900" on:click={sayHello}>
	Nested foo messenger
</button>