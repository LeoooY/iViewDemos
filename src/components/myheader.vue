<template>
    <div id='myheader'>
        <Menu mode="horizontal" :theme="'light'" active-name="1">
            <MenuItem name="1">
                <Icon type="ios-paper" />Menu
            </MenuItem>


            <MenuItem name="2">
                <Icon type="ios-peple" />Menu2
            </MenuItem>


            <Submenu name="3" >
                <template slot="title">
                    <Icon type="ios-staus" />分析
                </template>
                
                <MenuGroup title="Group1">
                    <MenuItem name="3-1">G-I-1</MenuItem>
                    <MenuItem name="3-1">G-I-1</MenuItem>
                    <MenuItem name="3-3">G-I-3</MenuItem>
                </MenuGroup>
                <MenuGroup title="Group2">
                    <MenuItem name="3-4">G-I-1</MenuItem>
                    <MenuItem name="3-5">G-I-2</MenuItem>

                </MenuGroup>
                
                
            </Submenu>

            <MenuItem name="4">
                <Icon type="ios-construct" />
                综合设置
            </MenuItem>
            <Submenu name="5" >
                    <template slot="title">
                        嵌套
                    </template>
                    <MenuItem name="5-1">嵌套-1</MenuItem>
                    <MenuItem name="5-2">嵌套-2</MenuItem>
                    <Submenu name="5-3" >
                            <template slot="title">
                                    嵌套
                            </template>
                            <MenuItem name="5-31">嵌套-1</MenuItem>
                            <MenuItem name="5-32">嵌套-2</MenuItem>
                    </Submenu>
            </Submenu>
        </Menu>
    </div>
</template>

<script>
    export default {
        name: 'myheader'

    }
</script>

<style scoped>
    *{
        z-index: 100;
    }
    #myheader {
        position: fixed;
        top: 0;
        width: 100%
    }
</style>