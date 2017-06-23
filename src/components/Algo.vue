<template>
  <div>
    <input type="button" @click="click" value="click"> {{message}}
  </div>
</template>

<script>
export default {
  name: 'Algo',
  data () {
    return {
      message: 'message'
    }
  },
  methods: {
    click () {
      console.log('test')
    }
  }
}
</script>

<style>

</style>
