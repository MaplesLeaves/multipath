<template>
  <div>
    这个是detail的第二个路由1231231
    <button @click="detai">dainwo </button>
  </div>
</template>

<script>
export default {
  methods:{
    detai(){
      console.error(12123123)
      this.$jsonp('https://jdwx.smxlz.gov.cn/evaluation-wxa-smx/smx/restful/getOfficeById',{ officeId:1380}).then((result) => {
        console.error(result)
      }).catch((err) => {
        
      });
    }
  }
}
</script>

<style>

</style>
