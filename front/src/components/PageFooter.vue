<template>
  <div class="footer-wrap">
    <v-footer id="footer">
      &copy; copyright all rights reserved
    </v-footer>
  </div>
</template>

<script>

export default {
  name: 'PageFooter',

  data: () => ({
    //
  }),
}
</script>

<style scoped>
  .footer-wrap {
    font-size: 1.2rem;
    text-align: center;
  }
  .v-footer {
    display: block;
    color: #999;
    padding: 5rem 1.2rem 3rem;
  }
</style>