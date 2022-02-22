<script>
	import ErrorMsgBox from '$lib/ErrorMsgBox.svelte';

	let firstname = '';
	let lastname = '';
	let email = '';
	let password = '';
	let checkEmail = true;
	let checkPassword = true;
	let checkFirstName = true;
	let checkLastName = true;

	function validEmail(e) {
		var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
		return String(e).search(filter) != -1;
	}

	function handleSubmit() {
		checkFirstName = firstname.trim().length > 0;
		checkLastName = lastname.trim().length > 0;
		checkEmail = validEmail(email);
		checkPassword = password.trim().length > 0;

		if (checkFirstName && checkLastName && checkEmail && checkPassword)
			alert('Thanks for your registration!');
	}
</script>

<div class="">
	<form on:submit|preventDefault={handleSubmit}>
		<div class="mb-4 relative">
			<input
				class="border-solid border-[1px] text-black font-medium rounded-md px-6 py-2 h-[3rem]   placeholder:text-gray-500 w-full"
				placeholder="First Name"
				bind:value={firstname}
			/>
			{#if !checkFirstName && firstname === ''}
				<ErrorMsgBox msg={'First Name cannot be empty'} />
			{/if}
		</div>
		<div class="mb-4 relative">
			<input
				class="border-solid border-[1px] text-black font-medium rounded-md px-6 py-2 h-[3rem]  placeholder:text-gray-500 w-full"
				placeholder="Last Name"
				bind:value={lastname}
			/>
			{#if !checkLastName && lastname.trim() === ''}
				<ErrorMsgBox msg={'Last Name cannot be empty'} />
			{/if}
		</div>
		<div class="mb-4 relative">
			<input
				class="border-solid border-[1px] text-black {!checkEmail
					? 'text-pri-red'
					: ''} font-medium rounded-md px-6 py-2 h-[3rem] focus:text-black  placeholder:text-gray-500 w-full"
				placeholder="Email Address"
				bind:value={email}
			/>
			{#if !checkEmail}
				<ErrorMsgBox msg={'Looks like this is not an email'} />
			{/if}
		</div>
		<div class="mb-4 relative">
			<input
				class="border-solid border-[1px] text-black font-medium rounded-md px-6 py-2 h-[3rem]  placeholder:text-gray-500 w-full"
				placeholder="Password"
				type="password"
				bind:value={password}
			/>
			{#if !checkPassword && password === ''}
				<ErrorMsgBox msg={'Password cannot be empty'} />
			{/if}
		</div>

		<div class="bg-green-600/80 pb-[1px] rounded-md mt-3">
			<button
				class="mb-1 bg-pri-green py-3 rounded-md uppercase font-medium w-full hover:bg-green-300"
				type="submit">Claim your free trial</button
			>
		</div>
	</form>
</div>
