<template>
  <div>
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">
          <i class="el-icon-back"></i>
          <span style="margin-left:2px">首页</span>
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/task_personal' }">个人任务管理</el-breadcrumb-item>
        <el-breadcrumb-item>员工任务管理</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
    </div>
    <div class="content">
      <el-table :data="taskList" style="width: 100%" height="300" v-loading="loading">
        <el-table-column prop="taskName" label="任务名称" width="180"></el-table-column>
        <el-table-column prop="startTime" label="开始时间" width="160"></el-table-column>
        <el-table-column prop="endTime" label="结束时间" width="160"></el-table-column>
        <el-table-column label="分配情况">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>描述: {{ scope.row.desc }}</p>
              <p>
                员工:
                <span
                  v-for="item in scope.row.staffs"
                  :key="item"
                  style="margin-right:3px"
                >{{item}}</span>
              </p>
              <div slot="reference" class="name-wrapper">
                <el-tag
                  size="medium"
                  :type="scope.row.status === '已分配' ? 'success' : 'info'"
                >{{ scope.row.status }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="open(scope.$index, scope.row)" plain>分配</el-button>
            <br />
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              plain
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top:20px">
        <el-button>录入新任务</el-button>
      </div>
    </div>
    <el-dialog title="分配任务" :visible.sync="dialogFormVisible">
      <div>
        <el-select v-model="staffs" multiple placeholder="请选择分配员工">
          <el-option v-for="item in options" :key="item" :label="item" :value="item"></el-option>
        </el-select>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="assginTask()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskList: [
        {
          taskName: "中铁集团冶炼项目",
          desc: "中铁集团冶炼项目",
          startTime: "2019-11-23 15:00:00",
          endTime: "2019-11-27 16:00:00",
          status: "已分配",
          staffs: ["朱海锋", "李龙森"]
        },
        {
          taskName: "技术培训",
          desc: "技术岗培训",
          startTime: "2019-11-23 15:00:00",
          endTime: "2019-11-27 16:00:00",
          status: "未分配",
          staffs: []
        },
        {
          taskName: "产品升级维护",
          desc: "东软服务器维护",
          startTime: "2019-11-23 15:00:00",
          endTime: "2019-11-27 16:00:00",
          status: "已分配",
          staffs: ["朱海锋"]
        }
      ],
      dialogFormVisible: false,
      index: "",
      staffs: [],
      options: ["谭子熠", "朱海锋", "郑奕", "李龙森"],
      loading: true
    };
  },
  methods: {
    open(index, row) {
      this.index = index;
      this.staffs = row.staffs;
      this.dialogFormVisible = true;
    },
    assginTask() {
      this.taskList[this.index].staffs = this.staffs;
      this.taskList[this.index].status =
        this.taskList[this.index].staffs.length === 0 ? "未分配" : "已分配";
      this.dialogFormVisible = false;
      this.refreshTable();
      this.$message({
        message: "分配任务成功!",
        type: "success"
      });
    },
    refreshTable() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }
  },
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
};
</script>
<style scoped>
</style>