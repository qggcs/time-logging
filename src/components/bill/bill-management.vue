<template>
  <div>
    <div>
      <el-page-header content="账单管理"></el-page-header>
      <el-divider></el-divider>
    </div>
    <div>
      <el-table :data="billList" style="width: 100%" v-loading="loading">
        <el-table-column prop="taskName" label="任务名称" width="120"></el-table-column>
        <el-table-column label="客户名称" width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.customerName }}</p>
              <p>联系方式: {{ scope.row.customerPhoneNumber }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.customerName }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="time" label="最后修改时间"></el-table-column>
        <el-table-column label="费率">
          <template slot-scope="scope">{{scope.row.feeRate * 100}}%</template>
        </el-table-column>
        <el-table-column prop="fee" label="金额"></el-table-column>
        <el-table-column prop="paid" label="状态">
          <template slot-scope="scope">
            <el-tag :type="scope.row.paid==='已支付'?'success':'warning'">{{scope.row.paid}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot="header">
            <el-button type="primary" size="small" plain :disabled="mana">设置费率</el-button>
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              :disabled="scope.row.status === '已生成' "
              @click="open(scope.row)"
            >生成</el-button>
            <el-button
              size="mini"
              type="text"
              :disabled="scope.row.status !== '已生成' "
              @click="print()"
            >打印</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="账单预览" :visible.sync="dialogFormVisible">
      <el-form :model="form" :inline="true" label-width="150px">
        <el-form-item label="活动名称">
          <el-input v-model="form.taskName"></el-input>
        </el-form-item>
        <el-form-item label="活动时间(小时)">
          <el-input v-model="form.service" disabled></el-input>
        </el-form-item>
        <el-form-item label="客户姓名">
          <el-input v-model="form.customerName"></el-input>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input v-model="form.customerPhoneNumber"></el-input>
        </el-form-item>
        <el-form-item label="费率">
          <el-input v-model="form.feeRate" disabled></el-input>
        </el-form-item>
        <el-form-item label="金额">
          <el-input v-model="form.fee" disabled></el-input>
        </el-form-item>
        <el-form-item label="操作员">
          <el-input v-model="form.operator" disabled></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addBill()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      billList: [
        {
          taskName: "技术咨询",
          customerName: "王峰",
          customerPhoneNumber: "13840304617",
          time: "2019-11-24 15:24:36",
          service: 10,
          feeRate: 0.15,
          fee: 540,
          status: "未生成",
          paid: "未支付",
          operator: "朱海锋"
        },
        {
          taskName: "系统维护",
          customerName: "钟尚",
          customerPhoneNumber: "15177617159",
          time: "2019-10-30 08:08:36",
          service: 4,
          feeRate: 0.27,
          fee: 1870,
          status: "已生成",
          paid: "已支付",
          operator: "朱海锋"
        },
        {
          taskName: "系统部署",
          customerName: "吴磊",
          customerPhoneNumber: "15866541598",
          time: "2019-11-10 15:24:36",
          service: 42,
          feeRate: 0.1,
          fee: 3800,
          status: "已生成",
          paid: "未支付",
          operator: "朱海锋"
        }
      ],
      loading: false,
      dialogFormVisible: false,
      formLabelWidth: "180px",
      form: {
        taskName: "系统部署",
        customerName: "武磊",
        service: 4,
        customerPhoneNumber: "15866541598",
        time: "2019-11-10 15:24:36",
        feeRate: 0.1,
        fee: 3800,
        status: "已生成",
        paid: "未支付",
        operator: "朱海锋"
      },
      mana: false
    };
  },
  methods: {
    open(row) {
      this.dialogFormVisible = true;
      this.form = row;
    },
    addBill() {
      this.$confirm("确认所有信息完整无误?", "确认生成", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.dialogFormVisible = false;
          this.$message({
            type: "success",
            message: "生成成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消生成"
          });
        });
    },
    print() {
      const loading = this.$loading({
        lock: true,
        text: "拼命打印中...",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      setTimeout(() => {
        loading.close();
        this.$notify({
          title: "打印成功",
          message: "",
          type: "success",
          offset: 30
        });
      }, 1000);
    }
  },
  created() {
    this.mana = sessionStorage.getItem("mana") === "0" ? false : true;
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
};
</script>
<style scoped>
</style>