<script >
  import {state} from '../state.js'

  export default {
  components:{  },

    data(){
        return{     
            state,
        }
    },
    
  }
</script>

<template>
  <div class="about">
    
    <h1>La nostra app è stata creata per offrire la comodità di ordinare cibo dalla vivace scena culinaria di Trieste direttamente a casa propria, specialmente durante la pandemia di COVID-19. Creiamo opportunità lavorative per rider e personale di supporto, semplificando l'esperienza di ordinazione e consegna con un'interfaccia user-friendly e consegne veloci, migliorando così la vita dei residenti di Trieste.</h1>

   


  </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/general.scss' as *;




.about{
  @include dfc;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
  text-align: left;
  background-color: white;
  border-radius: 20px;
  opacity: 85%;

  h1{
    font-size: 1.5em;
    margin-bottom: 90px;
    color: rgb(20, 20, 104);
    text-align: center;
    margin-top: 30px;

  }
  .main-about .post:nth-child(even){
    .row{
      flex-direction: row-reverse
    }
  }
  .main-about{
    @include dfc;
    flex-direction: column;
    gap: 1em;
    max-width: 600px;

    .post{
      @include dfc;
      flex-direction: column;
      gap: 1em;
      padding-bottom: 3em;
      .row{
        @include dfc;
        flex-wrap: wrap;
        gap: 1em;
        letter-spacing: 1.5px;

      }
      .header-section{
        width: 50%;
        @include dfj;
        flex-direction: column;
        justify-content: space-around;
        padding: 1em;
        flex: 1 1 auto;
        background-color: $c-black-op-med;
        

      }
      img{
        flex: 0 0 auto;
        width: calc(50% - 1em);
      }
      

    }
  }
}

@media (max-width:650px) {
  .main-about{
    width: 100%;

  }
  .row{
    flex-direction: column;

  }
  .header-section{
    width: 100%!important;
  }
  img{
        flex: 0 0 auto;
        width: 100%!important;
  }
  .main-about .post:nth-child(even){
    .row{
      flex-direction: column!important;
    }
  }
}


</style>