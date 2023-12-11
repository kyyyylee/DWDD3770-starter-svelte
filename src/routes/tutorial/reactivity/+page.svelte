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

	import { CodeBlock } from '@skeletonlabs/skeleton';

	import hljs from 'highlight.js/lib/core';

	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import typescript from 'highlight.js/lib/languages/typescript';
	import 'highlight.js/styles/github-dark.css';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('typescript', typescript);

	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);
</script>
<section style="max-width:50rem;margin:auto;">
<h1 class="text-secondary-700 text-center font-bold mt-4 text-xl">Reactivity</h1>
<div class="flex flex-col items-center">
<p class="p-4 text-lg text-center">
	At the heart of <code>Svelte</code> is a powerful system of reactivity for keeping the <code>DOM</code> in sync with your
	application state. <code>Svelte's</code> reactivity is triggered by assignments. Click the buttons below to see reactivity in action!
</p>
<p class="p-4 text-lg text-center">
	Syntax for reactivity is <span class="font-bold"><code>$: variable = value</code></span>
</p>
<CodeBlock language="ts" code={`$: doubled = count * 2;`}></CodeBlock>
</div>
<div class="bg-secondary-300 rounded-md m-4 p-4 flex flex-col items-center">
	<h3 class="text-surface-900">Button Clicker</h3>
	<button class="btn btn-md bg-secondary-500 text-surface-900 w-1/2 rounded-full m-4" on:click={handleClick}>
		Clicked {count}
		{count === 1 ? 'time' : 'times'}
	</button>
	<p class="text-surface-900">{count} doubled is {doubled}</p>
    <button class="btn btn-md bg-secondary-500 text-surface-900 rounded-full m-4" on:click={addNumber}>Push Count</button>
    <p class="text-surface-900">{numbers.join(' + ')} = {sum}</p>
	<button class="btn btn-md bg-surface-900 text-white rounded-full m-4" on:click={resetNumbers}>RESET</button>
</div>
</section>