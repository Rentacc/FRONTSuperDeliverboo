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
  background-image:url('https://img.freepik.com/free-photo/top-view-arrangement-with-notebook-pizza-boxes_23-2148247886.jpg?w=996&t=st=1694013044~exp=1694013644~hmac=4a620423c6d6ff12850eec5512ccd37140026732b82891d79ecf52d372bfc1bb');
  background-repeat: no-repeat;
  background-size: cover;
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
