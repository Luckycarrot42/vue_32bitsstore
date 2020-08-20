<template>
  <div>
    <h3>Error 404</h3>
    <button @click="home">Volver al inicio</button>
  </div>
</template>

<script>
export default {
  methods:{
    home(){
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>