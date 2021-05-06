<template>
  <div>
    <div class="app_c">
      <div id="top_info">
        <div class="w1200">
          <div class="left">
            <span>欢迎光临北京东方高圣投资顾问公司官方网站！</span>
          </div>
          <div class="right">
            <div class="viptel phone">
              <span class="viptel_icon"></span>
              <!-- <span>VIP热线：{{ deptdata.Viptel }}</span> -->
            </div>
            <div class="tel phone">
              <span class="tel_icon"></span>
              <!-- <span>咨询热线：{{ deptdata.Tel }}</span> -->
            </div>
            <div class="conptel phone">
              <span class="conptel_icon"></span>
              <!-- <span>申诉电话：{{ deptdata.Conptel }}</span> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="nav"
         ref="navFixed"
         :class="{ is_fixed: isFixed }">
      <div class="w1200">
        <div class="w30">
          <img src="~/assets/images/topNavLogo.png"
               alt="" />
        </div>
        <div class="w70">
          <NuxtLink to="/">首页</NuxtLink>
          <NuxtLink to="/product">产品中心</NuxtLink>
          <NuxtLink to="/team">投研团队</NuxtLink>
          <NuxtLink to="/education">投资者教育</NuxtLink>
          <NuxtLink to="/benefit">公益教育</NuxtLink>
          <NuxtLink to="/service">用户服务</NuxtLink>
          <NuxtLink to="/about">关于我们</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offsetTop: 0, // 导航距离顶部的距离
      isFixed: false // 是否导航吸顶
    }
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight)
    this.$nextTick(() => {
      this.offsetTop = this.$refs.navFixed.offsetTop
    })
  },

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    initHeight() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      this.isFixed = scrollTop > this.offsetTop ? true : false
    }
  }
}
</script>

<style lang="sass">
</style>

