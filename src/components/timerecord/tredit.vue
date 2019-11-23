<template>
  <div>
    <div>
      <el-page-header content="时间记录修改"></el-page-header>
      <el-divider></el-divider>
    </div>
    <div>
      <el-table :data="requestList" style="width: 100%" v-loading="loading">
        <el-table-column prop="type" label="时间记录类别" width="120"></el-table-column>
        <el-table-column prop="task" label="任务" width="180"></el-table-column>
        <el-table-column prop="staff" label="员工"></el-table-column>
        <el-table-column prop="desc" label="修改描述"></el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <el-tag
              size="medium"
              :type="scope.row.status === '已修改' ? 'success' : 'info'"
            >{{ scope.row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="text" :disabled="scope.row.status=== '已修改' ">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      requestList: [
        {
          type: "工作",
          task: "中铁集团冶炼项目",
          staff: "朱海锋",
          desc:
            "服务时间经客户的公司确认后,少记录一个小时,将工作时间增加一个小时",
          status: "待修改"
        },
        {
          type: "休息",
          task: "项目培训",
          staff: "谭子熠",
          desc:
            "工作培训占用了中午休息时间，故将休息减少一个小时，工作增加一个小时",
          status: "已修改"
        }
      ],
      loading: true
    };
  },
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }
};
</script>
<style scoped>
</style>