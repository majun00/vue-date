<template>
  <div id="app">
  {{msg|toDate}}
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '1516696789'
    }
  }
}
</script>

<style>
</style>
