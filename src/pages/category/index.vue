<template>
  <div>
    <SearchHotspot></SearchHotspot>
    <div class="main">
      <div class="left">
        <ul>
          <li
            v-for="(catel, index) in categories"
            @click="activeIndex = index"
            :class="{ active: activeIndex === index }"
            :key="catel.cat_id"
          >
            {{ catel.cat_name }}
          </li>
        </ul>
      </div>
      <div class="right">
        <img src="../../../static/images/titleImage.png" alt="" />
        <ul>
          <li>
            <img src="" alt="" />
            <p></p>
          </li>
        </ul>
      </div>
    </div>
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
      categories: [],
      activeIndex: 0
    }
  },
  onLoad () {
    this.getCategories()
  },
  methods: {
    async getCategories () {
      this.categories = await this.$request({
        url: '/api/public/v1/categories'
      })
    }
  }
}
</script>

<style lang="less">
@red: #eb4450;
.main {
  display: flex;
  color: #333;
  position: absolute;
  top: 100rpx;
  left: 0;
  right: 0;
  bottom: 0;
  .left {
    overflow: auto;
    ul {
      width: 198rpx;
      li {
        background-color: #f4f4f4;
        text-align: center;
        color: #333333;
        border: 1rpx solid #eee;
        box-sizing: border-box;
        line-height: 100rpx;
        &.active {
          color: @red;
          background-color: #fff;
          position: relative;
          &::before {
            position: absolute;
            content: "";
            width: 8rpx;
            height: 60rpx;
            background-color: @red;
            left: 0;
            top: 20rpx;
          }
        }
      }
    }
  }
  .right {
    img {
      width: 520rpx;
      height: 180rpx;
      margin: 20rpx;
    }
  }
}
</style>
