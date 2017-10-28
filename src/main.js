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
      announcementList: [
        {
          id: 5,
          title: '测试一下，这是第五条公告',
          time: '2017-10-21',
          conent: '测试一下5555555555555555555555555555555555555'
        },
        {
          id: 4,
          title: '测试一下，这是第四条公告',
          time: '2017-10-21',
          conent: '测试一下444444444444444444444444444444444444'
        },
        {
          id: 3,
          title: '测试一下，这是第三条公告',
          time: '2017-10-21',
          conent: '测试一下33333333333333333333333333333333333'
        },
        {
          id: 2,
          title: '测试一下，这是第二条公告',
          time: '2017-10-21',
          conent: '测试一下222222222222222222222222222222222222'
        },
        {
          id: 1,
          title: '测试一下，这是第一条公告',
          time: '2017-10-21',
          conent: '测试一下1111111111111111111111111111111111'
        }
      ],
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
      ojContestsInformation: JSON.parse('[{"id":"158782","oj":"Codeforces","link":"http://codeforces.com/contests","name":"2017-2018 ACM-ICPC, NEERC, Southern Subregional Contest","start_time":"2017- 10 - 21 16:05:00","week":"SAT","access":""},{"id":"149761","oj":"UVA","link":"https://uva.onlinejudge.org/index.php?option=com_onlinejudge&amp;Itemid=12&amp;page=show_contest&amp;contest=380","name":"ACM-ICPC Regional Warmup I","start_time":"2017-10-21 22:00:09","week":"SAT","access":"Public"},{"id":"152410","oj":"AtCoder","link":"https://code-festival-2017-qualc.contest.atcoder.jp","name":"CODE FESTIVAL 2017 qual C","start_time":"2017-10-22 20:00:00","week":"SUN","access":""},{"id":"156827","oj":"Codeforces","link":"http://codeforces.com/contests","name":"Codeforces Round #442 (Div. 2)","start_time":"2017-10-23 23:35:00","week":"MON","access":""},{"id":"156828","oj":"Codeforces","link":"http://codeforces.com/contests","name":"Codeforces Round #443 (Div. 1)","start_time":"2017-10-26 22:35:00","week":"THU","access":""},{"id":"156829","oj":"Codeforces","link":"http://codeforces.com/contests","name":"Codeforces Round #443 (Div. 2)","start_time":"2017-10-26 22:35:00","week":"THU","access":""},{"id":"152502","oj":"AtCoder","link":"https://abc076.contest.atcoder.jp","name":"AtCoder Beginner Contest 076","start_time":"2017-10-28 20:00:00","week":"SAT","access":""},{"id":"144210","oj":"HackerRank","link":"http://www.hackerrank.com/contests","name":"HourRank 24","start_time":"2017-11-02 23:00:00","week":"THU","access":""},{"id":"149762","oj":"UVA","link":"https://uva.onlinejudge.org/index.php?option=com_onlinejudge&amp;Itemid=12&amp;page=show_contest&amp;contest=381","name":"ACM-ICPC Regional Warmup II","start_time":"2017-11-04 17:00:00","week":"SAT","access":"Public"},{"id":"148202","oj":"HackerRank","link":"http://www.hackerrank.com/contests","name":"Week of Code 35","start_time":"2017-11-13 15:00:00","week":"MON","access":""},{"id":"149763","oj":"UVA","link":"https://uva.onlinejudge.org/index.php?option=com_onlinejudge&amp;Itemid=12&amp;page=show_contest&amp;contest=382","name":"ACM-ICPC Regional Warmup III","start_time":"2017-11-18 22:00:00","week":"SAT","access":"Public"},{"id":"149764","oj":"UVA","link":"https://uva.onlinejudge.org/index.php?option=com_onlinejudge&amp;Itemid=12&amp;page=show_contest&amp;contest=383","name":"ACM-ICPC Regional Warmup IV","start_time":"2017-12-02 17:00:00","week":"SAT","access":"Public"}]'),
      database: [
        {
          id: 1,
          number: '1001',
          title: '小车问题',
          content: '甲、乙两人同时从A地出发要尽快同时赶到B地。出发时A地有一辆小车，可是这辆小车除了驾驶员外只能带一人。已知甲、乙两人的步行速度一样，且小于车的速度。\n问：怎样利用小车才能使两人尽快同时到达。',
          input: '仅一行，三个数据分别表示AB两地的距离s，人的步行速度a，车的速度b。',
          output: '两人同时到达B地需要的最短时间，保留6位小数。',
          inputSample: '120 5 25',
          outputSample: '9.6'
        },
        {
          id: 2,
          number: '1002',
          title: '添加括号',
          content: '现在给出一个表达式，形如a1/a2/a3/.../an。\n如果直接计算，就是一个个除过去，比如1/2/1/4=1/8。\n然而小A看到一个分数感觉很不舒服，希望通过添加一些括号使其变成一个整数。一种可行的办法是(1/2)/(1/4)=2。\n现在给出这个表达式，求问是否可以通过添加一些括号改变运算顺序使其成为一个整数。',
          input: '一个测试点中会有多个表达式。\n第一行t，表示表达式数量。\n对于每个表达式，第一行是n，第二行n个数，第i个数表示ai。',
          output: '输出t行。\n对于每个表达式，如果可以通过添加括号改变顺序使其变成整数，那么输出“Yes”，否则输出“No”',
          inputSample: '2\n4\n1 2 1 4\n5\n6 5 7 9 12',
          outputSample: 'yes\nno'
        },
        {
          id: 3,
          number: '1003',
          title: '信息传递',
          content: '有n个同学（编号为1到n）正在玩一个信息传递的游戏。在游戏里每人都有一个固定的信息传递对象，其中，编号为i的同学的信息传递对象是编号为Ti同学。\n游戏开始时，每人都只知道自己的生日。之后每一轮中，所有人会同时将自己当前所知的生日信息告诉各自的信息传递对象（注意：可能有人可以从若干人那里获取信息，但是每人只会把信息告诉一个人，即自己的信息传递对象）。当有人从别人口中得知自己的生日时，游戏结束。请问该游戏一共可以进行几轮？',
          input: '"输入共2行。\n第1行包含1个正整数n表示n个人。\n第2行包含n个用空格隔开的正整数T1,T2,……,Tn其中第i个整数Ti示编号为i的同学的信息传递对象是编号为Ti的同学，Ti≤n且Ti≠i\n数据保证游戏一定会结束。\n"',
          output: '输出共 1 行，包含 1 个整数，表示游戏一共可以进行多少轮。',
          inputSample: '5\n2 4 2 3 1',
          outputSample: '3'
        },
        {
          id: 4,
          number: '1004',
          title: '越越的组队',
          content: '班级要组织一场综合能力竞赛，全班同学（N（100以内）个，N是偶数）分成两队互相竞争。老师找到了越越并给了越越一张全班同学综合能力测试的成绩，要求他从全班同学中选出一半（他自己也可能被选），并要求这些同学综合能力测试的成绩之和在不超过班级总分一半的前提下尽量达到最高。这样分成的两队实力是最平均的。越越堆着满脸的笑容找到了你，你就帮他写一个程序吧。',
          input: '第一行：学生个数N；第二行开始的N行每行一个同学的综合能力测试的成绩。',
          output: '输出一个数：N/2个同学的综合能力测试的成绩之和在不超过班级总分一半的前提下尽量达到的最高值。',
          inputSample: '8\n77\n77\n56\n77\n84\n77\n56\n46',
          outputSample: '273'
        },
        {
          id: 5,
          number: '1005',
          title: '全排列问题',
          content: '输出自然数1到n所有不重复的排列，即n的全排列，要求所产生的任一数字序列中不允许出现重复的数字。',
          input: 'n(1≤n≤9)',
          output: '由1～n组成的所有不重复的数字序列，每行一个序列。每个数字保留5个常宽。',
          inputSample: '3',
          outputSample: '1 2 3\n1 3 2\n2 1 3\n2 3 1\n3 1 2\n3 2 1\n'
        },
        {
          id: 6,
          number: '1006',
          title: '传球游戏',
          content: '上体育课的时候，小蛮的老师经常带着同学们一起做游戏。这次，老师带着同学们一起做传球游戏。\n游戏规则是这样的：n个同学站成一个圆圈，其中的一个同学手里拿着一个球，当老师吹哨子时开始传球，每个同学可以把球传给自己左右的两个同学中的一个（左右任意），当老师再次吹哨子时，传球停止，此时，拿着球没有传出去的那个同学就是败者，要给大家表演一个节目。\n聪明的小蛮提出一个有趣的问题：有多少种不同的传球方法可以使得从小蛮手里开始传的球，传了m次以后，又回到小蛮手里。两种传球方法被视作不同的方法，当且仅当这两种方法中，接到球的同学按接球顺序组成的序列是不同的。比如有三个同学1号、2号、3号，并假设小蛮为1号，球传了3次回到小蛮手里的方式有1->2->3->1和1->3->2->1，共2种。',
          input: '输入文件ball.in共一行，有两个用空格隔开的整数n，m（3<=n<=30，1<=m<=30）。',
          output: '输出文件ball.out共一行，有一个整数，表示符合题意的方法数。',
          inputSample: '3 3',
          outputSample: '2'
        },
        {
          id: 7,
          number: '1007',
          title: '纪念品分组',
          content: '元旦快到了，校学生会让乐乐负责新年晚会的纪念品发放工作。为使得参加晚会的同学所获得 的纪念品价值相对均衡，他要把购来的纪念品根据价格进行分组，但每组最多只能包括两件纪念品， 并且每组纪念品的价格之和不能超过一个给定的整数。为了保证在尽量短的时间内发完所有纪念品，乐乐希望分组的数目最少。\n你的任务是写一个程序，找出所有分组方案中分组数最少的一种，输出最少的分组数目。',
          input: '输入文件group.in包含n+2行:\n第1行包括一个整数w，为每组纪念品价格之和的上上限。\n第2行为一个整数n，表示购来的纪念品的总件数G\n第3~n+2行每行包含一个正整数Pi (5 <= Pi <= w)表示所对应纪念品的价格。\n',
          output: '输出文件group.out仅一行，包含一个整数，即最少的分组数目。',
          inputSample: '100\n9\n90\n20\n20\n30\n40\n50\n60\n70\n80\n90\n',
          outputSample: '6'
        },
        {
          id: 8,
          number: '1008',
          title: '窗口的星星',
          content: '小卡买到了一套新房子，他十分的高兴，在房间里转来转去。\n晚上，小卡从阳台望出去，“哇~~~~好多星星啊”，但他还没给其他房间设一个窗户，天真的小卡总是希望能够在晚上能看到最多最亮的星星，但是窗子的大小是固定的，边也必须和地面平行。这时小卡使用了超能力（透视术）知道了墙后面每个星星的位置和亮度，但是小卡发动超能力后就很疲劳，只好拜托你告诉他最多能够有总和多亮的星星能出现在窗口上。',
          input: '"本题有多组数据，第一行为T 表示有T组数据T<=10\n对于每组数据\n第一行3个整数n，W，H，（n<=10000,1<=W,H<=1000000）表示有n颗星星，窗口宽为W，高为H。\n接下来n行，每行三个整数xi，yi，li 表示星星的坐标在（xi，yi），亮度为li。（0<=xi,yi<2^31)"',
          output: 'T个整数，表示每组数据中窗口星星亮度总和的最大值。',
          inputSample: '2\n3 5 4\n1 2 3\n2 3 2\n6 3 1\n3 5 4\n1 2 3\n2 3 2\n5 3 1\n',
          outputSample: '5\n6'
        },
        {
          id: 9,
          number: '1009',
          title: '青蛙的约会',
          content: '两只青蛙在网上相识了，它们聊得很开心，于是觉得很有必要见一面。它们很高兴地发现它们住在同一条纬度线上，于是它们约定各自朝西跳，直到碰面为止。可是它们出发之前忘记了一件很重要的事情，既没有问清楚对方的特征，也没有约定见面的具体位置。不过青蛙们都是很乐观的，它们觉得只要一直朝着某个方向跳下去，总能碰到对方的。但是除非这两只青蛙在同一时间跳到同一点上，不然是永远都不可能碰面的。为了帮助这两只乐观的青蛙，你被要求写一个程序来判断这两只青蛙是否能够碰面，会在什么时候碰面。\n我们把这两只青蛙分别叫做青蛙A和青蛙B，并且规定纬度线上东经0度处为原点，由东往西为正方向，单位长度1米，这样我们就得到了一条首尾相接的数轴。设青蛙A的出发点坐标是x，青蛙B的出发点坐标是y。青蛙A一次能跳m米，青蛙B一次能跳n米，两只青蛙跳一次所花费的时间相同。纬度线总长L米。现在要你求出它们跳了几次以后才会碰面。',
          input: '输入只包括一行5个整数x，y，m，n，L\n其中0<x≠y < =2000000000，0 < m、n < =2000000000，0 < L < =2100000000。',
          output: '"输出碰面所需要的天数，如果永远不可能碰面则输出一行""Impossible""。"',
          inputSample: '1 2 3 4 5',
          outputSample: '4'
        },
        {
          id: 10,
          number: '1010',
          title: '绕钉子的长绳子',
          content: '"平面上有N个圆柱形的大钉子，半径都为R,所有钉子组成一个凸多边形。\n现在你要用一条绳子把这些钉子围起来，绳子直径忽略不计。\n求出绳子的长度"',
          input: '第1行两个数：整数N(1<=N<=100)和实数R。\n接下来N行按逆时针顺序给出N个钉子中心的坐标\n坐标的绝对值不超过100。',
          output: '一个数，绳子的长度，精确到小数点后2位。',
          inputSample: '4 1\n0.0 0.0\n2.0 0.0\n2.0 2.0\n0.0 2.0',
          outputSample: '14.28'
        },
        {
          id: 11,
          number: '1011',
          title: '旅行',
          content: '你要进行一个行程为7000KM的旅行，现在沿途有些汽车旅馆，为了安全起见，每天晚上都不开车，住在汽车旅馆，你手里现在已经有一个旅馆列表，用离起点的距离来标识，如下：\n0， 990， 1010， 1970， 2030， 2940， 3060\n3930， 4060， 4970， 5030， 5990， 6010， 7000\n但在出发之前可能还要增加一些旅馆。\n现在旅行社为了节约成本，要求每天至少行驶A公里，国家旅行社为了安全起见，要求每天最多只能行驶B公里。\n你想知道一共有多少种旅行方案。',
          input: '第一行输入A，第二行输入B，第三行输入N（0≤N≤20），表示在出发之前又新增N个汽车旅馆；接下来N行，每行一个整数m，表示旅馆离起点的距离（0<m<7000）。注意：没有任意两个旅馆在同一位置。',
          output: '输出一共有多少种旅行方案。',
          inputSample: '500\n1500\n0',
          outputSample: '64'
        },
        {
          id: 12,
          number: '1012',
          title: '伊甸园日历游戏',
          content: 'Adam和Eve玩一个游戏，他们先从1900.1.1到2001.11.4这个日期之间随意抽取一个日期出来。然后他们轮流对这个日期进行操作：\n1 ： 把日期的天数加1，例如1900.1.1变到1900.1.2\n2 ： 把月份加1，例如：1900.1.1变到1900.2.1\n其中如果天数超过应有天数则日期变更到下个月的第1天。月份超过12则变到下一年的1月。而且进行操作二的时候，如果有这样的日期：1900.1.31，则变成了1900.2.31，这样的操作是非法的，我们不允许这样做。而且所有的操作均要考虑历法和闰年的规定。\n谁先将日期变到2001.11.4谁就赢了。\n每次游戏都是Adam先操作，问他有没有必胜策略？',
          input: '一个测试点。多组数据。\n第一行为数据组数。\n接下来一行X Y Z表示X年Y月Z日',
          output: '输出“YES”or“NO”表示亚当是否有必胜策略。',
          inputSample: '3\n2001 11 3\n2001 11 2\n2001 10 3',
          outputSample: 'YES\nNO\nNO\n'
        },
        {
          id: 13,
          number: '1013',
          title: '因式分解',
          content: '某天，小W正在上数学课，听见老师讲解因式分解增补删除及十字相乘法的技巧，感觉非常厉害，于是想用这些技巧来做题，但做着做着遇到一道不会做的题，你能帮帮他吗？\n在整多项式环内对多项式x^n-1作因式分解（简单点说就是做因式分解题），要求分解到全部为素多项式为止（即最后结果不能有可继续分解的多项式）。',
          input: '一个正整数n',
          output: '输出一行一个字符串，表示因式分解的结果。\n最后的输出中每个因式应该不含空格，在可以省略0、1、乘号和括号的情况下应该尽可能省略。\n有多个因式时，每个因式应该降幂排列，并且保证首项系数为正。\n除此以外，我们要求按如下顺序排列因式：优先输出次数低的因式，对于次数相同的因式，依次比较每个因式的系数，从高指数项到低指数项（包括被省略即系数为0的项）。系数首先比较绝对值，其次比较符号。规定绝对值小的系数字典序小，绝对值相同时比较符号，负号字典序比正号小。字典序越小的因式应该排在越前面输出。详见样例。',
          inputSample: '12',
          outputSample: '(x-1)(x+1)(x^2+1)(x^2-x+1)(x^2+x+1)(x^4-x^2+1)'
        },
        {
          id: 14,
          number: '1014',
          title: '机器翻译',
          content: '小晨的电脑上安装了一个机器翻译软件，他经常用这个软件来翻译英语文章。\n这个翻译软件的原理很简单，它只是从头到尾，依次将每个英文单词用对应的中文含义来替换。对于每个英文单词，软件会先在内存中查找这个单词的中文含义，如果内存中有，软件就会用它进行翻译；如果内存中没有，软件就会在外存中的词典内查找，查出单词的中文含义然后翻译，并将这个单词和译义放入内存，以备后续的查找和翻译。\n假设内存中有M个单元，每单元能存放一个单词和译义。每当软件将一个新单词存入内存前，如果当前内存中已存入的单词数不超过M-1，软件会将新单词存入一个未使用的内存单元；若内存中已存入M个单词，软件会清空最早进入内存的那个单词，腾出单元来，存放新单词。\n假设一篇英语文章的长度为N个单词。给定这篇待译文章，翻译软件需要去外存查找多少次词典？假设在翻译开始前，内存中没有任何单词。',
          input: '输入文件共2行。每行中两个数之间用一个空格隔开。\n第一行为两个正整数M和N，代表内存容量和文章的长度。\n第二行为N个非负整数，按照文章的顺序，每个数（大小不超过1000）代表一个英文单词。文章中两个单词是同一个单词，当且仅当它们对应的非负整数相同。',
          output: '包含一个整数，为软件需要查词典的次数。',
          inputSample: '3 7\n1 2 1 5 4 4 1',
          outputSample: '5'
        },
        {
          id: 15,
          number: '1015',
          title: '包裹快递',
          content: '一个快递公司要将n个包裹分别送到n个地方，并分配给邮递员小K一个事先设定好的路线，小K需要开车按照路线给的地点顺序相继送达，且不能遗漏一个地点。小K得到每个地方可以签收的时间段，并且也知道路线中一个地方到下一个地方的距离。若到达某一个地方的时间早于可以签收的时间段，则必须在这个地方停留至可以签收，但不能晚于签收的时间段，可以认为签收的过程是瞬间完成的。\n为了节省燃料，小K希望在全部送达的情况下，车的最大速度越小越好，就找到了你给他设计一种方案，并求出车的最大速度最小是多少。',
          input: '"第1行为一个正整数n，表示需要运送包裹的地点数\n下面n行，第i+1行有3个正整数xi，yi，si，表示按路线顺序给出第i个地点签收包裹的时间段为[xi, yi]，即最早为距出发时刻xi，最晚为距出发时刻yi，从前一个地点到达第i个地点距离为si，且保证路线中xi递增。\n可以认为s1为出发的地方到第1个地点的距离，且出发时刻为0。"',
          output: '仅包括一个整数，为车的最大速度最小值，结果保留两位小数。',
          inputSample: '3\n1 2 2\n6 6 2\n7 8 4\n',
          outputSample: '2'
        }
      ]
    }
  },
  methods: {
    openLink (link) {
      window.open(link)
    }
  }
})
