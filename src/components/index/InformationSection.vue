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
                  <div class="highlight am-u-sm-4">
                    2017-10-15
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
                  <div class="highlight am-u-sm-4">
                    2017-10-15
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
          <div class="am-u-sm-6" style="padding-left: 0;">
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
