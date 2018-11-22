<template>
  <div id="app">
    <my-header></my-header>

    <my-menu-v :text="text" :num="num"></my-menu-v>
  
    <div id="router-pages">
      <router-link to="/">home</router-link>
      <span>|</span>
      <router-link to="about">about</router-link>
    </div>
    <Button type="primary" @click="add()">Add</Button>
    <Button type="primary" @click="decrease()">Decrease</Button>
    <router-view></router-view>
    <div>

      
    </div>
    <test-scroll></test-scroll>

  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  
  import myHeader from './components/menu/myheader.vue'
  import myMenuV from './components/menu/menuVertical.vue'
  
  
  import testScroll from './components/testScroll.vue'


  export default {
    name: 'app',
    data () {
      return {
        text:"props via app.vue",
        num:1,  
      }
    },
    methods: {
      add(){
        this.num++;
      },
      decrease(){
        this.num--;
      }
    },
    components: {
      // HelloWorld,
      myHeader,
      myMenuV,
      testScroll,
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

  #router-pages a {
    color: rgb(20, 20, 18);
  }

  #router-pages a:hover {
    color: dodgerblue;
  }

  
</style>