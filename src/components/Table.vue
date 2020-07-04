<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="rows"/>
  </div>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';
import axios from 'axios';

export default {
  components: {
  VueGoodTable,
},
  name: 'my-component',
  data(){
    return {
      columns: [
        {
          label: 'Name',
          field: 'first_name',
        },
        {
          label: 'lastName',
          field: 'last_name',
        },
        {
          label: 'Email',
          field: 'email',
         
        },
        {
          label: 'Id',
          field: 'id',
        },
      ],
      rows: [],
    };
  },
  mounted(){
    axios.get('https://reqres.in/api/users?page=2')
    .then(res => this.rows = res.data.data)
    
    .catch(error => console.log(error.response.data))
  }
};
</script>