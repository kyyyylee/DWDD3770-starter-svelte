<script lang ='ts'>
import Nested from '$lib/components/Nested.svelte';
import Packageinfo from '$lib/components/Packageinfo.svelte';

const pkg = {
    name: 'svelte',
    speed: 'dangerously',
    version: '4.0.0',
    website: 'https://svelte.dev'
}

</script>

<h1 class="m-4 text-center">Props</h1>
<p class="m-4 text-center">Properties, generally shortened to 'props', is a way to pass data down from one component ('a parent component') to its children. Below is a message that has been passed in from a parent component</p>

<Nested message="Howdy!!"/>

<Nested />

<Packageinfo {...pkg} />