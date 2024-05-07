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
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Travel Item
                    </span>
                </div>
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
</style>