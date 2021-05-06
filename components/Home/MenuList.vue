<template>
  <ul class="menu_list">
    <li class="menu_item fadeInUp"
        v-for="(item, index) of MenuList"
        :key="index">
      <div class="menu_icon">
        <img :src="item.icon"
             alt="">
      </div>
      <div class="title">
        {{ item.text }}
      </div>
      <div class="clear"></div>
    </li>
    <div class="clear"></div>
  </ul>
</template>

<script>
import icon_touzhi7 from '~/assets/images/icon/icon_touzhi7.png'
import icon_touzhi3 from '~/assets/images/icon/icon_touzhi3.png'
import icon_touzhi4 from '~/assets/images/icon/icon_touzhi4.png'
import icon_touzhi5 from '~/assets/images/icon/icon_touzhi5.png'
import icon_touzhi6 from '~/assets/images/icon/icon_touzhi6.png'
export default {
  data() {
    return {
      MenuList: [
        { icon: icon_touzhi7, text: '合法化持牌机构' },
        { icon: icon_touzhi4, text: '智能化工具研发' },
        { icon: icon_touzhi5, text: '专业化投资研究' },
        { icon: icon_touzhi6, text: '体系化实战培训' },
        { icon: icon_touzhi3, text: '完整风控体系' }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.menu_list {
  color: #222;
  display: flex;
  width: 1200px;
  justify-content: space-between;
  flex-direction: row;
  .menu_item {
    // width: 20%;
    float: left;
    text-align: center;
    margin: 30px auto;
    position: relative;
    .menu_icon {
      height: 70%;
      padding: 0 70px;
    }
    .title {
      margin-top: 10px;
    }
    &:not(:first-child)::before {
      content: '';
      width: 1px;
      height: 100%;
      background-color: #eee;
      position: absolute;
      top: 10%;
      left: 0;
      transform: translateX(-24px);
    }
  }
}
</style>