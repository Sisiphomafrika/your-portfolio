<template>
  <div>

    <NavBarComponents />

    
    
    <router-view/>


   
  </div>
</template>

<script>
import NavBarComponents from './components/NavBarComponents.vue';
export default {
  components: {
    NavBarComponents,


  }
}
</script>

<style scoped>



</style>
