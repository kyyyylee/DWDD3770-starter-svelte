<script lang="ts">
    import Messenger from "$lib/components/Messenger.svelte";
	import Layout from "../../+layout.svelte";
	let m = { x: 0, y: 0 };

    function handleMessage(event: any) {
        alert(event.detail.text);
    }
	/* function handleMove(event: { clientX: number; clientY: number; }) {
		m.x = event.clientX;
		m.y = event.clientY;
	} */
</script>

<div class="container flex flex-col gap-4 m-4 h-full">
	<div
		class="border border-slate-400 left-0 top-0 p-8 m-4"
		on:pointermove={(e) => (m = { x: e.clientX, y: e.clientY })}
	>
		<h2 class="text-center bg-pink-400 p-2 m-4">
			Your pointer is currently at {Math.floor(m.x)} x {Math.floor(m.y)}
		</h2>
	</div>

	<button class="btn btn-lg bg-lime-300 p-2 m-4" on:click|once={() => alert('clicked')}>
		Click me
	</button>
</div>

<Messenger on:message={handleMessage} />