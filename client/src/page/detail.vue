<template>
    <div>
        <template>
            <a-page-header
              style="border: 1px solid rgb(235, 237, 240)"
              title="用户详情"
              :breadcrumb="{ props: { routes } }"
            />
        </template>
        <a-table :columns="columns" :data-source="data" bordered>
            <template slot="operation" slot-scope="text, row">
                        <a-button
                            @click="edit(row)"
                            type="primary"
                        >编辑</a-button>
            </template>
        </a-table>
    </div>
</template>
<script>
import { getDetail } from '../api/api'
const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    attrs: {},
  };
  if (index === 4) {
    obj.attrs.colSpan = 0;
  }
  return obj;
};

export default {
  data() {
    const columns = [
      {
        title: '人员Id',
        dataIndex: 'Id',
        align: 'center',
        customRender: renderContent
      },
      {
        title: '姓名',
        dataIndex: 'name',
        align: 'center',
        customRender: renderContent
      },
      {
        title: '年龄',
        dataIndex: 'age',
        align: 'center',
        customRender: renderContent,
      },
      {
        title: 'e-mail',
        dataIndex: 'email',
        align: 'center',
        customRender: renderContent,
      },
      {
        title: '手机号',
        dataIndex: 'phone',
        align: 'center',
        customRender: renderContent,
      },
      {
        title: '用户操作',
        dataIndex: 'operation',
        align: 'center',
        width: 280,
        fixed: 'right',
        scopedSlots: { customRender: 'operation' }
      },
    ];
    return {
      data:[],
      columns,
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
  methods:{
    async show(){
      let data=await getDetail();
      this.data=data.data;
    }
  },
  mounted(){
    this.show();
  }
};
</script>
