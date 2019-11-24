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
                  <div style="font-size:20px;line-height:1.2em">
                    <div>{{tr.type}}</div>
                    <div style="font-size:23px;">{{tr.time|timeFilter(tr.time)}}</div>
                  </div>
                </div>
                <div class="right">
                  <i :class="tr.icon" style="color:#67C23A" @click="beginTimer(tr)"></i>
                  <i class="el-icon-refresh" style="color:#F56C6C"></i>
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
              time: 51851,
              timer: null,
              icon: "el-icon-video-play"
            },
            {
              type: "休息",
              time: 11507,
              icon: "el-icon-video-play"
            },
            {
              type: "交通",
              time: 17123,
              timer: null,
              icon: "el-icon-video-play"
            },
            {
              type: "调研",
              time: 13457,
              timer: null,
              icon: "el-icon-video-play"
            }
          ]
        },
        {
          title: "技术培训",
          timerecords: [
            {
              type: "工作",
              time: 54881,
              timer: null,
              icon: "el-icon-video-play"
            },
            {
              type: "休息",
              time: 5004,
              timer: null,
              icon: "el-icon-video-play"
            },
            {
              type: "交通",
              time: 1000,
              timer: null,
              icon: "el-icon-video-play"
            },
            {
              type: "WPS",
              time: 48246,
              timer: null,
              icon: "el-icon-video-play"
            }
          ]
        },
        {
          title: "心里咨询",
          timerecords: [
            {
              type: "工作",
              time: 87246,
              timer: null,
              icon: "el-icon-video-play"
            },
            {
              type: "休息",
              time: 1234,
              timer: null,
              icon: "el-icon-video-play"
            },
            {
              type: "交通",
              time: 3647,
              timer: null,
              icon: "el-icon-video-play"
            },
            {
              type: "调研",
              time: 500,
              timer: null,
              icon: "el-icon-video-play"
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
  },
  methods: {
    beginTimer(tr) {
      if (tr.timer) {
        this.pauseTimer(tr);
        return;
      }
      tr.timer = setInterval(() => {
        tr.time++;
      }, 1000);
      tr.icon = "el-icon-video-pause";
    },
    pauseTimer(tr) {
      clearInterval(tr.timer);
      tr.icon = "el-icon-video-play";
      tr.timer = null;
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

i {
  cursor: pointer;
  border-radius: 50%;
  transition: font-weight 1s all;
}

i:hover {
  font-weight: 600;
}
</style>