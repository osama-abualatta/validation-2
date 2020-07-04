<template>
  <div>
      <button class="btn btn-primary" @click="btn1Clicked"> Increment</button>
       <button class="btn btn-primary" @click="btn1Clicked"> Decrement</button>
  </div>
</template>

<script>
export default {
methods:{
btn1Clicked(){
  // this.$store.state.counter++;
},
btn2Clicked(){
  // this.$store.state.counter-- ;
}

}
}
</script>

<style>

</style>