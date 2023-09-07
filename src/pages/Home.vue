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
  
  <div class="card-home">
    <h2>
    La nostra app è stata creata per offrire la comodità di ordinare cibo dalla vivace scena culinaria di Trieste direttamente a casa propria, specialmente durante la pandemia di COVID-19. Creiamo opportunità lavorative per rider e personale di supporto, semplificando l'esperienza di ordinazione e consegna con un'interfaccia user-friendly e consegne veloci, migliorando così la vita dei residenti di Trieste
  </h2>
  </div>

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

.card-home{
  background-color: white;
  border-radius: 20px;
  opacity: 85%;
  height: 200px;
  h2{
    color: rgb(20, 20, 104);
    margin-top: 20px;
  }
}
 //controllare in src/assets/styles/partials/variables.scss


</style>
