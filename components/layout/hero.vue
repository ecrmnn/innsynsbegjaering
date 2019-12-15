<template>
  <div class="hero bg-gray-700 py-8 lg:py-32 flex justify-center">
    <div class="flex flex-wrap max-w-5xl">
      <div class="w-full lg:w-1/3">
        <access class="w-full h-32 lg:h-48"/>
      </div>
      <div class="w-full lg:w-2/3 pt-10 px-4 lg:pl-8">
        <h1 class="text-3xl lg:text-5xl text-white">
          Du har rett til innsyn i dine data
        </h1>
        <h3 class="text-md lg:text-2xl text-white">
          Vi hjelper deg med innsynsbegjæring på 1, 2, 3!
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import access from '../svg/access.vue';

export default {
  components: {
    access,
  },
};
</script>
