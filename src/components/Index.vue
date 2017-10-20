<template>
  <div id="fullpage" class="index">
    <div class="section">
      <div class="entry">
        <div :style="{opacity: (currentOptions === 0) ? 0.2 : 0}" class="entry-bg entry-bg-welcome"></div>
        <div :style="{opacity: (currentOptions === 1) ? 0.2 : 0}" class="entry-bg entry-bg-problem"></div>
        <div :style="{opacity: (currentOptions === 2) ? 0.2 : 0}" class="entry-bg entry-bg-contest"></div>
        <div :style="{opacity: (currentOptions === 3) ? 0.2 : 0}" class="entry-bg entry-bg-information"></div>
        <transition name="fade-fast">
          <div class="function-bar" v-if="currentOptions !== 0 && $root.currentPage === 1" @mouseover="backgroundRecoveryTimeRest">
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
                          <input v-model="searchProblemText" type="text" class="am-form-field" style="border: 1px solid #fff; background-color: #333; color: #fff;" placeholder="在这里搜索题目" @focus="inputFocus" @blur="inputBlur">
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
                          <input v-model="searchContestText" type="text" class="am-form-field" style="border: 1px solid #fff; background-color: #333; color: #fff;" placeholder="在这里搜索比赛" @focus="inputFocus" @blur="inputBlur">
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
                    <div class="item">修改个人资料</div>
                    <div class="item">评测记录</div>
                    <div class="item">刷题统计</div>
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
          <div class="headline" v-if="$root.currentPage === 1">
            <div class="title">SCU Online Judge</div>
            <div class="subtitle">海纳百川 有容乃大</div>
          </div>
        </transition>
        <transition name="fade">
          <div class="btn-group" v-if="$root.currentPage === 1">
            <div class="btn btn-problem" @mouseover="overBtn(1)" @click="clickProblem">我要做题</div>
            <div class="btn btn-pcontest" @mouseover="overBtn(2)" @click="clickContest">我要比赛</div>
            <div class="btn btn-pinformation" @mouseover="overBtn(3)" @click="clickInformation">个人中心</div>
          </div>
        </transition>
      </div>
    </div>
    <div class="section">
      <ProblemSection></ProblemSection>
    </div>
    <div class="section">
      <ContestSection></ContestSection>
    </div>
    <div class="section">
      <InformationSection></InformationSection>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'
// import _ from 'lodash'
import ProblemSection from './index/ProblemSection'
import ContestSection from './index/ContestSection'
import InformationSection from './index/InformationSection'

export default {
  name: 'Index',
  components: {
    'ProblemSection': ProblemSection,
    'ContestSection': ContestSection,
    'InformationSection': InformationSection
  },
  data () {
    return {
      currentOptions: 0,
      largeInput: false,
      backgroundRecoveryTime: 0,
      searchProblemText: '',
      searchContestText: ''
    }
  },
  computed: {
  },
  watch: {
    'searchProblemText': 'backgroundRecoveryTimeRest',
    'searchContestText': 'backgroundRecoveryTimeRest'
  },
  methods: {
    overBtn (value) {
      this.currentOptions = value
      this.largeInput = false
      this.backgroundRecoveryTimeRest()
    },
    inputFocus () {
      this.largeInput = true
      this.backgroundRecoveryTimeRest()
    },
    inputBlur () {
      this.largeInput = false
    },
    clickProblem () {
      window.$.fn.fullpage.moveTo(2)
    },
    clickContest () {
      window.$.fn.fullpage.moveTo(3)
    },
    clickInformation () {
      window.$.fn.fullpage.moveTo(4)
    },
    backgroundRecovery () {
      if (this.backgroundRecoveryTime === 0) {
        if (this.currentOptions !== 0) {
          this.currentOptions = 0
        }
        this.backgroundRecoveryTimeRest()
      } else {
        this.backgroundRecoveryTime--
      }
      setTimeout(this.backgroundRecovery, 1000)
    },
    backgroundRecoveryTimeRest () {
      this.backgroundRecoveryTime = 60
    }
  },
  mounted () {
    if (!window.$('html').hasClass('fp-enabled')) {
      window.$('#fullpage').fullpage({
        loopTop: true,
        sectionsColor: ['#f3f3f3', '#f3f3f3'],
        scrollOverflow: true,
        onLeave: (index, nextIndex, direction) => {
          this.$root.currentPage = nextIndex
        },
        afterLoad: (anchorLink, index) => {
          window.$.fn.fullpage.reBuild()
        }
      })
    }
    this.backgroundRecovery()
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
  opacity: 0.2;
  transition: opacity 0.5s linear;
}

.entry-bg-welcome {
  background: url("../assets/North_gate_of_SCU.jpg") top no-repeat;
  background-image: url("../assets/North_gate_of_SCU.jpg");
  background-size: cover;
}

.entry-bg-problem {
  background: url("../assets/index-bg-problem.jpg") top no-repeat;
  background-image: url("../assets/index-bg-problem.jpg");
  background-size: cover;
}

.entry-bg-contest {
  background: url("../assets/index-bg-contest.jpg") top no-repeat;
  background-image: url("../assets/index-bg-contest.jpg");
  background-size: cover;
}

.entry-bg-information {
  background: url("../assets/index-bg-information.jpg") top no-repeat;
  background-image: url("../assets/index-bg-information.jpg");
  background-size: cover;
}

.function-bar {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5rem;
  background: rgba(0, 0, 0, 0.8);
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
  background-color: rgba(255, 255, 255, 0.2);
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
  background-color: rgba(0, 0, 0, 0.5);
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
  background-color: rgba(255, 255, 255, 0.8);
  color: inherit;
}
</style>
