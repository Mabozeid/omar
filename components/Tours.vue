<template>

    <section class="tourMain bg-gray-50 py-8 " data-aos="fade-up-left">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">
      <header class="text-center py-8 ">
        <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Tour  Recomendation</h2>
  
        <p class="mx-auto mt-4 max-w-md text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
          dicta incidunt est ipsam, officia dolor fugit natus?
        </p>
      </header>
  
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8  pb-8 min-h-96">

<div class="min-h-32 rounded-lg relative pb-6 blogItem overflow-hidden">  
  <article class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
    <div class="relative overflow-hidden">
      <img
      alt=""
      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      class="h-auto w-full object-cover"
      />
    </div>


<div class="p-date">
     <span class="day">1 Feb</span>
      <span class="month">2015</span>
 </div>

<div class="p-4 sm:p-6">
<a href="#">
  <h3 class="text-lg font-medium text-gray-900">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </h3>
</a>

<p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
  pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
  mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
  dignissimos. Molestias explicabo corporis voluptatem?
</p>

<a href="#" class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
  Find out more

  <span aria-hidden="true" class="block transition-all group-hover:ms-0.5 rtl:rotate-180">
    &rarr;
  </span>
</a>
</div>
</article>
</div>

<div class="min-h-32 rounded-lg relative blogItem overflow-hidden">  
  <article class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
    <div class="relative overflow-hidden">
      <img
      alt=""
      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      class="h-auto w-full object-cover"
      />
    </div>


<div class="p-date">
     <span class="day">1 Feb</span>
      <span class="month">2015</span>
 </div>
<div class="p-4 sm:p-6 ">
  
<a href="#">
  <h3 class="text-lg font-medium text-gray-900">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </h3>
</a>

<p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
  pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
  mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
  dignissimos. Molestias explicabo corporis voluptatem?
</p>

<a href="#" class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
  Find out more

  <span aria-hidden="true" class="block transition-all group-hover:ms-0.5 rtl:rotate-180">
    &rarr;
  </span>
</a>
</div>
</article>
</div>

<div class="min-h-32 rounded-lg  relative blogItem overflow-hidden">  <article class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
<div class="relative overflow-hidden">
  <img
alt=""
src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
class="h-auto w-full object-cover hover:h-56"
/>
</div>

<div class="p-date">
     <span class="day">1 Feb</span>
      <span class="month">2015</span>
 </div>

<div class="p-4 sm:p-6">
<a href="#">
  <h3 class="text-lg font-medium text-gray-900">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </h3>
</a>

<p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
  pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
  mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
  dignissimos. Molestias explicabo corporis voluptatem?
</p>

<a href="#" class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
  Find out more

  <span aria-hidden="true" class="block transition-all group-hover:ms-0.5 rtl:rotate-180">
    &rarr;
  </span>
</a>
</div>
</article>
</div>
</div>
    </div>
  </section>

  </template>

<script setup>

</script>

<style >
.p-date {
  padding: 5px;
    text-align: center;
    position: absolute;
    top: 25px;
    left: 25px;
    min-width: 50px;
    background-color: #FDBA74;
    height: auto;
    border-top-right-radius: 20px;
    font-weight: 500;
    transform: translateX(-100px);
    transition:0.5s all ease-in-out;
}
.p-date .day,
.month {
  color: #fff;
  margin: 2px auto;
  display: block;
}
.blogItem img {
  overflow: hidden;
  transition:0.5s all ease-in-out;
}
.blogItem:hover img{
  filter: grayscale(100%);
  transform: scale(1.2);
  transition:0.5s all ease-in-out;
  height: auto;
}
.blogItem:hover .p-date {
  transform: translateX(0);
  transition:0.5s all ease-in-out;
}

</style>