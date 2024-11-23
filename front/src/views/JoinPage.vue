<template>
  <div class="join-wrap">
    
    <h2>Join Memgership</h2>
    <div class="form-wrap">
      
      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
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
          v-model="nickname"
          :readonly="loading"
          :rules="[required]"
          label="Nickname"
          placeholder="Enter your nickname"
          clearable
        ></v-text-field>

        <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="[required]"
          label="Email"
          placeholder="Enter your email"
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

        <v-btn type="submit" class="btn-submit" :disabled="!form" :loading="loading">Join Membership</v-btn>

      </v-form>

    </div>

  </div>
</template>

<script>
import { registerUser } from '@/api/user.js';

export default {
  name: 'JoinPage',

  components: {
    
  },

  data: () => ({
    form: false,
    username: null,
    nickname: null,
    email: null,
    password: null,
    loading: false,

    // logMessage: '',
  }),

  methods: {
    required (v) {
      return !!v || 'Field is required'
    },

    async onSubmit() {
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
        email: this.email,
      };
      const res = await registerUser(userData);
      const result = res.status == 200 ? true : false;

      if(result) {
        this.$router.push('/main');
      }
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    }


  },
}
</script>

<style scoped>
  .join-wrap {
    padding-top: 6rem;
  }
  .join-wrap h2 {
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