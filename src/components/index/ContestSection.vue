<template>
  <div class="section-contest">
    <div class="contest-bg"></div>
    <transition name="fade">
      <div class="nav-bar-wrapper" v-if="$root.currentPage === 3">
        <div class="nav-bar">
          <div class="item logo" @click="clickLogo">SCU Online Judge</div>
          <div class="item">参加比赛</div>
          <div class="item">举办比赛</div>
          <div class="item logout float-right">退出登录状态</div>
          <div class="item logout float-right" @click="clickLogo">王兆基</div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="container" v-if="$root.currentPage === 3">
        <div class="am-g am-g-fixed">
          <div class="am-u-sm-8" style="padding-right: 0;">
            <div class="card">
              <div class="header">
                <h2>SCU ACM 校内赛通知</h2>
              </div>
              <div class="content">
                <table class="am-table am-table-hover am-table-compact">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Start Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in $root.scuOjContestsInformation.slice(0,4)" :key="item.id" @click="$router.push(`/contest/${item.id}`)" style="cursor: pointer;">
                      <td>{{item.name}}</td>
                      <td>{{item.start_time}}</td>
                      <td>{{item.week}}</td>
                    </tr>
                  </tbody>
                </table>
                <a href="javascript:" style="display: inline-block; margin-top: 0;" data-am-modal="{target: '#scu-oj-contests-information-popup'}">查看全部 SCU ACM 校内赛通知</a>
              </div>
            </div>
            <div class="card">
              <div class="header">
                <h2>各大OJ近期比赛汇总</h2>
              </div>
              <div class="content">
                <table class="am-table am-table-hover am-table-compact">
                  <thead>
                    <tr>
                      <th>OJ</th>
                      <th>Name</th>
                      <th>Start Time</th>
                      <th>Access</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in $root.ojContestsInformation.slice(0,3)" :key="item.id" @click="$root.openLink(item.link)" style="cursor: pointer;">
                      <td class="am-text-middle">{{item.oj}}</td>
                      <td class="am-text-middle">{{item.name}}</td>
                      <td class="am-text-middle">{{item.start_time}}</td>
                      <td class="am-text-middle">{{item.access}}</td>
                    </tr>
                  </tbody>
                </table>
                <a href="javascript:" style="display: inline-block; margin-top: 0;" data-am-modal="{target: '#oj-contests-information-popup'}">查看全部近期比赛汇总</a>
              </div>
            </div>
          </div>
          <div class="am-u-sm-4" style="padding-left: 0;">
            <div class="card current-contest">
              <div class="header">
                <div class="title">正在参加</div>
                <div class="subtitle">SCU ACM 第七次训练赛</div>
              </div>
              <div class="content">
                <div class="image">
                  <img src="../../assets/icpc_logo.png" class="am-img-responsive" alt="" />
                </div>
                <div class="status">
                  <div class="am-g">
                    <div class="highlight am-u-sm-4">
                      总题数
                    </div>
                    <div class="am-u-sm-6 am-text-center">
                      20
                    </div>
                  </div>
                  <div class="am-g">
                    <div class="highlight am-u-sm-6">
                      您已完成
                    </div>
                    <div class="am-u-sm-6 am-text-center">
                      16
                    </div>
                  </div>
                  <div class="am-g">
                    <div class="highlight am-u-sm-6">
                      总提交数
                    </div>
                    <div class="am-u-sm-6 am-text-center">
                      72
                    </div>
                  </div>
                  <div class="am-g">
                    <div class="highlight am-u-sm-6">
                      通过率
                    </div>
                    <div class="am-u-sm-6 am-text-center">
                      78.86%
                    </div>
                  </div>
                  <div class="am-g">
                    <div class="highlight am-u-sm-6">
                      总耗时
                    </div>
                    <div class="am-u-sm-6 am-text-center">
                      15 小时 28 分
                    </div>
                  </div>
                  <div class="am-g">
                    <div class="highlight am-u-sm-6">
                      当前排名
                    </div>
                    <div class="am-u-sm-6 am-text-center">
                      1
                    </div>
                  </div>
                  <br/>
                  <button class="am-btn am-btn-default am-btn-block">
                    <i class="am-icon-check"></i>
                    继续刚比赛
                  </button>
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
  name: 'ProblemSection',
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
    window.$('#oj-contests-information-popup').on('open.modal.amui', () => {
      window.$.fn.fullpage.setAllowScrolling(false)
      window.$.fn.fullpage.setKeyboardScrolling(false)
    })
    window.$('#oj-contests-information-popup').on('close.modal.amui', () => {
      window.$.fn.fullpage.setAllowScrolling(true)
      window.$.fn.fullpage.setKeyboardScrolling(true)
    })
    window.$('#scu-oj-contests-information-popup').on('open.modal.amui', () => {
      window.$.fn.fullpage.setAllowScrolling(false)
      window.$.fn.fullpage.setKeyboardScrolling(false)
    })
    window.$('#scu-oj-contests-information-popup').on('close.modal.amui', () => {
      window.$.fn.fullpage.setAllowScrolling(true)
      window.$.fn.fullpage.setKeyboardScrolling(true)
    })
  }
}
</script>

<style scoped>
.current-contest .title {
  text-align: center;
  font-size: 2rem;
}

.current-contest .subtitle {
  text-align: center;
  font-size: 2rem;
}

.current-contest .status {
  margin-top: 2rem;
}

.section-contest {
  width: 100%;
  height: 100vh;
  font-weight: lighter;
}

.section-contest .container {
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

.contest-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../../assets/index-bg-contest.jpg") top no-repeat;
  background-image: url("../../assets/index-bg-contest.jpg");
  background-size: cover;
  opacity: 0.2;
}
</style>
