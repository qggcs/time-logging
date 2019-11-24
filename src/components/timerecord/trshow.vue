<template>
  <div>
    <div>
      <el-page-header content="时间记录展示"></el-page-header>
      <el-divider></el-divider>
    </div>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="折线图" name="1">
        <span style="margin-right:20px">请选择展示范围:</span>
        <el-date-picker
          v-model="range"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
        <ve-line :data="lineChartData" :settings="lineChartSettings"></ve-line>
      </el-tab-pane>
      <el-tab-pane label="饼状图" name="2">
        <span style="margin-right:20px">请选择展示日期:</span>
        <el-date-picker v-model="time" type="date" placeholder="选择日期"></el-date-picker>
        <ve-pie :data="pieChartData"></ve-pie>
      </el-tab-pane>
      <el-tab-pane label="柱状图" name="3"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    this.lineChartSettings = {
      xAxisType: "time"
    };
    this.pieChartSettings = {
      roseType: "radius"
    };
    return {
      lineChartData: {
        columns: ["日期", "工作", "休息", "交通", "调研"],
        rows: [
          { 日期: "2019-11-20", 工作: 47, 休息: 60, 交通: 41, 调研: 26 },
          { 日期: "2019-11-21", 工作: 54, 休息: 21, 交通: 26, 调研: 45 },
          { 日期: "2019-11-22", 工作: 66, 休息: 57, 交通: 76, 调研: 71 },
          { 日期: "2019-11-23", 工作: 77, 休息: 38, 交通: 49, 调研: 57 },
          { 日期: "2019-11-24", 工作: 48, 休息: 34, 交通: 50, 调研: 44 },
          { 日期: "2019-11-25", 工作: 99, 休息: 45, 交通: 78, 调研: 35 },
          { 日期: "2019-11-26", 工作: 78, 休息: 33, 交通: 87, 调研: 22 },
          { 日期: "2019-11-27", 工作: 124, 休息: 67, 交通: 78, 调研: 18 }
        ]
      },
      pieChartData: {
        columns: ["类型", "时间"],
        rows: [
          { 类型: "工作", 时间: 13.64 },
          { 类型: "调研", 时间: 2.89 },
          { 类型: "休息", 时间: 6.14 },
          { 类型: "交通", 时间: 2.39 }
        ]
      },
      activeName: "1",
      range: "",
      time: ""
    };
  }
};
</script>
<style scoped>
</style>