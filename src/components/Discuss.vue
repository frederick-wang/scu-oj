<template>
  <div class="discuss">
    <Popups></Popups>
    <div class="problem-bg"></div>
    <transition name="fade">
      <div class="nav-bar-wrapper">
        <div class="nav-bar">
          <div class="item logo" @click="clickLogo">SCU Online Judge</div>
          <div class="item" @click="$router.push(`/${type === 'problem' ? 'problem' : 'contest'}/${id}`)">返回{{type === 'problem' ? '题目' : '比赛'}}</div>
          <div class="item logout float-right">退出登录状态</div>
          <div class="item logout float-right" @click="clickLogo">王兆基</div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="container">
        <div class="am-g am-g-fixed">
          <div class="am-u-sm-12">
            <div class="card discuss-header">
              <div class="content">
                <div class="discuss-information">
                  <h1 class="title">[讨论区] {{title}}</h1>
                  <div class="source gray">
                    <span>共有 12 条主题</span>
                    <span style="margin-left: 1rem;"> 36 条评论</span>
                    <span style="margin-left: 1rem;"> 6 位用户在此发言</span>
                  </div>
                </div>
                <div class="buttons">
                  <a href="javascript:" class="item am-icon-btn am-success am-icon-paper-plane-o" id="button-submit" data-am-modal="{target: '#discuss-submit-popup'}"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="am-g am-g-fixed">
          <div class="am-u-sm-12">
            <div class="card">
              <div class="content">
                <ul class="am-comments-list am-comments-list-flip">
                  <li class="am-comment">
                    <a href="javascript:">
                      <img src="../assets/bilibili.png" alt="" class="am-comment-avatar" width="48" height="48" />
                    </a>
                    <div class="am-comment-main">
                      <header class="am-comment-hd">
                        <div class="am-comment-meta">
                          <a href="javascript:" class="am-comment-author">王兆基</a>
                          评论于
                          <time datetime="2017-10-12T04:54:29-07:00" title="2017年10月12日 下午2:30 格林尼治标准时间+0800">2017-10-12 14:30</time>
                        </div>
                      </header>
                      <div class="am-comment-bd">
                        我在年青时候也曾经做过许多梦，后来大半忘却了，但自己也并不以为可惜。所谓回忆者，虽说可以使人欢欣，有时也不免使人寂寞，使精神的丝缕还牵着已逝的寂寞的时光，又有什么意味呢，而我偏苦于不能全忘却，这不能全忘的一部分，到现在便成了《呐喊》的来由。
                      </div>
                    </div>
                  </li>
                  <li class="am-comment am-comment-flip am-comment-highlight">
                    <a href="javascript:">
                      <img src="../assets/bilibili.png" alt="" class="am-comment-avatar" width="48" height="48" />
                    </a>
                    <div class="am-comment-main">
                      <header class="am-comment-hd">
                        <div class="am-comment-meta">
                          <a href="javascript:" class="am-comment-author">朱嘉宁</a>
                          评论于
                          <time datetime="2017-10-12T04:54:29-07:00" title="2017年10月12日 下午3:30 格林尼治标准时间+0800">2017-10-12 15:30</time>
                        </div>
                      </header>
                      <div class="am-comment-bd">
                        我有四年多，曾经常常，——几乎是每天，出入于质铺和药店里，年纪可是忘却了，总之是药店的柜台正和我一样高，质铺的是比我高一倍，我从一倍高的柜台外送上衣服或首饰去，在侮蔑里接了钱，再到一样高的柜台上给我久病的父亲去买药。回家之后，又须忙别的事了，因为开方的医生是最有名的，以此所用的药引也奇特：冬天的芦根，经霜三年的甘蔗，蟋蟀要原对的，结子的平地木，……多不是容易办到的东西。然而我的父亲终于日重一日的亡故了。
                      </div>
                    </div>
                  </li>
                  <li class="am-comment am-comment-success">
                    <a href="javascript:">
                      <img src="../assets/bilibili.png" alt="" class="am-comment-avatar" width="48" height="48" />
                    </a>
                    <div class="am-comment-main">
                      <header class="am-comment-hd">
                        <div class="am-comment-meta">
                          <a href="javascript:" class="am-comment-author">薛泓睿</a>
                          评论于
                          <time datetime="2017-10-12T04:54:29-07:00" title="2017年10月12日 下午2:30 格林尼治标准时间+0800">2017-10-12 14:30</time>
                        </div>
                      </header>
                      <div class="am-comment-bd">
                        有谁从小康人家而坠入困顿的么，我以为在这途路中，大概可以看见世人的真面目；我要到N进K学堂去了，仿佛是想走异路，逃异地，去寻求别样的人们。我的母亲没有法，办了八元的川资，说是由我的自便；然而伊哭了，这正是情理中的事，因为那时读书应试是正路，所谓学洋务，社会上便以为是一种走投无路的人，只得将灵魂卖给鬼子，要加倍的奚落而且排斥的，而况伊又看不见自己的儿子了。然而我也顾不得这些事，终于到N去进了K学堂了，在这学堂里，我才知道世上还有所谓格致，算学，地理，历史，绘图和体操。生理学并不教，但我们却看到些木版的《全体新论》和《化学卫生论》之类了。我还记得先前的医生的议论和方药，和现在所知道的比较起来，便渐渐的悟得中医不过是一种有意的或无意的骗子，同时又很起了对于被骗的病人和他的家族的同情；而且从译出的历史上，又知道了日本维新是大半发端于西方医学的事实。
                      </div>
                    </div>
                  </li>
                  <li class="am-comment am-comment-flip am-comment-warning">
                    <a href="javascript:">
                      <img src="../assets/bilibili.png" alt="" class="am-comment-avatar" width="48" height="48" />
                    </a>
                    <div class="am-comment-main">
                      <header class="am-comment-hd">
                        <div class="am-comment-meta">
                          <a href="javascript:" class="am-comment-author">时佳音</a>
                          评论于
                          <time datetime="2017-10-12T04:54:29-07:00" title="2017年10月12日 下午3:30 格林尼治标准时间+0800">2017-10-12 15:30</time>
                        </div>
                      </header>
                      <div class="am-comment-bd">
                        因为这些幼稚的知识，后来便使我的学籍列在日本一个乡间的医学专门学校里了。我的梦很美满，预备卒业回来，救治像我父亲似的被误的病人的疾苦，战争时候便去当军医，一面又促进了国人对于维新的信仰。我已不知道教授微生物学的方法，现在又有了怎样的进步了，总之那时是用了电影，来显示微生物的形状的，因此有时讲义的一段落已完，而时间还没有到，教师便映些风景或时事的画片给学生看，以用去这多馀的光阴。其时正当日俄战争的时候，关于战事的画片自然也就比较的多了，我在这一个讲堂中，便须常常随喜我那同学们的拍手和喝采。有一回，我竟在画片上忽然会见我久违的许多中国人了，一个绑在中间，许多站在左右，一样是强壮的体格，而显出麻木的神情。据解说，则绑着的是替俄国做了军事上的侦探，正要被日军砍下头颅来示众，而围着的便是来赏鉴这示众的盛举的人们。
                      </div>
                    </div>
                  </li>
                  <li class="am-comment am-comment-danger">
                    <a href="javascript:">
                      <img src="../assets/bilibili.png" alt="" class="am-comment-avatar" width="48" height="48" />
                    </a>
                    <div class="am-comment-main">
                      <header class="am-comment-hd">
                        <div class="am-comment-meta">
                          <a href="javascript:" class="am-comment-author">韩冰冰</a>
                          评论于
                          <time datetime="2017-10-12T04:54:29-07:00" title="2017年10月12日 下午2:30 格林尼治标准时间+0800">2017-10-12 14:30</time>
                        </div>
                      </header>
                      <div class="am-comment-bd">
                        这一学年没有完毕，我已经到了东京了，因为从那一回以后，我便觉得医学并非一件紧要事，凡是愚弱的国民，即使体格如何健全，如何茁壮，也只能做毫无意义的示众的材料和看客，病死多少是不必以为不幸的。所以我们的第一要著，是在改变他们的精神，而善于改变精神的是，我那时以为当然要推文艺，于是想提倡文艺运动了。在东京的留学生很有学法政理化以至警察工业的，但没有人治文学和美术；可是在冷淡的空气中，也幸而寻到几个同志了，此外又邀集了必须的几个人，商量之后，第一步当然是出杂志，名目是取“新的生命”的意思，因为我们那时大抵带些复古的倾向，所以只谓之《新生》。
                      </div>
                    </div>
                  </li>
                  <li class="am-comment am-comment-flip am-comment-primary">
                    <a href="javascript:">
                      <img src="../assets/bilibili.png" alt="" class="am-comment-avatar" width="48" height="48" />
                    </a>
                    <div class="am-comment-main">
                      <header class="am-comment-hd">
                        <div class="am-comment-meta">
                          <a href="javascript:" class="am-comment-author">马瑞鑫</a>
                          评论于
                          <time datetime="2017-10-12T04:54:29-07:00" title="2017年10月12日 下午3:30 格林尼治标准时间+0800">2017-10-12 15:30</time>
                        </div>
                      </header>
                      <div class="am-comment-bd">
                        《新生》的出版之期接近了，但最先就隐去了若干担当文字的人，接着又逃走了资本，结果只剩下不名一钱的三个人。创始时候既已背时，失败时候当然无可告语，而其后却连这三个人也都为各自的运命所驱策，不能在一处纵谈将来的好梦了，这就是我们的并未产生的《新生》的结局。
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Popups from './discuss/Popups'

export default {
  name: 'Discuss',
  components: {
    'Popups': Popups
  },
  data () {
    return {

    }
  },
  computed: {
    type () {
      switch (this.$route.params.id.slice(0, 1)) {
        case 'p':
          return 'problem'
        case 'c':
          return 'contest'
        default:
          this.$router.replace('/')
          return 'error'
      }
    },
    id () {
      return parseInt(this.$route.params.id.slice(1, this.$route.params.id.length))
    },
    title () {
      let tmp = ''
      if (this.type === 'problem') {
        tmp = this.$root.database[this.id - 1].title
      } else if (this.type === 'contest') {
        tmp = 'SCU ACM 训练赛'
      }
      return tmp
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
      $('#button-submit').popover({
        content: '发表新主题',
        trigger: 'hover focus',
        theme: 'success sm'
      })
    })
  }
}
</script>

<style scoped>
.discuss {
  width: 100%;
  font-weight: lighter;
}

.discuss .container {
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
  padding: 0;
  padding-top: 0.5rem;
}

.discuss-item .user .name {
  font-size: 1.4rem;
  text-align: center;
}

.discuss-item .right .title a,
.discuss-item .right .abstract a,
.discuss-item .user {
  color: #262626;
}

.discuss-item .right .title a:hover,
.discuss-item .right .abstract a:hover,
.discuss-item .user:hover {
  color: #3e7ac2;
}

.discuss-item .right .title {
  font-weight: normal;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.discuss-item .right .abstract {
  margin-bottom: 1rem;
}

.discuss-item .right .submit-time {
  font-size: 1.2rem;
}

.discuss-header {
  padding: 0.8rem 2rem;
  margin-bottom: 0;
  height: 8rem;
}

.discuss-header .discuss-information {
  float: left;
}

.discuss-header .buttons {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.discuss-header .buttons .item:first-child {
  margin-right: 0;
}

.discuss-header .buttons .item {
  float: right;
  margin: 0 1rem;
  opacity: 0.5;
  transition: opacity 0.2s linear;
}

.discuss-header .buttons .item:hover,
.discuss-header .buttons .item:focus {
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
