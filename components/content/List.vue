<template>
  <div class="content_list flex column">
    <div class="content_item flex row"
         v-for="(item, index) of contentList"
         :key="index">
      <div class="content_thumb"
           :style="`backgroundImage: url(${item.thumb ? item.thumb : ''})`"></div>
      <div class="content_text flex column">
        <div class="content_title"
             @click="_ => push2detail(item.id)">
          {{item.title ? item.title : ''}}
        </div>
        <div class="content_subtitle">{{item.intro ? item.intro : ''}}</div>
        <div class="content_date">{{ formatDate(item.ctime) }}</div>
      </div>
    </div>
    <div class="content_ctrl flex">
      <el-pagination layout="prev, pager, next"
                     :page-size="5"
                     :total="total"
                     @current-change="pageChangeHandler">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contentList',
  props: { channelId: null },
  data() {
    return {
      curPage: 1,
      total: null,
      contentList: []
    }
  },
  mounted() {
    if (this.channelId) this.getContentList(this.channelId)
  },
  watch: {
    channelId(newVal) {
      if (newVal) this.getContentList(newVal)
    }
  },
  methods: {
    getContentList(id) {
      window.hccms.api.GetNewsListTotal(0, id, 0, 5, this.curPage, {}, res => {
        if (!res) return
        let { List, total } = res
        if (!Array.isArray(List) || List.length < 1) return
        this.contentList = List
        !isNaN(total) ? (this.total = total) : ''
      })
    },
    pageChangeHandler(e) {
      this.curPage = e
      this.getContentList(this.channelId)
    },
    push2detail(id) {
      let path = '/contentDetail/' + id
      this.$router.push({ path })
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
.content_list {
  text-align: left;
  .content_ctrl {
    width: 100%;
    justify-content: center;
  }
  .content_item {
    justify-content: space-between;
    align-items: center;
    height: 240px;
    margin-bottom: 50px;
    .content_thumb {
      width: 320px;
      height: 240px;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
    .content_text {
      width: 430px;
      height: 185px;
      justify-content: space-between;
      a {
        text-decoration: none !important;
      }
      .content_title {
        color: #000;
        cursor: pointer;
        font-weight: bold;
        font-size: 22px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 2;
      }
      .content_subtitle {
        color: #999;
        font-size: 16px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 3;
      }
      .content_date {
        color: #999;
        font-size: 16px;
      }
    }
  }
}
</style>