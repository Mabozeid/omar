<template>
    <header class="bg-slate-50 h-svh bg-[url('/public/nathan-anderson-FHiJWoBodrs-unsplash.jpg')] hero-img relative">
      <div class="overlay"></div>
      <div class="h-full w-full p-8 md:p-12 lg:px-16 lg:py-24 z-50 relative place-content-center">
      <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <h2 class="text-6xl font-bold text-white  md:text-4xl  tracking-wide	">
          We Never Turn a Child Down.
        </h2>
  
        <p class="hidden text-black  md:mt-4 md:block">
          If you have a child with autism spectrum disorder (ASD), or if you think your child might have ASD, Atlanta Autism Center is here to help.
        </p>
  
        <div class="mt-4 md:mt-8">
          <a
            href="#"
            class="inline-block rounded bg-sky-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-sky-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  
    <!-- <img
      alt=""
      src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
    /> -->
    </header>
    <About />
  </template>

<script setup>

</script>

<style scoped>
.hero-img{
  background-attachment: fixed;
    background-size: cover;
    height: 100vh;
    min-height: 100%;
    width: 100%;
    overflow: hidden;
    background-position: 50% 50%;
}
.overlay{
 content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: 10;
  background: rgb(160 220 255);
}
</style>
