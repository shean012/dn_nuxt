<template>
  <div class="content_detail_comp">
    <div class="content_title">{{title ? title : ''}}</div>
    <div class="content_info flex row">
      <div class="content_class">{{ classtitle ? classtitle : '' }}</div>
      <div class="content_date">{{formatDate(ctime)}}</div>
    </div>
    <div class="content_detail"
         v-html="contentData ? contentData : ''"></div>
  </div>
</template>

<script>
import { initFn } from '../../utils/public.js'

export default {
  data() {
    return {
      contentData: '',
      classtitle: '',
      title: '',
      ctime: ''
    }
  },
  mounted() {
    let id = this.$route.params.contentId
    if (id) {
      initFn(this, this.getContentDetail, id)
    }
  },
  methods: {
    getContentDetail(id) {
      window.hccms.api.GetNewsContent({}, id, 0, res => {
        let { content, classtitle, title, ctime } = res
        ;(this.contentData = content), (this.classtitle = classtitle)
        this.title = title
        this.ctime = ctime
      })
    },
    formatDate(time) {
      if (!time) return ''
      let date = new Date(time).toISOString()
      return date.split('T')[0]
    }
  }
}
</script>

<style lang="scss" scoped>
.content_detail_comp {
  max-width: 980px;
  margin: 100px auto 20px;
}
.content_title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}
.content_info {
  color: #666;
  justify-content: space-between;
  margin: 20px;
}
</style>