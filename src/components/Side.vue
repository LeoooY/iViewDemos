<template>
    <div id='Side'>
        
        <Menu id="mySideMenu" >
            
                <template slot="title">
                    <Icon type="ios-people" />iView组件
                </template>
                <MenuGroup title="基础">
                    <MenuItem name="3-01" to="/Color">Color颜色</MenuItem>
                    <MenuItem name="3-02" to="/Font">Font字体</MenuItem>
                    <MenuItem name="3-03" to="/Button">Button按钮</MenuItem>
                    <MenuItem name="3-04">Icon图标</MenuItem>
                </MenuGroup>
                <MenuGroup title="布局">
                    <MenuItem name="3-11">Grid 栅格</MenuItem>
                    <MenuItem name="3-12">Layout 布局</MenuItem>
                    <MenuItem name="3-13">Card 卡片</MenuItem>
                    <MenuItem name="3-14">Collapse 折叠面板</MenuItem>
                    <MenuItem name="3-15">Split 面板</MenuItem>
                    <MenuItem name="3-16">Divider 分割线</MenuItem>
                    <MenuItem name="3-17">Cell 单元格</MenuItem>

                </MenuGroup>
            
        </Menu>
        
    </div>
</template>

<script>
    export default {
        name: 'Side'

    }
</script>

<style scoped>
#Side{
    width: 100%;
    
}

div#Side #mySideMenu {
    width:20% !important;
    text-align: left;
    position: fixed;
}
div#Side #mySideMenu::after{
    background: #fff;
}
div#Side .ivu-menu-light:after{
    /* background: '#fff'; */
}

</style>