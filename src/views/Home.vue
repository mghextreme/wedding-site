<template>
  <div class="home w-100" id="home">
    <TopMenu />
    <div class="highlighted-picture"></div>
    <When />
    <div class="container mx-auto my-5 row">
      <div class="verse col-8">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce magna sapien, vulputate ut varius non, vulputate viverra nunc. Praesent cursus sem id nisl ultrices egestas. Praesent dapibus turpis at facilisis auctor. Morbi rhoncus mauris massa, volutpat sagittis erat aliquet et.</p>
        <p>Cras commodo sit amet mi non finibus. Phasellus ligula sem, placerat at varius id, bibendum ac mauris. Duis suscipit, purus nec placerat mattis, dolor tortor condimentum eros, ut hendrerit ex mi vitae mauris. Vestibulum interdum risus rhoncus diam consequat, ut sagittis velit gravida. Aliquam et sapien lectus.</p>
      </div>
    </div>
    <Where />
    <div class="contact-us"></div>
    <Footer />
  </div>
</template>

<script lang="ts">
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import { Component, Vue } from 'vue-property-decorator'
import TopMenu from '@/components/TopMenu.vue'
import When from '@/components/When.vue'
import Where from '@/components/Where.vue'
import Footer from '@/components/Footer.vue'

@Component({
  components: {
    TopMenu,
    When,
    Where,
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
    background: center no-repeat url('https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg');
    background-size: cover;
  }
}
</style>
