<script lang="ts">
    import { page } from '$app/stores'
    import { signIn } from '@auth/sveltekit/client'
    import { signOut } from '@auth/sveltekit/client';
    let loggedIn = $page.data.session?.user
    console.log(loggedIn)
</script>
<main class="w-screen h-screen">
<div class="flex flex-col items-center mt-10 h-full">
<h1 class="text-center text-xl m-2">Welcome to my <span>Svelte</span> Tutorial Site</h1>
{#if !loggedIn}
        <h2 class="text-center text-xl">Please login to access my site</h2>
        <button class="btn bg-surface-400 px-3 mt-3 rounded-lg" on:click={() => signIn('github')}>
            <span>
                <img class="w-10" src="/github.svg" alt="github logo"/>
            </span>
            <span>Login with GitHub</span></button>
{/if}
{#if loggedIn}
  <h2 class="text-center text-l mt-4">You are currently logged in as</h2>
  <div class="flex items-center border px-2 m-3 rounded-md">
    <img class="w-12 rounded-full" src={$page.data.session?.user?.image ?? ''} alt="user avatar"/> 
    <h1 class="text-center text-xl m-4">{$page.data.session?.user?.email}</h1>
  </div>
  <button class="btn bg-surface-400 px-3 mt-2 rounded-lg" on:click={() => signOut()}>
    Logout</button>
{/if}
</div>
</main>