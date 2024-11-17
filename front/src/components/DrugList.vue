<template>
  <div class="list-wrap">
    <ul id="list">
      <li v-for="(product, i) in getProducts" :key="i" :data-idx="i">
        <div class="thumbnail"><img :src="product.itemImage" :alt="product.itemName"></div>
        <div class="info-wrap">
          <p class="ttl">{{ product.itemName }}</p>
          <p class="desc">{{ product.efcyQesitm }}</p>
        </div>
        <div class="ico">
          <!-- TODO: 좋아요 버튼 -->
          <!-- mdi-star-outline -->
          <!-- mdi-star -->
          <!-- <v-btn variant="plain" :icon="{ true: 'mdi-star-outline' }"></v-btn> -->
          <!-- <v-btn variant="plain" icon="mdi-star-outline"></v-btn> -->
          <!-- <v-btn variant="plain" icon="mdi-account" aria-label="mypage" class="btn-mypage"></v-btn> -->
        </div>
      </li>
    </ul>
    <!-- {{ this.$store.getters.getProducts }} -->
      <!-- {{ getProducts }} -->
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'DrugList',
  computed: {
    // ...mapState(['products']),
    ...mapGetters(['getProducts']),
  },

  data: () => ({
    // test: this.$store.getters.getProducts,
  }),

  // props: {
  //   products: Array,
  // },
}
</script>

<style scoped>
  .list-wrap {
    margin: 1.2rem;
  }

  #list li {
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
    border-radius: 1rem;
    font-size: 1rem;
  }
  
  #list li .info-wrap {
    flex: 1 1 auto;
  }

  #list li .info-wrap .ttl {
    color: #222;
  }

  #list li .info-wrap .desc {
    color: #777;
    font-size: 1.4rem;
  }
</style>