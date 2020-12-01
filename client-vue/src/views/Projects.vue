<template>
  <div class="projects">
    <h1>Projects</h1>
    <div v-for="project in projects" :key="project.id">
      {{ project.id }}

      <router-link v-bind:to="'/projects/' + project.id ">
        View Project details
      </router-link>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default{
  name: 'Projects',
  data(){
    return {
      projects: [],
    };
  },
  async created(){
    const result = await axios.get('/api/projects');
    const projects = result.data;
    this.projects = projects;
  }

};
</script>

<style scoped>



</style>
