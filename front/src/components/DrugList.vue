<template>
  <div class="list-wrap">
    <ul id="list">
      <li v-for="(item, i) in items" :key="i" :data-idx="i">
        <div class="thumbnail"><img :src="item.thumbnail" :alt="item.title"></div>
        <div class="info-wrap">
          <p class="ttl">{{ item.title }}</p>
          <p class="desc">{{ item.desc }}</p>
        </div>
        <div class="ico">
          <!-- mdi-star-outline -->
          <!-- mdi-star -->
          <!-- <v-btn variant="plain" :icon="{ true: 'mdi-star-outline' }"></v-btn> -->
          <!-- <v-btn variant="plain" icon="mdi-star-outline"></v-btn> -->
          <!-- <v-btn variant="plain" icon="mdi-account" aria-label="mypage" class="btn-mypage"></v-btn> -->
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'DrugList',

  data: () => ({
    //
  }),

  props: {
    items: Array,
  },
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
    flex: 0 0 5rem;
  }

  #list li .thumbnail img {
    width: 100%;
    border-radius: 100%;
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