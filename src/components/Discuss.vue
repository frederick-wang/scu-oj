<template>
  <div class="discuss">
    <transition name="fade">
      <div class="nav-bar-wrapper">
        <div class="nav-bar">
          <div class="item logo" @click="clickLogo">SCU Online Judge</div>
          <div class="item" @click="$router.push('/discuss_list')">返回完整题库</div>
          <div class="item logout float-right">退出登录状态</div>
          <div class="item logout float-right" @click="clickLogo">王兆基</div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="container">
        <div class="am-g am-g-fixed">
          <div class="am-u-sm-12">
            <div class="card discuss-header">
              <div class="content">
                <div class="discuss-information">
                  <h1 class="title">[1036] 选数</h1>
                  <div class="source gray">
                    <span>题目来源：洛谷OnlineJudge</span>
                    <span style="margin-left: 1rem;">难度：入门</span>
                    <span style="margin-left: 1rem;">时空限制：1s/128M</span>
                  </div>
                </div>
                <div class="buttons">
                  <a href="javascript:" class="item am-icon-btn am-icon-search" id="button-web-search"></a>
                  <a href="javascript:" class="item am-icon-btn am-danger am-icon-map-o" id="button-answer"></a>
                  <a href="javascript:" class="item am-icon-btn am-warning am-icon-hand-paper-o" id="button-feedback"></a>
                  <a href="javascript:" class="item am-icon-btn am-secondary am-icon-bar-chart" id="button-status"></a>
                  <a href="javascript:" class="item am-icon-btn am-primary am-icon-comments-o" id="button-discuss"></a>
                  <a href="javascript:" class="item am-icon-btn am-success am-icon-paper-plane-o" id="button-submit"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="am-g am-g-fixed">
          <div class="am-u-sm-8" style="padding-right: 0;">
            <div class="card">
              <div class="header">
                <h2>题目描述</h2>
              </div>
              <div class="content">
                <p>已知 n 个整数 x1,x2,…,xn，以及一个整数 k（k＜n）。从 n 个整数中任选 k 个整数相加，可分别得到一系列的和。例如当 n=4，k＝3，4 个整数分别为 3，7，12，19 时，可得全部的组合与它们的和为：</p>
                <p>3＋7＋12=22</p>
                <p>3＋7＋19＝29</p>
                <p>7＋12＋19＝38</p>
                <p>3＋12＋19＝34。</p>
                <p>现在，要求你计算出和为素数共有多少种。</p>
                <p>例如上例，只有一种的和为素数：3＋7＋19＝29）。</p>
              </div>
            </div>
            <div class="card">
              <div class="header">
                <h2>输入输出格式</h2>
              </div>
              <div class="content">
                <h3>输入格式：</h3>
                <p>键盘输入，格式为：</p>
                <p>n , k （1&lt;=n&lt;=20，k＜n）</p>
                <p>x1,x2，…,xn （1&lt;=xi&lt;=5000000）</p>
                <h3>输出格式：</h3>
                <p>屏幕输出，格式为：</p>
                <p>一个整数（满足条件的种数）。</p>
              </div>
            </div>
            <div class="card">
              <div class="header">
                <h2>输入输出样例</h2>
              </div>
              <div class="content">
                <div class="am-g">
                  <div class="am-u-sm-6">
                    <h3>输入样例 #1</h3>
                    <pre>{{'4 3\n3 7 12 19'}}</pre>
                  </div>
                  <div class="am-u-sm-6">
                    <h3>输出样例 #1</h3>
                    <pre>1</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="am-u-sm-4" style="padding-left: 0;">
            <div class="card">
              <div class="header">
                <h2>当前状态</h2>
              </div>
              <div class="content">
                <div class="status">
                  <div class="am-g">
                    <div class="highlight am-u-sm-6">
                      总提交数
                    </div>
                    <div class="am-u-sm-6 am-text-center">
                      20
                    </div>
                  </div>
                  <div class="am-g">
                    <div class="highlight am-u-sm-6">
                      通过数
                    </div>
                    <div class="am-u-sm-6 am-text-center">
                      0
                    </div>
                  </div>
                  <div class="am-g">
                    <div class="highlight am-u-sm-6">
                      通过率
                    </div>
                    <div class="am-u-sm-6 am-text-center">
                      0%
                    </div>
                  </div>
                  <div class="am-g">
                    <div class="highlight am-u-sm-6">
                      已耗时
                    </div>
                    <div class="am-u-sm-6 am-text-center">
                      45 分
                    </div>
                  </div>
                  <div class="am-g">
                    <div class="highlight am-u-sm-6">
                      题目状态
                    </div>
                    <div class="am-u-sm-6 am-text-center">
                      Failed
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="header">
                <h2>最新讨论</h2>
              </div>
              <div class="content">
                <div class="discuss-item" v-for="n in 4" :key="n">
                  <div class="am-g">
                    <div class="am-u-sm-4">
                      <a href="javascript:" class="user">
                        <div class="avatar">
                          <img src="../assets/bilibili.png" class="am-img-responsive am-circle am-img-thumbnail" alt="讨论用户头像">
                        </div>
                        <div class="name">
                          王兆基
                        </div>
                      </a>
                    </div>
                    <div class="am-u-sm-8 right" style="padding-left: 0;">
                      <div class="title am-text-truncate">
                        <a href="javascript:">这道题的数据范围怎么这么大，感觉很难过</a>
                      </div>
                      <div class="abstract am-text-truncate">
                        <a href="javascript:">那时候刚好下着雨，柏油路面湿冷冷的，还闪烁着青、黄、红颜色的灯火。我们就在骑楼下躲雨，看绿色的邮筒孤独地站在街的对面。</a>
                      </div>
                      <div class="submit-time gray">
                        @2017-10-21 16:49:04
                      </div>
                    </div>
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
  name: 'Discuss',
  data () {
    return {

    }
  },
  methods: {
    clickLogo () {
      this.$router.push('/')
    }
  },
  mounted () {
    let $ = window.$
    $(function () {
      $('#button-submit').popover({
        content: '提交您的答案',
        trigger: 'hover focus',
        theme: 'success sm'
      })
    })
    $(function () {
      $('#button-discuss').popover({
        content: '参与本题的讨论',
        trigger: 'hover focus',
        theme: 'primary sm'
      })
    })
    $(function () {
      $('#button-status').popover({
        content: '查看提交记录',
        trigger: 'hover focus',
        theme: 'secondary sm'
      })
    })
    $(function () {
      $('#button-feedback').popover({
        content: '题目有问题？点击这里报错',
        trigger: 'hover focus',
        theme: 'warning sm'
      })
    })
    $(function () {
      $('#button-answer').popover({
        content: '真的不会做了吗？确定要查看题解吗？',
        trigger: 'hover focus',
        theme: 'danger sm'
      })
    })
    $(function () {
      $('#button-web-search').popover({
        content: '在百度上搜索该题',
        trigger: 'hover focus',
        theme: 'sm'
      })
    })
  }
}
</script>

<style scoped>
.discuss {
  width: 100%;
  font-weight: lighter;
}

.discuss .container {
  width: 100%;
  padding-top: 5rem;
}

.nav-bar-wrapper {
  position: fixed;
  z-index: 999;
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

.float-right {
  float: right;
}

h3 {
  font-weight: normal;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

h3:first-child {
  margin-top: 0;
}

.source {
  font-size: 1.2rem;
}

.title {
  margin-bottom: 0.5rem;
}

.discuss-item {
  padding: 1rem;
}

.discuss-item:hover {
  background: #eef4fa;
  background-color: #eef4fa;
}

.discuss-item:last-child {
  margin-bottom: 0;
}

.discuss-item .user {
  display: block;
}

.discuss-item .avatar {
  padding: 0;
  padding-top: 0.5rem;
}

.discuss-item .user .name {
  font-size: 1.4rem;
  text-align: center;
}

.discuss-item .right .title a,
.discuss-item .right .abstract a,
.discuss-item .user {
  color: #262626;
}

.discuss-item .right .title a:hover,
.discuss-item .right .abstract a:hover,
.discuss-item .user:hover {
  color: #3e7ac2;
}

.discuss-item .right .title {
  font-weight: normal;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.discuss-item .right .abstract {
  margin-bottom: 1rem;
}

.discuss-item .right .submit-time {
  font-size: 1.2rem;
}

.discuss-header {
  padding: 0.8rem 2rem;
  margin-bottom: 0;
  height: 8rem;
}

.discuss-header .discuss-information {
  float: left;
}

.discuss-header .buttons {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.discuss-header .buttons .item:first-child {
  margin-right: 0;
}

.discuss-header .buttons .item {
  float: right;
  margin: 0 1rem;
  opacity: 0.5;
  transition: opacity 0.2s linear;
}

.discuss-header .buttons .item:hover,
.discuss-header .buttons .item:focus {
  opacity: 1;
}
</style>
