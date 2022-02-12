<script>
  import NewslettersForm from "$lib/NewslettersForm.svelte";
</script>

<!-- src/routes/index.svelte -->
<svelte:head>
  <title>Frontend Mentor | Base Apparel coming soon page</title>
</svelte:head>

<div
  class="min-h-screen text-desaturated-red  
  font-JosefinSans  bg-gradient-to-b from-gra-m-from to-gra-m-to lg:bg-orange-800"
>
  <div class="min-h-screen   ">
    <div class="min-h-screen lg:flex lg:flex-row-reverse ">
      <div class="lg:hidden">
        <div class="logo__mobile py-8 pl-8">
          <img class="" src="images/logo.svg" alt="logo" />
        </div>
        <div class="">
          <img class="w-full" src="images/hero-mobile.jpg" alt="hero" />
        </div>
      </div>

      <div
        class="hidden lg:block lg:w-[40%]  bg-no-repeat bg-cover "
        style="background-image: url(images/hero-desktop.jpg)"
      />
      <div
        class="text-center py-8 px-6 lg:text-left lg:w-[60%] bg-no-repeat  bg-[length:1px_1px] lg:bg-cover lg:flex lg:justify-center "
        style="background-image: url(images/bg-pattern-desktop.svg)"
      >
        <div class=" lg:w-3/4 lg:flex lg:flex-col lg:justify-between ">
          <div class="logo__desktop hidden lg:block mb-14 mt-16">
            <img class="" src="images/logo.svg" alt="logo" />
          </div>
          <div class="lg:w-3/4">
            <header class="uppercase text-4xl tracking-[14px] lg:text-5xl">
              <h1 class="font-light animate__animated animate__fadeInLeft">
                We're
              </h1>
              <h1
                class="text-dark-grayish-red font-semibold animate__animated animate__fadeInRight"
              >
                coming <br />soon
              </h1>
            </header>

            <p class="my-8 ">
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
            <div>
              <NewslettersForm />
            </div>
          </div>
          <div class="" />
        </div>
      </div>
    </div>
  </div>
</div>
