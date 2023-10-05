<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function sayHello() {
		dispatch('foo', {
			text: 'Hello from the dispatched Foo event!'
		});
	}
</script>

<button class="btn btn-lg bg-surface-400 m-4 p-4 text-surface-100" on:click={sayHello}>
	Click for cute modal
</button>