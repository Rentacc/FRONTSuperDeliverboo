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
  
  <div class="card-container">
        <div class="card">
            <h1><router-link :to="{ name: 'menu' }" class="nav-link active active-p" >Pizzeria da Carlo Trieste</router-link></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatem rem in ex dignissimos hic, id ipsa explicabo? Cupiditate, temporibus! Illo in suscipit ex, debitis    voluptate.</p>
         </div>
        <div class="card"> 
             <h1><router-link :to="{ name: 'menu' }" class="nav-link active active-p" >Mc donalds Trieste</router-link> </h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatem rem in ex dignissimos hic, id ipsa explicabo? Cupiditate, temporibus! Illo in suscipit ex, debitis    voluptate.</p>
            </div>
        <div class="card">
              <h1><router-link :to="{ name: 'menu' }" class="nav-link active active-p" >Pizzeria da Piero Trieste</router-link></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatem rem in ex dignissimos hic, id ipsa explicabo? Cupiditate, temporibus! Illo in suscipit ex, debitis    voluptate.</p>
            </div>
        <div class="card">
             <h1><router-link :to="{ name: 'menu' }" class="nav-link active active-p" >KFC Trieste</router-link></h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatem rem in ex dignissimos hic, id ipsa explicabo? Cupiditate, temporibus! Illo in suscipit ex, debitis    voluptate.</p>
          </div>
        <div class="card">
            <h1><router-link :to="{ name: 'menu' }" class="nav-link active active-p" >Birreria da Tony Trieste</router-link></h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatem rem in ex dignissimos hic, id ipsa explicabo? Cupiditate, temporibus! Illo in suscipit ex, debitis    voluptate.</p>
          </div>
          <div class="card">
            <h1><router-link :to="{ name: 'menu' }" class="nav-link active active-p" >Pizzeria da Massimo Trieste</router-link></h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatem rem in ex dignissimos hic, id ipsa explicabo? Cupiditate, temporibus! Illo in suscipit ex, debitis    voluptate.</p>
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

.card-container{
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

}
.card{
  background-color: white;
  border-radius: 20px;
  margin-left: 50px;
  width: 300px;
  padding: 10px;
  h1{
    color :rgb(192, 192, 43);;
  }
  p{
    color: rgb(20, 20, 104);

  }
}
.card-home{
  background-color: white;
  border-radius: 20px;
  opacity: 85%;
  height: 200px;
  padding: 10px;
  h2{
    color: rgb(20, 20, 104);
    margin-top: 20px;

  }
}
 //controllare in src/assets/styles/partials/variables.scss


</style>
