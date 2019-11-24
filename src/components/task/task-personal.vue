<template>
  <div>
    <div>
      <el-page-header content="个人任务管理"></el-page-header>
      <el-divider></el-divider>
    </div>
    <div>
      <el-table :data="taskList" style="width: 100%" height="265" v-loading="loading">
        <el-table-column prop="taskName" label="任务名称" width="180"></el-table-column>
        <el-table-column prop="tag" label="标签" width="180">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.tag === '个人' ? 'primary' : 'warning'"
              disable-transitions
            >{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="startTime" label="开始时间"></el-table-column>
        <el-table-column prop="endTime" label="结束时间"></el-table-column>
        <el-table-column prop="status" label="完成情况"></el-table-column>
      </el-table>
    </div>
    <div class="task-operation">
      <el-button @click="dialogVisible=true">添加个人任务</el-button>
      <el-button @click="navigateByUrl('/home/task_management')" :disabled="mana">员工任务管理</el-button>
    </div>

    <el-dialog title="添加个人任务" :visible.sync="dialogVisible">
      <el-form :model="form">
        <el-form-item label="任务名称" :label-width="formLabelWidth">
          <el-input v-model="form.taskName" autocomplete="off" placeholder="请输入任务"></el-input>
        </el-form-item>
        <el-form-item label="任务描述" :label-width="formLabelWidth">
          <el-input v-model="form.description" autocomplete="off" placeholder="请输入任务描述"></el-input>
        </el-form-item>
        <el-form-item label="开始时间" :label-width="formLabelWidth">
          <el-date-picker
            v-model="form.startTime"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            placeholder="选择开始时间"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="结束时间" :label-width="formLabelWidth">
          <el-date-picker
            v-model="form.endTime"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            placeholder="结束时间"
          ></el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addTask()" v-loading="btnLoading">确 定</el-button>
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
          tag: "分配",
          startTime: "2019-11-23 15:00:00",
          endTime: "2019-12-29 8:00:00",
          status: "未完成"
        },
        {
          taskName: "技术培训",
          tag: "个人",
          startTime: "2019-11-23 15:00:00",
          endTime: "2019-11-27 15:00:00",
          status: "已完成"
        },
        {
          taskName: "产品升级维护",
          tag: "分配",
          startTime: "2019-10-23 8:30:00",
          endTime: "2019-11-00 22:00:00",
          status: "已完成"
        }
      ],
      loading: true,
      btnLoading: false,
      dialogVisible: false,
      formLabelWidth: "120px",
      form: {
        taskName: "",
        description: "",
        tag: "个人",
        startTime: "",
        endTime: "",
        status: "未完成"
      },
      mana: false
    };
  },
  methods: {
    addTask() {
      this.btnLoading = true;
      const newTask = this.form;
      this.taskList.push(newTask);
      setTimeout(() => {
        this.btnLoading = false;
        this.dialogVisible = false;
        this.$message({
          message: "添加个人计划成功!",
          type: "success"
        });
        this.refreshTable();
      }, 1000);
      this.form = {
        taskName: "",
        description: "",
        tag: "个人",
        startTime: "",
        endTime: "",
        status: "未完成"
      };
    },
    refreshTable() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    navigateByUrl(url) {
      this.$router.push({
        path: url
      });
    }
  },
  created() {
    this.sys = sessionStorage.getItem("sys") === "0" ? false : true;
    this.mana = sessionStorage.getItem("mana") === "0" ? false : true;
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
};
</script>

<style scoped lang="less">
.task-operation {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>