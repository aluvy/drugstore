<template>
  <div class="header-wrap">

    <header id="header" v-if="path === '/main'">
      <v-btn variant="plain" icon="mdi-menu" aria-label="menu" class="btn-gnb"></v-btn>
      <h1><router-link to="/main">{{ title }}</router-link></h1>
      <v-btn variant="plain" icon="mdi-account" aria-label="mypage" class="btn-mypage"></v-btn>
    </header>

    <header id="header-mypage" v-else-if="path === '/mypage'">
      <v-btn variant="plain" icon="mdi-home" aria-label="home" class="btn-home"></v-btn>
      <h1><router-link to="/main">{{ title }}</router-link></h1>
    </header>

    <header id="header-member" v-else>
      <v-btn variant="plain" icon="mdi-home" aria-label="home" class="btn-home"></v-btn>
    </header>
  
  </div>
</template>

<script>

export default {
  name: 'PageHeader',

  data: () => ({
    title: '온라인 의약품 정보 검색 서비스',
  }),
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
    background: #777
  }

  #header-member .btn-home {
    color: #777;
  }
</style>