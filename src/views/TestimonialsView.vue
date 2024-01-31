<template>
  <h2>Testimonials</h2>
  <div class="row mx-5">
    <div class="card text-black w-25 mx-5 mt-4 mb-4" v-for="testimonial in Testimonials" :key="testimonial">
      <!-- <img :src="testimonial.image" class="card-img-top" alt="" height="150px" width="100px"> -->
      <div class="card-body">
        <h5 class="card-title ">{{ testimonial.name }}</h5>
        <p class="card-text">{{ testimonial.quotes }}</p>
       
      </div>
    </div>
  </div>
</template>

<script>
export default{
  computed:{
    Testimonials(){
      return this.$store.state.testimonials
    }
  },
  mounted(){
    this.$store.dispatch("fetchTestimonials")
  }
}
</script>
<style scoped>
 .card {
  border: 1px solid #ccc; 
  background-color: #199286;
 }

</style>