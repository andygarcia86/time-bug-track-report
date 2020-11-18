<template>
  <div class="projects">
    
    <div v-for="project in projects" :key="project.id">
      {{ project.id }}

      <router-link v-bind:to="'/projects/' + project.id ">
        View Project details
      </router-link>
    </div>

  </div>
</template>

<script>
import { projects } from '../assets/data/projects-fake'

export default{
  name: 'Projects',
  data(){
    return {
      projects,
    };    
  }

};
</script>

<style scoped>



</style>
