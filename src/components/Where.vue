<template>
  <div class="where container text-center my-5" id="onde">
    <h2 class="mb-5">Onde</h2>
    <div class="row">
      <div class="place col-11 col-sm-9 col-md-4 mr-3">
        <div class="bg-white p-3">
          <h4>Cerimônia</h4>
          <h5 class="my-3">Missão Evangélica União Cristã</h5>
          <p>
            Rua Antônia da Veiga, 539<br/>
            Victor Konder - Blumenau
          </p>
          <a href="https://goo.gl/maps/xPmJPZhyBwpfhxB76" target="_blank" class="btn text-white p-2">Como chegar</a>
        </div>
      </div>
      <div class="place col-11 col-sm-9 col-md-4 ml-3">
        <div class="bg-white p-3">
          <h4>Celebração</h4>
          <h5 class="my-3">ArtSul - Espaço Green</h5>
          <p>
            Rua Luís Maske, 1070<br/>
            Itoupavazinha - Blumenau
          </p>
          <a href="https://g.page/artsul-eventos?share" target="_blank" class="btn text-white p-2">Como chegar</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Where extends Vue {}
</script>

<style scoped lang="scss">
@import '../assets/style/variables';

h2 {
  font-size: 1.5em;
  color: $color-brown;
}

.place {
  padding: 3px;
  background: center repeat url('../assets/images/wood-texture.jpg');
  background-attachment: fixed;

  .bg-white {
    height: 100%;

    h4 {
      font-size: 0.8em;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: $color-brown;
    }

    h5 {
      font-size: 1.2em;
      color: $color-brown;
    }

    a {
      display: block;
      font-size: 0.8em;
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
}

@media screen and (max-width:767px) {
  .where .row {
    flex-direction: column;

    .place {
      margin: 0 auto 15px !important;
    }
  }
}
</style>
