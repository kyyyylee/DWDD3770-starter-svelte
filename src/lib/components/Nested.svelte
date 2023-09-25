<script lang="ts">
	export let message: string = 'Hello from the parent component'
</script>

<div class=" bg-primary-300 m-4 text-center p-8 rounded-lg">
	<p class="text-xl">{@html message}</p>
</div>