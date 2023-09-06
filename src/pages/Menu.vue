<script >
  import {state} from '../state.js';
  import axios from 'axios'

  export default {
  components:{  },

    data(){
        return{     
            state,
            arrCart:[],
            totcart: 0,
            
        }
    },
    methods:{
      nwItem(title, counter, tprice) {
        let newitem={
          title,
          counter,
          totprice: tprice,
        }
        return newitem;
      }
      ,
      addItemToArrCart(t, n, tp){
        let newitem= this.nwItem(t, n, tp);
        let checkIsSet = false;
        this.arrCart.forEach(element => {
          if(element.title == newitem.title){ checkIsSet = true }
        });

        if(checkIsSet){
          this.arrCart.forEach(element => {
            if(element.title == newitem.title){
            
            element.counter += newitem.counter;

            element.totprice += newitem.totprice
          }
          });  
        }else{
          this.arrCart.push(newitem);
        }
        this.arrCart.forEach(element => {
          console.log(element)
        });
      },
      totprice(n,p){
        let mult =  parseInt(n) * parseInt(p);
        return mult;
      },
      getTotCart(){
        let total=0;
        this.arrCart.forEach(element => {
          total += element.totprice
        });
        return total
      },
      deleteItemToCart(item){
        let newarrCart = this.arrCart.filter((element) => {
          return element.title !== item;
        });
        this.arrCart=[];
        this.arrCart = newarrCart;
        this.arrCart.forEach(element => {
          console.log(element)
        });

      }

      
    },
    created(){
      
    }
  }
</script>

<template>

 <div class="menu">
  <div class="item" v-for="(item, index) in state.fakemenu[1]" :key="index">
    <h5>{{ item.titolo }}</h5>
    <span>{{ item.prezzo }}</span>
    
    <button @click="addItemToArrCart(item.titolo, 1, totprice(1, item.prezzo))" > AGGIUNGI </button>

  </div>

  <!-- con contatore -->
 <!-- <div class="menu">
  <div class="item" v-for="(item, index) in state.fakemenu[1]" :key="index">
    <h5>{{ item.titolo }}</h5>
    <span>{{ item.prezzo }}</span>
     <input class="counter" type="number" :name="item.counter" :id="item.counter+item.titolo" v-model="item.counter" >
    <button @click="addItemToArrCart(item.titolo, item.counter, totprice(item.counter, item.prezzo))" > AGGIUNGI </button>

  </div> -->

</div>


<div class="cart">
  <div v-for="(item, index) in arrCart" >
    <div class="row">
      <h3>{{ item.title }}</h3>
    <h4>€{{ item.totprice }}</h4>
    <span>{{ item.counter }}</span>
    <button @click="deleteItemToCart(item.title)"> elimina </button>
    </div>
    
  </div>
  <div class="total">
    il totale è: €
    {{getTotCart()}}
  </div>

</div>

 
</template>

<style scoped lang="scss">
@use '../assets/styles/general.scss' as *;

.menu{
  @include dfc;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 2rem;
  .item{
    @include dfc;
    gap: 1rem;
    border: 2px solid rgb(214, 214, 214);
    padding: 1rem;
  }
  .cart{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 2rem;


    
  }
}
.row{
      display: flex;
      justify-content: space-between;
      border: 2px white solid;
    }
</style>
