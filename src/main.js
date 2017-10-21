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
      messageList: [
        {
          id: 4,
          addresser: '薛泓睿',
          title: '[1024]那道题你怎么做的啊',
          time: '2017-10-21 18:32:15',
          content: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或哈哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或。'
        },
        {
          id: 3,
          addresser: '系统管理员',
          title: 'SCU ACM 诚信准则',
          time: '2017-10-21 18:32:12',
          content: '您好王兆基，欢迎加入我们SCU ACM，祝你能在ACM道路上越走越远！'
        },
        {
          id: 2,
          addresser: '系统管理员',
          title: 'SCU ACM 系统使用说明',
          time: '2017-10-21 18:30:39',
          content: '您好王兆基，欢迎加入我们SCU ACM，祝你能在ACM道路上越走越远！'
        },
        {
          id: 1,
          addresser: '系统管理员',
          title: '您好，欢迎来到SCU ACM！',
          time: '2017-10-21 18:29:18',
          content: '您好王兆基，欢迎加入我们SCU ACM，祝你能在ACM道路上越走越远！'
        }
      ],
      submitList: [
        {
          id: 1,
          number: '1024',
          name: 'A+B Problem X',
          link: '#',
          status: 'Accepted'
        },
        {
          id: 2,
          number: '2048',
          name: '一元三次方程求解',
          link: '#',
          status: 'Accepted'
        },
        {
          id: 3,
          number: '1536',
          name: '加分二叉树',
          link: '#',
          status: 'Accepted'
        },
        {
          id: 4,
          number: '1453',
          name: '传染病控制 ',
          link: '#',
          status: 'Failed'
        },
        {
          id: 5,
          number: '6666',
          name: '装箱问题 ',
          link: '#',
          status: 'Accepted'
        },
        {
          id: 6,
          number: '3564',
          name: '独木桥',
          link: '#',
          status: 'Accepted'
        },
        {
          id: 7,
          number: '2342',
          name: '传纸条',
          link: '#',
          status: 'Accepted'
        },
        {
          id: 8,
          number: '8654',
          name: '矩阵取数游戏',
          link: '#',
          status: 'Accepted'
        },
        {
          id: 9,
          number: '2346',
          name: '铺地毯 ',
          link: '#',
          status: 'Failed'
        },
        {
          id: 10,
          number: '5784',
          name: '过河卒 ',
          link: '#',
          status: 'Accepted'
        }],
      scuOjContestsInformation: [
        {
          id: 7,
          name: 'SCU ACM 第七次训练赛',
          link: '#',
          start_time: '2017-10-20 23:18:37'
        },
        {
          id: 6,
          name: 'SCU ACM 第六次训练赛',
          link: '#',
          start_time: '2017-10-20 23:18:37'
        },
        {
          id: 5,
          name: 'SCU ACM 第五次训练赛',
          link: '#',
          start_time: '2017-10-20 23:18:37'
        },
        {
          id: 4,
          name: 'SCU ACM 第四次训练赛',
          link: '#',
          start_time: '2017-10-20 23:18:37'
        },
        {
          id: 3,
          name: 'SCU ACM 第三次训练赛',
          link: '#',
          start_time: '2017-10-20 23:18:37'
        },
        {
          id: 2,
          name: 'SCU ACM 第二次训练赛',
          link: '#',
          start_time: '2017-10-20 23:18:37'
        },
        {
          id: 1,
          name: 'SCU ACM 第一次训练赛',
          link: '#',
          start_time: '2017-10-20 23:18:37'
        }
      ],
      ojContestsInformation: JSON.parse('[{"id":"158782","oj":"Codeforces","link":"http://codeforces.com/contests","name":"2017-2018 ACM-ICPC, NEERC, Southern Subregional Contest","start_time":"2017-10-21 16:05:00","week":"SAT","access":""},{"id":"149761","oj":"UVA","link":"https://uva.onlinejudge.org/index.php?option=com_onlinejudge&amp;Itemid=12&amp;page=show_contest&amp;contest=380","name":"ACM-ICPC Regional Warmup I","start_time":"2017-10-21 22:00:09","week":"SAT","access":"Public"},{"id":"152410","oj":"AtCoder","link":"https://code-festival-2017-qualc.contest.atcoder.jp","name":"CODE FESTIVAL 2017 qual C","start_time":"2017-10-22 20:00:00","week":"SUN","access":""},{"id":"156827","oj":"Codeforces","link":"http://codeforces.com/contests","name":"Codeforces Round #442 (Div. 2)","start_time":"2017-10-23 23:35:00","week":"MON","access":""},{"id":"156828","oj":"Codeforces","link":"http://codeforces.com/contests","name":"Codeforces Round #443 (Div. 1)","start_time":"2017-10-26 22:35:00","week":"THU","access":""},{"id":"156829","oj":"Codeforces","link":"http://codeforces.com/contests","name":"Codeforces Round #443 (Div. 2)","start_time":"2017-10-26 22:35:00","week":"THU","access":""},{"id":"152502","oj":"AtCoder","link":"https://abc076.contest.atcoder.jp","name":"AtCoder Beginner Contest 076","start_time":"2017-10-28 20:00:00","week":"SAT","access":""},{"id":"144210","oj":"HackerRank","link":"http://www.hackerrank.com/contests","name":"HourRank 24","start_time":"2017-11-02 23:00:00","week":"THU","access":""},{"id":"149762","oj":"UVA","link":"https://uva.onlinejudge.org/index.php?option=com_onlinejudge&amp;Itemid=12&amp;page=show_contest&amp;contest=381","name":"ACM-ICPC Regional Warmup II","start_time":"2017-11-04 17:00:00","week":"SAT","access":"Public"},{"id":"148202","oj":"HackerRank","link":"http://www.hackerrank.com/contests","name":"Week of Code 35","start_time":"2017-11-13 15:00:00","week":"MON","access":""},{"id":"149763","oj":"UVA","link":"https://uva.onlinejudge.org/index.php?option=com_onlinejudge&amp;Itemid=12&amp;page=show_contest&amp;contest=382","name":"ACM-ICPC Regional Warmup III","start_time":"2017-11-18 22:00:00","week":"SAT","access":"Public"},{"id":"149764","oj":"UVA","link":"https://uva.onlinejudge.org/index.php?option=com_onlinejudge&amp;Itemid=12&amp;page=show_contest&amp;contest=383","name":"ACM-ICPC Regional Warmup IV","start_time":"2017-12-02 17:00:00","week":"SAT","access":"Public"}]')
    }
  }
})
