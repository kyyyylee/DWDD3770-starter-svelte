<script lang="ts">
    import { page } from '$app/stores'
    import { signIn } from '@auth/sveltekit/client'
    import { signOut } from '@auth/sveltekit/client';
    let loggedIn = $page.data.session?.user
    console.log(loggedIn)
</script>
<main class="w-screen h-screen">
<div class="flex flex-col items-center mt-10 h-full">
<h1 class="text-center m-4">Welcome to my <span>Svelte</span> Tutorial Site</h1>
{#if !loggedIn}
        <h2 class="text-center text-xl">Please login to access my site</h2>
        <button class="btn bg-surface-400 px-3 mt-3 rounded-lg" on:click={() => signIn('github')}>
            <span>
                <img class="w-10" src="/github.svg" alt="github logo"/>
            </span>
            <span>Login with GitHub</span></button>
{/if}
{#if loggedIn}
  <h2 class="text-center text-l">You are currently logged in as {$page.data.session?.user?.email}</h2>
  <button class="btn bg-surface-400 px-3 mt-3 rounded-lg" on:click={() => signOut()}>
    Logout</button>
{/if}
</div>
</main>