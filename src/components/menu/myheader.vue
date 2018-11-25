<template>
    <div id='myheader'>
        <Menu mode="horizontal" :theme="'light'" active-name="1">
            <MenuItem name="1" to="/">
                <Icon type="ios-paper" />Home
            </MenuItem>


            <MenuItem name="2" to="/about">
                <Icon type="ios-people" />About
            </MenuItem>
            
            <Submenu name="3" id="iViewComponet">
                <template slot="title">
                    <Icon type="ios-people" />iView组件
                </template>

                <MenuGroup title="基础" >
                    <MenuItem name="3-01" to="/Color">Color颜色</MenuItem>
                    <MenuItem name="3-02">Font字体</MenuItem>
                    <MenuItem name="3-03">Button按钮</MenuItem>
                    <MenuItem name="3-04">Icon图标</MenuItem>
                </MenuGroup>
                <MenuGroup title="布局" >
                    <MenuItem name="3-11">Grid 栅格</MenuItem>
                    <MenuItem name="3-12">Layout 布局</MenuItem>
                    <MenuItem name="3-13">Card 卡片</MenuItem>
                    <MenuItem name="3-14">Collapse 折叠面板</MenuItem>
                    <MenuItem name="3-15">Split 面板</MenuItem>
                    <MenuItem name="3-16">Divider 分割线</MenuItem>
                    <MenuItem name="3-17">Cell 单元格</MenuItem>
                    
                </MenuGroup>
                <MenuItem name="3-18">...</MenuItem>
            </Submenu>

            <Submenu name="4" >
                <template slot="title">
                    <Icon type="ios-status" />Portal
                </template>
                
                <MenuGroup title="Group1">
                    <MenuItem name="4-1" to="/LanguageManage">语言管理</MenuItem>
                    <MenuItem name="4-1">G-I-1</MenuItem>
                    <MenuItem name="4-3">G-I-3</MenuItem>
                </MenuGroup>
                <MenuGroup title="Group2">
                    <MenuItem name="4-4">G-I-1</MenuItem>
                    <MenuItem name="4-5">G-I-2</MenuItem>

                </MenuGroup>
                
                
            </Submenu>

            <!-- <MenuItem name="5">
                <Icon type="ios-construct" />
                综合设置
            </MenuItem>
            <Submenu name="6" >
                    <template slot="title">
                        嵌套
                    </template>
                    <MenuItem name="6-1">嵌套-1</MenuItem>
                    <MenuItem name="6-2">嵌套-2</MenuItem>
                    <Submenu name="6-3" >
                            <template slot="title">
                                    嵌套
                            </template>
                            <MenuItem name="6-31">嵌套-1</MenuItem>
                            <MenuItem name="6-32">嵌套-2</MenuItem>
                    </Submenu>
            </Submenu> -->
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
        z-index: 9000;
    }
    #myheader {
        position: fixed;
        top: 0;
        width: 100%;
        text-align: left;
    }
    
</style>