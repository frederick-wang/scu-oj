<template>
  <div class="record">
    <div class="problem-bg"></div>
    <transition name="fade">
      <div class="nav-bar-wrapper">
        <div class="nav-bar">
          <div class="item logo" @click="clickLogo">SCU Online Judge</div>
          <div class="item" @click="$router.push(`/problem/${id}`)">返回题目</div>
          <div class="item logout float-right">退出登录状态</div>
          <div class="item logout float-right" @click="clickLogo">王兆基</div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="container">
        <div class="am-g am-g-fixed">
          <div class="am-u-sm-12">
            <div class="card record-header">
              <div class="content">
                <div class="record-information">
                  <h1 class="title">[提交记录] {{title}}</h1>
                  <div class="source gray">
                    <span>共有 1024 条提交记录</span>
                    <span style="margin-left: 1rem;"> 其中有 256 条 Accepted</span>
                    <span style="margin-left: 1rem;"> 已有 64 位壮士做过这道题</span>
                  </div>
                </div>
                <div class="buttons">
                  <a href="javascript:" class="item am-icon-btn am-success am-icon-sort-amount-asc" id="button-sort-memory"></a>
                  <a href="javascript:" class="item am-icon-btn am-primary am-icon-sort-numeric-asc" id="button-sort-time"></a>
                  <a href="javascript:" class="item am-icon-btn am-secondary am-icon-sort-alpha-asc" id="button-sort-username"></a>
                  <a href="javascript:" class="item am-icon-btn am-primary am-icon-calendar-check-o" id="button-sort-submit"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="am-g am-g-fixed">
          <div class="am-u-sm-12">
            <div class="card">
              <div class="content">
                <table class="am-table am-table-striped am-table-hover">
                  <thead>
                    <th style="text-align: center;">运行ID</th>
                    <th style="text-align: center;">用户名</th>
                    <th style="text-align: center;">运行结果</th>
                    <th style="text-align: center;">耗时（ms）</th>
                    <th style="text-align: center;">内存使用（MB）</th>
                    <th style="text-align: center;">代码长度</th>
                    <th style="text-align: center;">语言</th>
                    <th style="text-align: center;">提交时间</th>
                  </thead>
                  <tbody>
                    <tr v-for="n in 50" :key="n">
                      <td style="text-align: center;">{{51 - n}}</td>
                      <td style="text-align: center;">王兆基</td>
                      <td style="text-align: center;">Accepted</td>
                      <td style="text-align: center;">0 ms</td>
                      <td style="text-align: center;">1.2 MB</td>
                      <td style="text-align: center;">162</td>
                      <td style="text-align: center;">C++</td>
                      <td style="text-align: center;">2017-11-10 15:56:58</td>
                    </tr>
                  </tbody>
                </table>
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
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'record',
  data () {
    return {

    }
  },
  computed: {
    id () {
      return parseInt(this.$route.params.id)
    },
    title () {
      return this.$root.database[this.id - 1].title
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
      $('#button-sort-submit').popover({
        content: '按照提交时间排序',
        trigger: 'hover focus',
        theme: 'primary sm'
      })
    })
    $(function () {
      $('#button-sort-username').popover({
        content: '按照用户名排序',
        trigger: 'hover focus',
        theme: 'secondary sm'
      })
    })
    $(function () {
      $('#button-sort-time').popover({
        content: '按照运行耗时排序',
        trigger: 'hover focus',
        theme: 'primary sm'
      })
    })
    $(function () {
      $('#button-sort-memory').popover({
        content: '按照内存使用排序',
        trigger: 'hover focus',
        theme: 'success sm'
      })
    })
  }
}
</script>

<style scoped>
.record {
  width: 100%;
  font-weight: lighter;
}

.record .container {
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

.record-item {
  padding: 1rem;
}

.record-item:hover {
  background: #eef4fa;
  background-color: #eef4fa;
}

.record-item:last-child {
  margin-bottom: 0;
}

.record-item .user {
  display: block;
}

.record-item .avatar {
  padding: 0;
  padding-top: 0.5rem;
}

.record-item .user .name {
  font-size: 1.4rem;
  text-align: center;
}

.record-item .right .title a,
.record-item .right .abstract a,
.record-item .user {
  color: #262626;
}

.record-item .right .title a:hover,
.record-item .right .abstract a:hover,
.record-item .user:hover {
  color: #3e7ac2;
}

.record-item .right .title {
  font-weight: normal;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.record-item .right .abstract {
  margin-bottom: 1rem;
}

.record-item .right .submit-time {
  font-size: 1.2rem;
}

.record-header {
  padding: 0.8rem 2rem;
  margin-bottom: 0;
  height: 8rem;
}

.record-header .record-information {
  float: left;
}

.record-header .buttons {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.record-header .buttons .item:first-child {
  margin-right: 0;
}

.record-header .buttons .item {
  float: right;
  margin: 0 1rem;
  opacity: 0.5;
  transition: opacity 0.2s linear;
}

.record-header .buttons .item:hover,
.record-header .buttons .item:focus {
  opacity: 1;
}

.problem-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/index-bg-problem.jpg") top no-repeat;
  background-image: url("../assets/index-bg-problem.jpg");
  background-size: cover;
  opacity: 0.2;
}
</style>
