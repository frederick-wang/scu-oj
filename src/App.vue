<template>
  <div id="app">
    <div class="am-popup" id="oj-contests-information-popup">
      <div class="am-popup-inner">
        <div class="am-popup-hd">
          <h4 class="am-popup-title">各大OJ近期比赛汇总</h4>
          <span data-am-modal-close class="am-close">&times;</span>
        </div>
        <div class="am-popup-bd">
          <table class="am-table am-table-hover">
            <thead>
              <tr>
                <th>OJ</th>
                <th>Name</th>
                <th>Start Time</th>
                <th>Access</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in $root.ojContestsInformation" :key="item.id">
                <td>{{item.oj}}</td>
                <td>
                  <a :href="item.link" target="_blank">{{item.name}}</a>
                </td>
                <td>{{item.start_time}}</td>
                <td>{{item.access}}</td>
              </tr>
            </tbody>
          </table>
          <p>数据来源：http://contests.acmicpc.info/contests.json</p>
        </div>
      </div>
    </div>
    <div class="am-popup" id="scu-oj-contests-information-popup">
      <div class="am-popup-inner">
        <div class="am-popup-hd">
          <h4 class="am-popup-title">SCU ACM 校内赛通知</h4>
          <span data-am-modal-close class="am-close">&times;</span>
        </div>
        <div class="am-popup-bd">
          <table class="am-table am-table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Start Time</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in $root.scuOjContestsInformation" :key="item.id">
                <td>
                  <a :href="item.link" target="_blank">{{item.name}}</a>
                </td>
                <td>{{item.start_time}}</td>
                <td>{{item.week}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html {
  color: #262626 !important;
  background: #f3f3f3;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
}

.fade-enter,
.fade-leave-to,
.fade-fast-enter,
.fade-fast-leave-to {
  opacity: 0;
}

.fade-fast-enter-active,
.fade-fast-leave-active {
  transition: opacity 0.2s;
}

.card .more-btn {
  position: absolute;
  top: 1.6rem;
  right: 2rem;
  color: #ccc;
  font-size: 1.6rem;
  line-height: 3.2rem;
  height: 3.2rem;
  margin: 0;
  cursor: pointer;
}

.card > .header {
  position: relative;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #f0f2f7;
}

.card > .header h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-weight: lighter;
}

.card > .header span {
  display: inline-block;
  font-size: 1.25rem;
  color: #8590a6;
  margin-top: 0.5rem;
}

.card > .content p {
  line-height: 2.1rem;
  margin-top: 0;
  margin-bottom: 0.7rem;
}

.card > .content .am-g {
  margin-bottom: 0.2rem;
}

.card > .content p:last-child {
  margin-bottom: 0;
}

.card > .content {
  position: relative;
  width: 100%;
}

.card-title {
  border: none !important;
  border-bottom: 1px solid #e7eaf1 !important;
  margin: 0 !important;
  padding-left: 10px !important;
  padding-right: 10px !important;
}

.card {
  position: relative;
  background: #fff;
  border: 1px solid #e7eaf1;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 3px rgba(0, 37, 55, 0.05);
  box-shadow: 0 1px 3px rgba(0, 37, 55, 0.05);
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
  margin: 1rem;
}
</style>
