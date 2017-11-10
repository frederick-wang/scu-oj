<template>
  <div class="index">
    <Popups></Popups>
    <div id="fullpage">
      <div class="section">
        <EntrySection></EntrySection>
      </div>
      <div class="section">
        <ProblemSection></ProblemSection>
      </div>
      <div class="section">
        <ContestSection></ContestSection>
      </div>
      <div class="section">
        <InformationSection></InformationSection>
      </div>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'
// import _ from 'lodash'
import echarts from 'echarts'

import Popups from './index/Popups'

import EntrySection from './index/EntrySection'
import ProblemSection from './index/ProblemSection'
import ContestSection from './index/ContestSection'
import InformationSection from './index/InformationSection'

export default {
  name: 'Index',
  components: {
    'Popups': Popups,
    'EntrySection': EntrySection,
    'ProblemSection': ProblemSection,
    'ContestSection': ContestSection,
    'InformationSection': InformationSection
  },
  mounted () {
    if (!window.$('html').hasClass('fp-enabled')) {
      window.$('#fullpage').fullpage({
        loopTop: true,
        sectionsColor: ['#f3f3f3', '#f3f3f3'],
        scrollOverflow: true,
        onLeave: (index, nextIndex, direction) => {
          this.$root.currentPage = nextIndex
        },
        afterLoad: (anchorLink, index) => {
          if (index === 4) {
            let chart = echarts.init(document.getElementById('chart'))
            let option = {
              title: {
                text: '刷题总数',
                left: 'center'
              },
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'cross',
                  label: {
                    backgroundColor: '#fff',
                    color: '#262626'
                  }
                },
                itemStyle: {
                  normal: {
                    color: '#262626'
                  }
                }
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              xAxis: [
                {
                  type: 'category',
                  boundaryGap: false,
                  data: ['9-17', '9-24', '10-1', '10-8', '10-15', '10-22', '10-29'],
                  itemStyle: {
                    normal: {
                      color: '#262626'
                    }
                  }
                }
              ],
              yAxis: [
                {
                  type: 'value',
                  itemStyle: {
                    normal: {
                      color: '#262626'
                    }
                  }
                }
              ],
              series: [
                {
                  name: '刷题总数',
                  type: 'line',
                  areaStyle: {
                    normal: {
                      color: '#eef4fa'
                    }
                  },
                  itemStyle: {
                    normal: {
                      color: '#3e7ac2'
                    }
                  },
                  lineStyle: {
                    normal: {
                      color: '#3e7ac2'
                    }
                  },
                  data: [12, 15, 30, 31, 35, 36, 43]
                }
              ]
            }
            chart.setOption(option)
          }
          window.$.fn.fullpage.reBuild()
        }
      })
    }
  },
  beforeDestory () {
    window.$.fn.fullpage.destroy('all')
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$root.currentPage = 1
    })
  },
  beforeRouteLeave (to, from, next) {
    next()
    // window.$.fn.fullpage.destroy('all')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
