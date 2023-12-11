<script lang="ts">
	let name = 'User';

	let a = 1;

	let yes = false;

	let scoops = 1;
	let flavors: string[] = [];
	const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });

	const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
	let selected = colors[0];
	$: value = `Any text entered into this box will be turned ${selected} below`;

	import { CodeBlock } from '@skeletonlabs/skeleton';

	import hljs from 'highlight.js/lib/core';

	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import typescript from 'highlight.js/lib/languages/typescript';
	import 'highlight.js/styles/github-dark.css';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('typescript', typescript);

	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);
</script>

<section style="max-width:50rem;margin:auto;">
	<h1 class="text-secondary-700 text-center font-bold mt-4 text-xl">Bindings</h1>
	<p class="p-4 m-2 text-lg text-center">
		<code>Svelte's bind:value directive</code> lets you create a two-way binding between an element property and a variable. This is useful when you want to update a variable in response to user input, and update the input value in response to changes in the variable.
	</p>
	<div class="mx-20">
		<CodeBlock language="ts" code={`bind:value={name}`}></CodeBlock>
		</div>
	<div class="flex flex-col items-center">
		<h1 class="text-center text-lg bg-secondary-500 text-surface-900 px-4 py-2 m-4 rounded-lg">
			Hello {name}!
		</h1>
		<p class="mb-2">Type your name into the box below!</p>
		<input
			type="text"
			bind:value={name}
			class="mb-8 text-black text-center py-3 border-2 border-surface-700 bg-surface-100 rounded-lg w-1/2"
		/>
	</div>

	<label class="mx-6 p-2">
		<input class="pl-2 mb-2 text-surface-900" type="number" bind:value={a} min="1" max="9" />
		<input type="range" bind:value={a} min="1" max="9" />
	</label>
	<div class="flex flex-col items-center m-4">
		<h2 class="p-4 text-primary-{a}00 text-center w-1/2 bg-surface-400">
			Move the slider to adjust my color!
		</h2>
	</div>

	<h1 class="text-xl mt-10 mb-2 text-center">Ice Cream Order!</h1>

	<div class="flex justify-evenly">
		<div>
			<h2 class="text-center p-2">Size</h2>
			{#each [1, 2, 3] as number}
				<label class="p-2">
					<input class="mr-2" type="radio" name="scoops" value={number} bind:group={scoops} />

					{number}
					{number === 1 ? 'scoop' : 'scoops'}
				</label>
			{/each}
		</div>
		<div>
			<h2 class="text-center p-2">Flavors</h2>
			{#each ['Strawberry 🍓', 'Birthday cake🎂', 'Cherry🍒'] as flavor}
				<label class="p-1">
					<input class="mr-2" type="checkbox" name="flavors" value={flavor} bind:group={flavors} />

					{flavor}
				</label>
			{/each}
			{#if flavors.length === 0}
				<p class="my-2 text-secondary-700">Please select at least one flavor</p>
			{:else if flavors.length > scoops}
				<p class="text-secondary-700 my-2">Can't order more flavors than scoops!</p>
			{:else}
				<p class="text-secondary-700 my-2 max-w-xs">
					{name} ordered {scoops}
					{scoops === 1 ? 'scoop' : 'scoops'}
					of {formatter.format(flavors)}
				</p>
			{/if}
		</div>
	</div>

	<div class="flex flex-col items-center my-10">
		<h2 class="p-4">Pick a color</h2>
		<div>
			{#each colors as color}
				<button
					class="btn btn-md rounded-full p-4 mx-2"
					aria-current={selected === color}
					aria-label={color}
					style="background: {color}"
					on:click={() => (selected = color)}
				/>
			{/each}
		</div>
		<p class="pb-2">Input</p>
		<textarea rows="3" class="w-96 text-surface-900 text-center" bind:value />

		<p class="m-2">Output</p>
		<div class="mb-8 text-center py-3 border-2 border-surface-700 bg-surface-100 rounded-lg w-1/2" style="color: {selected}">{@html value}</div>
	</div>

	<div class="flex flex-col items-center mb-4">
		<h2 class="p-2">Would you like notifications everytime this site is updated?</h2>
		<label class="p-2 text-center">
			<input type="checkbox" bind:checked={yes} />
			Yes! Send me regular email spam
		</label>
		{#if yes}
			<p class="pl-2 text-center">
				Thank you {name}!
			</p>
		{:else}
			<p class="pl-2 text-center">You must opt in to continue. </p>
		{/if}
		<button class="m-4 btn btn-md w-36 bg-secondary-500 text-surface-900" disabled={!yes}>Subscribe</button>
	</div>
</section>
