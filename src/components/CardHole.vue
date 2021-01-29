<template>
  <div v-bind:class="{ 'card-hole': true, 'on': on }">
    <div class="circle" v-on:click="on = true">
      {{ content }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class CardHole extends Vue {
  @Prop() readonly char!: string
  on = false;

  get content (): string {
    return this.on ? this.char : ''
  }
}
</script>

<style scoped lang="scss">
@import '../assets/style/variables';

.card-hole {
  margin: 5px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  .circle {
    box-sizing: border-box;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px dashed #999;
    font-size: 3em;
    line-height: 36px;
    text-align: center;
    cursor: pointer;
  }

  &.on {
    .circle {
      border: none;
      font-family: $font-cursive;
      background: $color-background;
      box-shadow: inset 2px 2px 3px 0 rgba(0, 0, 0, 0.7);
    }
  }
}
</style>
