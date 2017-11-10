<template>
  <div class="contest-list">
    <div class="contest-bg"></div>
    <transition name="fade">
      <div class="nav-bar-wrapper">
        <div class="nav-bar">
          <div class="item logo" @click="clickLogo">SCU Online Judge</div>
          <div class="search-contest-wrapper" :style="{ width : largeInput ? '50%' : '20%', opacity : largeInput ? '1' : '0.5'}">
            <div class="input-wrapper">
              <input type="text" class="am-form-field" placeholder="在这里搜索比赛" @focus="largeInput = true" @blur="largeInput = false">
              <!-- </div> -->
            </div>
          </div>
          <div class="item logout float-right">退出登录状态</div>
          <div class="item logout float-right" @click="clickLogo">王兆基</div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="container">
        <div class="am-g am-g-fixed">
          <div class="am-u-sm-12">
            <div class="card contest-list-header">
              <div class="content">
                <div class="contest-list-left">
                  <h1 class="title">比赛列表</h1>
                  <div class="motto gray">
                    <span>刷题虽爽，来参加比赛更刺激哦。</span>
                  </div>
                </div>
                <div class="buttons">
                  <a href="javascript:" class="item am-icon-btn am-success am-icon-sort-amount-asc" id="button-sort-type"></a>
                  <a href="javascript:" class="item am-icon-btn am-secondary am-icon-sort-alpha-asc" id="button-sort-alpha"></a>
                  <a href="javascript:" class="item am-icon-btn am-primary am-icon-sort-numeric-asc" id="button-sort-numeric"></a>
                  <a href="javascript:" class="item am-icon-btn am-primary am-icon-calendar-check-o" id="button-sort-time"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="am-g am-g-fixed">
          <div class="am-u-sm-12">
            <div class="card contests" v-for="n in 10" :key="n" @click="$router.push('/contest/' + (11 - n))" style="cursor: pointer;">
              <div class="content">
                <div class="information">
                  <span class="number">[{{1000 + 11 - n}}]</span>
                  <span class="title">SCU ACM 第 {{11 - n}} 次训练赛</span>
                </div>
                <div class="status">
                  <a href="javascript:" class="am-icon-btn am-success am-icon-check" v-if="n <= 5"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="am-g am-g-fixed">
          <div class="am-u-sm-12">
            <ul class="am-pagination am-pagination-centered">
              <li class="am-disabled">
                <a href="">
                  <span class="am-icon-angle-double-left"></span>
                </a>
              </li>
              <li class="am-active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a href="#">6</a>
              </li>
              <li>
                <a href="#">7</a>
              </li>
              <li>
                <a href="#">8</a>
              </li>
              <li>
                <a href="#">9</a>
              </li>
              <li>
                <a href="#">10</a>
              </li>
              <li>
                <a href="">
                  <span class="am-icon-angle-double-right"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ProblemList',
  data () {
    return {
      largeInput: false
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
      $('#button-sort-time').popover({
        content: '按照比赛时间排序',
        trigger: 'hover focus',
        theme: 'primary sm'
      })
    })
    $(function () {
      $('#button-sort-numeric').popover({
        content: '按照比赛序号排序',
        trigger: 'hover focus',
        theme: 'primary sm'
      })
    })
    $(function () {
      $('#button-sort-alpha').popover({
        content: '按照比赛名称排序',
        trigger: 'hover focus',
        theme: 'secondary sm'
      })
    })
    $(function () {
      $('#button-sort-type').popover({
        content: '按照比赛类型排序',
        trigger: 'hover focus',
        theme: 'success sm'
      })
    })
  }
}
</script>

<style scoped>
.contest-list {
  width: 100%;
  font-weight: lighter;
}

.contest-list .container {
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
  font-weight: normal;
}

.nav-bar .item {
  position: relative;
  display: inline-block;
  line-height: 5rem;
  padding: 0 1.6rem;
  cursor: pointer;
}

.nav-bar .item:last-child {
  padding-right: 1rem;
}

.nav-bar .search-contest-wrapper {
  position: absolute;
  top: 50%;
  left: 19rem;
  transform: translateY(-50%);
  margin-top: 1px;
  transition: width 0.2s linear, opacity 0.2s linear;
  opacity: 0.5;
}

.float-right {
  float: right;
}

.contest-list-header {
  padding: 0.8rem 2rem;
  margin-bottom: 0;
  height: 8rem;
}

.contest-list-header .contest-list-left {
  float: left;
}

.contest-list-header .buttons {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.contest-list-header .buttons .item:first-child {
  margin-right: 0;
}

.contest-list-header .buttons .item {
  float: right;
  margin: 0 1rem;
  opacity: 0.5;
  transition: opacity 0.2s linear;
}

.contest-list-header .buttons .item:hover,
.contest-list-header .buttons .item:focus {
  opacity: 1;
}

.title {
  margin-bottom: 0.5rem;
}

.motto {
  font-size: 1.2rem;
}

.contests {
  height: 6rem;
}

.contests .information {
  float: left;
}

.contests .information .number {
  font-weight: normal;
  margin-right: 1rem;
}

.contests .status {
  float: right;
}

.contests .status .am-icon-btn {
  width: 2.4rem;
  height: 2.4rem;
  font-size: 1.2rem;
  line-height: 2.4rem;
  margin: 0;
}

.contest-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/index-bg-contest.jpg") top no-repeat;
  background-image: url("../assets/index-bg-contest.jpg");
  background-size: cover;
  opacity: 0.2;
}
</style>
