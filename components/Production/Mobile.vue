<template>
  <div class="mobile_comp fadeInUp">
    <div class="section"
         style="backgroundColor: #ffffff">
      <div class="container flex row">
        <div class="content flex column">
          <div class="logo">
            <img src="~/assets/images/Product/LOGO2.png">
          </div>
          <div class="title">要闻快讯实时推送</div>
          <div class="subtitle">解读热门财经事件 把握个股投资机会</div>
          <div class="desc">7*24小时追踪金融动态，政策风向，股票重大情报，海量数据，
            深度分析，多维度、深层次为您推送，投资机会一览无余</div>
        </div>
        <div class="mobile">
          <img src="~/assets/images/Product/dy01.png">
        </div>
      </div>
      <div class="bottomCover">
        <img src="~/assets/images/Product/bottomBarGary.png">
      </div>
    </div>

    <div class="section"
         style="backgroundColor: #f7f8f9">
      <div class="container flex row">
        <div class="mobile">
          <img src="~/assets/images/Product/dy02.png">
        </div>
        <div class="content flex column">
          <div class="title">视频直播互动</div>
          <div class="subtitle">独家视频连线投顾大咖 全程互动交流</div>
          <div class="desc">众多持证投资顾问图文+视频的方式在线直播，畅聊分析证券行
            情走势，与用户实时互动交流、解股答疑，助您把握机会。</div>
        </div>
      </div>
      <div class="bottomCover">
        <img src="~/assets/images/Product/bottomBarWhite.png">
      </div>
    </div>

    <div class="section"
         style="backgroundColor: #ffffff">
      <div class="container flex row">
        <div class="content flex column">
          <div class="title">智能盯盘</div>
          <div class="subtitle">大数据监控市场情绪 个股异动提醒</div>
          <div class="desc">智能盯盘，资讯捕捉，资金走向分析，大盘涨跌异动，主力动向实
            时展现，市场尽在掌握，为您的每次投资保驾护航。</div>
        </div>
        <div class="mobile">
          <img src="~/assets/images/Product/dy03.png">
        </div>
      </div>
      <div class="bottomCover">
        <img src="~/assets/images/Product/bottomBarGary.png">
      </div>
    </div>

    <div class="section"
         style="backgroundColor: #f7f8f9; padding-bottom: 50px">
      <div class="container flex row">
        <div class="mobile">
          <img src="~/assets/images/Product/dy04.png">
        </div>
        <div class="content flex column">
          <div class="title">股市课堂</div>
          <div class="subtitle">精选优质课程，全方位覆盖从小白到资深投资者的投资方法论，为
            投资者提供专业的股市知识普及，投资理念、技巧的培训，全面提
            升自己的投资技能，助您在股市乘风破浪。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.section {
  padding-top: 100px;
  position: relative;
  .bottomCover {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    img {
      display: block;
      width: 100%;
    }
  }
  .container {
    width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
  }
  .content {
    width: 552px;
    text-align: left;
    .logo {
      transform: translateY(-15px);
      width: 200px;
      margin-bottom: 50px;
    }
    .title {
      padding-top: 20px;
      font-size: 42px;
      font-weight: bold;
      color: red;
      margin-bottom: 10px;
    }
    .subtitle {
      color: #000;
      font-weight: 500;
      font-size: 22px;
      margin-bottom: 30px;
    }
    .desc {
      color: #666;
      font-size: 20px;
    }
  }
  .mobile {
    width: 440px;
  }
}
</style>