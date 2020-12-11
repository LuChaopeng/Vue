<template>
  <div class="hi">
    Hi Vue;{{message}}
  </div>

</template>

<script>
export default {
  data(){
    return {
      message:'Hello, this message comes from var'
    }
  }
}
</script>

<style scoped>
  .hi{
    color:red;
    font-size:20px;
  }
</style>