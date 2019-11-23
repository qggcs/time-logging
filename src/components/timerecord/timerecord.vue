<template>
  <div>
    <div>
      <el-page-header content="时间记录"></el-page-header>
      <el-divider></el-divider>
    </div>
    <div>
      <el-collapse v-model="active" accordion>
        <el-collapse-item v-for="(item,i) in taskList" :key="i" :name="''+i">
          <template slot="title">
            <div class="task-title">
              <div>
                <span>{{item.title}}</span>
              </div>
              <div style="margin-left:10px">
                <i class="el-icon-plus"></i>
              </div>
            </div>
          </template>
          <ul>
            <li v-for="(tr,i) in item.timerecords" :key="i">
              <div class="row">
                <div class="left">
                  <!-- <i class="el-icon-alarm-clock" style="font-size:40px"></i> -->
                  <div style="font-size:20px;line-height:1.2em">
                    <div>{{tr.type}}</div>
                    <div style="font-size:23px;">{{tr.time|timeFilter(tr.time)}}</div>
                  </div>
                </div>
                <div class="right">
                  <i class="el-icon-video-play" style="color:#51c121"></i>
                  <i class="el-icon-lock" style="color:#f1392f"></i>
                </div>
              </div>
            </li>
          </ul>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskList: [
        {
          title: "中铁集团冶炼项目",
          timerecords: [
            {
              type: "工作",
              time: 51851
            },
            {
              type: "休息",
              time: 11507
            },
            {
              type: "交通",
              time: 17123
            },
            {
              type: "调研",
              time: 13457
            }
          ]
        },
        {
          title: "技术培训",
          timerecords: [
            {
              type: "工作",
              time: 54881
            },
            {
              type: "休息",
              time: 5004
            },
            {
              type: "交通",
              time: 1000
            },
            {
              type: "WPS",
              time: 48246
            }
          ]
        },
        {
          title: "心里咨询",
          timerecords: [
            {
              type: "工作",
              time: 87246
            },
            {
              type: "休息",
              time: 1234
            },
            {
              type: "交通",
              time: 3647
            },
            {
              type: "调研",
              time: 500
            }
          ]
        }
      ],
      active: "0"
    };
  },
  filters: {
    timeFilter(value) {
      let result = parseInt(value);
      let h =
        Math.floor(result / 3600) < 10
          ? "0" + Math.floor(result / 3600)
          : Math.floor(result / 3600);
      let m =
        Math.floor((result / 60) % 60) < 10
          ? "0" + Math.floor((result / 60) % 60)
          : Math.floor((result / 60) % 60);
      let s =
        Math.floor(result % 60) < 10
          ? "0" + Math.floor(result % 60)
          : Math.floor(result % 60);
      result = `${h}:${m}:${s}`;
      return result;
    }
  }
};
</script>
<style scoped>
li {
  margin: 0;
  padding: 0;
  line-height: 14px;
}

ul {
  margin: 0;
  padding: 0;
  line-height: 14px;
}

li {
  list-style: none;
}

.row {
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
  border-bottom: #e4e7ed 1px solid;
}

.left {
  display: flex;
}

.right {
  font-size: 40px;
}

.task-title {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
}

.right i {
  cursor: pointer;
  border-radius: 50%;
}

i:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
</style>