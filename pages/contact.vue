<template>
  <div>
    <section class="bg-white min-h-screen flex items-center justify-center py-0 px-0 md:px-12 xl:px-24 md:py-24">
      <div class="highest-width w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-20 bg-[#E9EFFD] gap-10 md:gap-6 xl:gap-10 md:flex md:rounded-2xl overflow-hidden">
      
        <div class="rounded-2xl md:w-1/2 bg-white p-8 lg:p-12">
          <h2 class="text-2xl md:text-3xl font-medium mb-4">Contact Us</h2>
          <p class="text-[#343A40] mb-8 text-sm md:text-base">
            Have questions? Interested in signing up? Get in touch with us today.
          </p>

          <form class="custom-spacing">
            <div class="grid md:grid-cols-1 gap-2">
              <label for="">Full name</label>
              <input type="email" placeholder="Enter your fullname" class="w-full border rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>

            <div class="grid md:grid-cols-1 gap-2">
              <label for="">Phone number</label>
              <input type="text" placeholder="Enter phone number" class="w-full border rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
          
            <div class="grid md:grid-cols-1 gap-2">
              <label for="">Email</label>
              <input type="text" placeholder="Enter your email" class="w-full border rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            
            <div class="grid md:grid-cols-1 gap-2">
              <label for="">Message</label>
              <textarea type="text" placeholder="Type your message..." class="w-full border rounded-md h-42 p-3 focus:ring-2 focus:ring-blue-500 outline-none" ></textarea>
            </div>

            <p class="text-xs text-gray-500 leading-snug">
              By submitting your information, you agree to Logistic Journey’s Terms of Service and Privacy Policy. You can opt out anytime.
            </p>

            <button type="submit" class="solid-btn w-full md:w-auto">
              Submit
            </button>
          </form>
        </div>
        
        <div class="md:w-1/2 mt-8 md:mt-0">
        <img class="w-full" src="/public/images/contact.png" alt="">
        </div>
      </div>
    </section>

    <section class="highest-width py-16">
        <div class=" text-center px-6 md:px-12 space-y-5">
            <h2>Support</h2>
            <p>Need help? Our support team is available to assist you.</p>
        </div>

        <div class="sm:flex text-center gap-8 mt-12 justify-center items-center">    
            <div class="mb-12 sm:mb-0">
              <div class="flex justify-center items-center mb-6">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="80" height="80" rx="40" fill="#E9EFFD"/>
                  <path d="M38.5059 44.6229L35.6045 47.5243C34.9928 48.136 34.0205 48.136 33.3931 47.54C33.2206 47.3675 33.0481 47.2107 32.8756 47.0381C31.2602 45.4071 29.8017 43.6976 28.4999 41.9097C27.2139 40.1218 26.1788 38.3339 25.426 36.5617C24.6889 34.7738 24.3125 33.0643 24.3125 31.4332C24.3125 30.3668 24.5007 29.3473 24.8771 28.4063C25.2535 27.4497 25.8495 26.5714 26.6807 25.7872C27.6844 24.7992 28.7822 24.313 29.9428 24.313C30.3819 24.313 30.8211 24.4071 31.2132 24.5953C31.6209 24.7835 31.9816 25.0658 32.2639 25.4736L35.9025 30.602C36.1848 30.9941 36.3887 31.3548 36.5298 31.6998C36.671 32.0292 36.7494 32.3585 36.7494 32.6565C36.7494 33.0329 36.6396 33.4093 36.42 33.77C36.2162 34.1308 35.9182 34.5072 35.5418 34.8836L34.3498 36.1225C34.1773 36.2951 34.0989 36.4989 34.0989 36.7499C34.0989 36.8753 34.1146 36.9851 34.146 37.1106C34.193 37.2361 34.2401 37.3302 34.2714 37.4243C34.5537 37.9418 35.0399 38.6162 35.73 39.4317C36.4357 40.2473 37.1885 41.0785 38.004 41.9097C38.1609 42.0665 38.3334 42.2234 38.4902 42.3802C39.1176 42.9918 39.1332 43.9956 38.5059 44.6229Z" fill="#225AD6"/>
                  <path d="M55.6327 49.9237C55.6327 50.3628 55.5543 50.8177 55.3975 51.2568C55.3504 51.3823 55.3034 51.5077 55.2406 51.6332C54.974 52.1978 54.629 52.731 54.1742 53.2329C53.4057 54.0798 52.5588 54.6914 51.6021 55.0835C51.5864 55.0835 51.5707 55.0992 51.555 55.0992C50.6297 55.4756 49.626 55.6795 48.5438 55.6795C46.9441 55.6795 45.2347 55.3031 43.4311 54.5346C41.6275 53.7661 39.8239 52.731 38.036 51.4293C37.4244 50.9745 36.8127 50.5197 36.2324 50.0335L41.3609 44.905C41.8 45.2344 42.1921 45.4853 42.5214 45.6578C42.5999 45.6892 42.694 45.7363 42.8037 45.7833C42.9292 45.8304 43.0547 45.846 43.1958 45.846C43.4624 45.846 43.6663 45.7519 43.8388 45.5794L45.0308 44.4032C45.4229 44.0111 45.7993 43.7131 46.16 43.5249C46.5207 43.3053 46.8814 43.1956 47.2735 43.1956C47.5715 43.1956 47.8851 43.2583 48.2302 43.3994C48.5752 43.5406 48.9359 43.7445 49.328 44.0111L54.5192 47.6967C54.927 47.979 55.2093 48.3083 55.3818 48.7004C55.5386 49.0925 55.6327 49.4846 55.6327 49.9237Z" fill="#225AD6"/>
                </svg>
              </div>
              <h3 class="mb-4">Phone Support</h3>
              <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.</p>
              <span class="underline">+27 11 568 7109</span>     
            </div>

            <div class="mb-12 sm:mb-0">
                <div class="flex justify-center items-center mb-6">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="80" height="80" rx="40" fill="#E9EFFD"/>
                  <path d="M47.8375 26.6655H32.1542C27.4492 26.6655 24.3125 29.018 24.3125 34.5072V45.4855C24.3125 50.9747 27.4492 53.3272 32.1542 53.3272H47.8375C52.5425 53.3272 55.6792 50.9747 55.6792 45.4855V34.5072C55.6792 29.018 52.5425 26.6655 47.8375 26.6655ZM48.5746 36.2167L43.6657 40.1375C42.6306 40.9687 41.3132 41.3765 39.9958 41.3765C38.6784 41.3765 37.3454 40.9687 36.3259 40.1375L31.4171 36.2167C30.9152 35.8089 30.8368 35.0561 31.2288 34.5542C31.6366 34.0524 32.3737 33.9583 32.8756 34.366L37.7845 38.2869C38.9764 39.2436 40.9996 39.2436 42.1915 38.2869L47.1004 34.366C47.6023 33.9583 48.3551 34.0367 48.7471 34.5542C49.1549 35.0561 49.0765 35.8089 48.5746 36.2167Z" fill="#225AD6"/>
                  </svg>
                </div>
                <h3 class="mb-4">Email Support</h3>
                <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.</p>
                <span class="underline">support@logisticjourney.com</span>     
            </div>

            <div>
                <div class="flex justify-center items-center mb-6">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="80" height="80" rx="40" fill="#E9EFFD"/>
                  <path d="M53.5142 34.4287C51.8674 27.183 45.547 23.9209 39.9951 23.9209C39.9951 23.9209 39.9951 23.9209 39.9794 23.9209C34.4432 23.9209 28.1072 27.1673 26.4604 34.413C24.6255 42.5056 29.5814 49.3593 34.0668 53.6722C35.7293 55.2719 37.8622 56.0717 39.9951 56.0717C42.1281 56.0717 44.261 55.2719 45.9077 53.6722C50.3932 49.3593 55.3491 42.5213 53.5142 34.4287ZM39.9951 42.2861C37.2662 42.2861 35.0549 40.0747 35.0549 37.3458C35.0549 34.6169 37.2662 32.4056 39.9951 32.4056C42.724 32.4056 44.9354 34.6169 44.9354 37.3458C44.9354 40.0747 42.724 42.2861 39.9951 42.2861Z" fill="#225AD6"/>
                  </svg>
                </div>
                <h3 class="mb-4">Physical Address</h3>
                <p class="mb-4">The Workshop, Unit 7
                  70 Seventh Avenue
                  Parktown North, Johannesburg
                  Gauteng, South Africa
                </p> 
            </div>
          </div>
      </section>
  </div>
  <home-faqs />
  <home-transform />
</template>

<script lang="ts" setup>

</script>

<style>
h2{
    font-weight: 500;
}
  h3 {
  font-size: larger;
}
</style>