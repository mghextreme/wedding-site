<template>
  <div class="gallery my-5 py-4">
    <Flicking ref="gallery" :options="{ align: 'center', circular: true, autoInit: false }">
      <div class="slide"><img src="../assets/images/gallery/beach-01.jpg" /></div>
      <div class="slide"><img src="../assets/images/gallery/close-01.jpg" /></div>
      <div class="slide"><img src="../assets/images/gallery/close-02.jpg" /></div>
      <div class="slide"><img src="../assets/images/gallery/close-03.jpg" /></div>
      <div class="slide"><img src="../assets/images/gallery/close-04.jpg" /></div>
      <div class="slide"><img src="../assets/images/gallery/close-05.jpg" /></div>
      <div class="slide"><img src="../assets/images/gallery/close-06.jpg" /></div>
      <div class="slide"><img src="../assets/images/gallery/close-07.jpg" /></div>
      <div class="slide"><img src="../assets/images/gallery/event-01.jpg" /></div>
      <div class="slide"><img src="../assets/images/gallery/night-01.jpg" /></div>
      <div class="slide"><img src="../assets/images/gallery/pre-01.jpg" /></div>
      <div class="slide"><img src="../assets/images/gallery/pre-02.jpg" /></div>
      <div class="slide"><img src="../assets/images/gallery/pre-03.jpg" /></div>
      <div class="slide"><img src="../assets/images/gallery/pre-04.jpg" /></div>
      <div class="slide"><img src="../assets/images/gallery/pre-05.jpg" /></div>
      <div class="slide"><img src="../assets/images/gallery/pre-06.jpg" /></div>
      <div class="slide"><img src="../assets/images/gallery/pre-07.jpg" /></div>
      <div class="slide"><img src="../assets/images/gallery/ruins-01.jpg" /></div>
    </Flicking>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Flicking } from '@egjs/vue-flicking'

@Component({
  components: {
    Flicking
  }
})
export default class Gallery extends Vue {
  start () {
    const gallery: any = this.$refs.gallery
    gallery.init()
  }

  mounted () {
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        this.start()
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '~@egjs/vue-flicking/dist/flicking.css';

.gallery {
  position: relative;
  width: 100%;
  box-shadow: inset 0 2px 10px -2px rgba(0, 0, 0, 0.8);
  background: center repeat url('../assets/images/background.jpg');
  background-attachment: fixed;

  div.slide {
    box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.8);
    border: 15px solid white;
    margin-left: 1.5rem;

    img {
      pointer-events: none;
      width: auto;
      max-height: 300px;
    }
  }
}

@media screen and (max-width: 767px) {
  .gallery div.slide {
    border: 8px solid white;

    img {
      max-height: 160px;
    }
  }
}
</style>
