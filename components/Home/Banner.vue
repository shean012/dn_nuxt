<template>
  <div class="home_banner_comp">
    <img class="banner_img"
         src="~/assets/images/Home/11.jpg">
    <div class="title_outer">
      <div class="title_banner  flex column">
        <div class="title_banner_top">以<span style="color: red">用户需求</span>为本的科研型金融服务机构</div>
        <div class="title_banner_subtitle">以金融科技、专业投研为核心，坚持以用户需求为导向</div>
        <div class="title_banner_subtitle">秉承互联网“开放、平等、协作”的精神，将技术与金融产品创新结合</div>
        <div class="title_banner_subtitle">基于金融数据库、金融工程和金融研究为用户打造有温度的金融多元化服务平台</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.home_banner_comp {
  width: 100%;
  .banner_img {
    width: 100%;
    display: block;
  }
  .title_outer {
    background-color: #fff;
    width: 100%;
    height: 180px;
    position: relative;
    .title_banner {
      height: 235px;
      position: absolute;
      width: 1200px;
      top: -120px;
      left: 50%;
      z-index: 10;
      background-color: #fff;
      transform: translateX(-50%);
      border-radius: 16px;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
      .title_banner_top {
        font-weight: bold;
        font-size: 26px;
        margin-bottom: 20px;
      }
      .title_banner_subtitle {
        font-size: 14px;
        margin-bottom: 3px;
        text-align: center;
        color: #666;
      }
    }
  }
}
</style>