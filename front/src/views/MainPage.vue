<template>
  <div>
    
    <div class="search-wrap">
      <div id="search">
        <input type="text" class="search-input" placeholder="검색어를 입력하세요">
        <v-btn variant="plain" icon="mdi-magnify" aria-label="search" class="search-btn"></v-btn>
      </div>
    </div>

    <PageNation :page="page" :length="length" />

  </div>
</template>

<script>
import PageNation from '@/components/PageNation.vue'

export default {
  name: 'MainPage',

  components: {
    PageNation,
  },

  data: () => ({
    page: 1,
    length: 15,
  }),
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