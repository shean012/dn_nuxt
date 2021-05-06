<template>
  <div class='footer'>
    <div class="top_box">
      <div class="w80 fl">
        <p class="title">
          <!-- <router-link to="/about">经营证券期货业务许可证公示</router-link> -->
        </p>
        <div class="hint_box">
          <div class="logo fl">
            <img src="~/assets/images/icon/csrc.png"
                 alt="">
          </div>
          <div class="hint_info fl">
            <p>经营证券期货业务许可证 统一社会信用代码：911101091023717184</p>
            <p>从事证劵投资或期货交易，请通过合法证券期货经营机构进行，合法机构名单可到中国证监会 网站（www.csrc.gov.cn）查询。</p>
            <p>投资有风险，入市需谨慎！</p>
          </div>
          <div class="clear"></div>
        </div>
        <div class="clear"></div>
      </div>
      <div class="w20 fr">
        <div class="phone_box fr">
          <!-- <p class="tel"
             v-if="deptdata.Tel !== ''">咨询电话：{{ deptdata.Tel }}</p>
          <p class="conptel"
             v-if="deptdata.Conptel !== ''">申诉电话：{{ deptdata.Conptel }}</p>
          <p class="viptel"
             v-if="deptdata.Viptel !== ''">VIP热线：{{ deptdata.Viptel }}</p> -->
          <div class="clear"></div>
        </div>
        <div class="clear"></div>
      </div>
      <div class="clear"></div>
    </div>
    <div class="bottom_box">
      <div class="top_info">
        <span class="icp">
          <span class="icon"></span>
          <a target="_block"
             href="http://www.beian.gov.cn/portal/registerSystemInfo?spm=5176.12825654.7y9jhqsfz.114.3dbd2c4a8ORgjE">京ICP备19032316号</a>
        </span>
        <span class="info"><i class="white-space-10"></i>
          <!-- <span v-if="deptdata.Conptel !== ''">联系电话：{{ deptdata.Conptel }}</span>  -->
          <i class="white-space-10"></i> Copyright © 1998-2020 Dongfang Gaosheng Investment advisor Co., Ltd.</span>
        <div class="clear"></div>
      </div>
      <div class="bottom_info">
        <span class="name">东方高圣科技有限公司</span>
        <span class="ipv6">IPv6</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  mounted() {}
}
</script>

<style lang='scss' scoped>
.footer {
  color: #666;
  font-size: 14px;
}
.top_box {
  color: #666;
  font-size: 14px;
  border-bottom: 1px solid #dcdcdc;
  text-align: left;
  .title {
    margin-top: 30px;
    a {
      text-decoration: none;
      color: #666;
    }
  }
  .hint_box {
    border: 1px solid #dcdcdc;
    margin: 30px 0 40px 0;
    .logo {
      width: 60px;
      margin: 10px 20px;
      img {
        width: 100%;
      }
    }
    .hint_info {
      p {
        margin: 0;
        line-height: 1.5;
      }
      p:first-child {
        margin-top: 14px;
      }
    }
  }
  .phone_box {
    margin-top: 50%;
    transform: translateY(-50%);
    p {
      text-align: left;
    }
  }
}
.bottom_box {
  color: #666;
  font-size: 14px;
  padding: 30px 0;
  .top_info {
    text-align: center;
    .icp {
      .icon {
        display: inline-block;
        width: 15px;
        height: 15px;
        background: url('~/assets/images/icon/ga_logo.png') no-repeat center;
        margin-right: 5px;
        position: relative;
        top: 2px;
      }
      span,
      a {
        line-height: 2;
        text-decoration: none;
        color: #666;
        font-size: 14px;
      }
    }
  }
  .bottom_info {
    .ipv6 {
      color: #df2424;
      border: 1px solid #df2424;
      border-radius: 4px;
      margin-left: 10px;
      font-size: 12px;
      padding: 0 5px;
    }
  }
}
</style>

