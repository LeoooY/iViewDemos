<template>
    <div id=LanguageManage>
        <h1>语言管理页面</h1>
        <Row>
            <Col span="20" offset="2">
                <Col span="12">
                    <Input v-model="value13" >
            
                        <Select v-model="defaultLanguage" slot="prepend" style="width:80px">
                            <Option value="zh-CN">zh-CN</Option>
                            <Option value="en-US">en-US</Option>
                        </Select>
                        <Button slot="append" icon="ios-search"></Button>
                    </Input>
                </Col>
                <Col span="2" offset="10">
                    <Button type="primary" width="100px">新增</Button>
                </Col>
                
            </Col>

           
                
            
            
            
        </Row>
        
        <Row>
            <Col span="20" offset="2">
                <Table id="LanTable" border :columns="columns7" :data="data6"></Table>
            </Col>    
        </Row>
        
        <Page :total="100" />
    </div>
</template>

<script>
    
    export default {
        name: 'LanguageManage',
        
        data() {
            return {
                defaultLanguage:'zh-CN',
                columns7: [
                    {
                        title: 'Name',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'md-person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    }
                ]
            }
        },
        methods: {
            show(index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            remove(index) {
                this.data6.splice(index, 1);
            }
        }
    }
</script>

<style scoped>
#LanTable{
    width: 100%;
    
}
</style>