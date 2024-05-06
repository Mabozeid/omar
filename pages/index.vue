<template>
    <header class="bg-slate-50 h-svh bg-[url('/public/monia-g-CYh-VDg9c8A-unsplash.jpg')] hero-img relative">
      <div class="overlay"></div>
      <div class="h-full w-full p-8 md:p-12 lg:px-16 lg:py-24 z-10 relative place-content-center">
      <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <h2 class="text-5xl font-bold text-white leading-normal	 tracking-wide	uppercase lg:tracking-widest w-full">
          Engoy Your Egypt 
           Vacation With US
        </h2>
      </div>
    </div>
  
    <!-- <img
      alt=""
      src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
    /> -->
    </header>

    <About />

    <Tours />

    <Masonry />

<Testimonials />
  
  

    <!-- <Testimonials /> -->
    
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
  background: #3333339e;
}

</style>
