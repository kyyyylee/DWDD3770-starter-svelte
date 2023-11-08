<script lang="ts">
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    onMount(() => {
        console.log($page.data.session?.user)
        if (!$page.data.session?.user) 
        goto('/auth/login')
    })
</script>

<h1 class="text-center m-4">This is my super awesome HOME PAGE ROUTE</h1>