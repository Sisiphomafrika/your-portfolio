<template>
  <div class="spinner-container">
    <div v-if="isLoading" class="spinner"></div>
    <div v-else>
    </div>
  </div>
</template>
<style scoped>
/* .spinner-container {
  position: relative;
} */
/* .spinner {
  border: 4px solid rgba(205, 92, 92, 0.1);
  border-top: 4px solid rgba(233, 150, 122, 01) ;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  position: absolute;
 top: 30%;
left: 25%;
  margin-top: -20px;
  margin-left: -20px;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
} */
</style>
<script>
// export default {
//   data() {
//     return {
//       isLoading: true, // Set this to true when you want to show the spinner
//     };
//   },
//   // Add your methods, lifecycle hooks, etc. as needed
// };
</script>