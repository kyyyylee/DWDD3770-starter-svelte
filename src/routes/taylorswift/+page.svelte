<script lang="ts">
	import { onMount } from 'svelte';
    import { taylorSwiftStore, twentyFiveSongsStore } from '$lib/stores/taylorSwiftStores';

	interface Song {
    songName: string;
    songID: number;
}
	let twentyFiveSongs: { songName: string }[] = [];
	let generatedSongIDs = new Set();

	twentyFiveSongsStore.subscribe(value => {
        twentyFiveSongs = value;
    });

	onMount(async () => {
		const songs = await Promise.all(
			[...Array(25)].map(async () => {
				let songID;
                do {
                    songID = Math.floor(Math.random() * 176) + 1;
                } while (generatedSongIDs.has(songID));
                generatedSongIDs.add(songID);
				const songresponse = await fetch(
					`https://taylor-swift-api.sarbo.workers.dev/songs/${songID}`
				);
				const song = await songresponse.json();
				return {
					songName: song.song_title,
					songID: songID,
				};
			})
		);
		twentyFiveSongs = songs;
		console.log(twentyFiveSongs);
		taylorSwiftStore.set(songs);
	});
</script>
<h1 class="text-center text-lg text-secondary-500 mb-4">Taylor Swift Songs</h1>


<ul>
	<div class="flex flex-wrap  justify-center">
	{#each twentyFiveSongs as song (song.songName)}
		<a href={`/taylorswift/${song.songID}`}><li class="bg-primary-400 rounded-full text-center py-2 px-5 m-2">
			{song.songName}
		</li></a>
	{/each}
</div>
</ul>

