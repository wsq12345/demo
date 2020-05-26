<template>
    <header class="head">
        <i class="iconfont icon-denglu1" @click="logout()"></i>
    </header>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  methods:{
      logout(){
          sessionStorage.removeItem('user');
          this.$router.replace('/login');
      }
  }
};
</script>

<style lang="less">
    .head{
        background: rgb(36, 33, 33);
        height: 40px;
        .iconfont{
            color: white;
            float: right;
            font-size: 30px;
            margin-right: 20px;
        }
    }
</style>