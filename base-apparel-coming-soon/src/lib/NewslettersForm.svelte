<script>
  let email = "";

  function handleClick() {
    if (validEmail(email)) alert("Thanks for your registration!");
    else alert("Please provide your email.");
  }

  function validEmail(e) {
    var filter =
      /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(e).search(filter) != -1;
  }
</script>

<div class="flex justify-between relative ">
  <input
    class="border-solid border-[1px] text-black rounded-full border-desaturated-red px-6 py-2 h-[3rem] bg-gra-m-to placeholder:text-desaturated-red/50 w-full"
    placeholder="Email Address"
    bind:value={email}
  />
  <button
    class="bg-gradient-to-l from-soft-red to-desaturated-red py-4 px-7 rounded-full
    absolute right-0 h-[3rem] shadow-lg shadow-soft-red/50 hover:from-gra-b-from hover:to-gra-b-from"
    on:click={handleClick}
  >
    <img src="images/icon-arrow.svg" alt="arrow" />
  </button>
  {#if !validEmail(email) && email != ""}
    <div class="absolute right-20 top-3 h-[3rem] ">
      <img src="images/icon-error.svg" alt="arrow" />
    </div>

    <div class="px-6 absolute -bottom-8 font-semibold text-soft-red">
      Please provide a valid email
    </div>
  {/if}
</div>
