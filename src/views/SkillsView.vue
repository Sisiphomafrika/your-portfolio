<template>
    <h2>Skills</h2>
    <div class="row mx-5">
      <div class="card text-black w-25 mx-5 mt-4 mb-4" v-for="skill in Skills" :key="skill">
        <img :src="skill.item" class="card-img-top" alt="" height="150px" width="100px">
        <div class="card-body">
          <h5 class="card-title ">{{ skill.title }}</h5>
          <p class="card-text">{{ skill.title }}</p>
         
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
      console.log(this.Skills);
    }
  }
  </script>