<script lang="ts">
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
	import '../app.postcss';
	import { Modal, getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';

	initializeStores();
</script>

<Modal />

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="txt-2xl">Kylee Harward</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<!-- <a href="/tutorial">Home</a>
				<a href="/tutorial">Tutorials</a> -->
                <a href="/tutorial/introduction" class="py-2 px-5 rounded-full hover:text-primary-700 hover:bg-primary-100/50">Introduction</a>
                <a href="/tutorial/reactivity" class="py-2 px-5 rounded-full hover:text-primary-700 hover:bg-primary-100/50">Reactivity</a>
                <a href="/tutorial/props" class="py-2 px-5 rounded-full hover:text-primary-700 hover:bg-primary-100/50">Props</a>
                <a href="/tutorial/logic" class="py-2 px-5 rounded-full hover:text-primary-700 hover:bg-primary-100/50">Logic</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
