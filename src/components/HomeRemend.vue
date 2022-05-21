<template>
  <div class="homeremand">
    <ul class="home-top">
      <li class="home-item">
        <div class="item-group">
          <div class="group-img">
            <img src="../../public/images/home/hot/nav/nav_icon01.png" alt="" />
          </div>
          <div class="group-text">限时秒杀</div>
        </div>
        <div class="item-group">
          <div class="group-img">
            <img src="../../public/images/home/hot/nav/nav_icon02.png" alt="" />
          </div>
          <div class="group-text">限时秒杀</div>
        </div>
        <div class="item-group">
          <div class="group-img">
            <img src="../../public/images/home/hot/nav/nav_icon03.gif" alt="" />
          </div>
          <div class="group-text">限时秒杀</div>
        </div>
        <div class="item-group">
          <div class="group-img">
            <img src="../../public/images/home/hot/nav/nav_icon04.png" alt="" />
          </div>
          <div class="group-text">限时秒杀</div>
        </div>
        <div class="item-group">
          <div class="group-img">
            <img src="../../public/images/home/hot/nav/nav_icon05.png" alt="" />
          </div>
          <div class="group-text">限时秒杀</div>
        </div>
        <div class="item-group">
          <div class="group-img">
            <img src="../../public/images/home/hot/nav/nav_icon06.png" alt="" />
          </div>
          <div class="group-text">限时秒杀</div>
        </div>
      </li>
      <li class="home-item">
        <div class="item-group">
          <div class="group-img">
            <img src="../../public/images/home/hot/nav/nav_icon07.png" alt="" />
          </div>
          <div class="group-text">限时秒杀</div>
        </div>
        <div class="item-group">
          <div class="group-img">
            <img src="../../public/images/home/hot/nav/nav_icon08.png" alt="" />
          </div>
          <div class="group-text">限时秒杀</div>
        </div>
        <div class="item-group">
          <div class="group-img">
            <img src="../../public/images/home/hot/nav/nav_icon09.png" alt="" />
          </div>
          <div class="group-text">限时秒杀</div>
        </div>
        <div class="item-group">
          <div class="group-img">
            <img src="../../public/images/home/hot/nav/nav_icon10.png" alt="" />
          </div>
          <div class="group-text">限时秒杀</div>
        </div>
        <div class="item-group">
          <div class="group-img">
            <img src="../../public/images/home/hot/nav/nav_icon11.png" alt="" />
          </div>
          <div class="group-text">限时秒杀</div>
        </div>
        <div class="item-group">
          <div class="group-img">
            <img src="../../public/images/home/hot/nav/nav_icon12.png" alt="" />
          </div>
          <div class="group-text">限时秒杀</div>
        </div>
      </li>
    </ul>
    <!-- <div class="home-bt">
      <div class="home-bt-l">
        <div>
          <img src="../../public/images/home/hot/nav/nav_icon14.png" alt="" />
        </div>
        <div>
          <h3>百亿补贴</h3>
          <div class="home-zp">大牌正品</div>
        </div>
      </div>
      <div class="home-bt-fg">
        <img
          src="https://funimg.pddpic.com/recone/2020-09-10/ea56b47f-2ec2-4c95-9e8b-87d9ccc1cfc0.png?imageView2/2/w/1300/q/80/format/webp"
          alt=""
        />
      </div>
      <div class="home-bt-r">
        <div class="home-bt-goods">
          <div class="home-bt-goods-img">
            <img src="https://img.pddpic.com/mms-material-img/2022-05-16/4c0e121ad1366b050e934dc2eb6d5c4c.jpeg?imageView2/2/w/192/q/80/format/webp" alt="" />
          </div>
          <div class="home-bt-goods-price">
              ￥4989
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "homeRemand",
};
</script>

<style lang="less" scoped>
::-webkit-scrollbar {
  display: none;
}
.homeremand {
  overflow: scroll;
  .home-top {
    width: 125%;
    margin-top: -10px;
    .home-item {
      display: flex;
      margin-top: 10px;
      .item-group {
        margin: 0 10px;
        width: 25%;
        .group-img {
          width: 80%;
          margin: 0 auto;
          img {
            width: 100%;
          }
        }
        .group-text {
          font-size: 14px;
          text-align: center;
        }
      }
    }
  }
}
</style>