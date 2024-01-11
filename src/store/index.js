import { createStore } from 'vuex'

let dataUrl = 'https://muttaqeen-slamat.github.io/vue_eomp_data/data/'

export default createStore({
  state: {
    about: null,
    education: null,
    skills: null,
    testimonials: null,
    projects: null
  },
  getters: { 
  },
  mutations: {
    setAbout(state,value){
      state.about = value
    },
    setEducation(state, value){
      state.education = value
    },
    setSkills(state,value){
      state.skills = value
    },
    setTestimonials(state,value){
      state.testimonials = value
    },
    setProjects(state,value){
      state.projects =value
    }
  },
  actions: {
    async fetchAbout(context){
      try{
        let res = await fetch(dataUrl)
        let {about} = await res.json()
        context.commit('setAbout', about)
      }
      catch(error){
        console.error('Error fetching about data:', error.message);
      }
    },
    async fetchEducation(context){
      try{
        let res = await fetch(dataUrl)
        let {education} = await res.json()
        context.commit('setEducation', education)
      }
      catch(error){
        console.error('Error fetching education data:', error.message);
      }
    },
    async fetchSkills(context){
      try{
        let res = await fetch(dataUrl)
        let {skills} = await res.json()
        context.commit('setSkills', skills)
      }
      catch(error){
        console.error('Error fetching skills data:', error.message);
      }
    },
    async fetchTestimonials(context){
      try{
        let res = await fetch(dataUrl)
        let {testimonials} = await res.json()
        context.commit('setTestimonials', testimonials)
      }
      catch(error){
        console.error('Error fetching testimonials data:', error.message);
      }
    },
    async fetchProjects(context){
      try{
        let res = await fetch(dataUrl)
        let {projects} = await res.json()
        context.commit('setProjects', projects)
      }
      catch(error){
        console.error('Error fetching projects data:', error.message);
      }
    }
  },
  modules: {
  }
})
