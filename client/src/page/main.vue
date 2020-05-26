<template>
    <div>
        <Header></Header>
        <silder class="silder"></silder>
        <a-layout-content class="Content">
            <div class="Content-View">
                <router-view/>
            </div>
        </a-layout-content>
    </div>
</template>

<script>
import Header from '../components/header'
import silder from '../components/silder'
export default {
    data(){
        return{

        }
    },
    components:{
        Header,
        silder
    }
}
</script>

<style lang="less">
    .silder{
        float: left;
    }
    .Content {
        transition:padding .2s;
        display:flex;
        flex-direction:column;
        box-sizing:border-box;
        overflow-x:auto;
        .Content-View {
            min-height:100%;
            margin:0 24px;
            display:flex;
            flex-direction:column;
        }
    }
</style>