<script lang="ts">
	export let message: string = 'Hello from the parent component'
</script>

<div class=" bg-pink-400 m-4 text-center py-10">
	<p>{@html message}</p>
</div>