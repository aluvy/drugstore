<template>
  <v-app>
    <PageHeader />

    <v-main class="container" :class="{ wide: path === '/main'}">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </v-main>

    <PageFooter />    
  </v-app>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue';
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    PageHeader,
    PageFooter,
    HelloWorld,
  },

  computed: {
    path() {
      return this.$route.path;
    }
  },

  data: () => ({
    //
  }),
}
</script>