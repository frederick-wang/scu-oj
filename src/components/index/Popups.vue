<template>
  <div class="index-popups">
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
              <tr v-for="item in $root.ojContestsInformation" :key="item.id" @click="$root.openLink(item.link)" style="cursor: pointer;">
                <td>{{item.oj}}</td>
                <td>{{item.name}}</td>
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
              <tr v-for="item in $root.scuOjContestsInformation" :key="item.id" @click="$router.push(`/contest/${item.id}`)" style="cursor: pointer;">
                <td>{{item.name}}</td>
                <td>{{item.start_time}}</td>
                <td>{{item.week}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="am-popup" id="submit-list-popup">
      <div class="am-popup-inner">
        <div class="am-popup-hd">
          <h4 class="am-popup-title">查看全部提交记录</h4>
          <span data-am-modal-close class="am-close">&times;</span>
        </div>
        <div class="am-popup-bd">
          <table class="am-table am-table-hover am-table-compact">
            <thead>
              <tr>
                <th>题号</th>
                <th>题目</th>
                <th>状态</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in $root.submitList" :key="item.id" @click="$router.push(`/problem/${item.id}`)" style="cursor: pointer;">
                <td>[{{item.number}}]</td>
                <td>{{item.name}}</td>
                <td>{{item.status}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="am-popup" id="message-list-popup">
      <div class="am-popup-inner">
        <div class="am-popup-hd">
          <h4 class="am-popup-title">查看全部私信</h4>
          <span data-am-modal-close class="am-close">&times;</span>
        </div>
        <div class="am-popup-bd">
          <table class="am-table am-table-hover am-table-compact">
            <thead>
              <tr>
                <th>发件人</th>
                <th>标题</th>
                <th>时间</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in $root.messageList" :key="item.id" style="cursor: pointer;">
                <td>{{item.addresser}}</td>
                <td>{{item.title}}</td>
                <td>{{item.time}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="am-popup" id="announcement-list-popup">
      <div class="am-popup-inner">
        <div class="am-popup-hd">
          <h4 class="am-popup-title">查看全部公告</h4>
          <span data-am-modal-close class="am-close">&times;</span>
        </div>
        <div class="am-popup-bd">
          <table class="am-table am-table-hover am-table-compact">
            <thead>
              <tr>
                <th>标题</th>
                <th>时间</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in $root.announcementList" :key="item.id" style="cursor: pointer;">
                <td>{{item.title}}</td>
                <td>{{item.time}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
