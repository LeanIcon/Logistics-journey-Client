<template>
  <section class="bg-gray-100 py-16 mt-20 rounded-2xl text-center">
    <h2 class="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
    <p class="text-gray-600 mb-8">
      Get the latest insights and updates straight to your inbox.
    </p>

    <form
      class="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto"
    >
      <input
        type="email"
        placeholder="Enter your email"
        class="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        class="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        Subscribe
      </button>
    </form>
  </section>
</template>
