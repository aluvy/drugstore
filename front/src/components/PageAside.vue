<template>
  <div id="aside" :class="{ active : asideShow, close: asideCloseClass }">
    <div class="aside-wrap">

      <ul class="aside-menu">
        <template v-if="isLogin">
          <li><router-link to="/mypage">마이페이지</router-link></li>
        </template>
        <template v-else>
          <li><router-link to="/login">로그인</router-link></li>
          <li><router-link to="/join">회원가입</router-link></li>
        </template>
      </ul>

    </div>
    <div class="dim" @click="asideClose()"></div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'PageAside',
  computed: {
    ...mapState(['title', 'asideShow']),
    ...mapGetters(['isLogin']),
  },
  watch: {
    asideShow(current, before) {
      if(!current) {
        this.asideCloseClass = true;
        setTimeout(()=>{
          this.asideCloseClass = false;
        }, 100)
      }
    }
  },
  data: () => ({
    asideCloseClass: false,
  }),
  methods: {
    asideClose() {
      this.$store.commit('setAsideShow', false);
    }
  }
}
</script>

<style scoped>
  #aside .aside-wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 80%;
    max-width: 32rem;
    height: 100vh;
    padding-top: 4.8rem;
    background: #fff;
    overflow-y:scroll;
    transform: translateX(-100%);
    transition: transform .3s;
    z-index: 19;
  }

  #aside.active .aside-wrap {
    transform: translateX(0);
  }

  #aside.close .aside-wrap {
    transition: transform 0s;
  }

  #aside .dim {
    display: none;
    background: rgba(0,0,0, 0.4);
    position: fixed;
    inset: 0;
    z-index: 18;
  }

  #aside.active .dim {
    display: block;
  }

  #aside .aside-menu {
    padding: 2.4rem;
  }
  #aside .aside-menu li + li {
    margin-top: 1rem;
  }
  #aside .aside-menu a {
    display: block;
    font-size: 1.6rem;
    color: #222;
  }
</style>