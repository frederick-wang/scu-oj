<template>
  <div class="section-information">
    <div class="information-bg"></div>
    <transition name="fade">
      <div class="nav-bar-wrapper" v-if="$root.currentPage === 4">
        <div class="nav-bar">
          <div class="item logo" @click="clickLogo">SCU Online Judge</div>
          <div class="item">修改个人资料</div>
          <div class="item">评测记录</div>
          <div class="item">刷题统计</div>
          <div class="item">私信</div>
          <div class="item logout float-right">退出登录状态</div>
          <div class="item logout float-right" @click="clickLogo">王兆基</div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="container" v-if="$root.currentPage === 4">
        <div class="am-g am-g-fixed">
          <div class="am-u-sm-6" style="padding-right: 0;">
            <div class="card">
              <div class="header">
                <h2>公告</h2>
              </div>
              <div class="content">
                <table class="am-table am-table-hover am-table-compact">
                  <thead>
                    <tr>
                      <th>标题</th>
                      <th>时间</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in $root.announcementList.slice(0,3)" :key="item.id" style="cursor: pointer;">
                      <td style="font-weight: normal;">{{item.title}}</td>
                      <td>{{item.time}}</td>
                    </tr>
                  </tbody>
                </table>
                <a href="javascript:" style="display: inline-block; margin-top: 0;" data-am-modal="{target: '#announcement-list-popup'}">查看全部公告</a>
              </div>
            </div>
            <div class="card">
              <div class="header">
                <h2>私信</h2>
              </div>
              <div class="content">
                <table class="am-table am-table-hover am-table-compact">
                  <thead>
                    <tr>
                      <th>标题</th>
                      <th>发件人</th>
                      <th>时间</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in $root.messageList.slice(0,3)" :key="item.id" style="cursor: pointer;">
                      <td style="font-weight: normal;">{{item.title}}</td>
                      <td>{{item.addresser}}</td>
                      <td>{{item.time}}</td>
                    </tr>
                  </tbody>
                </table>
                <a href="javascript:" style="display: inline-block; margin-top: 1rem;" data-am-modal="{target: '#message-list-popup'}">查看全部私信</a>
              </div>
            </div>
            <div class="card">
              <div class="header">
                <h2>联系我们</h2>
              </div>
              <div class="content">
                <p>邮箱：
                  <a href="mailto:hwoam@outlook.com">hwoam@outlook.com</a>
                </p>
              </div>
            </div>
          </div>
          <div class="am-u-sm-6" style="padding-left: 0;">
            <div class="profile card">
              <div class="header">
                <h2>个人资料</h2>
              </div>
              <div class="content">
                <table style="width: 100%;">
                  <tbody>
                    <tr>
                      <td style="font-weight: normal;">用户名：</td>
                      <td>王兆基</td>
                    </tr>
                    <tr>
                      <td style="font-weight: normal;">学院：</td>
                      <td>计算机学院</td>
                    </tr>
                    <tr>
                      <td style="font-weight: normal;">Email：</td>
                      <td>hwoam@outlook.com</td>
                    </tr>
                    <tr>
                      <td style="font-weight: normal;">QQ：</td>
                      <td>1095875055</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card statistics">
              <div class="header">
                <h2>刷题情况统计</h2>
              </div>
              <div class="content">
                <div class="am-g">
                  <div class="am-u-sm-12">
                    <div id="chart" style="width: 100%; height:25rem; margin-bottom: 2rem;">
                    </div>
                  </div>
                </div>
                <table style="width: 100%;">
                  <tbody>
                    <tr>
                      <td style="font-weight: normal;">总通过量：</td>
                      <td>692</td>
                      <td style="font-weight: normal;">总提交量：</td>
                      <td>973</td>
                    </tr>
                    <tr>
                      <td style="font-weight: normal;">全站排名：</td>
                      <td>36</td>
                      <td style="font-weight: normal;">获得称号：</td>
                      <td>学富五车</td>
                    </tr>
                  </tbody>
                </table>
                <div class="am-g">
                  <div class="am-u-sm-12">
                    <a href="javascript:" style="display: inline-block; margin-top: 1rem;">查看详细统计数据</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'InformationSection',
  data () {
    return {

    }
  },
  methods: {
    clickLogo () {
      window.$.fn.fullpage.moveTo(1)
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.section-information {
  width: 100%;
  height: 100vh;
  font-weight: lighter;
}

.section-information .container {
  padding-top: 5rem;
  width: 100%;
}

.nav-bar-wrapper {
  position: absolute;
  top: 0;
  width: 100%;
  height: 5rem;
  overflow: hidden;
  background: #fff;
  background-clip: border-box;
  border-bottom: 1px solid rgba(30, 35, 42, 0.06);
  box-shadow: 0 1px 3px 0 rgba(0, 34, 77, 0.05);
  background-clip: content-box;
}

.nav-bar {
  width: 100rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  padding: 0 2rem;
}

.nav-bar-wrapper .nav-bar .logo {
  padding-left: 1rem;
  font-size: 1.8rem;
  font-weight: normal;
}

.nav-bar .item {
  display: inline-block;
  line-height: 5rem;
  padding: 0 1.6rem;
  cursor: pointer;
}

.nav-bar .item:last-child {
  padding-right: 1rem;
}

.card .content .am-g .highlight {
  font-weight: normal;
}

.float-right {
  float: right;
}

.information-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../../assets/index-bg-information.jpg") top no-repeat;
  background-image: url("../../assets/index-bg-information.jpg");
  background-size: cover;
  opacity: 0.2;
}
</style>
