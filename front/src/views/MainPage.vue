<template>
  <div>
    <DrugSearch @setSearchString="setSearchString" />
    <DrugList />
    <PagiNation @movepage="movepage" />
    <DrugModal />
  </div>
</template>

<script>
import DrugSearch from '@/components/DrugSearch.vue'
import DrugList from '@/components/DrugList.vue'
import DrugModal from '@/components/DrugModal.vue'
import PagiNation from '@/components/PagiNation.vue'

import { mapState } from 'vuex';

export default {
  name: 'MainPage',
  components: {
    DrugSearch,
    DrugList,
    DrugModal,
    PagiNation,
  },
  computed: {
    ...mapState(['bookmarks', 'products', 'modalShow', 'numOfRows']),
  },
  data: () => ({
    pageNo: 1,
    searchString: '',
  }),

  methods: {
    movepage(page) {
      this.pageNo = page;
      this.setProducts();
    },
    setSearchString(searchString) {
      this.searchString = searchString;
      this.setProducts();
    },
    async setProducts() {
      const params = {
        pageNo: this.pageNo,
        numOfRows: this.numOfRows,
        itemName: this.searchString
      }
      // console.log(params);
      this.$store.dispatch('FETCH_PRODUCTS', params);
    },
  },
  created() {
    this.setProducts();
  },
  updated() {
    // console.log('MainPage updated!');
    this.setProducts();
  }
}
</script>

<style scoped>
</style>