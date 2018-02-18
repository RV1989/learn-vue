<template>
  <div class="toDoView">
  <toDoList></toDoList>
  </div>
</template>

<script>
import toDoList from './toDoList.vue'
export default {
  components:{toDoList},
  name: 'toDoView',
  data () {
    return {
      

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
