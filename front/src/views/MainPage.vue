<template>
  <div>
    
    <div class="search-wrap">
      <div id="search">
        <input type="text" class="search-input" placeholder="검색어를 입력하세요">
        <v-btn variant="plain" icon="mdi-magnify" aria-label="search" class="search-btn"></v-btn>
      </div>
    </div>

    <div id="pagination">
      <v-pagination
        v-model="page"
        :length="15"
        rounded="circle"
        :total-visible="5"
      ></v-pagination>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MainPage',

  data: () => ({
    page: 1,
  }),
}
</script>

<style>
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



  #pagination {
    margin: 2rem 0 0;
  }

  #pagination .v-pagination__item,
  #pagination .v-pagination__first,
  #pagination .v-pagination__prev,
  #pagination .v-pagination__next,
  #pagination .v-pagination__last {
    margin: 0;
  }

  #pagination .v-btn--icon.v-btn--density-default {
    width: 3.6rem;
    height: 3.6rem;  
    font-size: 1.4rem;
  }
  #pagination .v-btn--icon.v-btn--density-default[ellipsis="true"] {
    width: 2rem;
    font-size: 1.2rem;
  }
</style>