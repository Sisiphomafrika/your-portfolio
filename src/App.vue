<template>
  <div>

    <NavBarComponents />

    
    
    <router-view/>


    <FooterComponets/>
  </div>
</template>

<script>
import NavBarComponents from './components/NavBarComponents.vue';
import FooterComponets from './components/FooterComponets.vue';




export default {
  components: {
    NavBarComponents,
    FooterComponets,

  }
}
</script>

<style scoped>



</style>
