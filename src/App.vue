<template>
  <div id="app">
  <md-layout md-gutter id="container">
    <entity-button :entity="entity"></entity-button>
  </md-layout>
  <bottombar></bottombar>
  </div>
</template>

<script>
import Bottombar from './components/bottombar'
import entityButton from './components/entity-button'
export default {
  name: 'app',
  components: {
    Bottombar,
    entityButton
  },
  data () {
    return {
      entity: {
        name: "test"
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#container {
 padding: 20px; 
}
</style>
