<template>
  <div class="footer-wrap">
    <v-footer id="footer">
      &copy; copyright
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
    font-size: 1.4rem;
    text-align: center;
  }
  .v-footer {
    padding: 1.4rem;
    color: #787878;
  }
</style>