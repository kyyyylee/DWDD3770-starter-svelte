<script lang ='ts'>
import Nested from '$lib/components/Nested.svelte';
import Packageinfo from '$lib/components/Packageinfo.svelte';
	import Layout from '../../+layout.svelte';

const pkg = {
    name: 'svelte',
    speed: 'dangerously',
    version: '4.0.0',
    website: 'https://svelte.dev'
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
<h1 class="text-secondary-700 text-center font-bold mt-4 text-xl">Props</h1>

<p class="p-4 m-2 text-lg text-center">Properties ( generally shortened to 'props' ) is a way to pass data down from one component (a parent component) to its children. Below is a message that has been passed in from a parent component that is stored in a seperate component folder.</p>

<div class="mx-20">
<CodeBlock language="ts" code={`<Nested />`}></CodeBlock>
</div>
<Nested />


<p class="p-4 m-2 text-lg text-center">Although the message above comes from a nested component, I can change the message within my <code>HTML</code>. Below, I have changed the same component to now read 'Howdy!!'</p>

<div class="mx-20">
<CodeBlock language="ts" code={`<Nested message="Howdy!!"/>`}></CodeBlock>
</div>
<Nested message="Howdy!!"/>



<Packageinfo {...pkg} />
</section>