<template>
  <div class="bg-white"> 
        <div class="flex flex-col mx-auto bg-[#E9EFFD] sm:bg-white">
            <div class="flex flex-col md:flex-row w-full mt-14 md:gap-5 justify-between items-center">
                <div class="w-full md:w-1/2 pl-4 sm:pl-6 lg:pl-16 pr-4 sm:pr-6 lg:pr-16">
                    <h1 class="mb-8">
                      Smarter Deliveries. Happier Customers. 
                      <span class="border-l-2 bg-linear-to-r from-[#225bd66d] via-[#225bd630] to-[#225bd600] border-l-[#225AD6] text-[#225AD6]" style="color: #225AD6; font-weight: 800;">Lower Costs! </span>
                    </h1>
                    <p class="mb-6 text-base font-normal leading-7 lg:w-3/4 text-grey-900">
                        Logistic Journey gives you full control, real-time visibility, and reliable deliveries-without the chaos of paper and spreadsheets.
                    </p>
                    <div class="flex gap-4 ">
                        <NuxtLink to="/Request_demo"><button class="solid-btn">Book a Demo</button></NuxtLink>
                        <button class="text-[#225AD6]">
                            Talk to Our Team
                        </button>
                    </div>
                </div>
                <div class="max-w-lg md:max-w-full md:w-2/5 lg:w-2/4 xl:w-2/3 px-4 sm:px-0">
                  <div class="hidden md:flex justify-end -mb-28">
                      <img class=" rounded-md" src="/public/images/Header/Header 2/1/Group 1000008814.png" alt="header image">
                  </div>
                  <div class="hidden md:flex items-center justify-end col-span-1">
                      <img class="rounded-md" src="/public/images/Header/1/close-up-delivery-person-with-parcel 1.png" alt="header image">
                  </div>
                </div>
            </div>
             <div class="hidden md:flex -mt-24 lg:-mt-28 xl:-mt-30 justify-end pl-[7cm] lg:pr-[4.5cm] xl:pr-[7.5cm] ">
                <!-- <img class="w-[50%] rounded-md" src="/public/images/Header/Header 3/1/Group 8.png" alt="header image"> -->
                <home-rate />
            </div>
            
            <!-- <div class="flex md:hidden justify-center px-4 mt-8 mb-18">
                 <div class="flex items-end">
                     <home-rate class="shrink-0 -mr-[5cm] z-40 items-baseline"/>
                     <img class="max-w-sm rounded-md" src="/public/images/Header/1/close-up-delivery-person-with-parcel 1.png" alt="header image">                    
                 </div>
            </div> -->
            <div class="flex md:hidden justify-center px-4 mt-8 mb-16">
                 <div class="flex flex-col-reverse xs:flex-row xs:items-end mx-auto items-center">
                     <img class="xs:-mr-[3cm] z-40 w-[6cm]" src="/public/images/Header/Header 3/1/Group 8.png" alt="header image">
                     <img class="xs:max-w-[7cm] md:max-w-[12cm] rounded-md" src="/public/images/Header/1/close-up-delivery-person-with-parcel 1.png" alt="header image">                            
                 </div>
            </div>
        </div>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    
</style>
