<template>
  <div class="user">
    <div class="user-poster">
      <img class="bgimg" src="/static/user_bgimg.png" />
      <div class="name_content">
        <van-image width="90" height="90" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="name">二手交易APP</div>
      </div>
    </div>
    <div>
      <van-row class="user-links">
        <van-col span="6">
          <van-icon name="pending-payment" />发布
        </van-col>
        <van-col span="6">
          <van-icon name="records" />购买
        </van-col>
        <van-col span="6">
          <van-icon name="tosend" />信息
        </van-col>
        <van-col span="6">
          <van-icon name="logistics" />收藏
        </van-col>
      </van-row>

      <van-cell-group class="user-group">
        <van-cell icon="records" title="全部订单" is-link />
      </van-cell-group>

      <van-cell-group>
        <van-cell icon="points" title="我的积分" is-link />
        <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
        <van-cell icon="gift-o" title="地址管理" is-link to="/mineinfo/address" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup } from "vant";
export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  }
};
</script>

<style lang="scss" scoped>
.user {
  &-poster {
    position: relative;
    width: 100%;
    height: 53vw;
    display: block;
    .bgimg {
      width: 100%;
      position: absolute;
      z-index: -1;
    }
    .name_content {
      height: 100%;
      display: flex;
      padding-top: 1.2rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .name {
        margin-top: 0.6rem;
        font-size: 1.2rem;
        font-weight: bold;
      }
    }
  }
  &-group {
    margin-bottom: 15px;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>