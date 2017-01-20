<template>
  <md-bottom-bar class="bottom">
  <md-bottom-bar-item md-icon="history">Recents</md-bottom-bar-item>
  <md-bottom-bar-item md-icon="favorite" md-active>Favorites</md-bottom-bar-item>
  <md-bottom-bar-item md-icon="near_me">Nearby</md-bottom-bar-item>
</md-bottom-bar>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.bottom {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
