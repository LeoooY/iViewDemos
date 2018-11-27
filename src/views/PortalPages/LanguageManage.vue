<template>
    <div id=LanguageManage>
        <h1>语言管理页面</h1>
        
        <Row>
            <Col span="20" offset="2">
            <Col span="12">
            <Input>

            <Select v-model="defaultLanguage" slot="prepend" style="width:80px">
                <Option v-if="!LangConfig" value="zh-CN">简体中文</Option>
                <template v-for="L in LangConfig">
                    <Option value=" L['LangCode'] ">{{ L['DispalyName'] }}</Option>
                </template> 
                <!-- <Option  value="zh-CN">简体中文</Option>
                <Option  value="en-US">English</Option> -->
            </Select>



            <Button slot="append" icon="ios-search"></Button>
            </Input>
            </Col>
            <Col span="2" offset="10">
            <Button type="primary" width="100px" @click="showToken">新增</Button>
            </Col>

            </Col>






        </Row>

        <Row>
            <Col span="20" offset="2">
            <Table id="LanTable" border :columns="columns" :data="data6"></Table>
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
                
                UserLoginToken: '',
                LangConfig:'',
                defaultLanguage: 'zh-CN',
                columns: [
                    {
                        title: 'TableLangId',
                        key: 'TableLangId',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'md-person'
                                    }
                                }),
                                h('strong', params.row.TableLangId)
                            ]);
                        }
                    },
                    {
                        title: 'TableLangCode',
                        key: 'TableLangCode'
                    },
                    {
                        title: 'Value',
                        key: 'Value'
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
                        TableLangId: 'John Brown',
                        TableLangCode: 18,
                        Value: 'New York No. 1 Lake Park'
                    },
                    {
                        TableLangId: 'Jim Green',
                        TableLangCode: 24,
                        Value: 'London No. 1 Lake Park'
                    },
                    {
                        TableLangId: 'Joe Black',
                        TableLangCode: 30,
                        Value: 'Sydney No. 1 Lake Park'
                    },
                    {
                        TableLangId: 'Jon Snow',
                        TableLangCode: 26,
                        Value: 'Ottawa No. 2 Lake Park'
                    }
                ],
                data: [],
            }
        },
        methods: {
            show(index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `TableLangId: ${this.data6[index].TableLangId}<br>TableLangCode: ${this.data6[index].TableLangCode}<br>Value: ${this.data6[index].Value}`
                })
            },
            showToken() {
                this.$Modal.info({
                    title: 'Token',
                    content: this.UserLoginToken,
                })
            },
            remove(index) {
                //判断 提醒是否删除这条数据
                this.data6.splice(index, 1);
            },


            getEnterToken(isGuest) {
                fetch('http://bipt.krclouds.com:8090/v1/Token/GetToken/', {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },
                    body: JSON.stringify({
                        "Appid": "f0af81a3-6f36-4419-ab47-18a6c67d3ff2",
                        "Appsecret": "045e698c-0fb4-4c24-ae7e-e2fb32178b12"
                    }),

                }).then(result =>  result.json()).then(data => {
                    console.log('Get Token :',data);
                    
                    return data.result.token;
                }).then(guestToken=>{
                    isGuest? '' : this.getUserLoginToken(guestToken);
                })
                
            },
            getUserLoginToken(guestToken) {
                fetch('http://bipt.krclouds.com:8090/v1/Customer/UserNameLogin/', {
                    method: "post",
                    headers: {
                        "Authorization": guestToken,
                        "Accept": "application/json",
                    },
                    body: JSON.stringify({
                        "Password": "49ba59abbe56e057",
                        "PhoneModel": 2,
                        "PhoneType": "xiaomi6",
                        "Register": "0000000000000000000",
                        "RegisterType": 1,
                        "Uname": "test"
                    }),
                }).then(result =>  result.json()).then(data => {
                    console.log('User Login :',data);
                    this.UserLoginToken = data.result.token.token;
                    return data.result.token.token
                }).then(token=>{
                    console.log("Login Token :",token);
                    this.getLangconfig(token);
                })
            },
            getLangconfig(token){
                fetch('http://bipt.krclouds.com:8090/v1/tb_lang_config/?query=Enabled%3A%201&fields=DispalyName%2CLangCode', {
                    method: "get",
                    headers: {
                        "Authorization": token,
                    },
                    
                }).then(result => result.json()).then(data => {
                    console.log('Get Lang Config :',data);
                    this.LangConfig = data.result;
                    console.log("LangConfig Data :",typeof(this.LangConfig[0]));
                    console.log("LangConfig Data :",this.LangConfig[1]);
                    
                    // return data.result.token.token
                })
            },
            getLangTable(token){
                fetch('http://bipt.krclouds.com:8090/v1/tb_lang', {
                    method: "get",
                    headers: {
                        "Authorization": token,
                    },
                    params:{
                        "count":"false",
                        "limit":"20",
                        "offset":"0",
                    }, 
                }).then(result => result.json()).then(data => {
                    console.log('Get Lang Config :',data);
                    this.LangConfig = data.result;
                    console.log("LangTable Data :",this.LangConfig);
                    // return data.result.token.token
                    for(let L of this.LangConfig){
                        console.log(L);
                    }
                })
            }

        },
        created() {
            let isGuest=false;
            this.getEnterToken(isGuest);
            
            





        }
    }
</script>

<style scoped>
    #LanTable {
        width: 100%;

    }
</style>