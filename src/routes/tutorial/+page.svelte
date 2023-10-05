<script lang="ts">
    // Import necessary components
    import Introduction from './introduction/+page.svelte';
    import Reactivity from './reactivity/+page.svelte';
    import Props from './props/+page.svelte';
    import Logic from './logic/+page.svelte';
    import Events from './events/+page.svelte'
    import Bindings from './bindings/+page.svelte'
  
    // Define the active route
    let activeRoute = 'Introduction';
  </script>
  

    <div>
      <nav class="flex justify-center m-2">
        <button
          class="py-2 px-4 rounded-xl mr-2 bg-primary-500 text-white"
          class:opacity-50={activeRoute !== 'Introduction'}
          on:click={() => (activeRoute = 'Introduction')}
        >
          Introduction
        </button>
        <button
          class="py-2 px-4 rounded-xl mr-2 bg-primary-500 text-white"
          class:opacity-50={activeRoute !== 'Reactivity'}
          on:click={() => (activeRoute = 'Reactivity')}
        >
          Reactivity
        </button>
        <button
          class="py-2 px-4 rounded-xl mr-2 bg-primary-500 text-white"
          class:opacity-50={activeRoute !== 'Props'}
          on:click={() => (activeRoute = 'Props')}
        >
          Props
        </button>
        <button
          class="py-2 px-4 rounded-xl mr-2 bg-primary-500 text-white"
          class:opacity-50={activeRoute !== 'Logic'}
          on:click={() => (activeRoute = 'Logic')}
        >
          Logic
        </button>
        <button
        class="py-2 px-4 rounded-xl mr-2 bg-primary-500 text-white"
        class:opacity-50={activeRoute !== 'Events'}
        on:click={() => (activeRoute = 'Events')}
      >
        Events
      </button>
      <button
      class="py-2 px-4 rounded-xl mr-2 bg-primary-500 text-white"
      class:opacity-50={activeRoute !== 'Bindings'}
      on:click={() => (activeRoute = 'Bindings')}
    >
      Bindings
    </button>
      </nav>
  
      {#if activeRoute === 'Introduction'}
        <Introduction />
      {/if}
      {#if activeRoute === 'Reactivity'}
        <Reactivity />
      {/if}
      {#if activeRoute === 'Props'}
        <Props />
      {/if}
      {#if activeRoute === 'Logic'}
        <Logic />
      {/if}
      {#if activeRoute === 'Events'}
      <Events />
    {/if}
    {#if activeRoute === 'Bindings'}
    <Bindings />
  {/if}
    </div>