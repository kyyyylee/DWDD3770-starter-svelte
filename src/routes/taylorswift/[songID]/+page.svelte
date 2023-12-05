<script lang="ts">

    export let data;
    $: console.log(data)
    
    </script>
    <h1 class="bg-transparent border text-white w-72 mx-auto text-center text-xl p-4 rounded-lg m-4">{data.song.name}</h1>
    <main class="flex justify-center gap-10">
        <div class="flex flex-col items-center justify-center mb-5">
        <img class="max-w-sm mt-4 rounded-md" src={data.song.img} alt="albumcover"/>
        <h3 class="mt-2">Album: {data.song.album}</h3>
        <h3 class="mt-2">Released: {data.song.release}</h3>
        </div>
        <div>
        <textarea class="mt-4 textarea text-center mx-auto w-96 h-96 max-w-lg"
		value={data.song.lyrics}></textarea>
        </div>
    </main>