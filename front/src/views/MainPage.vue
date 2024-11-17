<template>
  <div>
    
    <div class="search-wrap">
      <div id="search">
        <input type="text" class="search-input" placeholder="검색어를 입력하세요">
        <v-btn variant="plain" icon="mdi-magnify" aria-label="search" class="search-btn"></v-btn>
      </div>
    </div>

    <DrugList />

    <PageNation />

    <DrugModal :modal="modal" />

  </div>
</template>

<script>
import PageNation from '@/components/PageNation.vue'
import DrugList from '@/components/DrugList.vue'
import DrugModal from '@/components/DrugModal.vue'

import { fetchProducts } from '@/api/products.js'

export default {
  name: 'MainPage',

  components: {
    PageNation,
    DrugList,
    DrugModal
  },

  data: () => ({
    pageNo: 1,
    numOfRows: 10, // 1페이지에 약품 아이템 갯수
    totalCount: 0,  // total
    products: [],

    modal: {
      show: false,
      item: {}
    },
  }),

  methods: {
    async fetchProducts() {
      try {
        this.$store.commit('setLoading', { loading: true });
        const res = await fetchProducts();
        const { items, pageNo, numOfRows, totalCount } = res.data.data;
        this.products = items;
        this.pageNo = pageNo;
        this.numOfRows = numOfRows;
        this.totalCount = Math.floor(totalCount / numOfRows);

        // this.$store.commit('setLoading', { loading: false });

        // store에 products 등록
        this.$store.commit('setProducts', { products: items });


      } catch (e) {
        console.log(e);
        // this.logMessage = e.message;
      } finally {
        this.$store.commit('setLoading', { loading: false });
      }
    }
  },
  created() {
    this.fetchProducts();
  }
}
</script>

<style scoped>
  .search-wrap {
    margin: 1.2rem;
  }

  #search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ddd;
  }

  .search-input {
    flex: 1 1 auto;
    align-self: stretch;
    font-size: 1.6rem;
    padding:0 1.6rem;
    outline: none;
  }

  .v-btn--icon.v-btn--density-default.search-btn {
    flex: 0 0 4rem;
    width: 4rem;
    height: 4rem;
    font-size: 1.4rem;
  }



  
</style>