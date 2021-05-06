<template>
  <div class="pc_card">
    <!-- module1 -->
    <div class="module1"
         style="background-color: #f9f9fb;height: 406px;">
      <div class="w1200 fadeInUp">
        <div class='module_1'>
          <div class="w50 fl">
            <div class="title">
              <span class="icon_qinlong"></span>
              <h3>懂牛股票擒龙版</h3>
            </div>
            <div class="introduce">
              激进型产品：龙头股的发展有四个阶段，分别为启动、加速、主升、回调，不同阶段，匹配 不同的数据分析，监控与研究每个涨停板背后的特征与本质，提前挖掘出有溢价空间的龙头 股，专为短线投资者打造。
            </div>
          </div>
          <div class="w50 fr">
            <div class="pc1 fr">
              <img src="~/assets/images/Product/pc1.png"
                   alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- module2 -->
    <div class="module2 fadeInUp"
         style="padding: 100px 0;">
      <div class="w1200">
        <div class='module_2'>
          <div class="w30 fl">
            <h1 class="title">龙头雷达</h1>
            <p class="introduce">
              多屏合一，从板块到个股,全方位监控,不错过任何异动,锁定每日强势龙头股。
            </p>
          </div>
          <div class="w70 fr">
            <div class="qinlong_ltld">
              <img class="qinlong_ltld_fd"
                   src="~/assets/images/Product/qinlong_ltld_fd.png"
                   alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- module3 -->
    <div class="module3"
         style="background-color: #f9f9fb;padding: 100px 0;">
      <div class="w1200 fadeInUp">
        <div class='module_3'>
          <div class="w70 fl">
            <div class="qinlong_ltld">
              <img class="qinlong_ltld_fd"
                   src="~/assets/images/Product/qinlong_ltqd_fd.png"
                   alt="">
            </div>
          </div>
          <div class="w30 fr">
            <h1 class="title">龙头启动</h1>
            <p class="introduce">
              涨停板是龙头股启动的核心标志，然而首板个股鱼龙混杂，投资者很难辨别哪只才是未来的真潜龙。透过龙头启动功能，助力投资者层层提炼精选，先人一步擒获首板潜力龙头股。
            </p>
          </div>

        </div>
      </div>
    </div>

    <!-- module4 -->
    <div class="module2"
         style="padding: 100px 0;">
      <div class="w1200 fadeInUp">
        <div class='module_4'>
          <div class="w30 fl">
            <h1 class="title">龙头二波</h1>
            <p class="introduce">
              在股市中操作龙头股是最快的盈利模式。但是龙头股涨势很凶猛，一味追高风险就比较大。透过龙头二波功能，等待龙头股回调到位再次启动的时机买入既可以避开追高风险，又可赢取丰厚利润，一种非常稳健的操作模式。
            </p>
          </div>
          <div class="w70 fr">
            <div class="qinlong_ltld">
              <img class="qinlong_ltld_fd"
                   src="~/assets/images/Product/qinlong_lteb_fd.png"
                   alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- module5 -->
    <div class="module3"
         style="background-color: #f9f9fb;padding: 100px 0;">
      <div class="w1200 fadeInUp">
        <div class='module_5'>
          <div class="w70 fl">
            <div class="qinlong_ltzs">
              <img class="qlme1"
                   src="~/assets/images/Product/qlme1.png"
                   alt="">
              <img class="qlme2"
                   src="~/assets/images/Product/qlme2.png"
                   alt="">
            </div>
          </div>
          <div class="w30 fr">
            <h1 class="title">龙头主升</h1>
            <p class="introduce">
              赵老哥说过二板定龙头，对于顶级游资，往往在第二个涨停板进场，对于妖股来说，以连续的涨停板从市场中脱颖而出的。透过龙头主升功能，助力投资者牢牢把握龙头股主升波段。
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.module2 {
  background-color: #fff;
}
.module_1 {
  height: 406px;
  color: #000;
  padding: 40px 0;
  .title {
    margin-top: 60px;
    height: 50px;
    text-align: left;
    .icon_qinlong {
      display: inline-block;
      width: 50px;
      height: 50px;
      background: url('~/assets/images/Product/icon_qinlong.png') no-repeat
        center;
      background-size: 100% 100%;
    }
    h3 {
      display: inline-block;
      margin: 0 0 0 20px;
      position: relative;
      bottom: 16px;
    }
  }
  .introduce {
    text-align: left;
    color: #666;
    margin-top: 60px;
  }
  .pc1 {
    width: 516px;
    height: 274px;
    margin: 30px 0 0 0;
  }
}
.module_2 {
  .title {
    text-align: left;
    margin-top: 150px;
    color: #df2424;
    font-size: 46px;
  }
  .introduce {
    text-align: left;
    color: #2a2e33;
    font-size: 16px;
  }

  .qinlong_ltld {
    width: 746px;
    height: 451px;
    float: right;
    margin-right: 40px;
    background: url('~/assets/images/Product/qinlong_ltld.png') no-repeat center;
    background-size: 100% 100%;
    position: relative;
    .qinlong_ltld_fd {
      width: 270px;
      height: 270px;
      position: absolute;
      right: -30px;
      top: 100px;
      z-index: 20;
    }
  }
}
.module_3 {
  .title {
    text-align: left;
    margin-top: 150px;
    color: #df2424;
    font-size: 46px;
  }
  .introduce {
    text-align: left;
    color: #2a2e33;
    font-size: 16px;
  }

  .qinlong_ltld {
    width: 795px;
    height: 428px;
    float: left;
    margin-right: 40px;
    background: url('~/assets/images/Product/qinlong_ltqd.png') no-repeat center;
    background-size: 100% 100%;
    position: relative;
    .qinlong_ltld_fd {
      width: 172px;
      height: 172px;
      position: absolute;
      left: 200px;
      top: 100px;
      z-index: 20;
    }
  }
}
.module_4 {
  .title {
    text-align: left;
    margin-top: 150px;
    color: #df2424;
    font-size: 46px;
  }
  .introduce {
    text-align: left;
    color: #2a2e33;
    font-size: 16px;
  }

  .qinlong_ltld {
    width: 795px;
    height: 428px;
    float: right;
    background: url('~/assets/images/Product/qinlong_lteb.png') no-repeat center;
    background-size: 100% 100%;
    position: relative;
    .qinlong_ltld_fd {
      width: 172px;
      height: 172px;
      position: absolute;
      right: 380px;
      top: 80px;
      z-index: 20;
    }
  }
}
.module_5 {
  .title {
    text-align: left;
    margin-top: 130px;
    color: #df2424;
    font-size: 46px;
  }
  .introduce {
    text-align: left;
    color: #2a2e33;
    font-size: 16px;
  }

  .qinlong_ltzs {
    width: 795px;
    height: 428px;
    float: left;
    margin-right: 40px;
    background: url('~/assets/images/Product/qinlong_ltzs.png') no-repeat center;
    background-size: 100% 100%;
    position: relative;
    .qlme1 {
      width: 172px;
      height: 172px;
      position: absolute;
      left: 280px;
      top: 80px;
      z-index: 20;
    }
    .qlme2 {
      width: 172px;
      height: 172px;
      position: absolute;
      right: -20px;
      top: 0;
      z-index: 20;
    }
  }
}
</style>



