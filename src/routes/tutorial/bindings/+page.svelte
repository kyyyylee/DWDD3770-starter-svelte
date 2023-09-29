<script lang="ts">
	let name = 'world';
	let a = 1;
	let b = 2;
	let yes = false;

	let questions = [
		{
			id: 1,
			text: `Where did you go to school?`
		},
		{
			id: 2,
			text: `What is your mother's name?`
		},
		{
			id: 3,
			text: `What is another personal fact that an attacker could easily find with Google?`
		}
	];

	let selected: any;

	let answer = '';

	function handleSubmit() {
		alert(`answered question ${selected.id} (${selected.text}) with "${answer}"`);
	}
</script>

<div class="flex flex-col m-4">
	<input
		type="text"
		bind:value={name}
		class="text-black text-center p-2 border-2 border-surface-900"
	/>
	<h1 class="p-2 text-center">Hello {name}!</h1>

	<label class="p-2">
		<input class="pl-2 mb-2" type="number" bind:value={a} min="0" max="10" />
		<input type="range" bind:value={a} min="0" max="10" />
	</label>

	<label class="p-2">
		<input class="pl-2 mb-2" type="number" bind:value={b} min="0" max="10" />
		<input type="range" bind:value={b} min="0" max="10" />
	</label>

	<p class="p-2 mb-4">{a} + {b} = {a + b}</p>

	<label class="p-2">
		<input type="checkbox" bind:checked={yes} />
		Yes! Send me regular email spam
	</label>

	{#if yes}
		<p class="pl-2">Thank you. We will bombard your inbox and sell your personal details.</p>
	{:else}
		<p class="pl-2">You must opt in to continue. If you're not paying, you're the product.</p>
	{/if}
	<button class="m-4 btn btn-md w-36 bg-primary-400" disabled={!yes}>Subscribe</button>

	<h2 class="p-2 mb-2">Insecurity questions</h2>

	<form on:submit|preventDefault={handleSubmit}>
		<select class="p-2 rounded-xl" bind:value={selected} on:change={() => (answer = '')}>
			{#each questions as question}
				<option value={question}>
					{question.text}
				</option>
			{/each}
		</select>

		<input class="p-2 rounded-xl ml-2" bind:value={answer} />

		<button class="m-4 btn btn-md w-36 bg-primary-400" disabled={!answer} type="submit"> Submit </button>
	</form>

	<p class="p-2">
		selected question {selected ? selected.id : '[waiting...]'}
	</p>
</div>
