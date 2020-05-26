<template>
    <div class="container">
        <div class="content">
            <div class="top">
                <div class="header">
                    <span class="title"> Admin 管理系统</span>
                </div>
            </div>
            <div class="login">
                <a-form 
                    :form="form"
                    @submit="handleSubmit"
                >
                    <a-form-item>
                        <a-input size="large" placeholder="" v-decorator="rules.username">
                        <a-icon slot="prefix" type="user" />
                        </a-input>
                    </a-form-item>
                    <a-form-item>
                        <a-input size="large" placeholder="" type="password" v-decorator="rules.password">
                        <a-icon slot="prefix" type="lock" />
                        </a-input>
                    </a-form-item>
                    <div>
                        <a-checkbox checked style="color: #fff;">自动登录</a-checkbox>
                        <a style="float: right;color: #fff;">忘记密码</a>
                    </div>
                    <a-form-item>
                        <a-button 
                            :loading="logging" 
                            html-type="submit" 
                            style="width: 100%;margin-top: 24px" 
                            size="large" 
                            type="primary"
                        >
                            登录
                        </a-button>
                    </a-form-item>
                </a-form>
            </div>
        </div>
    </div>
</template>

<script>
import { login } from '../api/api'
export default {
    data() {
        return {
            logging: false,
            form: this.$form.createForm(this),
            rules: {
                username: [ "username", {
                        rules: [
                            { required: true, message: '用户名不能为空！' },
                    ]}
                ],
                password: [ "password", {
                        rules: [
                            { required: true, message: '密码不能为空！' }
                    ]}
                ]
            }
        }
    },
    computed: {
        
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault()
            this.form.validateFields((err, values) => {
                if (!err) {
                    this.log(values)
                }
            })
        },
        //登录
        async log({ username,password }) {
            try {
                this.logging = true;
                const params = new URLSearchParams();
                params.append("username", username);
                params.append("password", password);
                var res = await login(params);
                console.log(res)
                if (res.status === 200) {
                    this.$message.success(res.data.msg);
                    sessionStorage.setItem('user','admin');
                    this.$router.replace('/main');
                }
            } catch (error) {
                console.error(error)
            }
            this.logging = false
        }
    }
}
</script>

<style lang="less" scoped>
  .container {
    display:flex;
    flex-direction:column;
    height:100vh;
    background: url('../assets/bg1.jpg') no-repeat;
    background-size: 100% 100%;
    overflow:auto;
    .content {
        padding:80px 0;
        flex:1;
        display:flex;
        flex-direction:column;
        align-items:center;
        .top {
            text-align:center;
            margin-top:30px;
            .header {
                line-height:44px;
                margin-bottom:40px;
                .title {
                    font-size:33px;
                    color:#ffffff;
                    font-family:'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
                    font-weight:600;
                    position:relative;
                    top:2px;
                }
            }
        }
        .login{
            width:368px;
            margin:0 auto;
            @media screen and (max-width: 576px) {
                width:95%;
            }
            @media screen and (max-width: 320px) {
                .captcha-button {
                    font-size:14px;
                }
            }
        }
    }
   
}
</style>