<template>
  <div class="login-wrap">
    
    <h2>Login</h2>
    <div class="form-wrap">
      
      <v-form
        v-model="form"
        @submit.prevent="loginSubmit"
      >
        <v-text-field
          v-model="username"
          :readonly="loading"
          :rules="[required]"
          label="Username"
          placeholder="Enter your username"
          clearable
        ></v-text-field>

        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[required]"
          label="Password"
          placeholder="Enter your password"
          clearable
        ></v-text-field>

        <v-btn type="submit" class="btn-submit" :disabled="!form" :loading="loading">Sign In</v-btn>

      </v-form>

      {{ logMessage }}
      <ul class="utils">
        <li>
          <RouterLink to="/join">회원가입</RouterLink>
        </li>
        <li>
          <RouterLink to="/join">비밀번호 찾기</RouterLink>
        </li>
      </ul>

    </div>

  </div>
</template>

<script>

export default {
  name: 'LoginPage',

  components: {
    
  },

  data: () => ({
    form: false,
    username: null,
    password: null,
    loading: false,
    logMessage: '',
  }),


  methods: {
    required (v) {
      return !!v || 'Field is required'
    },
    async loginSubmit() {
      try {
        const userData = {
          username: this.username,
          password: this.password
        }
        await this.$store.dispatch('LOGIN', { userData: userData });

        this.$router.push('/mypage');

      } catch (e) {
        // console.log(e);
        this.logMessage = e.response.data;
      } finally {
        console.log('finally');
        this.initForm();
      }

    },
    initForm() {
      this.username = '';
      this.password = '';
    }
  }


}
</script>

<style scoped>
  .login-wrap {
    padding-top: 6rem;
  }
  .login-wrap h2 {
    font-size: 2.6rem;
    text-align: center;
  }

  .form-wrap {
    padding: 4rem 3rem 3rem;
  }

  .btn-submit {
    display: block;
    width: 100%;
    height: 4.8rem;
    font-size: 1.2rem;
    color: #fff;
    background: #009688;
  }
  
  .utils {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 3rem;
  }
  .utils li {
    position: relative;
  }
  .utils li + li::before {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    content: '';
    display: block;
    width: 1px;
    height: 1.4rem;
    background: #ddd;
  }
  .utils li a {
    display: block;
    font-size: 1.4rem;
    color: #777;
    padding: 0 1.4rem;
  }
</style>