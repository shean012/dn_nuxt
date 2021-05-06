<template>
  <div class="education_comp">
    <div class="banner">
      <img src="~/assets/images/education/Banner4.jpg"
           alt="">
    </div>
    <div class="main flex row">
      <nav class="nav"
           @click="e => selectTab(e)">
        <div class="
           nav_item"
             v-for="(item) of tabBarData"
             :key="item.id"
             :data-index="item.id"
             :data-title="item.title"
             :class="{ selected: curTab === item.id }">{{item.title}}
        </div>
      </nav>
      <div class="contents">
        <div class="content_title">

        </div>
        <div class="content_main">
          <ContentList :channelId="curTab" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { initFn } from '~/utils/public.js'

export default {
  data() {
    return {
      curTab: null,
      curTabTitle: '',
      tabBarData: [],
      contentDetail: {},
      cardContent: []
    }
  },
  mounted() {
    let _this = this
    initFn(this, this.getColumnInfo)
  },
  methods: {
    getColumnInfo() {
      window.hccms.api.GetNewsClassList(0, 530, 1, res => {
        if (!Array.isArray(res) || res.length < 1) return
        this.tabBarData = res
        this.curTabTitle = res[0].title
        this.curTab = res[0].id
      })
    },
    selectTab(e) {
      let idx = Number(e.target.getAttribute('data-index'))
      let title = e.target.getAttribute('data-title')
      this.curTabTitle = title
      if (this.curTab === idx) return
      this.curTab = idx
    }
  }
}
</script>

<style lang="scss" scoped>
.education_comp {
  background-color: #f9f9f9;
  .main {
    width: 1200px;
    margin: 0 auto;
    padding: 60px 0;
    justify-content: space-between;
    .nav {
      width: 285px;
      text-align: center;
      .nav_item {
        background-color: #fff;
        line-height: 85px;
        font-size: 16px;
        color: #666;
        height: 85px;
        border-bottom: 1px solid #efefef;
        transition: all 0.5s;
        cursor: pointer;
        &:hover {
          color: #e4262b;
        }
      }
      .selected {
        color: #fff;
        background-color: #e4262b;
        position: relative;
        &:hover {
          color: #fff !important;
        }
        &::after {
          content: '';
          position: absolute;
          border-top: transparent;
          border-left: #e4262b;
          border-right: transparent;
          border-bottom: transparent;
          border-width: 12px;
          border-style: solid;
          top: 50%;
          right: -22px;
          transform: translateY(-50%);
        }
      }
    }
    .contents {
      width: 870px;
      background-color: #fff;
      .content_title {
        padding: 40px 40px 20px;
      }
      .content_main {
        padding: 0 40px 50px;
      }
    }
  }
}
</style>