<template>
  <div class="section-problem">
    <div class="problem-bg"></div>
    <transition name="fade">
      <div class="nav-bar-wrapper" v-if="$root.currentPage === 2">
        <div class="nav-bar">
          <div class="item logo" @click="clickLogo">SCU Online Judge</div>
          <div class="item" @click="$router.push('/problem_list')">开始刷题</div>
          <div class="item">提交新题</div>
          <div class="item" @click="$router.push('/problem_list')">完整题库</div>
          <div class="item logout float-right">退出登录状态</div>
          <div class="item logout float-right" @click="clickLogo">王兆基</div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="container" v-if="$root.currentPage === 2">
        <div class="am-g am-g-fixed">
          <div class="am-u-sm-8" style="padding-right: 0;">
            <div class="card">
              <div class="header">
                <h2>近期提交记录</h2>
              </div>
              <div class="content">
                <table class="am-table am-table-hover am-table-compact">
                  <thead>
                    <tr>
                      <th>题号</th>
                      <th>题目</th>
                      <th>状态</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in $root.database.slice(10,14)" :key="item.id" @click="$router.push(`/problem/${item.id}`)" style="cursor: pointer;">
                      <td>[{{item.number}}]</td>
                      <td>{{item.title}}</td>
                      <td>Accepted</td>
                    </tr>
                  </tbody>
                </table>
                <a href="javascript:" style="display: inline-block; margin-top: 0;" data-am-modal="{target: '#submit-list-popup'}">查看全部提交记录</a>
              </div>
            </div>
            <div class="card">
              <div class="header">
                <h2>近期讨论记录</h2>
              </div>
              <div class="content">
                <div class="discuss-item">
                  <div class="am-g">
                    <div class="am-u-sm-2">
                      <a href="javascript:" class="user">
                        <div class="avatar">
                          <img src="../../assets/bilibili.png" class="am-img-responsive am-circle am-img-thumbnail" alt="讨论用户头像">
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
                        <a href="javascript:">[1001] 小车问题</a>&nbsp;&nbsp;@2017-10-21 16:49:04</div>
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
                <div class="discuss-item">
                  <div class="am-g">
                    <div class="am-u-sm-2">
                      <a href="javascript:" class="user">
                        <div class="avatar">
                          <img src="../../assets/bilibili.png" class="am-img-responsive am-circle am-img-thumbnail" alt="讨论用户头像">
                        </div>
                        <div class="name">
                          王兆基
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
                        <a href="javascript:">[1001] 小车问题 </a>&nbsp;&nbsp;@2017-10-21 16:49:04</div>
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
                <a href="javascript:" style="display: inline-block; margin-top: 1rem;" @click="$router.push('/discuss/p1')">查看全部近期讨论记录</a>
              </div>
            </div>
          </div>
          <div class="am-u-sm-4" style="padding-left: 0;">
            <div class="card current-problem">
              <div class="header">
                <div class="title">正在练习</div>
                <div class="subtitle">[1001] 小车问题</div>
              </div>
              <div class="content">
                <div class="image">
                  <img src="../../assets/icpc_logo.png" class="am-img-responsive" alt="" />
                </div>
                <div class="status">
                  <table style="width: 100%; border-collapse: separate; border-spacing: 0 0.5rem;">
                    <tbody>
                      <tr>
                        <td style="font-weight: normal;">总提交数</td>
                        <td align="right">20</td>
                      </tr>
                      <tr>
                        <td style="font-weight: normal;">通过数</td>
                        <td align="right">0</td>
                      </tr>
                      <tr>
                        <td style="font-weight: normal;">通过率</td>
                        <td align="right">0 %</td>
                      </tr>
                      <tr>
                        <td style="font-weight: normal;">已耗时 </td>
                        <td align="right">18 分</td>
                      </tr>
                      <tr>
                        <td style="font-weight: normal;">题目状态</td>
                        <td align="right">Failed</td>
                      </tr>
                    </tbody>
                  </table>
                  <br/>
                  <button class="am-btn am-btn-default am-btn-block" @click="$router.push('/problem/1')">
                    <i class="am-icon-check"></i>
                    继续刚题
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
  }
}
</script>

<style scoped>
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

.current-problem .title {
  text-align: center;
  font-size: 2rem;
}

.current-problem .subtitle {
  text-align: center;
  font-size: 2rem;
}

.current-problem .status {
  margin-top: 2rem;
}

.section-problem {
  width: 100%;
  height: 100vh;
  font-weight: lighter;
}

.section-problem .container {
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

.problem-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../../assets/index-bg-problem.jpg") top no-repeat;
  background-image: url("../../assets/index-bg-problem.jpg");
  background-size: cover;
  opacity: 0.2;
}
</style>
