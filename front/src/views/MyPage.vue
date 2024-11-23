<template>
  <div class="mypage">
    <div class="user-wrap">
      <div class="user-photo">
        <img src="/public/no-image.png" alt="">
      </div>
      <div class="user-info">
        <p><strong>{{ username }}</strong> is logged</p>
        <v-btn variant="tonal" size="small" @click="logout">logout</v-btn>
      </div>
    </div>
    
    <div class="bookmark-wrap">
      <h3>나의 의약품</h3>
      <BookmarkList />
    </div>

    <DrugModal />

  </div>
</template>

<script>
import { mapState } from 'vuex';

import BookmarkList from '@/components/BookmarkList.vue'
import DrugModal from '@/components/DrugModal.vue'

export default {
  name: 'MyPage',
  components: {
    BookmarkList,
    DrugModal
  },
  computed: {
    ...mapState(['bookmarks', 'productsDetail', 'username']),
  },
  methods: {
    async logout() {
      this.$store.dispatch('LOGOUT');
      this.$router.push('/');
    },
  },
  created() {
    this.$store.dispatch('FETCH_BOOKMARKS');
  },
  updated() {
    this.$store.dispatch('FETCH_BOOKMARKS');
  }
}
</script>

<style scoped>
  .user-wrap {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    width: 80%;
    height: 14rem;
    margin: 0 auto;
  }

  .user-wrap .user-photo {
    position: relative;
    width: 7rem;
    border-radius: 7rem;
    overflow: hidden;
    box-sizing: inset 0 0 5px rgba(0,0,0, 0.01);
  }

  .user-wrap .user-photo::after {
    display: block;
    content: '';
    padding-bottom: 100%;
  }

  .user-wrap .user-photo img {
    position: absolute;
    object-fit: fill;
    object-position: 50%;
  }

  .user-wrap .user-info p {
    font-size: 1.4rem;
    color: #222;
  }

  .user-wrap .user-info p strong {
    font-size: 2rem;
    color: #222;
  }

  .user-wrap .user-info button {
    display: block;
    margin-top: 1rem;
  }

  .bookmark-wrap {
    padding-top: 2rem;
  }

  .bookmark-wrap h3 {
    margin: 0 1.2rem;
  }
</style>