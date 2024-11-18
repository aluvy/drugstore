<template>
  <div class="header-wrap">

    <header id="header" v-if="path === '/main'">
      <v-btn variant="plain" icon="mdi-menu" aria-label="menu" class="btn-gnb" @click="$router.push('/main')"></v-btn>
      <h1><router-link to="/main">{{ title }}</router-link></h1>

      <v-btn variant="plain" icon="mdi-account" aria-label="mypage" class="btn-mypage" @click="$router.push(mypageLink)"></v-btn>

      <template v-if="isLogin">
      <!-- 로그인 한 상태 -->
      </template>
      <template v-else>
        <!-- 로그인 하지 않은 상태 -->
        <!-- <v-btn variant="plain" icon="mdi-account" aria-label="mypage" class="btn-mypage" @click="$router.push(mypageLink)"></v-btn>
        <router-link :to="mypageLink">TIL</router-link> -->
      </template>

    </header>

    <header id="header-mypage" v-else-if="path === '/mypage'">
      <v-btn variant="plain" icon="mdi-home" aria-label="home" class="btn-home" @click="$router.push('/main')"></v-btn>
      <h1><router-link to="/main">마이페이지</router-link></h1>
    </header>

    <header id="header-member" v-else>
      <v-btn variant="plain" icon="mdi-home" aria-label="home" class="btn-home" @click="$router.push('/main')"></v-btn>
    </header>
    
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { deleteCookie } from '@/utils/cookies.js'

export default {
  name: 'PageHeader',
  computed: {
    ...mapState(['title']),
    isLogin() {
      return this.$store.getters.isLogin;
    },
    mypageLink() {
      return this.$store.getters.isLogin ? '/mypage' : '/login';
    },
    logoLink() {
      return this.$store.getters.isLogin ? '/main' : '/login';
    }
  },
  data: () => ({
  }),
  methods: {
    logout() {
      this.$store.commit('clearUserinfo');
      this.$store.commit('clearToken');
      deleteCookie('til_auth');
      deleteCookie('til_user');
      this.$router.push('/');
    }
  },
  props: {
    path: String,
  },
}
</script>

<style scoped>
  .header-wrap {
    position: sticky;
    top: 0;
    z-index: 20;
  }

  #header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #009688;
  }

  h1 {
    font-size: 1.6rem;
    color: #fff;
    margin-right: auto;
  }

  .btn-gnb,
  .btn-mypage,
  .btn-home {
    font-size: 1.4rem;
    color: #fff;
    opacity: 1;
  }

  #header-mypage {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #777
  }

  #header-member .btn-home {
    color: #777;
  }
</style>