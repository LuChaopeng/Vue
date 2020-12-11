<template>
  <div class="hi">
    Hi Vue;{{message}}答案是：{{v+a}}
    <input type="button" @click="show_my_value()">
  </div>

</template>

<script>
export default {
    data(){
      return{
        message:"sdfsdf",
        v:23,
        a:1
      }
    },
    methods: {
      show_my_value:function(){
        alert(this.message);
      }
    },
}
</script>

<style scoped>
  .hi{
    color:red;
    font-size:20px;
  }
</style>