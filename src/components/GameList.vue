<template>
  <div>
    <ul>
      <li :style="{'background-color': game.color }" v-for="(game, index) in games" :key="index">{{ game.id}} - {{ game.name}} - {{ game.price}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    games: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>