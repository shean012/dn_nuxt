<template>
  <div class="education_comp">
    <div class="banner">
      <img src="~/assets/images/education/Banner4.jpg"
           alt="">
    </div>
    <div class="main flex row">
      <div class="contents">
        <div class="content_main">
          <ContentList :channelId="curTab" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curTab: null
    }
  },
  mounted() {
    let _this = this
    if (window.hasInit) this.curTab = 535
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
          _this.curTab = 535
        }
      )
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
    justify-content: center;
    .contents {
      width: 80%;
      padding: 50px 0;
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