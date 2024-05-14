<template>
<div class="mx-auto max-w-screen-2xl px-4 py-24 sm:px-6 lg:px-8" data-aos="fade-up">
    <header class="text-center pt-6">
            <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Our  Trip</h2>
    
            <p class="mx-auto mt-4 max-w-md text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
            dicta incidunt est ipsam, officia dolor fugit natus?
            </p>
        </header>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid gap-4">
            <div>
                
                <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Travel Item
                    </span>
                </div>
               </div>

            </div>
            <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Travel Item
                    </span>
                </div>
               </div>


            <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Travel Item
                    </span>
                </div>
               </div>

        </div>

        <div class="grid gap-4">


            <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Travel Item
                    </span>
                </div>
               </div>



            <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Travel Item
                    </span>
                </div>
               </div>

            <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Travel Item
                    </span>
                </div>
               </div>

        </div>

        <div class="grid gap-4">

            <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Travel Item
                    </span>
                </div>
               </div>

            <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Travel Item
                    </span>
                </div>
               </div>

            <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Travel Item
                    </span>
                </div>
               </div>
        </div>

        <div class="grid gap-4">

            <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Travel Item
                    </span>
                </div>
               </div>

            <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Travel Item
                    </span>
                </div>
               </div>

            <div class="relative overflow-hidden masnoryItem">
                <a
            href="#"
            class="mt-8 inline-block rounded border border-sky-600 bg-sky-900 px-12 py-3 text-sm font-medium text-white hover:bg-white hover:text-sky-900 focus:outline-none focus:ring active:text-sky-500 lg:tracking-widest cta"
          >
            View All
          </a>
           </div>
        </div>
    </div>
</div>

    
</template>

<script setup>

</script>

<style scoped>
.capMasory {
    padding: 5px;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(178deg, transparent, #1e22567d);
    font-weight: 500;
    transition: 0.5s all ease-in-out;
    transform: translateY(200%);
    
}
.masnoryTitle {
    background: #fff;
    height: 50px;
    width: 120px;
    padding: 12px;
    border-radius: 10px;
}

.masnoryItem:hover .capMasory{

    transform: translateY(0);
}

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
    top: 0;
    right: 0;
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