<template>
  <div class="project-details">
    <h1>This is the projects details page</h1>
    <div>
        {{ project.name }}
    </div>
  </div>
</template>

<script>
import { projects } from '../assets/data/projects-fake'

export default{
  name: 'ProjectDetailsPage',
  data(){
    return {
      project: projects.find((p) => p.id === this.$route.params.id)
    };
  }

};
</script>

<style scoped>



</style>
