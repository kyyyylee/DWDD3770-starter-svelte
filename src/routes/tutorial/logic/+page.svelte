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

    const twentyFiveAvatars = [...Array(25)].map(() => {
        const lastName = faker.person.lastName()
        return {
            lastName,
            avatar: `https://avatars.dicebear.com/api/pixel-art/${lastName}.svg`,
        }
    })

</script>

<!-- logic intro -->
<h1 class="text-center my-4">Logic</h1>
<p class="text-center mx-36">
	HTML doesn't have a way of expressing logic, like conditionals and loops. Svelte does. To do this,
	you wrap it in an <code>if</code> block
</p>

<!-- if blocks -->
<div class="flex flex-col items-center">
<button class="btn btn-md bg-pink-300 mt-6" on:click={increment}
	>Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

{#if count > 10}
	<p class="m-4">{count} is greater than 10</p>
{:else if count < 5}
	<p class="m-4">{count} is less than 5</p>
{:else}
	<p class="m-4">{count} is somewhere between 0 & 10</p>
{/if}
</div>

<!-- each blocks -->
<div class="m-6 p-4 flex flex-col items-center">
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

<div class="flex flex-wrap justify-center">
    {#each twentyFiveAvatars as { lastName, avatar }}
    <div class="flex flex-col items-center m-4">
        <img class="w-20 h-20" src={avatar} alt={lastName}/>
        <p>{lastName}</p>
    </div>
    {/each}
</div>

<!-- await block -->
<div class="flex flex-col items-center m-6">
<button class="btn btn-md bg-pink-400 rounded-full m-4" on:click={handleClick}>
	generate a random number
</button>

{#await promise}
<ProgressRadial ... stroke={250} meter="stroke-pink-500" track="stroke-pink-500/30" />
{:then number}
	<p>The number is {number}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
</div>