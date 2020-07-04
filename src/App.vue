<template>
  <div class="container">
      <ul class="nav justify-content-center">
  <li class="nav-item">
    <router-link class="nav-link " to="table">Table</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="editemployee">Vuex</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link active " to="/" exact> اضافة موظف</router-link>
  </li>
  
</ul>
    <router-view></router-view>
  </div>
</template>
<script>

export default {
 
};
</script>
<style>

</style>
