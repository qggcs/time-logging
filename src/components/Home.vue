<template>
  <div class="layout">
    <div class="header">
      <el-menu class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1" @click="navigateByUrl('/task_personal')">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>任务管理</span>
          </template>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>时间记录</span>
          </template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span>账单相关</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span>系统管理</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="container">
      <div class="content">
        <router-view />
      </div>
    </div>
    <div class="footer">
      <div class="copyright">
        <div class="footer-content">
          内容版权均归
          <strong>time logging</strong> 有限公司所有 辽ICP备0000000号
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      news: "hello world!"
    };
  },
  methods: {
    navigateByUrl(url) {
      this.$router.push({
        path: url
      });
    }
  }
};
</script>

<style scoped lang="less">
.footer {
  margin-top: 50px;
}
.copyright {
  background: #212121;
  border-top: 1px solid #444;
  text-align: center;
  padding: 20px 0;
  line-height: 30px;
  color: #c1c1c1;
}

.container {
  margin: 30px 5%;
  min-height: 400px;
}
.content {
  background: #ffffff;
  margin: 10px auto;
  padding: 2% 4%;
  height: 100%;
  box-shadow: 0px 0px 5px 5px #e4e7ed;
  border-radius: 3px;
}
</style>
