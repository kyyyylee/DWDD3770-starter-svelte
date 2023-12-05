<script lang="ts">

    export let data;
    $: console.log(data)
    
    </script>
    
    <main class="flex flex-col items-center justify-center mb-5">
        <h1 class="bg-primary-300 border-2 border-primary-400 text-white w-96 text-center text-xl p-4 rounded-lg mt-4">Title: {data.song.name.toUpperCase()}</h1>
        <img class="max-w-sm mt-4" src={data.song.img} alt="albumcover"/>
        <h3 class="mt-2 mb-4">Album: {data.song.album}</h3>
        <p class="mb-2">Lyrics:</p>
        <textarea class="textarea text-center mx-auto w-2/3 h-64 max-w-lg"
		value={data.song.lyrics}></textarea>
    </main>