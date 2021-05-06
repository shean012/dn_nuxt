<template>
  <div class="home_education_comp flex column">
    <div class="comp_title">投资者教育保护</div>
    <div class="educatio_tabBar flex row"
         @click="e => selectTab(e)">
      <div v-for="(item, index) of tabBarData"
           :key="item.id"
           :data-index="index"
           :class="{ selected: curTab === index }">{{item.title}}</div>
    </div>
    <div class="tabCard flex row">
      <div class="thumb_cover"
           :style="`backgroundImage: url(${contentDetail && contentDetail.thumb ? contentDetail.thumb : ''})`"></div>
      <div class="newsList flex column">
        <NuxtLink to=""
                  class="news_title_first">{{contentDetail && contentDetail.title ? contentDetail.title : ''}}</NuxtLink>
        <div class="news_subtitle_first flex row">
          <div class="news_date_frist">{{contentDetail && contentDetail.ctime ? formatDate(contentDetail.ctime) : ''}}</div>
          <NuxtLink to=""
                    class="news_read_more flex row">查看更多</NuxtLink>
        </div>
        <div class="news_detail">{{contentDetail && contentDetail.intro ? contentDetail.intro : ''}}</div>
        <div class="news_item flex row"
             v-for="(item) of cardContent"
             :key="item.id">
          <NuxtLink to=""
                    class="news_title">{{item.title}}</NuxtLink>
          <div class="
               news_date">{{formatDate(item.ctime)}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curTab: 0,
      tabBarData: [],
      contentDetail: {},
      cardContent: []
    }
  },
  async mounted() {
    let _this = this
    if (window.hasInit) this.getInfo()
    else {
      window.hccms.init.auth(
        {
          deptid: 0,
          activityid: 0,
          scenetype: 1,
          actiontype: 0
        },
        function(e) {
           window.hasInit = true
          _this.getInfo()
        }
      )
    }
  },
  methods: {
    getInfo() {
      window.hccms.api.GetNewsClassList(0, 530, 1, res => {
        if (!Array.isArray(res) || res.length < 1) return
        this.tabBarData = res
        this.getTabCardContext(res[0].id)
      })
    },
    selectTab(e) {
      let idx = Number(e.target.getAttribute('data-index'))
      this.curTab = idx
      let selectedId = this.tabBarData[idx] ? this.tabBarData[idx].id : null
      if (selectedId) this.getTabCardContext(selectedId)
    },
    getTabCardContext(id) {
      window.hccms.api.GetNewsListTotal(0, id, 0, 3, 1, {}, res => {
        let { List } = res
        if (!Array.isArray(List) || List.length < 1) return
        this.contentDetail = List[0]
        this.cardContent = List.slice(1, 2)
      })
    },
    formatDate(time) {
      if (!time) return
      let date = new Date(time).toISOString()
      return date.split('T')[0]
    }
  }
}
</script>

<style lang="scss" scoped>
.home_education_comp {
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
  .comp_title {
    padding: 20px 0 50px;
    font-size: 22px;
    text-align: center;
    font-weight: bold;
  }
  .educatio_tabBar {
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    div {
      width: 288px;
      border: 1px solid #888;
      color: #888;
      padding: 20px 0;
      text-align: center;
      cursor: pointer;
    }
    .selected {
      color: red;
      border-color: red;
    }
  }
  .tabCard {
    width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;

    .thumb_cover {
      width: 440px;
      height: 330px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      border: 1px solid rgba(222, 222, 222, 0.5);
    }
    .newsList {
      width: 580px;
      height: 330px;
      .news_title_first {
        font-size: 20px;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 20px;
        text-align: left;
        cursor: pointer;
      }
      .news_subtitle_first {
        font-size: 14px;
        color: #999;
        margin-bottom: 35px;
        justify-content: space-between;
        .news_read_more {
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .news_detail {
        font-size: 18px;
        color: #777;
        margin-bottom: 35px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        overflow: hidden;
        text-indent: 20px;
        text-align: left;
      }
      .news_item {
        justify-content: space-between;
        font-size: 14px;
        .news_title {
          cursor: pointer;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #333;
          width: 420px;
          text-align: left;
        }
        .news_date {
          width: 100px;
          color: #999;
        }
      }
    }
  }
}
</style>