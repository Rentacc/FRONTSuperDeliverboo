<script >
  import {state} from '../state.js'


  export default {

    data(){
        return{     
            state,
         //center: {lat: 51.093048, lng: 6.842120},
            
        }
    },
    
  }
</script>

<template>
  <div class="contatti">
    
      <h1>I nostri Contatti</h1>

    


  </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/general.scss' as *;


.contatti{
   @include dfc;  //controllare in src/assets/styles/partials/variables.scss
  flex-direction: column;
  gap: 1.5rem;
  padding: 1em;
}
</style>
