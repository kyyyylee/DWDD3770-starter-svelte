<script lang="ts">
	import { localUser } from '$lib/stores/localUser';
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	const credentials = {
		email: '',
		password: ''
	};

    $: console.log($localUser)

	const handleSubmit = async () => {
		const modal: ModalSettings = {
			type: 'alert',
			title: 'Welcome!',
			body: `Thanks for signing up, ${$localUser.firstName}!`,
		};
		modalStore.trigger(modal);
	};
</script>

<div class="container h-full mx-auto flex justify-center">
	<div class="card text-center w-2/3 mt-6">
		<form
			on:submit|preventDefault={handleSubmit}
			class="form flex flex-col space-y-10 p-4 rounded-lg"
		>
			<h1 class="text-3xl font-bold">Login</h1>

			<input
				class="input"
				bind:value={credentials.email}
				required
				autocomplete="email"
				type="email"
				placeholder="Email"
			/>
			<input
				class="input"
				bind:value={credentials.password}
				required
				autocomplete="current-password"
				type="password"
				placeholder="Password"
			/>

			<button type="submit" class="btn variant-filled-primary">Login</button>
            <p class="text-md">Don't have an account? <a class="underline" href="/auth/signup">Sign Up Here</a></p>
		</form>
	</div>
</div>