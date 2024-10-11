<template>
  <RouterLink to="/">Go to Home</RouterLink> | 
  <RouterLink to="/list">list</RouterLink>
  <div class="container" :class="{ wide: path==='/main' }">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script>
// console.log(process.env.VUE_APP_KEY)
// import AppHeader from '@/components/common/AppHeader.vue';
// import AppFooter from '@/components/common/AppFooter.vue';
// import AppLoading from '@/components/common/AppLoading.vue';

export default {
	// components: {
	// 	AppHeader,
	// 	AppFooter,
	// 	AppLoading
	// },
	computed: {
		path() {
			return this.$route.path;
		}
	},
	methods: {
		setVh() {
			// document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
		},
    startLoading() {
      // this.loadingStatus = true;
    },
    endLoading() {

    }
	},
	created() {
		// window.addEventListener('resize', this.setVh);
		// this.setVh();
	},
  beforeUnmount() {
  },
	unmounted() {
		// window.removeEventListener('resize', this.setVh);
	},
};
</script>

<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
