<template>
    <md-card md-with-hover>
      <md-card-header>
        <div class="md-title">{{ entity.name }}</div>
        <div class="md-subhead"></div></div>
      </md-card-header>
    
      <md-card-content>
       
      </md-card-content>
    </md-card>
</template>

<script>
export default {
  name: 'entity-button',
  props: ['entity'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
