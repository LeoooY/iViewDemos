<template>
  <div id="app">
    <myheader></myheader>

    <Row id="side">
      <i-col span="6">
      <!--:open-names="['1']"-->
      <Menu active-name="1-2" mode="vertical" :width="'auto'" >
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-analytics" />
            Navigation One
          </template>
          <MenuGroup title="Item 1">
            <MenuItem name="1-1">Option 1</MenuItem>
            <MenuItem name="1-2">Option 2</MenuItem>
          </MenuGroup>
          <MenuGroup title="Item 2">
            <MenuItem name="1-3">Option 3</MenuItem>
            <MenuItem name="1-4">Option 4</MenuItem>
          </MenuGroup>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-filing" />
            Navigation Two
          </template>
          <MenuItem name="2-1">Option 5</MenuItem>
          <MenuItem name="2-2">Option 6</MenuItem>
          <Submenu name="3">
            <template slot="title">Submenu</template>
            <MenuItem name="3-1">Option 7</MenuItem>
            <MenuItem name="3-2">Option 8</MenuItem>
          </Submenu>
        </Submenu>
        <Submenu name="4">
          <template slot="title">
            <Icon type="ios-cog" />
            Navigation Three
          </template>
          <MenuItem name="4-1">Option 9</MenuItem>
          <MenuItem name="4-2">Option 10</MenuItem>
          <MenuItem name="4-3">Option 11</MenuItem>
          <MenuItem name="4-4">Option 12</MenuItem>
        </Submenu>
      </Menu>
      </i-col>
    </Row>
    <div id="rpages">
      <router-link to="/">home</router-link>
      <span>|</span>
      <router-link to="about">about</router-link>
    </div>

    <router-view></router-view>
    <div>

      <Button type="primary">iVButton</Button>
    </div>
    <testScroll></testScroll>

  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import myheader from './components/myheader.vue'
  import testScroll from './components/testScroll.vue'


  export default {
    name: 'app',
    components: {
      // HelloWorld,
      myheader,
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

  #rpages a {
    color: rgb(20, 20, 18);
  }

  #rpages a:hover {
    color: dodgerblue;
  }

  #side {
    position: fixed;
    top: 60px;
    width: 100%
  }
</style>