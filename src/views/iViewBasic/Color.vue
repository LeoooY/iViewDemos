<template>
    <div id='color'>
        <Row class="row">
            <Col :span="8" class="block">
                <Card >
                <p slot="title">

                    Primary
                </p>
                
                <div id="Primary">#2d8cf0</div>
                 


                </Card>
            </Col>
            <Col :span="8" class="block">
                <Card >
                <p slot="title">

                    Light Primary
                </p>
                <div id="LightPrimary">#5cadff</div>

                </Card>
            </Col >
            <Col :span="8" class="block">
                <Card>
                    <p slot="title">

                        Dark Primary
                    </p>
                    <div id="DarkPrimary">#2b85e4</div>

                </Card>
            </Col>

        </Row>
        <Row class="row">
            <Col :span="6" class="block">
                <Card >
                        <p slot="title">
        
                                Info
                                
                        </p>
                        
                        <div id="Info">#2db7f5</div>
                         
        
        
                </Card>
            </Col>
            <Col :span="6" class="block">
                <Card >
                        <p slot="title">
        
                                Success
                                
                        </p>
                        
                        <div id="Success">#19be6b</div>
                         
        
        
                </Card>
            </Col>
            <Col :span="6" class="block">
                <Card >
                        <p slot="title">
        
                                Warning
                                
                        </p>
                        
                        <div id="Warning">#ff9900</div>
                         
        
        
                </Card>
            </Col>
            <Col :span="6" class="block">
                <Card >
                        <p slot="title">
        
                                Error
                                
                        </p>
                        
                        <div id="Error">#ed4014</div>
                         
        
        
                </Card>
            </Col>
        </Row>
        <Row class="row">
                <Col :span="6" class="block" >
                    <Card  >
                            
                            <p slot="title">
            
                                    Info
                                    
                            </p>
                            
                            <div id="Info">#2db7f5</div>
                             
            
            
                    </Card>
                </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: 'color'

    }
</script>

<style scoped>
    #color {
        width: 100%;
        height: 750px;
        /* background: #f8f8f9; */
    }
    .row{
        padding: 30px 50px;
    }
 
    .block{
        padding: 5px
    }

    #Primary {
        background: #2d8cf0;
        color: #fff;
        border-radius: 5px;
    }
    #LightPrimary {
        background: #5cadff;
        color: #fff;
        border-radius: 5px;
    }
    #DarkPrimary {
        background: #2b85e4;
        color: #fff;
        border-radius: 5px;
    }
    
    #Info {
        background: #2db7f5;
        color: #fff;
        border-radius: 5px;
    }
    #Success {
        background: #19be6b;
        color: #fff;
        border-radius: 5px;
    }
    #Warning {
        background: #ff9900;
        color: #fff;
        border-radius: 5px;
    }
    #Error {
        background: #ed4014;
        color: #fff;
        border-radius: 5px;
    }
    
</style>