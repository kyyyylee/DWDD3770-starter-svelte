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
</script>

<section style="max-width:60rem;margin:auto;">
<h1 class="m-4 text-center text-xl">Props</h1>
<p class="p-4 m-2 text-lg text-center">Properties, generally shortened to 'props', is a way to pass data down from one component ('a parent component') to its children. Below is a message that has been passed in from a parent component</p>

<Nested />

<p class="p-4 m-2 text-lg text-center">Although the message above comes from a nested component, I can change the message within my HTML. Below, I have changed the same component to now read 'Howdy!!'</p>
<Nested message="Howdy!!"/>

<Packageinfo {...pkg} />
</section>