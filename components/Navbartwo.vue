<template>
<div>
  <nav class="bg-color border-gray-400 border-b absolute top-0 left-0 right-0 z-50">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <div class="flex items-center space-x-3 rtl:space-x-reverse">
          <i class="fa-brands fa-facebook-f text-white"></i>
          <i class="fa-brands fa-x-twitter text-white"> </i>
          <span class="text-white">123456789</span>
          <span class="text-white">| info@egypt_engoyment.com </span>
        </div>
        <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="tel:5541251234" class="text-sm  text-white dark:text-white hover:underline">(555) 412-1234</a>
            <a href="#" class="text-sm  text-white dark:text-blue-500 hover:underline">Blog</a>
            <a href="#" class="text-sm  text-white dark:text-blue-500 hover:underline">Contact</a>
        </div>
    </div>
</nav>
<nav class="border-gray-200 dark:bg-gray-900 relative">
  <div class="bg-transparent bg-color flex flex-wrap items-center justify-between mx-auto p-4 px-10 fixed top-14	 left-0 right-0 z-50" :class="{ 'scrolled': isScrolled }">
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="/public/android-chrome-192x192.png"
          alt=""
          class="size-12 rounded-lg inline-block"
          />
        <span class="self-center text-2xl font-bold whitespace-nowrap  text-2xl font-bold leading-7 text-sky-900 sm:truncate sm:text-3xl sm:tracking-tight lg:tracking-widest font-sans inline-block leading-10	">OMAR</span>
    </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

    <i class="fa-solid fa-magnifying-glass py-4 px-4 text-white "></i>

      <button type="button" class="text-white bg-sky-700 hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 m-2 text-center ">Get started</button>

      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
      <li>
      <NuxtLink to ="/" class="block py-2 px-3 md:p-0 text-white  rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page" >
        Home
      </NuxtLink>
      </li>

      <li>
      <NuxtLink to ="#about" class="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >
        Egypt Travel
      </NuxtLink>
      </li>


      <li>
      <NuxtLink to ="/" class="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >
        Egypt day Tours
      </NuxtLink>
      </li>


      <li>
      <NuxtLink to ="#tours" class="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >
        Egypt
      </NuxtLink>
      </li>

      <li>
      <NuxtLink to ="#testi" class="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >
        Why Us?
      </NuxtLink>
      </li>
    </ul>
  </div>
  </div>
</nav>
</div>
</template>

<script>
import { useScroll } from '~/composables/useScroll';

export default {
  setup() {
    const { isScrolled } = useScroll();

    return { isScrolled };
  }
};
</script>

<style>
.bg-color{
  background: rgb(0 0 0 / 10%);
}
.scrolled {
  background-color: #1249AE;
  /* border-radius: 50px; */
  transition: background-color 0.5s ease;
  /* margin-top: 20px; */
  /* border: 1px solid #ddd */
  top:0;
}
.scrolled a {
  color: #fff;
}

.scrolled span {
  color: #fff;
}

.scrolled button {
  background-color: #fff;
  color: #1249AE;
};

.cta {
    position: absolute;
    transform: translate(-50%, -50%);
    text-decoration: none;
    text-transform: uppercase;
    background: #eee;
    color: #FFF;
    height: 2.75rem;
    width: 10em;
    line-height: 2.75rem;
    padding: 0px 10px;
    letter-spacing: 1px;
    text-align: center;
    font-size: 16px;
    transition: 0.5s all;
    overflow: hidden;
    margin: 53px 20px;
}

.cta:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0;
    /*    background: #F00;*/
    z-index: -1;
    transition: 1s;
    border-style: solid;
    border-color: #0C4A6E;
    border-width: 80px 100px;
    transform: rotate(360deg);
    transform-origin: top left
}

.cta:hover:before {
    border-color: #FDBA74;
    transform: rotate(40deg)
}

.cta:hover {
    color: #fff;
    transition: 0.5s;
    transition-delay: 0.3s;
}
</style>

