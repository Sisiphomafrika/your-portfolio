<template>
    <h2>Skills</h2>
    <div class="row mx-5">
      <div class="card text-black w-25 mx-5 mt-4 mb-4" v-for="skill in Skills" :key="skill">
        <img :src="skill.image" class="card-img-top" alt="" height="150px" width="100px">
        <div class="card-body">
          <h5 class="card-title ">{{ skill.name }}</h5>
          <p class="card-text">{{ skill.description }}</p>
         
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default{
    computed:{
        Skills(){
        return this.$store.state.skills
      }
    },
    mounted(){
      this.$store.dispatch("fetchSkills")
    }
  }
  </script>