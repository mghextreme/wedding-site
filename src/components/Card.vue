<template>
  <div class="card">
    <div class="names">
      <img src="../assets/images/matias-e-aniele.svg" />
    </div>
    <div class="title">
      <span class="en">Save the date</span>
      <span class="split">-</span>
      <span class="pt">Guarde esta data</span>
    </div>
    <div class="date">
      <span class="pre-date"></span>
      <CardHole char="3" cursorDelay="12000"></CardHole>
      <CardHole char="1"></CardHole>
      <span class="mid-date"></span>
      <CardHole char="O" cursorDelay="17000"></CardHole>
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
  height: 290px;
  transform: translateY(-155px);
  background: center repeat url('../assets/images/paper-texture.jpg');
  background-color: white;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.7);

  .names {
    position: absolute;
    top: 25px;
    left: 10px;
    right: 10px;
    max-width: 426px;
    height: 52px;
    opacity: .8;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .title {
    position: absolute;
    top: 105px;
    left: 10px;
    right: 10px;
    letter-spacing: 0.12em;
    font-size: 1.1em;
    font-family: $font-josefin;
    text-align: center;
    text-transform: uppercase;
    opacity: 0.5;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    span {
      display: inline-block;

      &.split {
        margin: 0 7px;
      }
    }
  }

  .date {
    position: absolute;
    top: 146px;
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

@media screen and (max-width: 480px) {
  .card {
    transform: translateY(-165px);

    .title {
      top: 96px;

      span {
        display: block;
        margin-bottom: 3px;

        &.split {
          display: none;
        }
      }
    }

    .date {
      top: 156px;
    }
  }
}

@media screen and (max-width: 340px) {
  .card {
    height: 290px;
    transform: translateY(-140px);

    .names {
      top: 15px;
    }

    .title {
      top: 67px;
    }

    .date {
      top: 125px;
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
