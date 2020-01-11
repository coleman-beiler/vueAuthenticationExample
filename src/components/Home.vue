<template>
  <div>
    <p>This application is protected with keycloak</p>
    <button @click="addBlock">Add Box</button>
    <div class="box" v-for="block in blocks">
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    blocks: [],
  }),
  methods: {
    addBlock: function() {
      let obj = {};
      this.blocks.push(obj);
    }
  },

}
</script>

<style>
.box {
  background: rgba(0,0,0,0.2);
  left: 50%;
  box-sizing: border-box;
  padding: 5px;
  transform: translate(-50%);
  position: relative;
  width: 50%;
  height: 35px;
  margin-bottom: 5px;
  text-align: right;
}
</style>
