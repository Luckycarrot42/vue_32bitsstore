<template>
  <div>
    <ul>
      <li :style="{'background-color': game.color }" v-for="(game, index) in games" :key="index">
        Código: {{ game.id}} - {{ game.name}} - Valor: {{ game.price }} - Stock: {{ game.stock }}
          <button v-if="displayButton" @click="emitSale(game)">Venta</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    games: {
      type: Array,
      required: true
    },
    displayButton: {
      type: Boolean,
      default: false 
    }
   },
  methods: {
    emitSale(game){
      this.$emit('emit-sale', game)
    }
  },
}
</script>

<style>

</style>