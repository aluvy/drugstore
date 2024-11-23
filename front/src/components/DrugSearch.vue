<template>
  <div class="">
    
    <div class="search-wrap">
      <v-form @submit.prevent="search" id="search">
        <input type="text" class="search-input" label="검색어" placeholder="검색어를 입력하세요" v-model="searchString">
        <v-btn variant="plain" icon="mdi-magnify" aria-label="search" class="search-btn"></v-btn>
      </v-form>
    </div>
    
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'DrugSearch',
  computed: {
    ...mapState(['products', 'productsDetail', 'bookmarks']),
    ...mapGetters(['isLogin']),
  },
  data: () => ({
    searchString: '',
  }),
  methods: {
    search() {
      this.$emit('setSearchString', this.searchString);
    }
  },
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