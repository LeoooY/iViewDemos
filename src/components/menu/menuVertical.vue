<template>
    <div id='menuVertical'>
        <Row id="side">
            <i-col span="9">
            <!--:open-names="['1']"-->
            <Menu active-name="1-2" mode="vertical" :width="'auto'" >
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-analytics" />
                  {{text}}{{num}}
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
    </div>
</template>

<script>
export default {
    name: 'menuVertical',
    props: ['text','num']
}
</script>

<style scoped>
#side {
    
    margin-top: 60px;
    /* width: 50% */
    z-index: 1
  }
</style>