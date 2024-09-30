<template>
  <section class="lg:pt-70 md:py-[48px] lg:pb-[64px] lg:px-[150px] px-antic-l">
    <div class="lg:flex lg:flex-row lg:gap-x-[64px] mx-auto md:flex md:flex-col md:gap-y-[40px]">
        <div class="lg:w-auto">
            <p class="font-bold text-34 text-antic-gray tracking-2 text-center lg:text-start">antic</p>
        </div>
        <div class=" lg:grid md:grid md:grid-cols-4 lg:grid-cols-4 lg:gap-x-[48px] grid gap-y-10 lg:w-3/5 md:text-center">
            <div class="pt-2.5">
                <p class="font-Varta font-semibold text-25 text-antic-gray mb-22">Products</p>
                <ul class="grid gap-y-2.5 lg:gap-y-12 font-Varta text-antic-gray size-18">
                    <li><a href="#">Furniture</a></li>
                    <li><a href="#">Decoration</a></li>
                    <li><a href="#">Storage</a></li>
                    <li><a href="#">Baby and child</a></li>
                    <li><a href="#">Connected home</a></li>
                </ul>
            </div>
            <div class="pt-2.5">
                <p class="font-Varta font-semibold text-25 text-antic-gray mb-22">Rooms</p>
                <ul class="grid gap-y-2.5 lg:gap-y-12 font-Varta text-antic-gray size-18">
                    <li><a href="#">Living room</a></li>
                    <li><a href="#">Dining room</a></li>
                    <li><a href="#">Cooked</a></li>
                    <li><a href="#">Bedroom</a></li>
                    <li><a href="#">Bathroom</a></li>
                    <li><a href="#">Office</a></li>
                    <li><a href="#">Laundry</a></li>
                    <li><a href="#">Garage</a></li>
                </ul>
            </div>
            <div class="pt-2.5">
                <p class="font-Varta font-semibold text-25 text-antic-gray mb-22">Services</p>
                <ul class="grid gap-y-2.5 lg:gap-y-12 font-Varta text-antic-gray size-18">
                    <li><a href="#">Click and collect</a></li>
                    <li><a href="#">Conception</a></li>
                    <li><a href="#">Installation</a></li>
                    <li><a href="#">Advices</a></li>
                    <li><a href="#">Gift card</a></li>
                </ul>
            </div>
            <div class="pt-2.5">
                <p class="font-Varta font-semibold text-25 text-antic-gray mb-22">About</p>
                <ul class="grid gap-y-2.5 lg:gap-y-12 font-Varta text-antic-gray size-18">
                    <li><a href="#">Our story</a></li>
                    <li><a href="#">Our stores</a></li>
                    <li><a href="#">Our partners</a></li>
                    
                </ul>
            </div>
        </div>
        <div class="lg:pt-2.5 lg:w-1/5">
            <p class="font-Varta font-semibold text-25 text-antic-gray mb-22">We respect our planet</p>
            <NuxtImg src="/footer/office.jpeg" class=""/>
            <p class="font-Varta text-4 text-antic-gray mt-4">
                We're taking positive steps to reduce our impact on the planet. For us, that means retailing responsibly.
            </p>
            <a href="#" class="flex mt-2.5 gap-x-2">
                <p class="font-Karla font-semibold text-17 text-antic-dark tracking-03">Learn more</p>
                <Icon name="fa:chevron-right" class="mt-[7.5px] text-antic-dark" size="12px"/>
            </a>
        </div>
    </div>
    <div class="w-311 mx-auto lg:w-auto grid gap-y-10 lg:grid-rows-2 lg:gap-y-5">
        <div class="flex justify-center gap-x-6 text-antic-gray opacity-90">
            <a href="#"><Icon name="fa6-brands:square-facebook" size="2rem"/></a>
            <a href="#"><Icon name="fa6-brands:square-twitter" size="2rem"/></a>
            <a href="#"><Icon name="fa6-brands:linkedin" size="2rem"/></a>
            <a href="#"><Icon name="fa6-brands:square-instagram" size="2rem"/></a>
        </div>
        <div class="flex flex-col-reverse gap-y-16 lg:grid lg:grid-cols-2 font-Varta text-antic-gray opacity-70 text-18">
            <div>
                <p>&copy; 2021 Agence Dnd</p>
            </div>
            <div class="flex justify-end">
                <ul class="flex gap-x-32">
                    <li><a href="#">Privacy policy</a></li>
                    <li><a href="#">Term of services</a></li>
                    <li><a href="#">Language</a></li>
                </ul>
            </div>

        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>