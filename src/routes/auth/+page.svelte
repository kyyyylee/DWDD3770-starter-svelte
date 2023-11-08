<script>
    import { signIn, signOut } from '@auth/sveltekit/client'
    import { page } from '$app/stores'

    console.log($page.data.session?.user)
  </script>
  
  <div class="flex flex-col items-center">
    <h1 class="m-4 text-center text-xl">Auth</h1>
  {#if $page.data.session?.user}
    <p class="py-4">Signed in as {$page.data.session.user.email}</p>
    <button class="btn variant-outline-surface" on:click={signOut}>Sign out</button>
  {:else}
    <p class="py-4">Not signed in.</p>
    <button class="btn variant-outline-surface" on:click={() => signIn('github')}>Sign in</button>
  {/if}
</div>