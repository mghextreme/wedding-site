<template>
  <div class="home">
    <div class="menu"></div>
    <div class="highlighted-picture"></div>
    <div class="verse"></div>
    <div class="when"></div>
    <div class="where"></div>
    <div class="contact-us"></div>
    <div class="footer"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  metaInfo () {
    return {
      title: 'Matias e Aniele'
    }
  }
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
}
</style>
