<template>
  <div class="solution">
    <Popups></Popups>
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
            <div class="card solution-header">
              <div class="content">
                <div class="solution-information">
                  <h1 class="title">[题解区] {{title}}</h1>
                  <div class="source gray">
                    <span>共有 1 条题解</span>
                    <span style="margin-left: 1rem;"> 36 条评论</span>
                    <span style="margin-left: 1rem;"> 6 位用户在此发言</span>
                  </div>
                </div>
                <div class="buttons">
                  <a href="javascript:" class="item am-icon-btn am-success am-icon-paper-plane-o" id="button-submit" data-am-modal="{target: '#solution-submit-popup'}"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="am-g am-g-fixed">
          <div class="am-u-sm-12">
            <div class="card" v-for="n in 5" :key="n">
              <div class="header">
                <h2>二分法+洲阁筛的解法</h2>
                <span>Facico 评论于 2017-10-12 14:30</span>
              </div>
              <div class="content">
                <article class="am-article">
                  <div class="am-article-bd">
                    <h2>题目分析</h2>
                    <p>很明显这个要二分答案。</p>
                    <p>现在的主要问题就是求f[i]表示i里面有多少个质数。</p>
                    <p>这里可以用个非正式的洲阁筛。</p>
                    <p>设</p>
                    <p>f[i]表示i以内有多少个质数</p>
                    <p>p[i]表示第i个质数</p>
                    <p>g[i][j]表示前i个数不被p[1...j]整除的数有多少个</p>
                    <p>那么先来看看f，首先我们知道一个数i可以被i√以内的质数给筛掉，那么筛不掉的就是质数，所以有f[i]=f[i√]+g[i][f[i√]]-1，因为1不是质数。</p>
                    <p>然后p可以用线筛来解决。</p>
                    <p>g[i][j]可以从g[i][j-1]推过来，但是g[i][j-1]还包括一些是p[j]的倍数的数：p[j],2p[j],3p[j],4p[j]...ip[j]p[j]，所以就要排除掉[1...ip[j]]中是p[1...j−1]倍数的，所以有g[i][j]=g[i][j−1]−g[ip[j]][j−1]</p>
                    <p>但是只有这个还不行，时间卡不过去。</p>
                    <p>我们考虑如何在根号时间内处理好。</p>
                    <p>那么很明显要优化求g的时间。</p>
                    <p>所以这里有两个优化：</p>
                    <p>1、当f[i]
                      <=j，那么g[i][j]=1，因为j包含了组成[2…i]的所有质数，那么除了1以外，其他的数都会被整数。</p>
                        <p>2、如果不满足上面的条件，当f[i√]
                          <=j，那么g[i][j]=f[i]+1-j，因为[1…i]的数可以由i√里所有的质数给筛掉，但是j包含了这些质数，那么只有除了这j个质数之外的质数，和1可以不被整除了。</p>
                            <p>剩下的要考虑的就是空间与时间的问题，51Nod这道题不打表还跑得挺慢的。</p>
                  </div>
                  <h2>代码</h2>
                  <pre>#include&lt;iostream&gt;
      #include&lt;stdio.h&gt;
      #include&lt;string.h&gt;
      #include&lt;algorithm&gt;
      #include&lt;math.h&gt;
      #define fo(i,a,b) for(i=a;i<=b;i++)
      const int maxn=7500000+7;
      typedef long long ll;
      using namespace std;
      ll i,j,k,t,n,m,ans;
      ll r,mid,l;
      int f[maxn],p[maxn];
      bool bz[maxn];
      ll g(ll n,int m){
          if(!m)return n;
          if(m==1)return n-n/2;
          if(n<=maxn-7){
              if(f[n]<=m)return 1;
              if(f[(int)sqrt(n)]<=m)return f[n]-m+1;
          }
          return g(n,m-1)-g(n/p[m],m-1);
      }
      bool pan(ll x){
          ll y=sqrt(x);
          return f[y]+g(x,f[y])-1>=n;
      }
      int main(){
          fo(i,2,maxn-7){
              if(!bz[i])p[++p[0]]=i;
              fo(j,1,p[0]){
                  t=p[j]*i;
                  if(t>maxn-7)break;
                  bz[t]=1;if(i%p[j]==0)break;
              }
          }
          fo(i,2,maxn-7)f[i]=f[i-1]+(bz[i]==0);
          scanf("%d",&n);
          l=1,r=22801763489;
          while(l<r){
              mid=(l+r)/2;
              if(pan(mid))r=mid;else l=mid+1;
          }
          printf("%lld\n",l);
      }</pre>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Popups from './solution/Popups'

export default {
  name: 'solution',
  components: {
    'Popups': Popups
  },
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
      $('#button-submit').popover({
        content: '发表新题解',
        trigger: 'hover focus',
        theme: 'success sm'
      })
    })
  }
}
</script>

<style scoped>
.solution {
  width: 100%;
  font-weight: lighter;
}

.solution .container {
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

.solution-item {
  padding: 1rem;
}

.solution-item:hover {
  background: #eef4fa;
  background-color: #eef4fa;
}

.solution-item:last-child {
  margin-bottom: 0;
}

.solution-item .user {
  display: block;
}

.solution-item .avatar {
  padding: 0;
  padding-top: 0.5rem;
}

.solution-item .user .name {
  font-size: 1.4rem;
  text-align: center;
}

.solution-item .right .title a,
.solution-item .right .abstract a,
.solution-item .user {
  color: #262626;
}

.solution-item .right .title a:hover,
.solution-item .right .abstract a:hover,
.solution-item .user:hover {
  color: #3e7ac2;
}

.solution-item .right .title {
  font-weight: normal;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.solution-item .right .abstract {
  margin-bottom: 1rem;
}

.solution-item .right .submit-time {
  font-size: 1.2rem;
}

.solution-header {
  padding: 0.8rem 2rem;
  margin-bottom: 0;
  height: 8rem;
}

.solution-header .solution-information {
  float: left;
}

.solution-header .buttons {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.solution-header .buttons .item:first-child {
  margin-right: 0;
}

.solution-header .buttons .item {
  float: right;
  margin: 0 1rem;
  opacity: 0.5;
  transition: opacity 0.2s linear;
}

.solution-header .buttons .item:hover,
.solution-header .buttons .item:focus {
  opacity: 1;
}
</style>
