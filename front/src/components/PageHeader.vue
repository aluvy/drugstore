<template>
  <div class="header-wrap">

    <header id="header" v-if="path === '/main'">
      <v-btn variant="plain" icon="mdi-menu" aria-label="menu" class="btn-gnb" @click="handleAside()"></v-btn>

      <h1>{{ title }}</h1>

      <template v-if="isLogin">
        <v-btn variant="plain" icon="mdi-account" aria-label="mypage" class="btn-mypage" @click="$router.push('/mypage')"></v-btn>
      </template>
      <template v-else>
        <v-btn variant="plain" icon="mdi-account" aria-label="login" class="btn-mypage" @click="$router.push('/login')"></v-btn>
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
import { mapGetters, mapState } from 'vuex';
import { deleteCookie } from '@/utils/cookies.js'

export default {
  name: 'PageHeader',
  computed: {
    ...mapState(['title', 'asideShow']),
    ...mapGetters(['isLogin']),
  },
  methods: {
    handleAside() {
      const result = !this.asideShow;
      this.$store.commit('setAsideShow', result);
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
    background: #2e3535
  }

  #header-member .btn-home {
    color: #777;
  }
</style>