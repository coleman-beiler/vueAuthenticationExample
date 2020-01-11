<template>
  <div id="app" class="app-container">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app-container {
  position: absolute;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
  top: 0;
  left: 0;
  background: #a5ccbb;
}
</style>
