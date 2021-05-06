<template>
  <div class="product"
       :style="{  backgroundColor: curTab === 1 ? '#fff' : '#f9f9fb'}">
    <!-- banner -->
    <div class="min1200 banner">
      <div class="w1200 fadeInUp"
           style="height: 520px;">
        <h2>
          自上而下的选股理念<br>
          让龙头无处可循
        </h2>
      </div>
    </div>
    <div class="tabBar flex row"
         @click="e => !isNaN(Number(e.target.getAttribute('data-index'))) ? curTab = Number(e.target.getAttribute('data-index')) : ''">
      <div class="tabBar_item flex row"
           :class="{selected: curTab === 0}">
        <i class="icon01 iconfont"></i>
        <div style="margin-left: 12px;">智赢pc终端</div>
        <div class="clickElem"
             data-index="0" />
      </div>
      <div class="tabBar_item flex row"
           :class="{selected: curTab == 1}">
        <i class="icon02 iconfont"></i>
        <div style="margin-left: 12px;">多赢App终端</div>
        <div class="clickElem"
             data-index="1" />
      </div>
      <div class="tabBar_item flex row"
           :class="{selected: curTab == 2}">
        <i class="icon03 iconfont"></i>
        <div style="margin-left: 12px;">爱赢投教体系</div>
        <div class="clickElem"
             data-index="2" />
      </div>
    </div>
    <div class="tabCard">
      <div v-if="curTab === 0">
        <ProductionPC />
      </div>
      <div v-if="curTab === 1">
        <ProductionMobile />
      </div>
      <div v-if="curTab === 2">
        <ProductionSystem />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curTab: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  .banner {
    height: 510px;
    background: url('~/assets/images/Product/zhiying_banner.png') no-repeat
      center;
    text-align: left;
    h2 {
      color: #fff;
      font-size: 44px;
      margin-top: 200px;
      line-height: 1.5;
    }
  }
  .tabBar {
    width: 1200px;
    margin: 0 auto;
    align-items: center;
    box-shadow: 0px 3px 8px 6px rgba(189, 189, 189, 0.4);
    margin-bottom: 50px;
    transform: translateY(-20px);
    position: relative;
    background-color: #fff;
    z-index: 99;
    .selected {
      background-color: #005bb0 !important;
      color: #fff !important;
    }
    .tabBar_item {
      flex: 1;
      height: 110px;
      line-height: 110px;
      justify-content: center;
      align-items: center;
      color: #666;
      font-size: 14px;
      cursor: pointer;
      position: relative;
      .clickElem {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
      &:hover {
        color: #005bb0;
      }
      i {
        font-size: 25px;
      }
    }
  }
}
</style>
