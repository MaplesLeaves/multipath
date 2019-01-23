<template>
  <div>
    这个是detail的第一个路由
    <button @click="detai">dainwo </button>
  </div>
</template>

<script>
export default {
  methods:{
    detai(){
      // this.$router.push({
      //   path: 'index'
      // })
      window.location.href = 'index.html'
    }
  }
}
</script>

<style>

</style>
