<template>
  <div class="contest">
    <transition name="fade">
      <div class="nav-bar-wrapper">
        <div class="nav-bar">
          <div class="item logo" @click="clickLogo">SCU Online Judge</div>
          <div class="item" @click="$router.push('/contest_list')">返回比赛列表</div>
          <div class="item logout float-right">退出登录状态</div>
          <div class="item logout float-right" @click="clickLogo">王兆基</div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="container">
        <div class="am-g am-g-fixed">
          <div class="am-u-sm-12">
            <div class="card contest-information">
              <div class="content">
                <div class="title">
                  SCU ACM 第七次训练赛：动态规划
                </div>
                <div class="time">
                  <div class="am-g">
                    <div class="am-u-sm-2" style="padding-right: 0;">
                      <div class="start-time">开始：2017-10-27 00:00</div>
                    </div>
                    <div class="am-u-sm-8" style="padding-left: 0; padding-right: 0;">
                      <div class="progress am-progress am-active am-progress-striped" style="margin-bottom: 0;">
                        <div class="am-progress-bar" style="width: 50%; font-size: 1.2rem; line-height: 2rem;">40%</div>
                      </div>
                    </div>
                    <div class="am-u-sm-2" style="padding-left: 0;">
                      <div class="end-time">结束：2017-11-27 00:00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="am-g am-g-fixed">
          <div class="am-u-sm-8" style="padding-right: 0;">
            <div class="card">
              <div class="header">
                <h2>题目列表</h2>
              </div>
              <div class="content">
                <table class="am-table am-table-striped am-table-hover">
                  <thead>
                    <tr>
                      <th class="am-text-center">题号</th>
                      <th>题目</th>
                      <th class="am-text-center">我的状态</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item,index) in $root.database.slice(0,10)" :key="item.id" style="cursor: pointer;" @click="$router.push('/problem/' + item.id)">
                      <td class="am-text-center">{{index + 1}}</td>
                      <td>[{{item.number}}] {{item.title}}</td>
                      <td class="am-text-center">{{index
                        < 6 ? 'Accepted' : 'Failed'}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="header">
                <h2>比赛讨论区</h2>
              </div>
              <div class="content">
                <div class="discuss-item">
                  <div class="am-g">
                    <div class="am-u-sm-2">
                      <a href="javascript:" class="user">
                        <div class="avatar">
                          <img src="../assets/bilibili.png" class="am-img-responsive am-circle am-img-thumbnail" alt="讨论用户头像">
                        </div>
                        <div class="name">
                          王兆基
                        </div>
                      </a>
                    </div>
                    <div class="am-u-sm-7 middle">
                      <div class="title am-text-truncate">
                        <a href="javascript:">这道题的数据范围怎么这么大，感觉很难过</a>
                      </div>
                      <div class="abstract am-text-truncate">
                        <a href="javascript:">那时候刚好下着雨，柏油路面湿冷冷的，还闪烁着青、黄、红颜色的灯火。我们就在骑楼下躲雨，看绿色的邮筒孤独地站在街的对面。</a>
                      </div>
                      <div class="submit-time gray">in
                        <a href="javascript:">[2312] 最短路计数</a>&nbsp;&nbsp;@2017-10-21 16:49:04</div>
                    </div>
                    <div class="am-u-sm-3 right">
                      <div class="reply-number">128 个回复</div>
                      <div class="reply-new">
                        <a href="javascript:">最新回复：朱嘉宁</a>
                      </div>
                      <div class="reply-time gray">@2017-10-21 19:39:00</div>
                    </div>
                  </div>
                </div>
                <div class="discuss-item" v-for="n in 4" :key="n">
                  <div class="am-g">
                    <div class="am-u-sm-2">
                      <a href="javascript:" class="user">
                        <div class="avatar">
                          <img src="../assets/bilibili.png" class="am-img-responsive am-circle am-img-thumbnail" alt="讨论用户头像">
                        </div>
                        <div class="name">
                          时佳音
                        </div>
                      </a>
                    </div>
                    <div class="am-u-sm-7 middle">
                      <div class="title am-text-truncate">
                        <a href="javascript:">打表能不能做出来这道题？</a>
                      </div>
                      <div class="abstract am-text-truncate">
                        <a href="javascript:">我白色风衣的大口袋里有一封要寄给南部的母亲的信。樱子说她可以撑伞过去帮我寄信。我默默点头。</a>
                      </div>
                      <div class="submit-time gray">in
                        <a href="javascript:">[1453] 传染病控制 </a>&nbsp;&nbsp;@2017-10-21 16:49:04</div>
                    </div>
                    <div class="am-u-sm-3 right">
                      <div class="reply-number">23 个回复</div>
                      <div class="reply-new">
                        <a href="javascript:">最新回复：时佳音</a>
                      </div>
                      <div class="reply-time gray">@2017-10-21 17:13:14</div>
                    </div>
                  </div>
                </div>
                <a href="javascript:" style="display: inline-block; margin-top: 1rem;" @click="$router.push('/discuss/c' + $route.params.id)">查看全部讨论区内容</a>
              </div>
            </div>
          </div>
          <div class="am-u-sm-4" style="padding-left: 0;">
            <div class="card contest-status">
              <div class="header">
                <h2>比赛概况</h2>
              </div>
              <div class="content">
                <table style="width: 100%;">
                  <tr>
                    <td style="font-weight: normal;">总题数</td>
                    <td align="right">10</td>
                  </tr>
                  <tr>
                    <td style="font-weight: normal;">参赛人数</td>
                    <td align="right">36</td>
                  </tr>
                  <tr>
                    <td style="font-weight: normal;">AK人数</td>
                    <td align="right">12</td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="card user-status">
              <div class="header">
                <h2>我的情况</h2>
              </div>
              <div class="content">
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
                <button class="am-btn am-btn-default am-btn-block">
                  <i class="am-icon-check"></i>
                  继续刚第 7 题
                </button>
              </div>
            </div>
            <div class="card contest-rank">
              <div class="header">
                <h2>实时英雄榜</h2>
              </div>
              <div class="content">
                <table class="am-table am-table-hover am-table-compact">
                  <thead>
                    <tr>
                      <th>用户名</th>
                      <th class="am-text-center">排名</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="n in 15" :key="n">
                      <td>王兆基{{n}}</td>
                      <td class="am-text-center">{{n}}</td>
                    </tr>
                  </tbody>
                </table>
                <a href="javascript:" style="display: inline-block; margin-top: 0;">查看完整榜单</a>
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

.contest-information .title {
  font-weight: normal;
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 1.5rem;
}

.contest-information .time .start-time,
.contest-information .time .end-time {
  position: relative;
  top: -1px;
  font-size: 1.2rem;
  line-height: 2rem;
  text-align: center;
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
  padding: 0.5rem;
  padding-top: 0;
}

.discuss-item .user .name {
  font-size: 1.4rem;
  text-align: center;
}

.discuss-item .middle .title a,
.discuss-item .middle .abstract a,
.discuss-item .right .reply-new a,
.discuss-item .user {
  color: #262626;
}

.discuss-item .middle .title a:hover,
.discuss-item .middle .abstract a:hover,
.discuss-item .right .reply-new a:hover,
.discuss-item .user:hover {
  color: #3e7ac2;
}

.discuss-item .middle .title {
  font-weight: normal;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.discuss-item .middle .abstract {
  margin-bottom: 1rem;
}

.discuss-item .middle .submit-time {
  font-size: 1.2rem;
}

.discuss-item .right .reply-number {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.discuss-item .right .reply-new {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.discuss-item .right .reply-time {
  font-size: 1.2rem;
}
</style>
