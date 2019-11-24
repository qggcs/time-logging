<template>
  <div class="layout">
    <div class="header">
      <el-menu class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1" @click="navigateByUrl('/home/task_personal')">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>任务管理</span>
          </template>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-timer"></i>
            <span>时间记录管理</span>
          </template>
          <el-menu-item index="2-1" @click="navigateByUrl('/home/timerecord')">时间记录</el-menu-item>
          <el-menu-item index="2-2" @click="navigateByUrl('/home/trshow')">时间记录展示</el-menu-item>
          <el-menu-item index="2-3" @click="navigateByUrl('/home/tredit')" :disabled="mana">时间记录修改</el-menu-item>
        </el-submenu>
        <el-menu-item index="3" @click="navigateByUrl('/home/bill')">
          <i class="el-icon-coin"></i>
          <span>账单相关</span>
        </el-menu-item>
        <el-menu-item index="4" :disabled="sys">
          <i class="el-icon-setting"></i>
          <span>系统设置</span>
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
      sys: false,
      mana: false
    };
  },
  methods: {
    navigateByUrl(url) {
      this.$router.push({
        path: url
      });
    }
  },
  created() {
    this.sys = sessionStorage.getItem("sys") === '0' ? false : true;
    this.mana = sessionStorage.getItem("mana") === '0' ? false : true;
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
