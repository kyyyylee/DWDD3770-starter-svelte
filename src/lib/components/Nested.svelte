<script lang="ts">
	export let message: string = 'Hello from the parent component'
</script>

<div class=" bg-secondary-300 text-surface-900 m-4 text-center p-8 rounded-lg">
	<p class="text-xl">{@html message}</p>
</div>