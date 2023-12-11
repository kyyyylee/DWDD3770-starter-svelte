<script lang="ts">
	import { onMount } from 'svelte';
	import { tick } from 'svelte';

	let songName: string;
    let songLyric: string;
	let albumCoverSrc: string;
	let iframeSrc: string;

	onMount(async () => {
		const songID = Math.floor(Math.random() * 176) + 1;
		const songresponse = await fetch(`https://taylor-swift-api.sarbo.workers.dev/songs/${songID}`);
        const lyricresponse = await fetch(`https://taylor-swift-api.sarbo.workers.dev/lyrics/${songID}
`)
		const song = await songresponse.json();
        const lyric = await lyricresponse.json();
		songName = song.song_title;
        songLyric = lyric.lyrics

		if (song.album_id === 1) {
			albumCoverSrc = "https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png"
			iframeSrc = "https://open.spotify.com/embed/album/64LU4c1nfjz1t4VnGhagcg?utm_source=generator"
		}
		if (song.album_id === 2) {
			albumCoverSrc = "https://upload.wikimedia.org/wikipedia/en/1/1f/Taylor_Swift_-_Taylor_Swift.png"
			iframeSrc = "https://open.spotify.com/embed/album/7mzrIsaAjnXihW3InKjlC3?utm_source=generator"
		}
		if (song.album_id === 3) {
			albumCoverSrc = "https://upload.wikimedia.org/wikipedia/en/5/5b/Fearless_%28Taylor%27s_Version%29_%282021_album_cover%29_by_Taylor_Swift.png"
			iframeSrc = "https://open.spotify.com/embed/album/4hDok0OAJd57SGIT8xuWJH?utm_source=generator"
		}
		if (song.album_id === 4) {
			albumCoverSrc = "https://upload.wikimedia.org/wikipedia/en/5/5b/Taylor_Swift_-_Speak_Now_%28Taylor%27s_Version%29.png"
			iframeSrc = "https://open.spotify.com/embed/album/5AEDGbliTTfjOB8TSm1sxt?utm_source=generator"
		}
		if (song.album_id === 5) {
			albumCoverSrc = "https://upload.wikimedia.org/wikipedia/en/4/47/Taylor_Swift_-_Red_%28Taylor%27s_Version%29.png"
			iframeSrc = "https://open.spotify.com/embed/album/6kZ42qRrzov54LcAk4onW9?utm_source=generator"
		}
		if (song.album_id === 6) {
			albumCoverSrc = "https://upload.wikimedia.org/wikipedia/en/f/f2/Taylor_Swift_-_Reputation.png"
			iframeSrc = "https://open.spotify.com/embed/album/6DEjYFkNZh67HP7R9PSZvv?utm_source=generator"
		}
		if (song.album_id === 7) {
			albumCoverSrc = "https://upload.wikimedia.org/wikipedia/en/c/cd/Taylor_Swift_-_Lover.png"
			iframeSrc = "https://open.spotify.com/embed/album/1NAmidJlEaVgA3MpcPFYGq?utm_source=generator"
		}
		if (song.album_id === 8) {
			albumCoverSrc = "https://upload.wikimedia.org/wikipedia/en/f/f8/Taylor_Swift_-_Folklore.png"
			iframeSrc = "https://open.spotify.com/embed/album/1pzvBxYgT6OVwJLtHkrdQK?utm_source=generator"

		}
		if (song.album_id === 9) {
			albumCoverSrc = "https://upload.wikimedia.org/wikipedia/en/0/0a/Taylor_Swift_-_Evermore.png"
			iframeSrc = "https://open.spotify.com/embed/album/6AORtDjduMM3bupSWzbTSG?utm_source=generator"
		}
		if (song.album_id === 10) {
			albumCoverSrc = "https://upload.wikimedia.org/wikipedia/en/9/9f/Midnights_-_Taylor_Swift.png"
			iframeSrc = "https://open.spotify.com/embed/album/3lS1y25WAhcqJDATJK70Mq?utm_source=generator"
		}

		console.log(song.album_id);
		console.log(songID)
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

	function refreshPage () {
		window.location.reload();
	}

</script>
<section style="max-width:50rem;margin:auto;">
<div class="flex flex-col items-center justify-center">
    <h1 class="text-secondary-700 text-center font-bold mt-4 text-xl">Lifecycle</h1>
		<p class="p-4 m-2 text-lg text-center">
			Every component has a <span class="font-bold text-secondary-700">lifecycle</span> that starts when it is created, and ends when it is destroyed. The <code class="font-bold text-secondary-700">onMount</code> function is a special function that runs when the component is created. This is a great place to fetch data from an API as demonstrated below! Every time the page first loads (or when you press the new song button), a random Taylor Swift song is displayed from <a class="font-bold text-secondary-700" href="https://github.com/sarbor/taylor_swift_api" target="_blank">Taylor Swift API</a>
	</p>
	<button class="btn bg-surface-400 px-3 my-2" on:click={refreshPage}>Click for a new song!</button>
	{#if songName}
		<h1 class="bg-secondary-600 border-2 border-secondary-700 w-96 text-center text-xl p-4 rounded-lg mt-4">{songName.toUpperCase()}</h1>
	{:else}
		<p>Loading...</p>
	{/if}
	
	{#if albumCoverSrc}
	<img class="max-w-sm mt-4" src={albumCoverSrc} alt="tscover" />
	{:else}
		<p>...</p>
	{/if}

	{#if songLyric}
	<h2 class="mt-4 mb-2">Lyrics:</h2>
	<textarea
		class="textarea text-center mx-auto w-2/3 h-64 max-w-lg "
		value={songLyric}
		on:keydown={handleKeydown}
	/>
    <p class="p-2 mb-2 text-surface-200 text-center">Hint: Hit 'tab' on your favorite lyrics to make them uppercase!</p>
	{:else}
		<p>...</p>
	{/if}

<iframe class="max-w-3xl"
style="border-radius:12px"
title="Taylor Swift Music Video"
src={iframeSrc}
width="70%"
height="352"
frameBorder="0"
allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
loading="lazy"
></iframe>
	 
</div>
</section>
<p class="text-center clear-both border-t-2 border-b-2 border-surface-700 bottom-0 mt-8 p-2">created using <a class="font-bold" href="https://github.com/sarbor/taylor_swift_api" target="_blank">Taylor Swift API</a></p>