<template>
  <section class="min-h-screen grid w-full bg-black bg-opacity-70 lg:bg-none lg:bg-opacity-0 relative lg:min-h-screen lg:grid-cols-2">
    <img src="/img/hero-bg.jpg" class="flex lg:hidden object-cover w-full h-full absolute mix-blend-overlay">
    <div class="w-full flex items-center lg:w-auto">
      <div class="absolute w-full lg:top-9 top-2">
        <div class="flex gap-x-7 w-full lg:items-start lg:pl-[150px] lg:pt-1">
          <div class="flex justify-between w-full lg:w-auto lg:justify-start mt-41 lg:pt-10-5 lg:m-0 lg:p-0 px-[22px]">
            <p class="font-bold text-white  lg:text-antic-dark text-4xl  leading-25 tracking-2 ">antic</p>
            <div v-if="!showNav" class="flex lg:hidden cursor-pointer">
              <Icon @click="handleNav" name="heroicons:bars-2-solid" class="text-white opacity-66 md:opacity-100" size="2rem" />
            </div>
          </div>
            <nav class="hidden lg:flex lg:justify-start text-antic-gray gap-6 font-Varta font-normal text-lg pt-14-5 ">
              <a href="#">Products</a>
              <a href="#">Rooms</a>
              <a href="#">Services</a>
              <a href="#">Inspirations</a>
            </nav>
            <div v-if="showNav" class=" w-full h-screen bg-antic-light fixed top-0 pt-[41px] px-5 lg:hidden text-antic-dark font-Varta font-semibold text-[20px]">
              <div class="text-end cursor-pointer">
                <Icon @click="handleNav" name="fa-solid:window-close" size="2rem"/>
              </div>
              <nav class="grid text-center gap-y-5 ">
                <a href="#">Products</a>
                <a href="#">Rooms</a>
                <a href="#">Services</a>
                <a href="#">Inspirations</a>
              </nav>
            </div>
          </div>
        </div>
        <div class="px-[22px] lg:px-0">
          <div v-if="!showNav" class="flex items-center relative h-[50vh] lg:pl-150 w-full lg:mt-0 md:mt-28">
            <div class="md:grid md:gap-y-40 grid gap-y-[100px] lg:gap-y-[48px] place-items-center lg:place-items-start">
              <div class="grid w-fit mx-auto gap-0 justify-items-center lg:justify-items-start lg:w-80 lg:gap-y-3 md:gap-y-20 lg:mx-0 lg:my-auto">
                <p class="font-Varta md:text-2xl md:font-light lg:text-antic-dark flex text-white uppercase lg:justify-start lg:text-sm lg:mb-25">home design</p>
                <p class="font-light flex text-white text-center text-35  md:text-55 lg:text-50 lg:font-light lg:text-antic-dark align-middle leading-70 tracking-04 lg:text-start">Elegance for Interiors & Exteriors</p>
                <p class="font-Varta font-normal md:text-2xl lg:text-antic-gray text-white text-center lg:opacity-90 lg:text-start lg:text-22">We provide everyone with modern, trendy, quality furniture</p>
              </div>
              <div @click="handleScroll" class="flex items-center justify-center p-2 w-50 h-50 border-2 mx-auto border-white lg:border-antic-dark rounded-full lg:mx-0 cursor-pointer">
                <Icon name="fa:chevron-down" class="lg:text-antic-dark text-xl text-white"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" hidden lg:grid lg:pr-[40px] lg:bg-hero-bg lg:bg-cover lg:justify-items-end">
        <div class="hidden lg:absolute lg:top-9 lg:flex lg:justify-center lg:items-center w-50 h-50 border-2 rounded-full absolute lg:mr-8">
          <Icon name="fa:comments" class="text-white" size="32px"/>
      </div>
    </div>
   
  </section>
  
  

  
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
  setup(){
    const showNav = ref(false)
    const handleNav = ()=>{
      showNav.value = !showNav.value
    }
    const handleScroll = ()=>{
      window.scroll(0,700)
    }
    
    return {handleScroll, showNav, handleNav}
  }
}
</script>

<style>

</style>