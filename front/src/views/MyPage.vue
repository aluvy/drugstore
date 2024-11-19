<template>
  <div class="mypage">
    <div class="user-wrap">
      <div class="user-photo">
        <img src="/public/no-image.png" alt="">
      </div>
      <div class="user-info">
        <p><strong>{{ $store.getters.getUsername }}</strong> is logged</p>
        <v-btn variant="tonal" size="small" @click="logout">logout</v-btn>
      </div>
    </div>
    
    <div class="bookmark-wrap">
      <h3>나의 의약품</h3>
      <BookmarkList @showProductDetail="showProductDetail" />
    </div>

    <DrugModal :modalShow="modalShow" @hideProductDetail="hideProductDetail" />

  </div>
</template>

<script>
import { deleteCookie } from '@/utils/cookies.js'
import { fetchBookmarks } from '@/api/bookmarks.js'
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
    ...mapState(['bookmarks', 'productsDetail']),
  },
  data: () => ({
    modalShow: false,
  }),
  methods: {
    showProductDetail() {
      this.modalShow = true;
    },
    hideProductDetail() {
      this.modalShow = false;
    },
    logout() {
      this.$store.commit('clearUserinfo');
      this.$store.commit('clearToken');
      deleteCookie('drug_auth');
      deleteCookie('drug_user');
      this.$router.push('/');
    },
    async fetchBookmarks() {
      try {
        this.$store.commit('setLoading', { loading: true });
        const res = await fetchBookmarks();

        console.log(res);

        this.$store.commit('setBookMarks', res.data.bookmarks);
        // this.posts = res.data.posts;
      } catch (e) {
        console.log(e);
        // this.logMessage = e.message;
      } finally {
        this.$store.commit('setLoading', { loading: false });
      }
    }
  },
  created() {
    this.fetchBookmarks();
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