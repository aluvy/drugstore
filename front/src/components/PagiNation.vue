<template>
  <div id="pagination">
    <v-pagination
      :v-model="pageNo"
      :length="totalCount"
      rounded="circle"
      :total-visible="5"
      @update:modelValue="onPageChange"
    ></v-pagination>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'PageNation',
  computed: {
    ...mapState(['pageNo', 'numOfRows', 'totalCount']),
  },
  methods: {
    onPageChange(page) {
      this.$emit('movepage', page);
    }
  }
}
</script>

<style>
  #pagination {
    margin: 3rem 0 0;
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