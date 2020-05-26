<template>
    <div>
        <template>
            <a-page-header
              style="border: 1px solid rgb(235, 237, 240)"
              title="用户列表"
              :breadcrumb="{ props: { routes } }"
            />
        </template>
        <a-table :columns="columns" :data-source="data" bordered>
             <template slot="operation" slot-scope="text, row">
                        <a-button
                            @click="detail(row)"
                        >查看详情</a-button>
            </template> 
        </a-table>
    </div>
</template>
<script>
import { getUserList } from '../api/api'
const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    attrs: {},
  };
  if (index === 10) {
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
          breadcrumbName: '用户列表',
        },
      ],
    };
  },
  methods:{
    detail(row){
      this.$router.replace('/detail')
    },
    async show(){
      let data=await getUserList();
      this.data=data.data;
    }
  },
  mounted(){
    this.show();
  }
};
</script>
