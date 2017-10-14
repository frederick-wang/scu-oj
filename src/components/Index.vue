<template>
  <div id="fullpage" class="index">
    <div class="section">
      <div class="entry">
        <div class="entry-bg"></div>
        <transition name="fade-fast">
          <div class="function-bar" v-if="currentOptions != 0 && currentPage === 1">
            <transition name="fade-fast">
              <div class="options options-problem" v-if="currentOptions === 1">
                <div class="am-g">
                  <div v-bind:class="[largeInput ? 'am-u-sm-6' : 'am-u-sm-9']">
                    <div class="item">我正在做的题目</div>
                    <div class="item">完整题库</div>
                  </div>
                  <div v-bind:class="[largeInput ? 'am-u-sm-6' : 'am-u-sm-3']">
                    <div class="search-problem-wrapper">
                      <div class="input-wrapper">
                        <div class="am-input-group">
                          <span class="am-input-group-btn">
                            <button class="am-btn am-btn-default" style="background-color: #333; border: 1px solid #fff;" type="button">
                              <span class="am-icon-search" style="color: #fff;"></span>
                            </button>
                          </span>
                          <input type="text" class="am-form-field" style="border: 1px solid #fff; background-color: #333; color: #fff;" placeholder="在这里搜索题目" @focus="inputFocus" @blur="inputBlur">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
            <transition name="fade-fast">
              <div class="options options-contest" v-if="currentOptions === 2">
                <div class="am-g">
                  <div v-bind:class="[largeInput ? 'am-u-sm-6' : 'am-u-sm-9']">
                    <div class="item">我正在参加的比赛</div>
                    <div class="item">我的排名</div>
                    <div class="item">所有比赛列表</div>
                    <div class="item">举办比赛</div>
                  </div>
                  <div v-bind:class="[largeInput ? 'am-u-sm-6' : 'am-u-sm-3']">
                    <div class="search-problem-wrapper">
                      <div class="input-wrapper">
                        <div class="am-input-group">
                          <span class="am-input-group-btn">
                            <button class="am-btn am-btn-default" style="background-color: #333; border: 1px solid #fff;" type="button">
                              <span class="am-icon-search" style="color: #fff;"></span>
                            </button>
                          </span>
                          <input type="text" class="am-form-field" style="border: 1px solid #fff; background-color: #333; color: #fff;" placeholder="在这里搜索比赛" @focus="inputFocus" @blur="inputBlur">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
            <transition name="fade-fast">
              <div class="options options-information" v-if="currentOptions === 3">
                <div class="am-g">
                  <div class="am-u-sm-9">
                    <div class="item">个人资料</div>
                    <div class="item">评测记录</div>
                    <div class="item">刷题统计</div>
                    <div class="item">通知</div>
                    <div class="item">私信</div>
                  </div>
                  <div class="am-u-sm-3">
                    <div class="item float-right">退出登录状态</div>
                    <div class="item float-right" @click="clickInformation">王兆基</div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </transition>
        <transition name="fade">
          <div class="headline" v-if="currentPage === 1">
            <div class="title">SCU Online Judge</div>
            <div class="subtitle">海纳百川 有容乃大</div>
          </div>
        </transition>
        <transition name="fade">
          <div class="btn-group" v-if="currentPage === 1">
            <div class="btn problem" @mouseover="overBtn(1)">查看题库</div>
            <div class="btn contest" @mouseover="overBtn(2)">开始比赛</div>
            <div class="btn information" @mouseover="overBtn(3)" @click="clickInformation">个人中心</div>
          </div>
        </transition>
      </div>
    </div>
    <div class="section">
      <div class="informaion">
        <div class="information-bg"></div>
        <transition name="fade">
          <div class="nav-bar-wrapper" v-if="currentPage === 2">
            <div class="nav-bar">
              <div class="item logo" @click="clickLogo">SCU Online Judge</div>
              <div class="item problem">全部题库</div>
              <div class="item contest">比赛列表</div>
              <div class="item logout float-right">退出登录状态</div>
              <div class="item logout float-right" @click="clickLogo">王兆基</div>
            </div>
          </div>
        </transition>
        <transition name="fade">
          <div class="container" v-if="currentPage === 2">
            <div class="am-g am-g-fixed">
              <div class="am-u-sm-6">
                <div class="card">
                  <div class="header">
                    <h2>公告</h2>
                  </div>
                  <div class="content">
                    <div class="am-g">
                      <div class="highlight am-u-sm-4">
                        2017-10-19
                      </div>
                      <div class="am-u-sm-8">
                        测试一下哦
                      </div>
                    </div>
                    <div class="am-g">
                      <div class="highlight am-u-sm-4">
                        2017-10-18
                      </div>
                      <div class="am-u-sm-8">
                        测试一下哦
                      </div>
                    </div>
                    <div class="am-g">
                      <div class="highlight am-u-sm-4">
                        2017-10-17
                      </div>
                      <div class="am-u-sm-8">
                        测试一下哦
                      </div>
                    </div>
                    <div class="am-g">
                      <div class="highlight am-u-sm-4">
                        2017-10-16
                      </div>
                      <div class="am-u-sm-8">
                        测试一下哦
                      </div>
                    </div>
                    <div class="am-g">
                      <div class="highlight am-u-sm-4">
                        2017-10-15
                      </div>
                      <div class="am-u-sm-8">
                        测试一下哦
                      </div>
                    </div>
                    <div class="am-g">
                      <div class="am-u-sm-12">
                        <a href="#" style="display: inline-block; margin-top: 1rem;">查看全部公告</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="header">
                    <h2>比赛通知</h2>
                  </div>
                  <div class="content">
                    <div class="am-g">
                      <div class="highlight am-u-sm-4">
                        2017-10-19
                      </div>
                      <div class="am-u-sm-8">
                        SCU ACM 第五次训练赛开始
                      </div>
                    </div>
                    <div class="am-g">
                      <div class="highlight am-u-sm-4">
                        2017-10-18
                      </div>
                      <div class="am-u-sm-8">
                        SCU ACM 第四次训练赛开始
                      </div>
                    </div>
                    <div class="am-g">
                      <div class="highlight am-u-sm-4">
                        2017-10-17
                      </div>
                      <div class="am-u-sm-8">
                        SCU ACM 第三次训练赛开始
                      </div>
                    </div>
                    <div class="am-g">
                      <div class="highlight am-u-sm-4">
                        2017-10-16
                      </div>
                      <div class="am-u-sm-8">
                        SCU ACM 第二次训练赛开始
                      </div>
                    </div>
                    <div class="am-g">
                      <div class="highlight am-u-sm-4">
                        2017-10-15
                      </div>
                      <div class="am-u-sm-8">
                        SCU ACM 第一次训练赛开始
                      </div>
                    </div>
                    <div class="am-g">
                      <div class="am-u-sm-12">
                        <a href="#" style="display: inline-block; margin-top: 1rem;">查看全部比赛通知</a>
                      </div>
                    </div>
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
                    <p>QQ：
                      <a href="http://wpa.qq.com/msgrd?v=3&uin=&site=qq&menu=yes">1095875055</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="am-u-sm-6">
                <div class="profile card">
                  <div class="header">
                    <h2>个人资料</h2>
                  </div>
                  <div class="content">
                    <div class="am-g">
                      <div class="highlight am-u-sm-6">
                        用户名：
                      </div>
                      <div class="am-u-sm-6">
                        王兆基
                      </div>
                    </div>
                    <div class="am-g">
                      <div class="highlight am-u-sm-6">
                        学院：
                      </div>
                      <div class="am-u-sm-6">
                        计算机学院
                      </div>
                    </div>
                    <div class="am-g">
                      <div class="highlight am-u-sm-6">
                        Email：
                      </div>
                      <div class="am-u-sm-6">
                        hwoam@outlook.com
                      </div>
                    </div>
                    <div class="am-g">
                      <div class="highlight am-u-sm-6">
                        QQ：
                      </div>
                      <div class="am-u-sm-6">
                        1095875055
                      </div>
                    </div>
                    <div class="am-g">
                      <div class="highlight am-u-sm-6">
                        密码：
                      </div>
                      <div class="am-u-sm-6">
                        <a href="#">修改密码</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <!-- <h2 class="more-btn">查看全部</h2> -->
                  <div class="header">
                    <h2>评测记录</h2>
                  </div>
                  <div class="content">
                    <div class="am-g">
                      <div class="highlight am-u-sm-3">
                        [1024]
                      </div>
                      <div class="am-u-sm-6">
                        A+B Problem X
                      </div>
                      <div class="am-u-sm-3">
                        Accepted
                      </div>
                    </div>
                    <div class="am-g">
                      <div class="highlight am-u-sm-3">
                        [2048]
                      </div>
                      <div class="am-u-sm-6">
                        一元三次方程求解
                      </div>
                      <div class="am-u-sm-3">
                        Accepted
                      </div>
                    </div>
                    <div class="am-g">
                      <div class="highlight am-u-sm-3">
                        [1536]
                      </div>
                      <div class="am-u-sm-6">
                        加分二叉树
                      </div>
                      <div class="am-u-sm-3">
                        Accepted
                      </div>
                    </div>
                    <div class="am-g">
                      <div class="highlight am-u-sm-3">
                        [1453]
                      </div>
                      <div class="am-u-sm-6">
                        传染病控制
                      </div>
                      <div class="am-u-sm-3">
                        Failed
                      </div>
                    </div>
                    <div class="am-g">
                      <div class="highlight am-u-sm-3">
                        [666]
                      </div>
                      <div class="am-u-sm-6">
                        装箱问题
                      </div>
                      <div class="am-u-sm-3">
                        Accepted
                      </div>
                    </div>
                    <div class="am-g">
                      <div class="am-u-sm-12">
                        <a href="#" style="display: inline-block; margin-top: 1rem;">查看全部评测记录</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card statistics">
                  <div class="header">
                    <h2>刷题统计</h2>
                  </div>
                  <div class="content">
                    <div class="am-g">
                      <div class="highlight am-u-sm-6">
                        总通过量：
                      </div>
                      <div class="am-u-sm-6">
                        692
                      </div>
                    </div>
                    <div class="am-g">
                      <div class="highlight am-u-sm-6">
                        总提交量：
                      </div>
                      <div class="am-u-sm-6">
                        973
                      </div>
                    </div>
                    <div class="am-g">
                      <div class="am-u-sm-12">
                        <a href="#" style="display: inline-block; margin-top: 1rem;">查看详细统计数据及图表</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'
// import _ from 'lodash'

export default {
  name: 'Index',
  data () {
    return {
      currentPage: 1,
      currentOptions: 0,
      largeInput: false
    }
  },
  methods: {
    overBtn (value) {
      this.currentOptions = value
      this.largeInput = false
    },
    inputFocus () {
      this.largeInput = true
    },
    inputBlur () {
      this.largeInput = false
    },
    clickInformation () {
      window.$.fn.fullpage.moveTo(2)
    },
    clickLogo () {
      window.$.fn.fullpage.moveTo(1)
    }
  },
  mounted () {
    if (!window.$('html').hasClass('fp-enabled')) {
      window.$('#fullpage').fullpage({
        sectionsColor: ['#f3f3f3', '#f3f3f3'],
        scrollOverflow: true,
        onLeave: (index, nextIndex, direction) => {
          this.currentPage = nextIndex
        },
        afterLoad: (anchorLink, index) => {
          window.$.fn.fullpage.reBuild()
        }
      })
    }
  },
  beforeDestory () {
    window.$.fn.fullpage.destroy('all')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.entry {
  position: relative;
  width: 100%;
  height: 100vh;
}

.entry-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/North_gate_of_SCU.jpg") top no-repeat;
  background-image: url("../assets/North_gate_of_SCU.jpg");
  background-size: auto auto;
  background-size: cover;
  opacity: .2;
}

.information-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/background-information.jpg") top no-repeat;
  background-image: url("../assets/background-information.jpg");
  background-size: auto auto;
  background-size: cover;
  opacity: .2;
}

.function-bar {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5rem;
  background: rgba(0, 0, 0, .8);
}

.options {
  position: relative;
  height: 5rem;
  width: 100%;
}

.options .item {
  display: inline-block;
  color: #fff;
  height: 5rem;
  line-height: 5rem;
  padding: 0 2rem;
  cursor: pointer;
}

.float-right {
  float: right;
}

.options .item:hover {
  background-color: rgba(255, 255, 255, .2)
}

.options .search-problem-wrapper {
  position: relative;
  height: 5rem;
}

.options .search-problem-wrapper .input-wrapper {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.headline {
  position: absolute;
  width: 100%;
  top: 30%;
  text-align: center;
}

.title {
  font-size: 5rem;
  font-weight: lighter;
}

.subtitle {
  font-size: 3rem;
  font-weight: lighter;
}

.btn-group {
  position: absolute;
  width: 100%;
  top: 60%;
  text-align: center;
}

.btn {
  display: inline-block;
  background-color: rgba(0, 0, 0, .5);
  width: 18rem;
  height: 4rem;
  margin-right: 2rem;
  text-align: center;
  line-height: 4rem;
  color: #fff;
  cursor: pointer;
}

.btn:last-child {
  margin-right: 0;
}

.btn:hover {
  background-color: rgba(255, 255, 255, .8);
  color: inherit;
}

.informaion {
  width: 100%;
  height: 100vh;
  font-weight: lighter;
}

.informaion .container {
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
  border-bottom: 1px solid rgba(30, 35, 42, .06);
  box-shadow: 0 1px 3px 0 rgba(0, 34, 77, .05);
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
</style>
