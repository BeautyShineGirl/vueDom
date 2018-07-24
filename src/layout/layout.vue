<template>
    <div class="layout">
        <Header/>
        <Menu/>
        <div class="body">
            <router-view/>
        </div>
        <Footer/>
    </div>    
</template>


<script>
import Header from '@/layout/header.vue';
import Footer from '@/layout/Footer.vue';
import Menu from '@/layout/Menu.vue';

export default {
    components:{
        Header,Footer,Menu
    }
}
</script>

<style scoped>
    .layout{
    width: 1920px;
    height: 940px;
    border: 1px solid #d7dde4;
    background:  #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    }
    .body{
        width: 1680px;
        height: 830px;
        background:#f5f7f9;
        margin-LEFT: 200PX;
    }

</style>
