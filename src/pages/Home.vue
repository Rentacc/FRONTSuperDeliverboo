<script>
import axios from 'axios';
import { state } from '../state';
export default {
  
  data() {
    return {
        state,
        arrCategories: [],
        arrRestaurants: [],
        selectedCategories: [],

    }
  },
  created() {
        this.getRestaurants();
        this.getCategories();

  },
  watch: {
        selectedCategories: {
            handler: "getRestaurants",
            deep: true
        }
    },
  methods: {
    getCategories() {
        axios.get(this.state.baseUrl + '/categories',{})
        .then (response=>{this.arrCategories=response.data.categories});
    },
    getRestaurants() {

        const params = {}
        const id = {}

        if (this.selectedCategories.length > 0) {
                params.category_id = this.selectedCategories.join(',')
            }
            

        axios.get(this.state.baseUrl + '/restaurants',{})
        .then (response=>{this.arrRestaurants=response.data.restaurants})
},

  },
}

</script>

<template>
  <div v-for="item in arrCategories" :key="item.id">
    <div>
      {{ item.title }}
    </div>
  </div>
  <hr>
  <h2>
    Ristoranti (non compare nulla se non ne crei uno dal back)
  </h2>
  <div v-for="item in arrRestaurants" :key="item.id">
    <div>
      {{ item.activity_name }}
    </div>
  </div>



   

</template>

<style scoped lang="scss">
@use '../assets/styles/general.scss' as *;
div {
  color:white;
}

 //controllare in src/assets/styles/partials/variables.scss


</style>
