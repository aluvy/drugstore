<template>
  <div id="modal" class="dialog" v-show="modalShow">
    <div class="modal-wrap">
      <div class="modal-header">
        <h2>{{ productsDetail.itemName }}</h2>
        <v-btn variant="plain" icon="mdi-close" aria-label="close" class="btn-close" @click="modalClose()"></v-btn>
      </div>
      <div class="modal-body-photo">
        <div class="photo">
          <img :src="productsDetail.itemImage" alt="photo" >
        </div>
      </div>
      <div class="modal-body">
        <div class="product-info">
          <p class="entpName">{{ productsDetail.entpName }}</p>
          <p class="itemName">{{ productsDetail.itemName }}</p>
          <p class="etc">
            <span>품목 기준 코드: {{ productsDetail.itemSeq }}</span>
            <span>공개일자: {{ productsDetail.openDe }}</span>
            <span>수정일자: {{ productsDetail.updateDe }}</span>
          </p>
        </div>
        <ul>
          <li>
            <!-- 문항1(효능) -->
            <span>효능</span>
            <h3>이 약의 효능은 무엇입니까?</h3>
            <p>{{ productsDetail.efcyQesitm }}</p>
          </li>
          <li v-show="productsDetail.useMethodQesitm">
            <!-- 문항2(사용법) -->
            <span>사용법</span>
            <h3>이 약은 어떻게 사용합니까?</h3>
            <p>{{ productsDetail.useMethodQesitm }}</p>
          </li>
          <li v-show="productsDetail.atpnWarnQesitm">
            <!-- 문항3(주의사항경고) -->
            <span>주의사항경고</span>
            <h3>이 약을 사용하기 전에 반드시 알아야 할 내용은 무엇입니까?</h3>
            <p>{{ productsDetail.atpnWarnQesitm }}</p>
          </li>
          <li v-show="productsDetail.atpnQesitm">
            <!-- 문항4(주의사항) -->
            <span>주의사항</span>
            <h3>이 약의 사용상 주의사항은 무엇입니까?</h3>
            <p>{{ productsDetail.atpnQesitm }}</p>
          </li>
          <li v-show="productsDetail.intrcQesitm">
            <!-- 문항5(상호작용) -->
            <span>상호작용</span>
            <h3>이 약을 사용하는 동안 주의해야 할 약 또는 음식은 무엇입니까?</h3>
            <p>{{ productsDetail.intrcQesitm }}</p>
          </li>
          <li v-show="productsDetail.seQesitm">
            <!-- 문항6(부작용) -->
            <span>부작용</span>
            <h3>이 약은 어떤 이상반응이 나타날 수 있습니까?</h3>
            <p>{{ productsDetail.seQesitm }}</p>
          </li>
          <li v-show="productsDetail.depositMethodQesitm">
            <!-- 문항7(보관법) -->
            <span>보관법</span>
            <h3>이 약은 어떻게 보관해야 합니까?</h3>
            <p>{{ productsDetail.depositMethodQesitm }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'DrugList',
  computed: {
    ...mapState(['productsDetail', 'modalShow']),
  },
  methods: {
    modalClose() {
      this.$store.commit('setModalShow', false);
    }
  }
}
</script>

<style scoped>
  #modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
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
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .modal-header .btn-close {
    font-size: 1.4rem;
    color: #fff;
    opacity: 1;
  }

  .modal-body {
    padding: 2rem;
  }

  .modal-body .product-info .entpName {
    font-size: 1.4rem;
    color: #009688;
  }
  .modal-body .product-info .itemName {
    font-size: 2.4rem;
    color: #222;
    font-weight: 700;
    padding-top: 0.6reml
  }

  .modal-body .product-info .etc {
    font-size: 1.2rem;
    padding-top: 1.4rem;
  }

  .modal-body .product-info .etc span {
    display: block;
  }
  
  .modal-body li {
    padding: 1.6em 0;
  }

  .modal-body li + li {
    border-top: 1px solid #eee;
  }

  .modal-body li span {
    display: block;
    font-size: 1.2rem;
    color: #009688;
  }

  .modal-body h3 {
    font-size: 1.6rem;
    color: #222;
    font-weight: normal;
    padding-top: 0.6rem;
  }
  
  .modal-body p {
    font-size: 1.4rem;
    color: #777;
    padding-top: 1.2rem;
  }
</style>