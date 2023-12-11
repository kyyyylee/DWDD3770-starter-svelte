<script lang="ts">
    import { onMount } from 'svelte';
    import { taylorSwiftStore} from '$lib/stores/taylorSwiftStores';

    interface Song {
    songName: string;
    songID: number;
}
    let twentyFiveSongs: { songName: string }[] = [];
    let generatedSongIDs = new Set();

    taylorSwiftStore.subscribe(value => {
        twentyFiveSongs = value;
    });

    onMount(async () => {
        if (twentyFiveSongs.length === 0) {
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
            taylorSwiftStore.set(songs);
        }
    });
</script>
<section class="h-screen" style="max-width:60rem;margin:auto;">
<h1 class="text-secondary-700 text-center font-bold my-4 text-xl">Taylor Swift Songs</h1>
<ul>
	<div class="flex flex-wrap justify-center">
	{#each twentyFiveSongs as song (song.songName)}
		<a href={`/taylorswift/${song.songID}`}><li class="btn bg-transparent rounded-sm border text-center py-2 px-5 m-2 hover:border-secondary-700">
			{song.songName}
		</li></a>
	{/each}
</div>
</ul>
</section>

