<script>
	import RegisterForm from '$lib/RegisterForm.svelte';
</script>

<div class="resposivebg  min-h-screen flex justify-center bg-pri-red text-white font-Poppins">
	<main class="w-[89%] max-w-screen-lg text-center pb-6 lg:flex lg:justify-center lg:items-center ">
		<div class="card__label  flex-1 lg:mr-10  lg:text-left">
			<header class="text-4xl font-bold mt-14 lg:px-2">Learn to code by watching others</header>
			<p class="mt-8 mb-12">
				See how experienced developers solve problems in real-time. Watching scripted tutorials is
				great, but understanding how developers think is invaluable.
			</p>
		</div>
		<div class="card__content flex-1">
			<div class="bg-black/10 pb-[1px] rounded-lg">
				<div class="content__header mb-2 bg-accent-blue py-5 px-16 rounded-lg">
					<strong>Try it free 7 days</strong> then $20/mo. thereafter
				</div>
			</div>
			<div class="bg-black/10 pb-[1px] rounded-lg">
				<div class="content__form mb-2 bg-white mt-5 rounded-lg p-5 ">
					<RegisterForm />
					<p class="text-nue-darkblue/50 text-sm my-3 px-3 ">
						By clicking the button, you are agreeing to our <span class="text-pri-red font-bold"
							>Terms and Services</span
						>
					</p>
				</div>
			</div>
		</div>
	</main>
</div>
