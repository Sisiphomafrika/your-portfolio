<template>
  <div>
    <NavBarComponents />
    <FooterComponets/>
    <SpinnerComponents/>
    <router-view/>
  </div>
</template>

<script>
import NavBarComponents from './components/NavBarComponents.vue';
import FooterComponets from './components/FooterComponets.vue';
import SpinnerComponents from './components/SpinnerComponents.vue';

export default {
  components: {
    NavBarComponents,
    FooterComponets,
    SpinnerComponents
  }
}
</script>

<style scoped>
/* Add your styles specific to the content within router-view here */
.router-view-content {
  /* Your styles go here */
}
</style>
