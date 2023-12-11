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
		{#if loggedIn}
			<AppBar>
				<svelte:fragment slot="lead">
					<a class="flex items-center px-4 py-2 rounded-full hover:bg-primary-100/50" href="/"
						>Home</a
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
	{#if loggedIn}
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
				<a href="/taylorswift"
					><button
						class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 py-2 px-4 rounded-xl m-2 bg-primary-500 text-white"
					>
						TS Dynamic Route
					</button></a
				>
			</nav>
		</div>
	{/if}
	<slot />
</AppShell>
<footer
	class="flex flex-col text-center clear-both bg-surface-400 border-t-2 border-surface-700 bottom-0 mt-8 p-4"
>
	<span class="p-2">Kylee Harward &bull; 2023</span>
	<span><a class="px-2 hover:text-white" href="https://github.com/kyyyylee/" target="_blank">
		<i class="fa-brands fa-github" /> Github
	</a>
	<a class="px-2 hover:text-white" href="https://www.linkedin.com/in/kylee-harward/" target="_blank">
		<i class="fa-brands fa-linkedin"></i> Linkedin
	  </a>
	  <a class="px-2 hover:text-white" href="https://kyleeharward.netlify.app/" target="_blank">
		<i class="fa-solid fa-laptop-code"></i> Portfolio
	  </a>
	</span>
</footer>
