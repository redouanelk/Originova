<template>
  <section class="min-h-screen bg-white py-[48px] md:px-[22px] px-[22px] lg:px-0 flex flex-col gap-y-[64px]">
    <div class="grid gap-y-8 lg:grid lg:grid-cols-2 lg:justify-start lg:w-full lg:px-[150px]">
        <div class="grid gap-y-2 lg:gap-0">
            <p class="text-antic-black text-35">Be aware of the latest trends</p>
            <p class="font-Varta text-antic-gray opacity-90 text-lg mt-15">Stay informed of new trends, but also of our various offers.</p>
            <a href="#" class="flex mt-2.5 w-fit gap-x-2">
                <p class="font-Karla font-semibold text-17 text-antic-dark">Learn more</p>
                <Icon name="fa:chevron-right" class="mt-[7px] text-antic-dark" size="12px"/>
            </a>
        </div>
        <div class="lg:flex md:flex md:justify-end md:gap-x-16 lg:items-center lg:justify-end lg:gap-x-16 gap-y-16 grid  ">
            <input type="email" class="bg-antic-light bg-opacity-30 rounded-px h-50 w-full lg:w-296.1 p-15 font-Varta placeholder-antic-gray placeholder-opacity-90 placeholder-text-lg" placeholder="email@address.com">
            <button class="bg-antic-brown font-Karla font-bold text-17 text-white h-50 w-full md:w-143.11 lg:w-143.11 rounded-px flex items-center justify-center cursor-pointer">Subscribe</button>
        </div>

    </div>
    
    <div class="flex lg:flex-col flex-col-reverse gap-y-10 lg:pl-[150px]">
        <div class="">
            <Swiper
                :breakpoints="{
                    '640': {
                        slidesPerView: 2,
                       
                    },
                    '768': {
                        slidesPerView: 2.5,
                        spaceBetween: 20,
                    },
                    '1024': {
                        slidesPerView: 2.5,
                        spaceBetween: 20,
                    },
                    '1300':{
                        slidesPerView: 3.5,
                        spaceBetween:20,
                    },
                    '1800':{
                        slidesPerView: 4,
                        spaceBetween:20,
                    },
                    '2000':{
                        slidesPerView: 4.5,
                        spaceBetween:20,
                    }
                }"
                :modules="modules"
                @swiper="onSwiper"
                :onSlideChange="change"
                :navigation = "{nextEl:'.swiper-btn-next', prevEl:'.swiper-btn-prev'}"
                ref="swiperRef"
            >   
            
                <SwiperSlide v-for="(image, index) in trends" :key="index">     
                    <NuxtImg :src="`/trends/${image.img}`" class="w-full aspect-[1/2] object-cover object-center hidden md:flex lg:flex" format="webp"/>
                </SwiperSlide>
                <div class="grid grid-cols-2 gap-5 w-fit mx-auto justify-center lg:hidden md:hidden">
                    <SwiperSlide v-for="(image, index) in trends" :key="index" class="">
                        <div class="grid gap-y-[15px]">
                            <NuxtImg :src="`/trends/${image.img}`" class="h-[175px] aspect-[2/1] object-cover object-center" format="webp"/>
                            <p class="font-Lato text-[15px] text-antic-black">{{image.title}}</p>
                        </div>
                    </SwiperSlide>
                </div>
         

            </Swiper>
        </div>
        <div class="lg:grid lg:grid-cols-3 justify-center lg:gap-x-[100px]">
            <div>
                <p class="font-light text-antic-gray text-35 lg:text-45 pb-5 lg:pb-0">Inspirations</p>
            </div>
            <div>
                <p class="font-Varta text-18 text-antic-gray">
                    Our experts are keen to stay on top of trends in order to offer you new inspirations 
                    for your interior and exterior every day. Remember that to inspire you we have to 
                    inspire ourselves and we want to share that with you.
                </p>
            </div>
            <div class="hidden lg:flex lg:flex-col lg:gap-y-2">
                <div class="flex gap-x-5">
                    <div  class="swiper-btn-prev flex items-center justify-center p-2 w-50 h-50 border-2 mx-auto border-white lg:border-antic-dark rounded-full lg:mx-0 cursor-pointer">
                        <Icon name="fa:chevron-left" class="lg:text-antic-dark text-xl text-white"/>
                    </div>
                    <div class="swiper-btn-next flex items-center justify-center p-2 w-50 h-50 border-2 mx-auto border-white lg:border-antic-dark rounded-full lg:mx-0 cursor-pointer">
                        <Icon name="fa:chevron-right" class="lg:text-antic-dark text-xl text-white"/>
                    </div>
                </div>
                <div class="flex">
                    <p class="font-Varta text-18 text-antic-gray opacity-90">{{currentSlide}}/{{ totalSlides }}</p>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/swiper-bundle.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ref } from 'vue';
export default {
    components:{
        Swiper,
        SwiperSlide
    },
    setup(){
        const trends = ref([
            {title:'Chair',img:'chair.jpeg'},
            {title:'Cooked',img:'kitchen.jpeg'},
            {title:'Tables',img:'tables.jpeg'},
            {title:'Living room',img:'living-room.jpeg'}
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
            trends,
            modules: [Navigation, Pagination],
            onSwiper,
            change,
            swiperRef,
            currentSlide,
            totalSlides,
        }
    }
}
</script>

<style>

</style>