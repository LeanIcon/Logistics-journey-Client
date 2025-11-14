<template>
  <footer class="highest-width bg-[#0F2A6B] text-white">
    <div class="py-12">
        <div class="md:flex justify-between gap-12 lg:gap-32 space-y-10">
            <!-- Left Section -->
            <div class="md:w-1/2">
                <div class="mb-3">
                <img src="/public/Navbar/2/Logistics Journey Logo.png" alt="Logo" class="" />
                <h6 class="text-start font-semibold text-lg">Logistic Journey</h6>
                </div>
                <p class="text-sm mb-6">Making Every Journey Count</p>

                <p class="text-sm mb-3">
                Join our newsletter to stay up to date on features and releases.
                </p>

                <form v-if="!isLoading" class="flex flex-col sm:flex-row gap-3" @submit.prevent="handleSubmit">
                  <div v-if="formErrors.general" class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded w-full">
                    <ul>
                      <li v-for="error in formErrors.general" :key="error">{{ error }}</li>
                    </ul>
                  </div>

                  <div v-for="field in formFields" :key="field.name" class="w-full sm:w-auto sm:flex-1">
                    <input
                      v-if="field.type === 'email'"
                      :id="field.name"
                      :type="field.type"
                      :placeholder="field.placeholder"
                      :required="field.required"
                      v-model="formData[field.name]"
                      :class="[
                        'px-4 py-2 rounded-md border border-gray-300 bg-[#0F2A6B] text-white w-full focus:outline-none',
                        formErrors[field.name] ? 'border-red-500' : ''
                      ]"
                    />
                    <div v-if="formErrors[field.name]" class="text-red-600 text-sm mt-1">
                      <ul>
                        <li v-for="error in formErrors[field.name]" :key="error">{{ error }}</li>
                      </ul>
                    </div>
                  </div>

                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="bg-white text-[#0F2A6B] px-6 py-2 rounded-md hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed" style="color: #0F2A6B; text-align: center;"
                  >
                    {{ isSubmitting ? 'Subscribing...' : 'Subscribe' }}
                  </button>
                </form>
                <div v-else class="text-center">
                  Loading form...
                </div>

                <!-- Success Popup -->
                <div v-if="showSuccessPopup" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
                    <h3 class="text-xl font-semibold mb-4 text-green-600" style="color: black;">Success!</h3>
                    <p class="text-gray-700 mb-6" style="color: black;">{{ successMessage }}</p>
                    <button @click="showSuccessPopup = false" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                      Close
                    </button>
                  </div>
                </div>

                <p class="text-[12px] mt-3 text-gray-300">
                By subscribing you agree to with our
                <NuxtLink to="/policy"><span class="underline">Privacy Policy</span></NuxtLink> and provide consent to
                receive updates from our company.
                </p>
            </div>

            <div class="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                <!-- Quick Links -->
                <div>
                    <h3 class="font-semibold text-lg mb-3">Quick Links</h3>
                    <ul class="space-y-2 text-sm text-gray-200">
                    <li><a href="/features" class="hover:text-white">Features</a></li>
                    <li><a href="/contact" class="hover:text-white">Contact</a></li>
                    <li><a href="#" class="hover:text-white">Blog</a></li>
                    <li><a href="/faqs" class="hover:text-white">FAQs</a></li>
                    </ul>
                </div>

                <!-- Company Links -->
                <div>
                    <h3 class="font-semibold text-lg mb-3">Company</h3>
                    <ul class="space-y-2 text-sm text-gray-200">
                    <li><a href="/about-us" class="hover:text-white">About Us</a></li>
                    <li><a href="/policy" class="hover:text-white">Privacy Policy</a></li>
                    <li><a href="/terms" class="hover:text-white">Terms of Service</a></li>
                    </ul>
                </div>

                <!-- App and Social -->
                <div>
                    <h3 class="font-semibold text-lg mb-3">Download the App</h3>
                    <div class="space-y-3">
                    <a href="https://apps.apple.com/za/app/logistic-journey/id6745507589" target="_blank">  
                        <img
                            src="/public/images/Mac App Store.png"
                            alt="App Store"
                            class="w-40 cursor-pointer"
                        />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=co.za.anylytical.logisticjourney&pcampaignid=web_share" target="_blank">
                        <img
                            src="/public/images/Google Play.png"
                            alt="Google Play"
                            class="w-40 cursor-pointer"
                        />
                        </a>
                    </div>

                    <h3 class="font-semibold text-lg mt-12 mb-3">Follow Us</h3>
                    <div class="flex space-x-3">
                    
                        <a href="https://www.linkedin.com/company/logisticjourney/" target="_blank" class="hover:text-gray-300"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2495_2302)">
                            <path d="M13.3334 6.66699C14.6595 6.66699 15.9313 7.19379 16.869 8.1315C17.8067 9.06921 18.3335 10.341 18.3335 11.6671V17.5006H15.0001V11.6671C15.0001 11.2251 14.8245 10.8012 14.5119 10.4886C14.1994 10.176 13.7754 10.0004 13.3334 10.0004C12.8913 10.0004 12.4674 10.176 12.1548 10.4886C11.8423 10.8012 11.6667 11.2251 11.6667 11.6671V17.5006H8.33325V11.6671C8.33325 10.341 8.86005 9.06921 9.79776 8.1315C10.7355 7.19379 12.0073 6.66699 13.3334 6.66699V6.66699Z" stroke="white" stroke-width="1.66671" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.99993 7.5H1.6665V17.5003H4.99993V7.5Z" stroke="white" stroke-width="1.66671" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.33322 5.00042C4.25371 5.00042 4.99993 4.2542 4.99993 3.3337C4.99993 2.4132 4.25371 1.66699 3.33322 1.66699C2.41272 1.66699 1.6665 2.4132 1.6665 3.3337C1.6665 4.2542 2.41272 5.00042 3.33322 5.00042Z" stroke="white" stroke-width="1.66671" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_2495_2302">
                            <rect width="20.0005" height="20.0005" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </a>
                        <!-- <a href="#" class="hover:text-gray-300"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2495_2306)">
                            <path d="M18.7842 5.34973C18.6852 4.95423 18.4836 4.59185 18.1997 4.29921C17.9159 4.00656 17.5598 3.79401 17.1675 3.68302C15.7341 3.33301 10.0006 3.33301 10.0006 3.33301C10.0006 3.33301 4.26715 3.33301 2.83378 3.71635C2.44148 3.82734 2.08541 4.03989 1.80154 4.33254C1.51768 4.62519 1.31607 4.98756 1.21707 5.38306C0.954744 6.83773 0.826425 8.3134 0.833728 9.79151C0.824377 11.2808 0.952705 12.7677 1.21707 14.2333C1.32621 14.6165 1.53234 14.9651 1.81554 15.2454C2.09875 15.5257 2.44946 15.7282 2.83378 15.8333C4.26715 16.2167 10.0006 16.2167 10.0006 16.2167C10.0006 16.2167 15.7341 16.2167 17.1675 15.8333C17.5598 15.7224 17.9159 15.5098 18.1997 15.2172C18.4836 14.9245 18.6852 14.5621 18.7842 14.1666C19.0445 12.7229 19.1728 11.2585 19.1676 9.79151C19.1769 8.30227 19.0486 6.81535 18.7842 5.34973V5.34973Z" stroke="white" stroke-width="1.66671" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.12549 12.5166L12.9173 9.79148L8.12549 7.06641V12.5166Z" stroke="white" stroke-width="1.66671" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_2495_2306">
                            <rect width="20.0005" height="20.0005" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </a> -->
                        <a href="https://www.facebook.com/share/1GsUEaXNMt/?mibextid=wwXIfr" target="_blank" class="hover:text-gray-300"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2495_2309)">
                            <path d="M15.0004 1.66699H12.5003C11.3952 1.66699 10.3354 2.10599 9.55398 2.88741C8.77256 3.66884 8.33356 4.72867 8.33356 5.83377V8.33384H5.8335V11.6673H8.33356V18.3341H11.667V11.6673H14.1671L15.0004 8.33384H11.667V5.83377C11.667 5.61275 11.7548 5.40078 11.9111 5.2445C12.0674 5.08821 12.2793 5.00042 12.5003 5.00042H15.0004V1.66699Z" stroke="white" stroke-width="1.66671" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_2495_2309">
                            <rect width="20.0005" height="20.0005" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </a>
                        <!-- <a href="#" class="hover:text-gray-300"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2495_2311)">
                            <path d="M19.1668 2.49959C18.3688 3.0625 17.4852 3.49304 16.5501 3.77463C16.0482 3.19754 15.3812 2.78851 14.6392 2.60287C13.8973 2.41722 13.1163 2.46392 12.4017 2.73664C11.6872 3.00936 11.0737 3.49495 10.6441 4.12773C10.2145 4.76051 9.98967 5.50995 9.99992 6.27469V7.10805C8.53541 7.14602 7.08424 6.82122 5.77565 6.16256C4.46706 5.5039 3.34167 4.53184 2.49972 3.33295C2.49972 3.33295 -0.833704 10.8331 6.6665 14.1666C4.95022 15.3316 2.90569 15.9157 0.833008 15.8333C8.33321 20.0001 17.5001 15.8333 17.5001 6.24969C17.4994 6.01756 17.477 5.78601 17.4335 5.55801C18.284 4.71923 18.8842 3.66022 19.1668 2.49959V2.49959Z" stroke="white" stroke-width="1.66671" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_2495_2311">
                            <rect width="20.0005" height="20.0005" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </a> -->
                        <a href="https://www.instagram.com/logisticjourney?igsh=cmtjaGpla21tbWkx" target="_blank" class="hover:text-gray-300"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2495_2313)">
                            <path d="M14.1671 1.66699H5.83353C3.53228 1.66699 1.66675 3.53252 1.66675 5.83377V14.1673C1.66675 16.4686 3.53228 18.3341 5.83353 18.3341H14.1671C16.4683 18.3341 18.3339 16.4686 18.3339 14.1673V5.83377C18.3339 3.53252 16.4683 1.66699 14.1671 1.66699Z" stroke="white" stroke-width="1.66671" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.3339 9.47533C13.4368 10.1689 13.3183 10.8772 12.9954 11.4996C12.6725 12.1219 12.1615 12.6266 11.5352 12.9418C10.9089 13.257 10.1992 13.3668 9.50697 13.2554C8.81473 13.144 8.17525 12.8172 7.67947 12.3214C7.18368 11.8256 6.85685 11.1861 6.74546 10.4939C6.63407 9.80163 6.7438 9.0919 7.05902 8.46561C7.37425 7.83933 7.87893 7.32839 8.50128 7.00546C9.12362 6.68254 9.83195 6.56407 10.5255 6.66692C11.233 6.77183 11.8879 7.10148 12.3936 7.6072C12.8994 8.11292 13.229 8.76787 13.3339 9.47533Z" stroke="white" stroke-width="1.66671" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.5837 5.41699H14.5921" stroke="white" stroke-width="1.66671" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_2495_2313">
                            <rect width="20.0005" height="20.0005" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Divider -->
        <hr class="border-[#454545] my-8" />

        <!-- Bottom Bar -->
        <div class="flex flex-col md:flex-row items-center justify-between text-center md:text-left text-sm text-gray-300">
            <p>
                Copyright © 2025 Anlytical Technologies. Based in South Africa. All rights reserved.
            </p>

            <!-- Back to top -->
            <button
                @click="scrollToTop"
                class="mt-4 md:mt-0 justify-center md:justify-end text-center text-white text-sm border-none cursor-pointer transition"
            >
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"  class="mx-auto">
                <g filter="url(#filter0_d_2495_2321)">
                <rect x="2.28564" width="40" height="40" rx="20" fill="#225AD6"/>
                <path d="M29.7193 21.1265L22.1106 7.87109L14.502 21.1265H17.0715C16.1138 22.29 15.5898 23.75 15.5889 25.257C15.5909 26.986 16.2787 28.6437 17.5013 29.8663C18.7239 31.0889 20.3816 31.7767 22.1106 31.7787C23.8398 31.777 25.4976 31.0893 26.7203 29.8666C27.943 28.6439 28.6307 26.9861 28.6324 25.257C28.6324 23.75 28.1086 22.2899 27.1509 21.1265H29.7193ZM22.1106 29.3667C21.0218 29.3659 19.9778 28.933 19.2078 28.163C18.4379 27.3931 18.005 26.349 18.0041 25.2601C18.0053 24.1714 18.4383 23.1275 19.2082 22.3577C19.978 21.5878 21.0219 21.1548 22.1106 21.1537C23.1998 21.1548 24.244 21.5881 25.0139 22.3585C25.7838 23.1288 26.2166 24.1733 26.2172 25.2624C26.2157 26.3509 25.7825 27.3942 25.0127 28.1637C24.2428 28.9332 23.1991 29.3659 22.1106 29.3667ZM22.1106 12.8015L25.4802 18.671H18.7411L22.1106 12.8015Z" fill="white"/>
                </g>
                <defs>
                <filter id="filter0_d_2495_2321" x="-6.96182e-05" y="0" width="44.5714" height="44.5714" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="2.28571"/>
                <feGaussianBlur stdDeviation="1.14286"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2495_2321"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2495_2321" result="shape"/>
                </filter>
                </defs>
                </svg>
                Back to top
            </button>
        </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useApi } from '~/composables/useApi'

const { getFormBySlug, submitForm } = useApi()

const formFields = ref([])
const formData = ref({})
const isLoading = ref(true)
const formErrors = ref({})
const isSubmitting = ref(false)
const showSuccessPopup = ref(false)
const successMessage = ref('')

// Fallback fields if API fails
const fallbackFields = [
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    validation: ['required', 'email']
  }
]

onMounted(async () => {
  try {
    const response = await getFormBySlug('newsletter-signup')
    if (response && response.data && response.data.fields && response.data.fields.length > 0) {
      formFields.value = response.data.fields
    } else {
      formFields.value = fallbackFields
    }
  } catch (error) {
    console.error('Failed to fetch form:', error)
    formFields.value = fallbackFields
  } finally {
    // Initialize formData with empty values for each field to ensure proper v-model binding
    formData.value = formFields.value.reduce((acc, field) => {
      acc[field.name] = ''
      return acc
    }, {})
    isLoading.value = false
  }
})

const handleSubmit = async () => {
  isSubmitting.value = true
  formErrors.value = {}

  try {
    const response = await submitForm('newsletter-signup', formData.value)
    // console.log('Form submitted successfully:', response)
    // Handle success (e.g., show success message, reset form)
    successMessage.value = response.message || 'Successfully subscribed! Please check your email to confirm your subscription.'
    showSuccessPopup.value = true
    // Reset formData to empty strings for each field
    formData.value = formFields.value.reduce((acc, field) => {
      acc[field.name] = ''
      return acc
    }, {})
  } catch (error) {
    console.error('Form submission failed:', error)
    if (error.response && error.response._data && error.response._data.errors) {
      // Map the errors to match the field names
      const mappedErrors = {}
      for (const [key, value] of Object.entries(error.response._data.errors)) {
        if (key === 'message') {
          // The 'message' key contains a summary, but we can ignore it or use it for general errors
          continue
        }
        mappedErrors[key] = value
      }
      formErrors.value = mappedErrors
    } else {
      formErrors.value = { general: ['An error occurred while submitting the form.'] }
    }
  } finally {
    isSubmitting.value = false
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<style scoped>
    h3, p, ul, span, li, a, button {
        color: white;
        text-align: start;
    }
</style>
