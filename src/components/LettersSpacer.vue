<template>
  <div class="letters-spacer container-fluid my-5"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class LettersSpacer extends Vue {}
</script>

<style scoped lang="scss">
.letters-spacer {
  height: 100px;
  box-shadow: inset 0 2px 10px -2px rgba(0, 0, 0, 0.8);
  background: center repeat url('../assets/images/background.jpg');
  background-attachment: fixed;
}
</style>
