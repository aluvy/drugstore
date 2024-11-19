<template>
  <div>
    
    <div class="search-wrap">
      <div id="search">
        <input type="text" class="search-input" placeholder="검색어를 입력하세요">
        <v-btn variant="plain" icon="mdi-magnify" aria-label="search" class="search-btn"></v-btn>
      </div>
    </div>

    <DrugList @showProductDetail="showProductDetail" />

    <PagiNation @movepage="movepage" />

    <DrugModal :modalShow="modalShow" @hideProductDetail="hideProductDetail" />

  </div>
</template>

<script>
import PagiNation from '@/components/PagiNation.vue'
import DrugList from '@/components/DrugList.vue'
import DrugModal from '@/components/DrugModal.vue'

import { mapState } from 'vuex';
import { fetchProducts } from '@/api/products.js'

export default {
  name: 'MainPage',
  components: {
    PagiNation,
    DrugList,
    DrugModal
  },
  computed: {
    ...mapState(['bookmarks', 'products']),
  },
  watch: {
    modalShow(current, before) {
      if(current) {
        document.querySelector("html").classList.add("scrollRock");
      } else {
        document.querySelector("html").classList.remove("scrollRock");
      }
    }
  },
  data: () => ({
    pageNo: 1,
    numOfRows: 10,  // 고정값

    modalShow: false,
  }),

  methods: {
    movepage(page) {
      this.pageNo = page;
      this.fetchProducts();
    },
    showProductDetail() {
      this.modalShow = true;
    },
    hideProductDetail() {
      this.modalShow = false;
    },
    async fetchProducts() {
      try {
        this.$store.commit('setLoading', { loading: true });
        const params = {
          pageNo: this.pageNo,
          numOfRows: this.numOfRows
        }
        const res = await fetchProducts(params);
        let { items, pageNo, numOfRows, totalCount } = res.data.data;

        items = [...items].map( item => {          
          if(item.itemImage == null) item.itemImage = '/public/no-image.png';

          return item;
        });
        
        totalCount = Math.floor(totalCount / numOfRows);

        // store에 products 등록
        this.updateProducts(items);
        this.updatePageNo(pageNo);
        this.updateTotalCount(totalCount);

        // console.log('bookmarks', this.bookmarks);

        let bookmarkItemSeq = [];
        [...this.bookmarks].forEach( item => {
          bookmarkItemSeq.push(item.itemSeq);
        });
        // console.log('bookmarkItemSeq', bookmarkItemSeq);

        const isBookmarks = [...this.products].map( item => {
          if (bookmarkItemSeq.includes(item.itemSeq)){
            return true;
          } else {
            return false;
          }
        });
        this.$store.commit('setIsBookMarks', isBookmarks);

      } catch (e) {
        console.log(e);
        // this.logMessage = e.message;
      } finally {
        this.$store.commit('setLoading', { loading: false });
      }
    },
    updateProducts(items) {
      this.$store.commit('setProducts', { products: items });
    },
    updatePageNo(pageNo) {
      this.$store.commit('setPageNo', pageNo)
    },
    updateTotalCount(totalCount) {
      this.$store.commit('setTotalCount', totalCount)
    }
  },
  created() {
    this.fetchProducts();
  },
  updated() {
    console.log('updated');
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