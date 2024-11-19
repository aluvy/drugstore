<template>
  <div class="list-wrap">
    <ul id="list" v-if="bookmarks.length">
      <li v-for="(product, i) in bookmarks" :key="i" :data-idx="i">
        <div class="thumbnail">
          <a href="javascript:;" @click="showProductDetail(product);">
            <img :src="product.itemImage" :alt="product.itemName">
          </a>
        </div>
        <div class="info-wrap">
          <a href="javascript:;" @click="showProductDetail(product);">
            <p class="company">{{ product.entpName }}</p>
            <p class="ttl">{{ product.itemName }}</p>
            <p class="desc">{{ product.efcyQesitm }}</p>
          </a>
        </div>
        <!-- TODO: bookmark active 처리 -->
        <div class="ico">
          <v-btn variant="plain" size="x-small" class="bookmark" @click="removeBookmark($event, product)"></v-btn>
        </div>
      </li>
    </ul>
    <div id="nodata" v-else>
      리스트가 없습니다.
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'BookmarkList',
  computed: {
    ...mapState(['bookmarks', 'productsDetail', 'isBookmarks']),
  },
  data: () => ({
    // isBookmark: [],
  }),
  methods: {
    showProductDetail(productDetail) {
      this.setProductDetail(productDetail);
      this.$emit('showProductDetail');
    },
    setProductDetail(productDetail) {
      this.$store.commit('setProductsDetail', productDetail);
    },
    removeBookmark($event, product) {
      const result = confirm('북마크를 삭제하시겠습니까?');
      console.log(result);
      const isActive = $event.target.classList.contains('active');
      if(isActive) {
        $event.target.classList.remove('active');
      } else {
        $event.target.classList.add('active');
      }   
    }
  }
}
</script>

<style scoped>
  .list-wrap {
    margin: 1.2rem;
  }

  #list li {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2rem 0;
    border-bottom: 1px solid #eee;
    gap: 1.2rem;
  }

  #list li .thumbnail {
    flex: 0 0 10rem;
  }

  #list li .thumbnail img {
    width: 100%;
    border-radius: 0.6rem;
    font-size: 1rem;
  }
  
  #list li .info-wrap {
    flex: 1 1 auto;
  }

  #list li .info-wrap .company {
    font-size: 1.2rem;
    color: #009688;
  }

  #list li .info-wrap .ttl {
    color: #222;
    margin-top: 1rem;
  }

  #list li .info-wrap .desc {
    color: #777;
    font-size: 1.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  #list li .ico {
    position: absolute;
    right: 0;
    top: 1rem;
  }

  #list li .ico .bookmark {
    display: block;
    width: 3.6rem;
    height: 3.6rem;
    min-width: 3.6rem;
    border-radius: 3.6rem;
    background: url(/public/ico-bookmark.svg) center / 2rem no-repeat;
  }

  #list li .ico .bookmark.active {
    background-image: url(/public/ico-bookmark-on.svg);
  }

  #nodata {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 12rem;
    font-size: 1.4rem;
    color: #777;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
</style>