<script lang="ts">
	import { faker } from '@faker-js/faker';
	import { getRandomNumber } from '$lib/utils/delayFunction';
	import { ProgressRadial } from '@skeletonlabs/skeleton';

	let count = 0;

	let promise = getRandomNumber();

	function increment() {
		count += 1;
	}

	function handleClick() {
		promise = getRandomNumber();
	}

	const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
	let selected = colors[0];

	const styles = ['adventurer', 'avataaars', 'big-ears', 'personas', 'pixel-art'];
	let selectedStyle = styles[0];

	$: twentyFiveAvatars = [...Array(25)].map(() => {
		const lastName = faker.person.lastName();
		return {
			lastName,
			avatar: `https://api.dicebear.com/7.x/${selectedStyle}/svg?seed=${lastName}.svg`
		};
	});

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
	<!-- logic intro -->
	<h1 class="text-secondary-700 text-center font-bold mt-4 text-xl">Logic</h1>
	<p class="p-4 m-2 text-lg text-center">
		<code>HTML</code> doesn't have a way of expressing logic, like conditionals and loops.
		<code>Svelte</code>
		does. To do this, you can wrap your <code>HTML</code> in an <code>if</code> ,
		<code>await</code>, or <code>each</code> block
	</p>
	<!-- if blocks -->
	<div class="flex flex-col items-center m-6">
		<button class="btn btn-md bg-secondary-500 m-2 text-surface-900" on:click={increment}
			>Clicked {count} {count === 1 ? 'time' : 'times'}
		</button>

		{#if count > 10}
			<p>{count} is greater than 10</p>
		{:else if count < 5}
			<p>{count} is less than 5</p>
		{:else}
			<p>{count} is somewhere between 0 & 10</p>
		{/if}
	</div>
	<div class="mx-20 mb-4">
		<CodeBlock
			language="ts"
			code={`{#if count > 10}
		<p>{count} is greater than 10</p>
	{:else if count < 5}
		<p>{count} is less than 5</p>
	{:else}
		<p>{count} is somewhere between 0 & 10</p>
	{/if}`}
		/>
	</div>

	<!-- await block -->
	<div class="flex flex-col items-center m-6">
		<button class="btn btn-md bg-secondary-500 text-surface-900 rounded-full mb-4" on:click={handleClick}>
			Generate a random number
		</button>

		{#await promise}
			<ProgressRadial
				...
				stroke={250}
				meter="stroke-secondary-500"
				track="stroke-secondary-500/30"
				class="w-8"
			/>
		{:then number}
			<p>The number is {number}</p>
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</div>
	<div class="mx-20">
		<CodeBlock
			language="ts"
			code={`{#await promise}
	<ProgressRadial ... stroke={250} meter="stroke-secondary-500" track="stroke-secondary-500/30" class="w-10" />
	{:then number}
		<p>The number is {number}</p>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}`}
		/>
	</div>

	<!-- each blocks -->
	<div class="m-6 mb-10 flex flex-col items-center">
		<h1 class="py-4" style="color: {selected}">Pick a color</h1>
		<div>
			{#each colors as color, i}
				<button
					class="btn btn-md rounded-full py-2 px-4 mx-2 text-black hover:-translate-y-1"
					aria-current={selected === color}
					aria-label={color}
					style="background: {color}"
					on:click={() => (selected = color)}>{i + 1}</button
				>
			{/each}
		</div>
	</div>

	<div class="mx-20 mb-4">
		<CodeBlock
			language="ts"
			code={`{#each colors as color, i}
				<button
					class="btn btn-md rounded-full py-2 px-4 mx-2 text-black hover:-translate-y-1"
					aria-current={selected === color}
					aria-label={color}
					style="background: {color}"
					on:click={() => (selected = color)}>{i + 1}</button
				>
			{/each}`}
		/>
	</div>

	<div class="border-4 border-white m-6 rounded">
		<h1 class="text-center text-l mt-8">Another <code>each</code> block example with avatars made using <a class="font-bold text-secondary-700" href="https://fakerjs.dev/" target="_blank">Faker</a> and <a  class="font-bold text-secondary-700"href="https://www.dicebear.com/" target="_blank">Dicebear</a></h1>
		<div class="m-6 flex flex-col items-center">
			<h2 class="text-xl mb-4">Pick an Avatar style below!</h2>
			<div class="flex flex-wrap justify-center">
				{#each styles as style}
					<button
						class="btn btn-md rounded-lg bg-secondary-500 text-surface-900 m-2"
						aria-current={selectedStyle === style}
						aria-label={style}
						on:click={() => (selectedStyle = style)}>{style}</button
					>
				{/each}
			</div>
			<h1 class="text-xl pt-6">{selectedStyle}</h1>
		</div>

		<div class="flex flex-wrap justify-center m-2">
			{#each twentyFiveAvatars as { lastName, avatar }}
				<div class="flex flex-col items-center m-4">
					<img class="w-20 h-20" src={avatar} alt={lastName} />
					<p class="text-sm w-20 text-center pt-2">My name is {lastName}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
