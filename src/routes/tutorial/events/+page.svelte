<script lang="ts">
	import Messenger from '$lib/components/Messenger.svelte';
	import { getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();

	let m = { x: 0, y: 0 };

	function handleMessage(event: any) {
		const modal: ModalSettings = {
			type: 'alert',
			// Data
			title: 'Example foo Alert',
			body: 'This is an example modal. Can be used  for alerts or other messages',
			image: 'https://i.imgur.com/WOgTG96.gif'
		};
		modalStore.trigger(modal);
	}
	/* function handleMove(event: { clientX: number; clientY: number; }) {
		m.x = event.clientX;
		m.y = event.clientY;
	} */
</script>

<div class="container flex flex-col gap-4 m-4 h-11/12">
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

<Messenger on:foo={handleMessage} />