<script lang="ts">
	import { onMount } from 'svelte';

	let twentyFiveSongs: { songName: string }[] = [];

	onMount(async () => {
		const songs = await Promise.all(
			[...Array(25)].map(async () => {
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
		twentyFiveSongs = songs;
	});
</script>

<h1 class="text-center text-lg text-primary-500">Taylor Swift Concert Set List</h1>
<div class="flex flex-col items-center">
	<ul>
		{#each twentyFiveSongs as song (song.songName)}
			<li class="bg-secondary-400 w-52 rounded-lg text-center py-2 my-2">
				{song.songName}
			</li>
		{/each}
	</ul>
</div>
