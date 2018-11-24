<template>
  <div id="app">
    <my-header></my-header>

    <!-- <my-menu-v :text="text" :num="Num"></my-menu-v> -->

    <!-- <div id="router-pages">
      <router-link to="/">home</router-link>
      <span>|</span>
      <router-link to="about">about</router-link>
    </div>
    <Button type="primary" @click="add()">Add</Button>
    <Button type="primary" @click="decrease()">Decrease</Button>-->
    
    <mySide></mySide>
   
    <div id="myContent" >
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>



  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'

  import myHeader from './components/menu/myheader.vue'
  import myMenuV from './components/menu/menuVertical.vue'
  import mySide from './components/Side.vue'




  export default {
    name: 'app',
    data() {
      return {
        text: "props via app.vue",
        Num: 1,
      }
    },
    methods: {
      add() {
        this.Num++;
      },
      decrease() {
        this.Num--;
      },

    },
    computed: {


    },
    components: {
      // HelloWorld,
      myHeader,
      myMenuV,
      mySide,

    }
  }
</script>


<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    
  }

  
  #myContent{
    margin-left: 20%;
    background: #f8f8f9;;
    height: 750px;
    border-left: 1.5px solid #d5c1c1;
    
    box-shadow:  inset 3px -1px 9px 0px #b3b1b1;
  }


  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .1s;
  }

  .fade-enter,
  .fade-leave-to

  /* .fade-leave-active below version 2.1.8 */
    {
    opacity: .1s;
  }
</style>