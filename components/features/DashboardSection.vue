<template>
  <section class="bg-white py-12">
    <div class="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <img src="/public/images/feature map/map.png" alt="Dashboard Map" class="w-full rounded-lg shadow-lg">
      </div>
      <div>
        <h2 class="text-3xl font-bold text-gray-800">
          A Dashboard That Powers Your <br></br> Entire Fleet
        </h2>
        <p class="mt-4 text-gray-600">
          Get visibility of logistics operations in one place. Logistic<br></br>
          Journey's dashboard tracks routes, vehicles, drivers, and <br></br> deliveries
           in real-time - so you can reduce costs, prevent delays,<br></br>and deliver on time, everytime
        </p>
        <ul class="mt-4 space-y-2 text-gray-600">
          <li><strong>Real-Time Vehicle Tracking:</strong> Monitor every vehicle's location, route progress, and status updates instantly</li>
          <li><strong>Driver Performance Insights:</strong> Track driver efficiency, delivery times, and performance metrics</li>
          <li><strong>Customer Satisfaction Metrics:</strong> Monitor delivery success rates and customer feedback</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DashboardSection",
};
</script>
