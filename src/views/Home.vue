<template>
  <div class="home w-100" id="home">
    <TopMenu />
    <div class="highlighted-picture"></div>
    <When />
    <div class="container mx-auto my-5 row">
      <div class="verse col-lg-6 col-md-8">
        <p>Quem imaginou que dessa longa amizade se iniciaria um romance? Aliás, romance não nos descreve bem. Somos aventureiros, divertidos, travessos, ansiosos... Mas cada pedaço Deus montou para ser perfeito, um para o outro - segundo o Seu plano.</p>
        <p>E é por isso que cada dia juntos é especial. Tão especial, que queremos viver mais do que dias juntos - mas as nossas vidas inteiras. E se até agora Deus já tem feito esse relacionamento especial, seria impossível imaginar o que vem pela frente.</p>
        <div class="quote">
          <p class="mb-0">"Nem olhos viram, nem ouvidos ouviram, nem jamais penetrou em coração humano o que Deus tem preparado para aqueles que o amam."</p>
          <p class="text-right">1 Coríntios 2.9</p>
        </div>
      </div>
    </div>
    <LettersSpacer />
    <Where />
    <Contact />
    <Footer />
  </div>
</template>

<script lang="ts">
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import { Component, Vue } from 'vue-property-decorator'
import TopMenu from '@/components/TopMenu.vue'
import When from '@/components/When.vue'
import LettersSpacer from '@/components/LettersSpacer.vue'
import Where from '@/components/Where.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

@Component({
  components: {
    TopMenu,
    When,
    LettersSpacer,
    Where,
    Contact,
    Footer
  },
  metaInfo () {
    return {
      title: 'Matias e Aniele'
    }
  }
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
@import '../assets/style/variables';

.home {
  overflow-y: auto;
  font-family: $font-josefin;
  font-weight: 300;

  .highlighted-picture {
    height: 600px;
    background: center no-repeat url('../assets/images/website-background.jpg');
    background-size: cover;
  }
}
</style>
