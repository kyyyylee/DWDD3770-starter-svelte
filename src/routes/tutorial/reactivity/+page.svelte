<script lang="ts">
	let count = 0;
    let numbers = [1,2,3,4,5];
	$: doubled = count * 2;
    $: console.log(`the count is ${count}`);
    $: console.log(numbers);

	$: if (count >= 10) {
		alert('count is dagerously high!');
		count = 9;
	}

    $: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0);

	function handleClick() {
		count += 1;
	}

    function addNumber() {
        numbers = [...numbers, numbers.length+1]
    }
	function resetNumbers() {
		count = 0;
		numbers = [1,2,3,4,5];
	}
</script>

<h1 class="text-center m-4 text-xl">Reactivity</h1>
<p class="p-4 m-2 text-lg text-center">
	At the heart of Svelte is a powerful system of reactivity for keeping the DOM in sync with your
	application state. Svelte's reactivity is triggered by assignments
</p>
<div class="bg-primary-200 rounded-md m-4 p-4 flex flex-col items-center">
	<h3>Button Clicker</h3>
	<button class="btn btn-md bg-primary-400 w-1/2 rounded-full m-4" on:click={handleClick}>
		Clicked {count}
		{count === 1 ? 'time' : 'times'}
	</button>
	<p>{count} doubled is {doubled}</p>
    <button class="btn btn-md bg-primary-400 rounded-full m-4" on:click={addNumber}>Push Count</button>
    <p>{numbers.join(' + ')} = {sum}</p>
	<button class="btn btn-md bg-surface-900 text-white rounded-full m-4" on:click={resetNumbers}>RESET</button>
</div>
