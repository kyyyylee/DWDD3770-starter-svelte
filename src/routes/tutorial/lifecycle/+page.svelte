<script lang="ts">
	import { onMount } from 'svelte';
	import { tick } from 'svelte';

	let songName: string;
    let songLyric: string;
    /***/

	onMount(async () => {
		console.log('onMount');
		const songID = Math.floor(Math.random() * 150) + 1;
		const songresponse = await fetch(`https://taylor-swift-api.sarbo.workers.dev/songs/${songID}`);
        const lyricresponse = await fetch(`https://taylor-swift-api.sarbo.workers.dev/lyrics/${songID}
`)
		const song = await songresponse.json();
        const lyric = await lyricresponse.json();
		songName = song.song_title;
        songLyric = lyric.lyrics
	});



	async function handleKeydown(this: any, event: { key: string; preventDefault: () => void }) {
		if (event.key !== 'Tab') return;

		event.preventDefault();

		const { selectionStart, selectionEnd, value } = this;
		const selection = value.slice(selectionStart, selectionEnd);

		const replacement = /[a-z]/.test(selection) ? selection.toUpperCase() : selection.toLowerCase();

		songLyric = value.slice(0, selectionStart) + replacement + value.slice(selectionEnd);

		await tick();
		this.selectionStart = selectionStart;
		this.selectionEnd = selectionEnd;
	}
</script>

<div class="flex flex-col items-center justify-center">
    <h1 class="m-4 text-center text-xl">Lifecycle</h1>
    <h1 class="text-xl m-2 text-primary-400">Which Taylor Swift Song are you?</h1>
	{#if songName}
		<h1 class="bg-primary-300 border-2 border-primary-400 text-white w-96 text-center text-xl p-4 rounded-lg mt-4">{songName.toUpperCase()}</h1>
	{:else}
		<p>Loading...</p>
	{/if}
    <h2 class="mt-8 mb-2">Lyrics:</h2>
	<textarea
		class="textarea text-center mx-auto w-2/3 h-64"
		value={songLyric}
		on:keydown={handleKeydown}
	/>
    <p class="p-2 text-surface-700">Hint: Hit 'tab' on your favorite lyrics to make them uppercase!</p>
</div>
<p class="text-center clear-both bottom-0 mt-8 p-2">created using <a href="https://github.com/sarbor/taylor_swift_api" target="_blank">Taylor Swift API</a></p>