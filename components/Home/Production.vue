<template>
  <div class="home_production_tab flex column">
    <div class="comp_title">产品系列</div>
    <div class="tabBar flex row">
      <div class="tabBar_item flex row"
           @click="(e) => curCard = index"
           v-for="(item, index) of tabBarData"
           :key="item.icon"
           :data-index="index"
           :class="{ selected : index === curCard }">
        <div class="tabBar_icon">
          <span :class="`icon0${index + 1}`"
                class="iconfont"></span>
        </div>
        <div>{{item.title}}</div>
      </div>
    </div>
    <div class="tabCard">
      <div class="tabCard_item flex row"
           v-for="(item, index) of CardData"
           :key="item.id"
           v-show="curCard === index">
        <div class="card_content flex column">
          <div class="title">{{item.title}}</div>
          <div class="subtitle">{{item.subTitle}}</div>
          <NuxtLink class="content_btn"
                    to="/product">查看详细</NuxtLink>
        </div>
        <div class="card_img"
             :style="`backgroundImage:url(${item.img})`">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import noteBook from '~/assets/images/Home/pc1.png'
import phone from '~/assets/images/Home/Black.png'
import imac from '~/assets/images/Home/pcdn.png'

export default {
  data() {
    return {
      curCard: 0,
      tabBarData: [
        { title: '智赢软件工具系列' },
        { title: '多赢投顾直播系列' },
        { title: '爱赢投教培训系列' }
      ],
      CardData: [
        {
          title: '智赢软件工具系列',
          subTitle:
            '以大数据为基础，基于实战应用逻辑研发的操盘应用软件，将复杂的数据、指标分析模型化，简单实用',
          img: noteBook,
          id: 304995
        },
        {
          title: '多赢投顾直播系列',
          subTitle:
            '融汇众多资深投顾实战策略精髓，以图文、语音、视频直观呈现，随时随地看策略、明方向',
          img: phone,
          id: 304994
        },
        {
          title: '爱赢投教培训系列',
          subTitle:
            '集合市场中交易体系成熟的实战派，形成多体系、多层级的方法课程，打通您的投资思维',
          img: imac,
          id: 304992
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.home_production_tab {
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
  .comp_title {
    padding: 20px 0 50px;
    font-size: 22px;
    text-align: center;
    font-weight: bold;
  }
  .tabBar {
    width: 1032px;
    margin: 0 auto;
    justify-content: space-between;
    margin-bottom: 60px;
    .tabBar_item {
      padding: 0 3px;
      color: #666;
      cursor: pointer;
      align-items: center;
      position: relative;
      z-index: 10;
      .tabBar_icon {
        width: 50px;
        height: 50px;
        margin-right: 30px;
        line-height: 50px;
        text-align: center;
        span {
          display: block;
          font-size: 40px;
        }
      }
    }
    .selected {
      color: red;
      border-bottom: 1px solid red;
    }
  }
  .tabCard_item {
    width: 960px;
    margin: 0 auto;
    justify-content: space-between;
    .card_content {
      width: 480px;
      padding-top: 50px;
      font-size: 16px;
      .title {
        text-align: left;
        font-weight: bold;
        margin-bottom: 30px;
        font-size: 22px;
      }
      .subtitle {
        text-align: left;
      }
      .content_btn {
        color: #000;
        text-decoration: none;
        text-align: center;
        margin-top: 30px;
        border: 1px solid #000;
        border-radius: 5px;
        padding: 10px 0;
        width: 185px;
        cursor: pointer;
        transition: all 0.4s;
        &:hover {
          color: #fff;
          border: 1px solid #888;
          background-color: #888;
        }
      }
    }
    .card_img {
      width: 480px;
      height: 300px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      img {
        display: block;
        width: 100%;
      }
    }
  }
}
</style>