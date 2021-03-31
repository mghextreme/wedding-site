<template>
  <div class="footer">
    <div class="container-fluid bg-light">
      <div class="container text-center py-4">
        Feito com <img src="../assets/images/red-heart.svg" width="18" style="margin-top:-4px" /> por Matias e Aniele.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Footer extends Vue {}
</script>

<style scoped lang="scss">
.container-fluid {
  box-shadow: inset 0 5px 5px -5px rgba(0, 0, 0, 0.6);
}
</style>
