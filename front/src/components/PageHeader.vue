<template>
  <div class="header-wrap">
    <header id="header">

        <v-btn variant="plain" icon="mdi-menu" aria-label="menu" class="btn-gnb"></v-btn>

        <h1><router-link to="/main">{{ title }}</router-link></h1>

        <v-btn variant="plain" icon="mdi-account" aria-label="mypage" class="btn-mypage"></v-btn>

    </header>
  </div>
</template>

<script>

export default {
  name: 'PageHeader',

  data: () => ({
    title: '온라인 의약품 정보 검색 서비스',
  }),
}
</script>

<style scoped>
  #header {
    position: sticky;
    z-index: 999;
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
  .btn-mypage {
    font-size: 1.4rem;
    color: #fff;
    opacity: 1;
  }
</style>