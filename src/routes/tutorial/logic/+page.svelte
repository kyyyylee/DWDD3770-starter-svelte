<script lang="ts">
    import { faker } from '@faker-js/faker'
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
        const lastName = faker.person.lastName()
        return {
            lastName,
            avatar: `https://api.dicebear.com/7.x/${selectedStyle}/svg?seed=${lastName}.svg`,
        }
    })

</script>

<section style="max-width:60rem;margin:auto;">
<!-- logic intro -->
<h1 class="m-4 text-center text-xl">Logic</h1>
<p class="p-4 m-2 text-lg text-center">
	<code>HTML</code> doesn't have a way of expressing logic, like conditionals and loops. Svelte does. To do this,
	you can wrap your <code>HTML</code>  in an <code>if</code> block
</p>

<!-- if blocks -->
<div class="flex flex-col items-center m-6">
<button class="btn btn-md bg-primary-300 m-2" on:click={increment}
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

<!-- await block -->
<div class="flex flex-col items-center m-6">
	<button class="btn btn-md bg-primary-400 rounded-full m-2" on:click={handleClick}>
		Generate a random number
	</button>
	
	{#await promise}
	<ProgressRadial ... stroke={250} meter="stroke-primary-500" track="stroke-primary-500/30" class="w-10" />
	{:then number}
		<p>The number is {number}</p>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
	</div>

<!-- each blocks -->
<div class="m-6 mb-10 flex flex-col items-center">
	<h1 class="py-4" style="color: {selected}">Pick a color</h1>
	<div>
		{#each colors as color, i}
			<button class="btn btn-md rounded-full py-2 px-4 mx-2 text-black hover:-translate-y-1 "
				aria-current={selected === color}
				aria-label={color}
				style="background: {color}"
				on:click={() => (selected = color)}>{i + 1}</button
			>
		{/each}
	</div>
</div>

<div class="border-4 border-white m-6 rounded">
<div class="m-6 flex flex-col items-center">
	<h2 class="text-xl m-4">Pick an Avatar style below!</h2>
	<div class="flex flex-wrap justify-center">
		{#each styles as style}
			<button class="btn btn-md rounded-lg bg-primary-300 m-2 hover:bg-primary-400"
				aria-current={selectedStyle === style}
				aria-label={style}
				on:click={() => (selectedStyle = style)}>{style}</button>
		{/each}
	</div>
	<h1 class="text-xl pt-6">{selectedStyle}</h1>
</div>

<div class="flex flex-wrap justify-center m-2">
    {#each twentyFiveAvatars as { lastName, avatar }}
    <div class="flex flex-col items-center m-4">
        <img class="w-20 h-20" src={avatar} alt={lastName}/>
        <p class="text-sm w-20 text-center pt-2">My name is {lastName}</p>
    </div>
    {/each}
</div>
</div>
</section>
