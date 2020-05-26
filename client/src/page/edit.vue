<template>
    <div>
        <a-page-header
              style="border: 1px solid rgb(235, 237, 240)"
              title="用户详情"
              :breadcrumb="{ props: { routes } }"
            />
        <a-form :form="form">
        <a-form-item
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
        label="Name"
        >
        <a-input
            v-decorator="[
            'username',
            { rules: [{ required: true, message: 'Please input your name' }] },
            ]"
            placeholder="Please input your name"
        />
        </a-form-item>
        <a-form-item
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
        label="age"
        >
        <a-input
            v-decorator="[
            'age',
            { rules: [{ required: checkNick, message: 'Please input your age' }] },
            ]"
            placeholder="Please input your age"
        />
        </a-form-item>
        <a-form-item
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
        label="email"
        >
        <a-input
            v-decorator="[
            'email',
            { rules: [{ required: checkNick, message: 'Please input your email' }] },
            ]"
            placeholder="Please input your email"
        />
        </a-form-item>
        <a-form-item
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
        label="phone"
        >
        <a-input
            v-decorator="[
            'phone',
            { rules: [{ required: checkNick, message: 'Please input your phone' }] },
            ]"
            placeholder="Please input your email"
        />
        </a-form-item>
        <a-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
        <a-button type="primary" @click="check">
            Check
        </a-button>
        </a-form-item>
    </a-form>
    </div>
</template>

<script>
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};
export default {
  data() {
    return {
      checkNick: false,
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this, { name: 'dynamic_rule' }),
      routes: [
        {
          path: 'main',
          breadcrumbName: 'main',
        },
        {
          path: 'userList',
          breadcrumbName: '用户详情',
        },
      ],
    };
  },
  methods: {
    check() {
      this.form.validateFields(err => {
        if (!err) {
          console.info('success');
        }
      });
    },
    handleChange(e) {
      this.checkNick = e.target.checked;
      this.$nextTick(() => {
        this.form.validateFields(['nickname'], { force: true });
      });
    },
  },
};
</script>