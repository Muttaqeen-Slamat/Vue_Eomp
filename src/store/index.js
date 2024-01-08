import { createStore } from 'vuex'

let dataUrl = ''

export default createStore({
  state: {
    about: null,
    education: null,
    skills: null,
    testimonials: null,
    projects: null
  },
  getters: {
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
  mutations: {
  },
  actions: {
    async fetchAbout(context){
      let res = await fetch(dataUrl)
      let {about} = await res.json()
      context.commit('setAbout', about)
    },
    async fetchEducation(context){
      let res = await fetch(dataUrl)
      let {education} = await res.json()
      context.commit('setEducation', education)
    },
    async fetchSkills(context){
      let res = await fetch(dataUrl)
      let {skills} = await res.json()
      context.commit('setSkills', skills)
    },
    async fetchTestimonials(context){
      let res = await fetch(dataUrl)
      let {testimonials} = await res.json()
      context.commit('setTestimonials', testimonials)
    },
    async fetchPrjects(context){
      let res = await fetch(dataUrl)
      let {projects} = await res.json()
      context.commit('setProjects', projects)
    }
  },
  modules: {
  }
})
