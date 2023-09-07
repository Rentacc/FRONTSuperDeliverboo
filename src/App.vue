<script >
  
  import AppHeader from './components/AppHeader.vue'
  import AppFooter from './components/AppFooter.vue'

  export default {
  components:{ AppFooter, AppHeader }
  }
</script>

<template>

    <div class="app">
      <div class="small-cont">
        <AppHeader />
        <router-view></router-view>
      </div>
      <AppFooter />
    </div>

  
</template>

<style lang="scss">
@use './assets/styles/general.scss' as *;
body{
  background-image: url('https://images-ext-2.discordapp.net/external/PnbS31NZo7yjOOQvw053-TGsDnbnXlvpi8lt6X1qPZo/%3Ft%3Dst%3D1694013029~exp%3D1694013629~hmac%3Dce5bdd887b6e5b2c3099ae44f4789861f15482a23145f44f5ed2ef9ce4a53c9c/https/img.freepik.com/free-photo/top-view-arrangement-with-notebook-pizza-boxes_23-2148247886.jpg?width=1176&height=662');
  background-repeat: no-repeat;
  background-size:cover ;
}


  .app{    
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;

  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  color: $c-white;

  .small-cont{
      min-height: 85vh;
      @include dfj;
      flex-direction: column;
      gap: .3em;    
      padding-top: 1rem;
      margin: 0 auto;
      max-width: 1150px;
    }
  }



</style>
