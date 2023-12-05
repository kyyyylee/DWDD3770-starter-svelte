<script lang="ts">
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
	import '../app.postcss';
	import { Modal } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';
	import ThemeMenu from '$lib/components/ThemeMenu.svelte';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { blur } from 'svelte/transition';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { signOut } from '@auth/sveltekit/client';
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	initializeStores();

	const modalStore = getModalStore();

	let loggedIn: boolean = false;

	if (!$page.data.session?.user) {
      loggedIn = false;
   } else {
      loggedIn = true;
   }

	const handleSignOut = async () => {
		const modal: ModalSettings = {
			type: 'confirm',
			// Data
			title: 'Signing out',
			body: `Are you sure you want to sign out?`,
			response: (r: boolean) => {
				if (r) {
					signOut();
					goto('/');
				}
			}
		};
		modalStore.trigger(modal);
	};

</script>

<Modal transitionIn={blur} transitionInParams={{ delay: 250, duration: 300 }} />

<AppShell>
	<svelte:fragment slot="header">
		{#if loggedIn }
		<AppBar>
			<svelte:fragment slot="lead">
				<a
					class="flex items-center p-2 rounded-full hover:text-primary-700 hover:bg-primary-100/50"
					href="/"
					><svg
						class="w-9 px-2"
						enable-background="new 0 0 98.2 118"
						viewBox="0 0 98.2 118"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="m91.9 15.6c-10.9-15.7-32.6-20.3-48.2-10.3l-27.5 17.5c-7.5 4.7-12.7 12.4-14.2 21.1-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.6-9-.4-18.2-5.7-25.5m-50.9 88.3c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7l27.4-17.5c1.4-.9 2.3-2.2 2.6-3.8s-.1-3.3-1-4.6c-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.4 6.6c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.4-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-27.4 17.6c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.4 17.5c-1.8 1.1-3.7 1.9-5.7 2.5"
						/></svg
					>Home</a
				>
				<a href="/taylorswift"
				><button
					class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 py-2 px-4 rounded-xl m-2 bg-primary-500 text-white"
				>
					TS Dynamic Route
				</button></a
			>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<ThemeMenu />
				<LightSwitch class="h-8 flex items-center" />
				{#if $page.data.session?.user}
					<Avatar
						src={$page.data.session?.user?.image ?? ''}
						on:click={handleSignOut}
						width="w-14"
						rounded="rounded-full"
						border="border-4 border-surface-300-600-token hover:!border-primary-500"
						cursor="cursor-pointer"
					/>
				{:else}
					<Avatar initials="?" width="w-16" rounded="rounded-full" />
				{/if}
			</svelte:fragment>
		</AppBar>
		{/if}
	</svelte:fragment>
	{#if loggedIn }
	<div>
		<nav class="flex justify-center flex-wrap m-2">
			<a href="/tutorial/introduction"
				><button
					class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 py-2 px-4 rounded-xl m-2 bg-primary-500 text-white"
				>
					Introduction
				</button></a
			>
			<a href="/tutorial/reactivity"
				><button
					class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 py-2 px-4 rounded-xl m-2 bg-primary-500 text-white"
				>
					Reactivity
				</button></a
			>
			<a href="/tutorial/props"
				><button
					class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 py-2 px-4 rounded-xl m-2 bg-primary-500 text-white"
				>
					Props
				</button></a
			>
			<a href="/tutorial/logic"
				><button
					class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 py-2 px-4 rounded-xl m-2 bg-primary-500 text-white"
				>
					Logic
				</button></a
			>
			<a href="/tutorial/events"
				><button
					class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 py-2 px-4 rounded-xl m-2 bg-primary-500 text-white"
				>
					Events
				</button></a
			>
			<a href="/tutorial/bindings"
				><button
					class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 py-2 px-4 rounded-xl m-2 bg-primary-500 text-white"
				>
					Bindings
				</button></a
			>
			<a href="/tutorial/lifecycle"
				><button
					class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 py-2 px-4 rounded-xl m-2 bg-primary-500 text-white"
				>
					Lifecycle
				</button></a
			>
			<a href="/tutorial/motion"
				><button
					class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 py-2 px-4 rounded-xl m-2 bg-primary-500 text-white"
				>
					Motion
				</button></a
			>
		</nav>
	</div>
	{/if}
	<slot />
</AppShell>
