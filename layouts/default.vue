<template>
  <div>
    <navigation/>
    <hero/>
    <div>
      <nuxt/>
    </div>
    <f/>
  </div>
</template>

<script>
import navigation from '../components/layout/navigation.vue';
import hero from '../components/layout/hero.vue';
import footer from '../components/layout/footer.vue';

export default {
  components: {
    navigation,
    hero,
    f: footer,
  },
};
</script>
