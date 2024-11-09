<template>
  <div>
    
    <div class="search-wrap">
      <div id="search">
        <input type="text" class="search-input" placeholder="검색어를 입력하세요">
        <v-btn variant="plain" icon="mdi-magnify" aria-label="search" class="search-btn"></v-btn>
      </div>
    </div>

    <DrugList :items="items" />

    <PageNation :page="page" :length="length" />

    <DrugModal :modal="modal" />

  </div>
</template>

<script>
import PageNation from '@/components/PageNation.vue'
import DrugList from '@/components/DrugList.vue'
import DrugModal from '@/components/DrugModal.vue'

export default {
  name: 'MainPage',

  components: {
    PageNation,
    DrugList,
    DrugModal
  },

  data: () => ({
    page: 1,
    length: 15,
    modal: {
      show: false,
      item: {}
    },
    items: [
        {
          thumbnail: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          desc: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          wish: false,
        },
        {
          thumbnail: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ',
          desc: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
          wish: false,
        },
        {
          thumbnail: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          desc: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
          wish: false,
        },
        {
          thumbnail: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          desc: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
          wish: false,
        },
        {
          thumbnail: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          desc: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
          wish: false,
        },
      ],
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