<template>
  <div class="card">
    <div class="names">
      <img src="../assets/images/matias-e-aniele.svg" />
    </div>
    <div class="date">
      <span class="pre-date"></span>
      <CardHole char="3"></CardHole>
      <CardHole char="1"></CardHole>
      <span class="mid-date"></span>
      <CardHole char="O"></CardHole>
      <CardHole char="U"></CardHole>
      <CardHole char="T"></CardHole>
    </div>
    <div class="icon"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CardHole from '@/components/CardHole.vue'

@Component({
  components: {
    CardHole
  }
})
export default class Card extends Vue {}
</script>

<style scoped lang="scss">
@import '../assets/style/variables';

.card {
  position: absolute;
  top: 50%;
  left: 15px;
  right: 15px;
  max-width: 480px;
  height: 260px;
  transform: translateY(-114px);
  background: center repeat url('../assets/images/paper-texture.jpg');
  background-color: white;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.7);

  .names {
    position: absolute;
    top: 20px;
    left: 10px;
    right: 10px;
    max-width: 426px;
    height: 52px;
    opacity: .8;
  }

  .date {
    position: absolute;
    top: 105px;
    left: 10px;
    right: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    span {
      display: block;
      width: 30px;
      margin: 0;

      &.pre-date { display: none; }
    }
  }

  .icon {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    width: 50px;
    height: 50px;
    background: center no-repeat url('../assets/images/heart.svg');
    background-color: $color-red;
  }
}

@media screen and (max-width: 340px) {
  .card {
    height: 240px;
    transform: translateY(-104px);

    .names {
      top: 15px;
    }

    .date {
      top: 72px;
      max-width: 138px;
      flex-wrap: wrap;

      span {
        width: 10px;
      }
      span.pre-date { display: block; }
    }

    .icon {
      bottom: 15px;
      width: 40px;
      height: 40px;
    }
  }
}
</style>
