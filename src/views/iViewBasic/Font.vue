<template>
    <div id='Font'>
        a
            <Table :columns="columns1" :data="data8"></Table>
    </div>
</template>

<script>
export default {
    name: 'Font',
    data () {
        return {
            columns1:[
                {
                    title:'CnFont',
                    key:'cnfont'
                },
                {
                    title:'Demo',
                    key:'demo'
                },
                {
                    title:'isBold',
                    key:'isbold'
                },
                // {
                //     title:'Color',
                //     key:'color'
                // },
                // {
                //     title:'FontSize',
                //     key:'fontsize'
                // }
            ],
            data8:[
                {
                    cnfont:'主标题',
                    demo:'我是标题',
                    isbold:'加粗',
                    // color:'#464c5b',
                    // fontsize:'16px',
                    cellClassName: {
                        isbold:'demo-table-info-cell-address'
                    }
                },
            ]
        }
    }

}
</script>

<style >
.ivu-table .demo-table-info-cell-address{
    background: blue;
}
</style>