<template>
  <div id="modal" class="dialog" v-show="modal.show">
    <div class="modal-wrap">
      <div class="modal-header">
        <h2>의약품 이름</h2>
        <v-btn variant="plain" icon="mdi-close" aria-label="close" class="btn-close"></v-btn>
      </div>
      <div class="modal-body">
        <div class="photo">
          <img src="" alt="photo" />
        </div>
        <ul>
          <li>
            <h3>title</h3>
            <p>asdkfjlaskdjfklasdklksdjfklasdjfklsadklfjdklsaf</p>
          </li>
          <li>
            <h3>title</h3>
            <p>asdkfjlaskdjfklasdklksdjfklasdjfklsadklfjdklsaf</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DrugList',
  data: () => ({
    //
  }),

  props: {
    modal: Object,
  },
}
</script>

<style scoped>
  #modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background: #fff;
    z-index: 30;
  }

  .modal-header {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    height: 4.8rem;
    padding-left: 1.2rem;
    background: #009688;
  }

  .modal-header h2 {
    font-size: 1.6rem;
    color: #fff;
    margin-right: auto;
  }

  .modal-header .btn-close {
    font-size: 1.4rem;
    color: #fff;
    opacity: 1;
  }

  .modal-body {
    padding: 1.2rem;
  }
  
  .modal-body li {
    padding: 1.2rem 0;
  }

  .modal-body li + li {
    border-top: 1px solid #ddd;
  }

  .modal-body h3 {
    font-size: 1.4rem;
    color: #222;
    font-weight: normal;
  }
  
  .modal-body p {
    font-size: 1.4rem;
    color: #777;
  }

</style>