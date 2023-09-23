<script lang="ts">
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
    import '../app.postcss';
</script>

<AppShell>
    <svelte:fragment slot='header'>
        <AppBar>
            <svelte:fragment slot='lead'>
                <strong class="txt-2xl">Kylee</strong>
            </svelte:fragment>
            <svelte:fragment slot="trail">
                <a href="" class="text-xl">Home</a>
                <a href="" class="text-xl">About</a>
            </svelte:fragment>
        </AppBar>
    </svelte:fragment>
    <slot />
</AppShell>

