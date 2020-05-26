<template>
  <div style="width: 240px;">
    <a-menu
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
    <a-menu-item key="1" @click="toggleCollapsed">
        <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'"/>
        <span>缩进</span>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link :to="'/userList'">
            <a-icon type="pie-chart" />
            <span>人员列表</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <router-link :to="'/detail'">
            <a-icon type="desktop" />
            <span>人员详情</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="4">
        <router-link :to="'/edit'">
            <a-icon type="desktop" />
            <span>编辑</span>
        </router-link>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
        <a-menu-item key="5">
          Option 5
        </a-menu-item>
        <a-menu-item key="6">
          Option 6
        </a-menu-item>
        <a-menu-item key="7">
          Option 7
        </a-menu-item>
        <a-menu-item key="8">
          Option 8
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
        <a-menu-item key="9">
          Option 9
        </a-menu-item>
        <a-menu-item key="10">
          Option 10
        </a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11">
            Option 11
          </a-menu-item>
          <a-menu-item key="12">
            Option 12
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>
