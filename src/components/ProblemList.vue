<template>
  <div class="problem-list">
    <transition name="fade">
      <div class="nav-bar-wrapper">
        <div class="nav-bar">
          <div class="item logo" @click="clickLogo">SCU Online Judge</div>
          <div class="search-problem-wrapper" :style="{ width : largeInput ? '50%' : '20%', opacity : largeInput ? '1' : '0.5'}">
            <div class="input-wrapper">
              <!-- <div class="am-input-group"> -->
              <!-- <span class="am-input-group-btn">
                        <button class="am-btn am-btn-default" type="button" style="background-color: transparent;">
                          <span class="am-icon-search"></span>
                        </button>
                      </span> -->
              <input type="text" class="am-form-field" placeholder="在这里搜索题目" @focus="largeInput = true" @blur="largeInput = false">
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
            <div class="card problem-list-header">
              <div class="content">
                <div class="problem-list-left">
                  <h1 class="title">题目列表</h1>
                  <div class="motto gray">
                    <span>海纳百川，有容乃大；壁立千仞，无欲则刚。耐心刷题，戒骄戒躁，金牌就在前方。</span>
                  </div>
                </div>
                <div class="buttons">
                  <a href="javascript:" class="item am-icon-btn am-success am-icon-sort-amount-asc" id="button-sort-difficulity"></a>
                  <a href="javascript:" class="item am-icon-btn am-primary am-icon-sort-alpha-asc" id="button-sort-alpha"></a>
                  <a href="javascript:" class="item am-icon-btn am-secondary am-icon-sort-numeric-asc" id="button-sort-numeric"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="am-g am-g-fixed">
          <div class="am-u-sm-12">
            <div class="card problems" v-for="item in $root.database" :key="item.id" @click="$router.push('/problem/' + item.id)" style="cursor: pointer;">
              <div class="content">
                <div class="information">
                  <span class="number">[{{item.number}}]</span>
                  <span class="title">{{item.title}}</span>
                </div>
                <div class="status">
                  <a href="javascript:" class="am-icon-btn am-success am-icon-check" v-if="item.id <= 5"></a>
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
      $('#button-sort-numeric').popover({
        content: '按照题号排序',
        trigger: 'hover focus',
        theme: 'secondary sm'
      })
    })
    $(function () {
      $('#button-sort-alpha').popover({
        content: '按照名称排序',
        trigger: 'hover focus',
        theme: 'primary sm'
      })
    })
    $(function () {
      $('#button-sort-difficulity').popover({
        content: '按照难度排序',
        trigger: 'hover focus',
        theme: 'success sm'
      })
    })
  }
}
</script>

<style scoped>
.problem-list {
  width: 100%;
  font-weight: lighter;
}

.problem-list .container {
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
  position: relative;
  display: inline-block;
  line-height: 5rem;
  padding: 0 1.6rem;
  cursor: pointer;
}

.nav-bar .item:last-child {
  padding-right: 1rem;
}

.nav-bar .search-problem-wrapper {
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

.problem-list-header {
  padding: 0.8rem 2rem;
  margin-bottom: 0;
  height: 8rem;
}

.problem-list-header .problem-list-left {
  float: left;
}

.problem-list-header .buttons {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.problem-list-header .buttons .item:first-child {
  margin-right: 0;
}

.problem-list-header .buttons .item {
  float: right;
  margin: 0 1rem;
  opacity: 0.5;
  transition: opacity 0.2s linear;
}

.problem-list-header .buttons .item:hover,
.problem-list-header .buttons .item:focus {
  opacity: 1;
}

.title {
  margin-bottom: 0.5rem;
}

.motto {
  font-size: 1.2rem;
}

.problems {
  height: 6rem;
}

.problems .information {
  float: left;
}

.problems .information .number {
  font-weight: normal;
  margin-right: 1rem;
}

.problems .status {
  float: right;
}

.problems .status .am-icon-btn {
  width: 2.4rem;
  height: 2.4rem;
  font-size: 1.2rem;
  line-height: 2.4rem;
  margin: 0;
}
</style>
