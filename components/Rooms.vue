<template>
  <section class="lg:min-h-fit lg:py-0 lg:pt-16 pb-12 md:px-[22px] px-[22px] lg:px-[150px]">
    <div class="lg:w-auto lg:pb-70 lg:py-0 py-12">
        <div class="flex justify-start md:justify-start lg:justify-start w-full text-35 lg:text-55 lg:text-start text-antic-gray font-normal">Find your room</div>
        <div class="lg:grid lg:grid-cols-5 pt-5 w-full lg:pt-12 flex flex-col gap-y-[33px]">
            <div class="lg:col-span-1 lg:pr-10 md:flex md:justify-start w-fit">
                <p class="font-Varta text-antic-gray text-start text-18 md:text-start lg:text-start">Dining room, bedroom, bathroom or office. Find what you need</p>
            </div>
            <div class="lg:col-span-4 ">
                <swiper
                    :breakpoints="{
                        '640': {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        '768': {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        '1024': {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        }
                    }"
                    :modules="modules"
                    @swiper="onSwiper"
                    :onSlideChange="change"
                    
                    :navigation = "{nextEl:'.swiper-btn-next', prevEl:'.swiper-btn-prev'}"
                    ref="swiperRef"
                
                    
                >
                    
                        <swiper-slide v-for="(image, index) in images" :key="index">
                            <div class="flex relative">
                                <NuxtImg :src="`/rooms/${image.img}`" :placeholder="`/rooms/${image.custom}`" class="w-[145px] h-232.5 lg:w-261 lg:h-350 object-cover opacity-80 relative" densities="1x" format="webp"/>
                                <p class="text-antic-gray ml-8 font-Varta">New arrival</p>
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <p class="text-antic-dark text-35 lg:text-55">{{image.title}}</p>
                                </div>
                            </div>
                        </swiper-slide>
                        
                    
                    
                </swiper>
                
            </div>
        </div>
        <div class="flex gap-x-[30px] mt-12 lg:flex-row flex-row-reverse lg:justify-start justify-between md:justify-start md:flex-row">
            <p class="font-Varta text-antic-gray opacity-90 text-18 md:w-auto lg:w-[165px]"> {{ currentSlide }} / {{ totalSlides }}</p>
            <div class="flex flex-row gap-x-4">
                <div class="swiper-btn-prev flex gap-x-4 cursor-pointer">
                    <Icon name="fa:chevron-left" class="mt-[7.5px] text-antic-dark" size="12px"/>
                    <p class=" text-antic-dark font-Karla text-17 font-black lg:font-bold">Prev</p>
                </div>
                <div class="swiper-btn-next flex gap-x-4 cursor-pointer">
                    <p class=" text-antic-dark font-Karla text-17 font-black lg:font-bold">Next</p>
                    <Icon name="fa:chevron-right" class="mt-[7.5px] text-antic-dark" size="12px"/>
                </div>
            </div>
        </div>
        
        
    </div>
  
    <div class="lg:min-h-fit lg:py-[64px]  md:pt-12 pt-12">
        <div class=" lg:w-auto lg:h-auto flex flex-col md:flex-col lg:flex lg:flex-row justify-between gap-x-9 gap-y-[41px]">
            <div class="grid place-content-start md:w-full lg:w-1/2 lg:h-fit">
                <div class="w-auto md:w-[600px] lg:w-auto ">
                    <p class="lg:font-light text-35 lg:text-55 text-antic-gray lg:w-[546px] leading-[60px]">We stay by your side to design your projects</p>
                </div>
                <div class="flex mt-30 lg:p-0">
                    <a href="#" class="flex gap-x-2">
                        <p class="text-antic-dark font-Karla text-17 font-black lg:font-bold">Find out more</p>
                        <Icon name="fa:chevron-right" class="mt-[6px] text-sm text-antic-dark"/>
                        
                    </a>
                </div>
            </div>
            <div class="grid gap-y-10 lg:flex lg:flex-col lg:grid-cols-1 md:grid-cols-2 md:w-full lg:gap-7 lg:w-1/2">
                <div class="grid lg:grid-cols-2 lg:gap-x-7 gap-y-10 lg:h-fit">
                    <div>
                        <p class="font-Varta text-antic-dark font-semibold text-25">Our Advices</p>
                        <p class="font-Varta text-antic-gray opacity-90 text-lg mt-3">
                            What if you took advantage of this rather special period to rethink your interior?
                            You spend more time at home so you might as well feel good there.
                        </p>
                    </div>
                    <div>
                        <p class="font-Varta text-antic-dark font-semibold text-25">Click and Collect</p>
                        <p class="font-Varta text-antic-gray opacity-90 text-lg mt-3">
                            Adapted and contactless. Free from € 200 of purchases in stores offering the service.
                        </p>
                    </div>
                </div>
                <div class="grid gap-y-10 lg:flex gap-x-7 lg:h-fit">
                
                    <div>
                        <p class="font-Varta text-antic-dark font-semibold text-25">Conception Service</p>
                        <p class="font-Varta text-antic-gray opacity-90 text-lg">
                            Personalized service with an expert advisor for your interior and exterior decoration or layout projects. 
                        </p>
                    </div>
                    <div>
                        <p class="font-Varta text-antic-dark font-semibold text-25">Installation Service</p>
                        <p class="font-Varta text-antic-gray opacity-90 text-lg">
                            Our furniture packaged in flat packs are designed for easy assembly. But you can call on our partner.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</section>
</template>

<script>
import { Swiper, SwiperSlide} from 'swiper/vue'

import { Navigation, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/swiper-bundle.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { onMounted, ref, watch } from 'vue';


export default {
components: {
    Swiper,
    SwiperSlide,
},
setup() {
    
    const images =ref([
        {title:"Bedroom",img:"bed-room.png", custom:"bed-room-placeholder.jpg"},
        {title:"Living room",img:"living-room.jpeg", custom:"living-room-placeholder.jpg"},
        {title:"Library",img:"library.jpg", custom:"library-placeholder.jpg"},
        {title:"Kitchen",img:"kitchen.jpg", custom:"kitchen-placeholder.jpg"},
    ])
    const swiperRef = ref(null)
    const currentSlide = ref(null)
    const totalSlides = ref(null)
    const onSwiper = (swiperInstance)=>{
        currentSlide.value = swiperInstance.activeIndex + 1,
        totalSlides.value = swiperInstance.snapGrid.length
    }
    const change = (elm)=>{
        currentSlide.value = elm.activeIndex + 1;
        console.log(elm)
        
    }

    return {
        images,
        modules: [Navigation, Pagination],
        onSwiper,
        change,
        swiperRef,
        currentSlide,
        totalSlides,
      
        
    };
},
};
</script>


<style>

</style>