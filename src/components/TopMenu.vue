<template>
  <div class="menu">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
      <div class="container">
        <a class="navbar-brand mb-0 ml-0 mr-auto h1" href="#home"><img src="../assets/images/matias-e-aniele.svg" height="32" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse pt-3 text-right" id="navbarSupportedContent">
          <ul class="navbar-nav mr-0">
            <li class="nav-item mx-3">
              <a class="nav-link" href="#quando"><span>Quando</span></a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="#onde"><span>Onde</span></a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="#contato"><span>Contato</span></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class TopMenu extends Vue {}
</script>

<style scoped lang="scss">
.navbar {
  background-color: rgba(255, 255, 255, 0.85);
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.4);

  li.nav-item a {
    font-size: 1.1em;

    span {
      padding: 3px 0;
    }

    &:hover span {
      border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
