<template>
<section>
  <div class="mx-auto max-w-screen-2xl px-4 py-24 sm:px-6 lg:px-8" data-aos="zoom-in">
    <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div class="relative z-10 lg:py-16">
        <div class="relative h-64 sm:h-80 lg:h-full">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div class="relative flex items-center bg-gray-100">
        <span
          class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div class="p-8 sm:p-16 lg:p-24">
          <h2 class="text-2xl font-bold sm:text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.
          </h2>

          <p class="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est
            esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam
            architecto eius quis quibusdam fugiat dicta.
          </p>

          <a
            href="#"
            class="mt-8 inline-block rounded border border-sky-600 bg-sky-900 px-12 py-3 text-sm font-medium text-white hover:bg-white hover:text-sky-900 focus:outline-none focus:ring active:text-sky-500 lg:tracking-widest button-effect"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script setup>

</script>

<style  scoped>
.button-effect {
  overflow: hidden;
  -webkit-transition: color 0.3s;
  -o-transition: color 0.3s;
  transition: color 0.3s;
  min-width: 150px;
  height: 50px;
  display: inline-block;
  border: none;
  background: #0C4A6E;
  color: #fff;
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 15px;
  text-transform: uppercase;
  font-weight: 600;
  font-family: "Raleway", sans-serif;
  letter-spacing: 1.5px;
  font-size: 13px;
  cursor: pointer;
}

.button-effect::before,
.button-effect::after {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: 100%;
  left: 0;
  z-index: -1;
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  -o-transition: transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
  -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
  -o-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
  transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
}
.button-effect::before {
  background: #93b5ea;
}
.button-effect::after {
  background: #FDBA74;
}

.button-effect:hover::before,
.button-effect:hover::after {
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
}
.button-effect:hover::after {
  -webkit-transition-delay: 0.175s;
  -o-transition-delay: 0.175s;
  transition-delay: 0.175s;
}
</style>