<template>
  <div class="home_benefit_comp">
    <div class="comp_title">公益教育</div>
    <div class="flex row card">
      <div class="card_item"
           v-for="(item, index) of cardList"
           :key="item.id">
        <div class="item_container flex column">
          <div :style="`backgroundImage: url(${item.thumb ? item.thumb : baseImg1})`"
               class="item_img"></div>
          <div class="title_group flex row">
            <img :src="titleIcons[index]"
                 class="item_icon">
            <div class="flex column">
              <div class="card_tag">【{{item.classtitle ? item.classtitle : ''}}】</div>
              <div class="card_title">{{item.title ? item.title : ""}}</div>
            </div>
          </div>
          <div class="card_context">{{item.intro ? item.intro : ''}}</div>

          <div class="item_container_hover flex column">
            <div class="title_group flex row">
              <img :src="titleIcons[index]"
                   class="item_icon" />
              <div class="flex column">
                <div class="card_tag">【{{item.classtitle ? item.classtitle : ''}}】</div>
                <div class="card_title">{{item.title ? item.title : ''}}</div>
              </div>
            </div>
            <div class="card_context">{{item.intro ? item.intro : ''}}</div>
            <NuxtLink class="readMoreBtn"
                      to="/benefit">查看更多</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import icon1 from '../../assets/images/Home/01.png'
import icon2 from '../../assets/images/Home/02.png'
import icon3 from '../../assets/images/Home/03.png'
import baseImg1 from '../../assets/images/Home/7-1.jpg'
import baseImg2 from '../../assets/images/Home/7-4.jpg'

export default {
  data() {
    return {
      baseImg1: baseImg1,
      baseImg2: baseImg2,
      titleIcons: [icon1, icon2, icon3],
      cardList: []
    }
  },
  mounted() {
    let _this = this
    if (window.hasInit) this.getInfo()
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
          _this.getInfo()
        }
      )
    }
  },
  methods: {
    getInfo() {
      window.hccms.api.GetNewsListTotal(0, 535, 0, 3, 1, {}, res => {
        let { List } = res
        if (!Array.isArray(List) || List.length < 1) return
        this.cardList = List
        // this.cardContent = List.slice(1, 2)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home_benefit_comp {
  width: 1020px;
  margin: 0 auto;
  padding: 80px 0 210px;
  .comp_title {
    padding: 20px 0 50px;
    font-size: 22px;
    text-align: center;
    font-weight: bold;
    color: white;
  }
  .card {
    justify-content: space-around;
    align-items: center;

    .card_item {
      position: relative;
      width: 320px;
      height: 470px;
      transition: all 0.5s;
      background-color: rgba(255, 255, 255, 0.95);
      .item_img {
        width: 100%;
        height: 240px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        display: block;
        margin-bottom: 15px;
      }
      .title_group {
        text-align: left;
        padding: 0 10px;
        margin-bottom: 15px;
        .item_icon {
          width: 70px;
          height: 55px;
          display: block;
          margin-right: 10px;
        }
        .card_tag {
          font-weight: bold;
          color: red;
          font-size: 20px;
        }
        .card_title {
          font-size: 20px;
          font-weight: bold;
          width: 230px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #000;
        }
      }
      .card_context {
        text-align: left;
        padding: 0 15px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        font-size: 16px;
        line-height: 26px;
        -webkit-line-clamp: 4;
        color: #666;
      }
      .readMoreBtn {
        width: 170px;
        height: 35px;
        line-height: 35px;
        font-weight: bold;
        border: 2px solid red;
        color: red;
        font-size: 20px;
        border-radius: 15px;
        margin: 35px auto 0;
        cursor: pointer;
      }
      &:hover {
        .item_container_hover {
          overflow: hidden;
          display: block;
          -webkit-animation-name: upInDown;
          animation-name: upInDown;
          animation-duration: 1.5s;
          animation-fill-mode: both;
        }
      }
      .item_container_hover {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        display: none;
        opacity: 0;
        height: 0%;
        background-color: rgba(58, 58, 58, 0.95);
        .title_group {
          margin-top: 50px;
          .card_title {
            color: #fff;
          }
        }
        .card_context {
          -webkit-line-clamp: 9;
          color: #fff;
        }
      }
    }
  }
}

@keyframes upInDown {
  0% {
    opacity: 0;
    height: 0%;
    top: 100%;
  }
  to {
    opacity: 1;
    height: 100%;
    top: 0;
  }
}
</style>