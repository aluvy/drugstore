<template>
  <div class="list-wrap">
    <ul id="list">
      <li v-for="(product, i) in products" :key="i" :data-idx="i">
        <div class="thumbnail">
          <a href="#" @click="showProductDetail(product);">
            <img :src="product.itemImage" :alt="product.itemName">
          </a>
        </div>
        <div class="info-wrap">
          <a href="#" @click="showProductDetail(product);">
            <p class="company">{{ product.entpName }}</p>
            <p class="ttl">{{ product.itemName }}</p>
            <p class="desc">{{ product.efcyQesitm }}</p>
          </a>
        </div>
        <div class="ico">
          <v-btn variant="plain" size="x-small" class="bookmark" @click="addBookmark($event, product)"></v-btn>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'DrugList',
  computed: {
    ...mapState(['products', 'productsDetail']),
  },
  methods: {
    showProductDetail(productDetail) {
      this.setProductDetail(productDetail);
      this.$emit('showProductDetail');
    },
    setProductDetail(productDetail) {
      this.$store.commit('setProductsDetail', productDetail);
    },
    addBookmark($event, product) {
      $event.target.classList

      const isActive = $event.target.classList.contains('active');
      if(isActive) {
        $event.target.classList.remove('active');
      } else {
        $event.target.classList.add('active');
      }
      
      console.log(product);
      // TODO: bookmark

      // console.log($event.target.classList.contains('active'), product);
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
</style>