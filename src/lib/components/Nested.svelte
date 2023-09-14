<script lang="ts">
	export let message: string = 'Hello from the nested file';
</script>

<div class=" bg-pink-200 m-6 text-center py-6">
	<p>{@html message}</p>
</div>