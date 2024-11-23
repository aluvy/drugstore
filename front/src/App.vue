<template>
  <v-app>
    <PageHeader :path="path" />
    <PageAside />

    <v-main class="container" :class="{ wide: path === '/main'}">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </v-main>

    <PageFooter />
  </v-app>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import PageAside from '@/components/PageAside.vue';
import PageFooter from '@/components/PageFooter.vue';

import { mapState, mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    PageHeader,
    PageAside,
    PageFooter,
  },
  watch: {
    $route() {
      this.$store.commit('setAsideShow', false);
    },
  },
  computed: {
    ...mapState(['bookmarks', 'products', 'asideShow']),
    ...mapGetters(['isLogin']),
    path() {
      return this.$route.path;
    }
  },
  methods: {
    checkLogin() {
      if(!this.isLogin) {
        this.$router.push('/main');
      }
    }
  },
  created() {
    this.checkLogin();
  },
  update() {
    this.checkLogin();
  }
}
</script>