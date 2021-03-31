<template>
  <div class="contact container text-center my-5" id="contato">
    <h2 class="mb-5">Contato</h2>
    <div class="flex">
      <a href="https://wa.me/5547996147520" target="_blank" class="btn text-white m-2">
        <span class="icon whatsapp"></span>
        <span class="label">(47) 99614-7520</span>
      </a>
      <a href="https://wa.me/5547996339147" target="_blank" class="btn text-white m-2">
        <span class="icon whatsapp"></span>
        <span class="label">(47) 99633-9147</span>
      </a>
      <a href="mailto:matiashenschel@hotmail.com" target="_blank" class="btn text-white m-2">
        <span class="icon email"></span>
        <span class="label">E-mail</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Contact extends Vue {}
</script>

<style scoped lang="scss">
@import '../assets/style/variables';

h2 {
  font-size: 1.5em;
  color: $color-brown;
}

.flex {
  a {
    display: inline-block;
    font-size: 1em;
    font-weight: 600;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    background: center no-repeat url('../assets/images/wood-texture.jpg');
    border-radius: 0;

    &:hover {
      opacity: 0.85;
    }
  }
}
</style>
