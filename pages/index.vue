<template>
  <div class="container">
    <HomeBanner />
    <div class="w1200">
      <HomeMenuList />
    </div>
    <div class="fadeInUp"
         style="margin-top: 40px; backgroundColor: #f0f2f5">
      <HomeProduction />
    </div>
    <div class="w1200 fadeInUp">
      <HomeEducation />
    </div>
    <div class="fadeInUp bgSection">
      <HomeBenefit />
    </div>
    <div class="fadeInUp"
         style="backgroundColor: rgb(247, 247, 247)">
      <HomeService />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.bgSection {
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background: url('~/assets/images/Home/12.jpg');
}
</style>
