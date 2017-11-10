<template>
  <div class="section-contest">
    <div class="contest-bg"></div>
    <transition name="fade">
      <div class="nav-bar-wrapper" v-if="$root.currentPage === 3">
        <div class="nav-bar">
          <div class="item logo" @click="clickLogo">SCU Online Judge</div>
          <div class="item" @click="$router.push('/contest_list')">参加比赛</div>
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
                  <table style="width: 100%; border-collapse: separate; border-spacing: 0 0.5rem;">
                    <tbody>
                      <tr>
                        <td style="font-weight: normal;">总题数</td>
                        <td align="right">10</td>
                      </tr>
                      <tr>
                        <td style="font-weight: normal;">您已完成</td>
                        <td align="right">6</td>
                      </tr>
                      <tr>
                        <td style="font-weight: normal;">总提交数</td>
                        <td align="right">72</td>
                      </tr>
                      <tr>
                        <td style="font-weight: normal;">通过率</td>
                        <td align="right">78.86%</td>
                      </tr>
                      <tr>
                        <td style="font-weight: normal;">总耗时</td>
                        <td align="right">15 小时 28 分</td>
                      </tr>
                      <tr>
                        <td style="font-weight: normal;">当前排名</td>
                        <td align="right">1</td>
                      </tr>
                    </tbody>
                  </table>
                  <br/>
                  <button class="am-btn am-btn-default am-btn-block" @click="$router.push('/contest/7')">
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
