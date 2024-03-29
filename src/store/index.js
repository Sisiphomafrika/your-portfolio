import { createStore } from 'vuex'
const dataUrl = "https://sisiphomafrika.github.io/EMOPportfolioData/data/";
export default createStore({
  state: {
    education: null,
    skills: null,
    projects: null,
    testimonials: null,
    
  },
  getters: {},
  mutations: {
    setEducation(state, value){
      state.education = value;
    },
    setSkills(state, value){
      state.skills = value;
    },
    setProjects(state, value){
      state.projects= value;
    },
    setTestimonials(state, value){
      state.testimonials = value;
    }
    
  },
  actions: {
    
    
    async fetchEducation(context) {
      try {
        let res = await fetch(dataUrl);
        let education = await res.json();
        context.commit("setEducation",education.education);
      }
      catch (error) {
        console.log(error);
      }
    },
    async fetchSkills(context) {
      try {
        let res = await fetch(dataUrl);
        let skills = await res.json();
        context.commit("setSkills",skills.skills);
      }
      catch (error) {
        console.log(error);
      }
    },
    async fetchProjects(context) {
      try {
        let res = await fetch(dataUrl);
        let projects = await res.json();

        context.commit("setProjects",projects.projects);
      }
      catch (error) {
        console.log(error);
      }
    },
    async fetchTestimonials(context) {
      try {
        let res = await fetch(dataUrl);
        let testimonials= await res.json();

        context.commit("setTestimonials",testimonials.testimonials);
      }
      catch (error) {
        console.log(error);
      }
    },
  },
  modules: {
  }
})
