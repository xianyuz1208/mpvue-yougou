<template>
  <div class="container">
    <SearchHotspot></SearchHotspot>
    <swiper
      indicator-dots
      indicator-color="rgba(255,255,255,0.3)"
      indicator-active-color="#fff"
      autoplay
      circular
    >
      <block>
        <swiper-item v-for="(item, index) in swiperdata" :key="item.goods_id">
          <img :src="item.image_src" alt="" />
        </swiper-item>
      </block>
    </swiper>
    <div class="classify">
      <div class="classifys" v-for="(item, index) in catitems" :key="index">
        <img :src="item.image_src" alt="" />
      </div>
    </div>
    <ul class="floor">
      <li v-for="(item,index) in floordata" :key="index">
        <img :src="item.floor_title.image_src" alt="" />
        <div class="product-list">
          <img :src="item.product_list[0].image_src" alt="" />
          <div class="right">
          <block v-for="(imgitem,imgindex) in item.product_list" :key="imgitem.name">
              <img v-if="imgindex" :src="imgitem.image_src" alt="" />
          </block>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import SearchHotspot from '../../components/SearchHotspot'
export default {
  components: {
    SearchHotspot
  },
  data () {
    return {
      swiperdata: [],
      catitems: [],
      floordata: []
    }
  },

  onLoad: function () {
    this.getSwiper()
    this.getCatitems()
    this.getFloordata()
  },
  methods: {
    async getSwiper () {
      this.swiperdata = await this.$request({
        url: '/api/public/v1/home/swiperdata'
      })
    },
    async getCatitems () {
      this.catitems = await this.$request({
        url: '/api/public/v1/home/catitems'
      })
    },
    async getFloordata () {
      this.floordata = await this.$request({
        url: '/api/public/v1/home/floordata'
      })
    }
  }
}
</script>
<style lang="less">
swiper {
  height: 340rpx;
  img {
    width: 100%;
    height: 100%;
  }
}
.classify {
  height: 194rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .classifys {
    width: 128rpx;
    height: 140rpx;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
.floor {
  margin: 20rpx 20rpx;
  li {
     img {
      width: 100%;
      height: 88rpx;
    }

    .product-list {
      margin: 10rpx 0;
      display: flex;
      img {
        width: 232rpx;
        height: 384rpx;
      }
      .right {
        flex: 1;
        img {
          margin: 0 0 7rpx 7rpx;
          width: 232rpx;
          height: 188rpx;
        }
      }
    }
  }
}
</style>
