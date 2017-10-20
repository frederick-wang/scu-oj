// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data () {
    return {
      currentPage: 1,
      scuOjContestsInformation: [
        {
          id: '00007',
          name: 'SCU ACM 第七次训练赛',
          link: '#',
          start_time: '2017-10-20 23:18:37'
        },
        {
          id: '00006',
          name: 'SCU ACM 第六次训练赛',
          link: '#',
          start_time: '2017-10-20 23:18:37'
        },
        {
          id: '00005',
          name: 'SCU ACM 第五次训练赛',
          link: '#',
          start_time: '2017-10-20 23:18:37'
        },
        {
          id: '00004',
          name: 'SCU ACM 第四次训练赛',
          link: '#',
          start_time: '2017-10-20 23:18:37'
        },
        {
          id: '00003',
          name: 'SCU ACM 第三次训练赛',
          link: '#',
          start_time: '2017-10-20 23:18:37'
        },
        {
          id: '00002',
          name: 'SCU ACM 第二次训练赛',
          link: '#',
          start_time: '2017-10-20 23:18:37'
        },
        {
          id: '00001',
          name: 'SCU ACM 第一次训练赛',
          link: '#',
          start_time: '2017-10-20 23:18:37'
        }
      ],
      ojContestsInformation: JSON.parse('[{"id":"158782","oj":"Codeforces","link":"http://codeforces.com/contests","name":"2017-2018 ACM-ICPC, NEERC, Southern Subregional Contest","start_time":"2017-10-21 16:05:00","week":"SAT","access":""},{"id":"149761","oj":"UVA","link":"https://uva.onlinejudge.org/index.php?option=com_onlinejudge&amp;Itemid=12&amp;page=show_contest&amp;contest=380","name":"ACM-ICPC Regional Warmup I","start_time":"2017-10-21 22:00:09","week":"SAT","access":"Public"},{"id":"152410","oj":"AtCoder","link":"https://code-festival-2017-qualc.contest.atcoder.jp","name":"CODE FESTIVAL 2017 qual C","start_time":"2017-10-22 20:00:00","week":"SUN","access":""},{"id":"156827","oj":"Codeforces","link":"http://codeforces.com/contests","name":"Codeforces Round #442 (Div. 2)","start_time":"2017-10-23 23:35:00","week":"MON","access":""},{"id":"156828","oj":"Codeforces","link":"http://codeforces.com/contests","name":"Codeforces Round #443 (Div. 1)","start_time":"2017-10-26 22:35:00","week":"THU","access":""},{"id":"156829","oj":"Codeforces","link":"http://codeforces.com/contests","name":"Codeforces Round #443 (Div. 2)","start_time":"2017-10-26 22:35:00","week":"THU","access":""},{"id":"152502","oj":"AtCoder","link":"https://abc076.contest.atcoder.jp","name":"AtCoder Beginner Contest 076","start_time":"2017-10-28 20:00:00","week":"SAT","access":""},{"id":"144210","oj":"HackerRank","link":"http://www.hackerrank.com/contests","name":"HourRank 24","start_time":"2017-11-02 23:00:00","week":"THU","access":""},{"id":"149762","oj":"UVA","link":"https://uva.onlinejudge.org/index.php?option=com_onlinejudge&amp;Itemid=12&amp;page=show_contest&amp;contest=381","name":"ACM-ICPC Regional Warmup II","start_time":"2017-11-04 17:00:00","week":"SAT","access":"Public"},{"id":"148202","oj":"HackerRank","link":"http://www.hackerrank.com/contests","name":"Week of Code 35","start_time":"2017-11-13 15:00:00","week":"MON","access":""},{"id":"149763","oj":"UVA","link":"https://uva.onlinejudge.org/index.php?option=com_onlinejudge&amp;Itemid=12&amp;page=show_contest&amp;contest=382","name":"ACM-ICPC Regional Warmup III","start_time":"2017-11-18 22:00:00","week":"SAT","access":"Public"},{"id":"149764","oj":"UVA","link":"https://uva.onlinejudge.org/index.php?option=com_onlinejudge&amp;Itemid=12&amp;page=show_contest&amp;contest=383","name":"ACM-ICPC Regional Warmup IV","start_time":"2017-12-02 17:00:00","week":"SAT","access":"Public"}]')
    }
  }
})
