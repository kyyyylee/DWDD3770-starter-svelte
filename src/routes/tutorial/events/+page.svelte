<script lang="ts">
	import Outer from '$lib/components/Outer.svelte';
	import BigPinkButton from '$lib/components/BigPinkButton.svelte';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';

	import { CodeBlock } from '@skeletonlabs/skeleton';

	import hljs from 'highlight.js/lib/core';

	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import typescript from 'highlight.js/lib/languages/typescript';
	import 'highlight.js/styles/github-dark.css';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('typescript', typescript);

	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	const modalStore = getModalStore();

	let m = { x: 0, y: 0 };

	function handleMessage(event: any) {
		const modal: ModalSettings = {
			type: 'alert',
			// Data
			title: 'Example Foo Alert',
			body: event.detail.text
			//image: 'https://i.imgur.com/WOgTG96.gif'
		};
		modalStore.trigger(modal);
	}
	/* function handleMove(event: { clientX: number; clientY: number; }) {
		m.x = event.clientX;
		m.y = event.clientY;
	} */
</script>

<section style="max-width:50rem;margin:auto;">
	<h1 class="text-secondary-700 text-center font-bold mt-4 text-xl">Events</h1>
	<p class="p-4 m-2 text-lg text-center">
		Svelte can listen to any DOM event on an element & declare event handlers or modifiers. You can
		also listen for events on deeply nested components.
	</p>

	<div class="flex flex-col items-center">

		<button
			class="btn btn-lg bg-secondary-400 text-surface-900 m-4 p-4"
			on:click|once={() => alert('clicked')}
		>
			Once Modifier
		</button>
		<p class="mb-2 text-center">Dispatches a basic alert on the first click only</p>
		<CodeBlock language="ts" code={`on:click|once={() => alert('clicked')}`} />

		<Outer on:foo={handleMessage} />
		<p class="mb-2 text-center mx-8">
			This example dispatches a Foo event that triggers a nested outer component that then triggers
			the messenger component
		</p>
		<div>
			<CodeBlock
				language="ts"
				code={`on:foo={handleMessage}
	`}
			/>
			<CodeBlock language="ts" code={`<Messenger on:foo />`} />
			<CodeBlock language="ts" code={`on:click={sayHello}`} />
		</div>

		<BigPinkButton on:click={handleMessage} />
		<p class="mb-2">This example forwards a DOM 'click'</p>
		<CodeBlock language="ts" code={`on:click={handleMessage}`} />
	</div>

	<div class="flex flex-col items-center h-11/12">
		<p class="text-center mt-8">This example demonstrates a pointermove DOM event</p>
		<div
			class="border border-slate-400 left-0 top-0 w-2/3 h-96 p-4 mt-4"
			on:pointermove={(e) => (m = { x: e.clientX, y: e.clientY })}
		>
		
			<h2 class="text-center bg-primary-500 p-2 m-4">
				Your pointer is currently at {Math.floor(m.x)} x {Math.floor(m.y)}
			</h2>
		</div>
	</div>
</section>
