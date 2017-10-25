<template>
  <div class="contest">
    <transition name="fade">
      <div class="nav-bar-wrapper">
        <div class="nav-bar">
          <div class="item logo" @click="clickLogo">SCU Online Judge</div>
          <div class="item">开始刷题</div>
          <div class="item">提交新题</div>
          <div class="item">完整题库</div>
          <div class="item logout float-right">退出登录状态</div>
          <div class="item logout float-right" @click="clickLogo">王兆基</div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="container">
        <div class="am-g am-g-fixed">
          <div class="am-u-sm-8"></div>
          <div class="am-u-sm-4"></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Contest',
  data () {
    return {

    }
  },
  methods: {
    clickLogo () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.contest {
  width: 100%;
  font-weight: lighter;
}

.contest .container {
  width: 100%;
  padding-top: 5rem;
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

.float-right {
  float: right;
}
</style>
