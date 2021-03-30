<template>
  <div class="home w-100 h-100" id="home">
    <TopMenu />
    <div class="highlighted-picture"></div>
    <div class="container">
      <div class="verse"></div>
      <Date />
      <Location />
      <div class="contact-us"></div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import { Component, Vue } from 'vue-property-decorator'
import TopMenu from '@/components/TopMenu.vue'
import Date from '@/components/Date.vue'
import Location from '@/components/Location.vue'
import Footer from '@/components/Footer.vue'

@Component({
  components: {
    TopMenu,
    Date,
    Location,
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
.highlighted-picture {
  height: 600px;
  background: center no-repeat url('https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg');
  background-size: cover;
}
</style>
