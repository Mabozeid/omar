<template>
    <section id="testi" class="bg-gray-50 " data-aos="fade-up-right">
      <div class="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <header class="text-center py-8 ">
        <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Our Reviews</h2>
  
        <p class="mx-auto mt-4 max-w-md text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
          dicta incidunt est ipsam, officia dolor fugit natus?
        </p>
      </header>
    
        <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <blockquote class="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 p-4 relative testBox">
            <img
                  alt=""
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                  class="size-16 rounded-full object-cover text-right"
            />
            <div>
              <div class="flex gap-0.5 text-sky-900">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
    
              <div class="mt-4">
                <div class="testTitle relative py-4 my-10">
                  <p class="text-1xl  font-bold text-right text-sky-900 sm:text-3xl text-white  z-40">Andre Donega</p>
                </div>
    
                <p class="mt-4 leading-relaxed text-gray-700">
                  No, sky, they are not breathing. And they have no arms or legs … Where are they? You
                  know what? If we come across somebody with no arms or legs, do we bother resuscitating
                  them? I mean, what quality of life do we have there?
                </p>
              </div>
            </div>
          </blockquote>
    
          <blockquote class="flex h-full flex-col justify-between bg-white p-8 shadow-sm sm:p-8 relative testBox" >
            <img
                  alt=""
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  class="size-16 rounded-full object-cover text-right"
            />
            <div>
              <div class="flex gap-0.5 text-sky-900">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
    
              <div class="mt-4">
                <div class="testTitle relative py-4 my-10">
                  <p class="text-1xl  font-bold text-right text-sky-900 sm:text-3xl text-white z-40">Winnie</p>
                </div>   

    
                <p class="mt-4 leading-relaxed text-gray-700">
                  No, sky, they are not breathing. And they have no arms or legs … Where are they? You
                  know what? If we come across somebody with no arms or legs, do we bother resuscitating
                  them? I mean, what quality of life do we have there?
                </p>
              </div>
            </div>
          </blockquote>
    
          <blockquote class="flex h-full flex-col justify-between bg-white p-8 shadow-sm sm:p-8 relative testBox">
            <img
                  alt=""
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  class="size-16 rounded-full object-cover text-right"
            />
            <div>
              <div class="flex gap-0.5 text-sky-900">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
    
              <div class="mt-4">
                  <div class="testTitle relative py-4 my-10">
                  <p class="text-1xl font-bold text-right text-sky-900 sm:text-3xl z-40 text-white">A Adler</p>
                </div>   
    
                <p class="mt-4 leading-relaxed text-gray-700">
                  No, sky, they are not breathing. And they have no arms or legs … Where are they? You
                  know what? If we come across somebody with no arms or legs, do we bother resuscitating
                  them? I mean, what quality of life do we have there?
                </p>
              </div>
            </div>
    
          </blockquote>
        </div>
      </div>
    </section>
  </template>

<script setup>

</script>

<style>
.testBox img {
  position: absolute;
  height: 5rem;
    top: -10%;
    right: 10%;
    width: 5rem;
    border-radius: 10px;
    transition: all 500ms ease;
}
.testBox {
  transition: all 0.5s;
}
.testBox:hover {
transform:  translate3d(-10px,-10px,7px);
}
.testTitle p{
  --f: 10px; /* control the folded part*/
  --r: 15px; /* control the ribbon shape */
  --t: 25px; /* the top offset */
  position: absolute;
  inset: var(--t) calc(-1*var(--f)) auto auto;
  padding: 0px 10px var(--f) calc(10px + var(--r));
  clip-path: 
    polygon(0 0,100% 0,100% calc(100% - var(--f)),calc(100% - var(--f)) 100%,
      calc(100% - var(--f)) calc(100% - var(--f)),0 calc(100% - var(--f)),
      var(--r) calc(50% - var(--f)/2));
  background: #109546;
  box-shadow: 0 calc(-1*var(--f)) 0 inset #0005;
  top: 0;
  right: -2.5rem;

}
.testTitle {
  background-color: transparent;
  position:relative;
}
</style>