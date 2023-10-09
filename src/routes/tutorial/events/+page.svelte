<script lang="ts">
    import Outer from '$lib/components/Outer.svelte';
    import BigPinkButton from '$lib/components/BigPinkButton.svelte';
	import { getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();

	let m = { x: 0, y: 0 };

	function handleMessage(event: any) {
		const modal: ModalSettings = {
			type: 'alert',
			// Data
			title: 'Example Foo Alert',
			body: event.detail.text,
			image: 'https://i.imgur.com/WOgTG96.gif'
		};
		modalStore.trigger(modal);
	}
	/* function handleMove(event: { clientX: number; clientY: number; }) {
		m.x = event.clientX;
		m.y = event.clientY;
	} */
</script>

<section style="max-width:60rem;margin:auto;">
	<h1 class="m-4 text-center text-xl">Events</h1>
<div class="flex flex-col items-center h-11/12">
	<div
		class="border border-slate-400 left-0 top-0 w-2/3 h-96 p-4 mt-4"
		on:pointermove={(e) => (m = { x: e.clientX, y: e.clientY })}
	>
		<h2 class="text-center bg-primary-400 p-2 m-4">
			Your pointer is currently at {Math.floor(m.x)} x {Math.floor(m.y)}
		</h2>
	</div>
</div>
<div class="flex flex-col items-center">
    <button class="btn btn-lg bg-secondary-400 text-secondary-100 m-4 p-4" on:click|once={() => alert('clicked')}>
		Click for ugly alert
	</button>
    <p class="mb-2">This example dispatches a basic alert on the first click only</p>
    <Outer on:foo={handleMessage}/>
    <p class="mb-2">This example dispatches the Foo event</p>
    <BigPinkButton on:click={handleMessage} />
    <p class="mb-2">This example forwards a DOM 'click'</p>
</div>
</section>




