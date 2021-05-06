<template>
  <div class="home_service_comp">
    <div class="comp_title">专业服务</div>
    <div class="service_img_container">
      <div class="service_img_outer"></div>
      <div class="service_img"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.home_service_comp {
  max-width: 1200px;
  padding: 100px 0;
  margin: 0 auto;
  .comp_title {
    font-size: 22px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 50px;
  }
  .service_img_container {
    user-select: none;
    position: relative;
    width: 100%;
    height: 466.22px;
  }
  .service_img_outer {
    z-index: 90;
    position: absolute;
    width: 100%;
    height: 466.22px;
    top: 0;
    left: 0;
  }
  .service_img {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    background: url('~/assets/images/Home/boi.jpg') no-repeat center;
  }
}
</style>