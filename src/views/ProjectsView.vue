<template>
  <h2>Projects</h2>
  <div class="row mx-5">
    <div class="card text-black w-25 mx-5 mt-4 mb-4" v-for="project in Projects" :key="project">
      <img :src="project.image" class="card-img-top" alt="" height="150px" width="100px">
      <div class="card-body">
        <h5 class="card-title ">{{ project.name }}</h5>
        <p class="card-text">{{ project.description }}</p>
        <a :href="project.gitHub"  class="btn btn-primary" id="btn-space">Github </a>
        <a :href="project.netlify" class="btn btn-primary" id="btn-space">Netlify </a>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  computed:{
    Projects(){
      return this.$store.state.projects
    }
  },
  mounted(){
    this.$store.dispatch("fetchProjects")
  }
}
</script>

<style scoped>
 .card {
  border: 1px solid #ccc; 
  background-color: #199233;
 }

</style>

