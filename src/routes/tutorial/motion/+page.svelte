<script lang="ts">
	import { tweened, spring } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { ProgressBar } from '@skeletonlabs/skeleton';
	import { fade, fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { onMount } from 'svelte';
	import { getModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();
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

	let visible = false;

	let imgSrc = '/heart.png';

	const heartWidth = spring(100, {
		stiffness: 0.1,
		damping: 0.4
	});

	const zoomIn = setInterval(() => {
		heartWidth.set(200);
	}, 300);

	const zoomOut = setInterval(() => {
		heartWidth.set(100);
	}, 600);

	let coords = spring(
		{ x: 50, y: 50 },
		{
			stiffness: 0.1,
			damping: 0.4
		}
	);

	let size = spring(10);

	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});

	function handleMessage(event: any) {
		const modal: ModalSettings = {
			type: 'alert',
			// Data
			title: 'Thanks for your feedback!',
			body: event.detail.text
			//image: '/heart.png'
		};
		modalStore.trigger(modal);
	}

	let nineSongs: { songName: string }[] = [];

	const shuffle = () => {
		nineSongs = nineSongs.sort(() => 0.5 - Math.random());
	};

	onMount(async () => {
		const songs = await Promise.all(
			[...Array(9)].map(async () => {
				const songID = Math.floor(Math.random() * 176) + 1;
				const songresponse = await fetch(
					`https://taylor-swift-api.sarbo.workers.dev/songs/${songID}`
				);
				const song = await songresponse.json();
				return {
					songName: song.song_title
				};
			})
		);
		nineSongs = songs;
	});
</script>

<div class="flex flex-col items-center">
	<h1 class="m-4 text-center text-xl">Motion</h1>
	<h1 class="text-center text-lg text-primary-500">Taylor Swift Concert Set List</h1>
	<p class="mb-4">Uses the animate directive when shuffled!</p>
	<div class="flex flex-col items-center">
		<button class="btn variant-filled mb-2" on:click={shuffle}>Shuffle</button>
		<ul>
			{#each nineSongs as song (song.songName)}
				<li
					class="bg-secondary-400 w-52 rounded-lg text-center py-2 my-2"
					animate:flip={{ duration: 400 }}
				>
					{song.songName}
				</li>
			{/each}
		</ul>
		<h1 class="text-center text-lg text-primary-500 mt-4">Want to see whats happening behind stage?</h1>
		<p class="mb-4">Uses an interface element transition</p>
		<label class="mb-4">
			<input type="checkbox" bind:checked={visible} />
			show code
		</label>
		<div class="flex gap-4">
			{#if visible}
				<div class="" in:fly={{ y: 200, duration: 2000 }} out:fade>
					<CodeBlock
						language="ts"
						code={`let nineSongs: { songName: string }[] = [];
						const shuffle = () => {
						nineSongs = nineSongs.sort(() => 0.5 - Math.random());
					};
					onMount(async () => {
						const songs = await Promise.all(
							[...Array(9)].map(async () => {
								const songID = Math.floor(Math.random() * 176) + 1;
								const songresponse = await fetch(
									'https://taylor-swift-api.sarbo.workers.dev/songs/songID'
								);
								const song = await songresponse.json();
								return {
									songName: song.song_title
								};
							})
						);
						nineSongs = songs;
					});')}`}
					/>
				</div>
			{/if}
		</div>
	</div>
	<div class="mt-8">
		<p class="mb-4 text-center">Uses spring</p>
		<div class="select-none">
			<label>
				<h3 class="text-center">stiffness ({coords.stiffness})</h3>
				<input bind:value={coords.stiffness} type="range" min="0.01" max="1" step="0.01" />
			</label>

			<label>
				<h3 class="text-center mt-4">damping ({coords.damping})</h3>
				<input bind:value={coords.damping} type="range" min="0.01" max="1" step="0.01" />
			</label>
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<svg
			class="w-full h-128 border border-surface-700 rounded-lg mt-2"
			on:mousemove={(e) => {
				const { left, top } = e.currentTarget.getBoundingClientRect();
				coords.set({
					x: e.clientX - left,
					y: e.clientY - top
				});
			}}
			on:mousedown={() => size.set(20)}
			on:mouseup={() => size.set(10)}
		>
			<circle fill="#000" cx={$coords.x} cy={$coords.y} r={$size} />
		</svg>
	</div>

	<div class="flex flex-col items-center mt-8">
		<h1 class="text-center text-lg text-primary-500 mt-4">How do you rate my website?</h1>
		<p class="mb-4">Uses tween & spring</p>
		<div class="w-32 h-32">
			<img src={imgSrc} alt="heart" width={$heartWidth} />
		</div>
		<div>
			<button class="btn bg-surface-400" on:click={() => ($progress = 0)}> 1 star </button>

			<button class="btn bg-surface-400" on:click={() => ($progress = 25)}> 2 stars </button>

			<button class="btn bg-surface-400" on:click={() => ($progress = 50)}> 3 stars </button>

			<button class="btn bg-surface-400" on:click={() => ($progress = 75)}> 4 stars </button>

			<button class="btn bg-surface-400" on:click={() => ($progress = 100)}> 5 stars </button>
		</div>
		<ProgressBar
			class="mt-4 border-2 border-primary-600"
			value={$progress}
			max={100}
			height="h-12"
			meter="bg-primary-200"
			track="bg-primary-400"
			rounded="rounded-lg"
		/>
		<button class="btn bg-surface-400 m-4 px-6" on:click={handleMessage}> Submit </button>
	</div>
</div>
