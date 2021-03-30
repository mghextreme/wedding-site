<template>
  <div class="savethedate">
    <Card></Card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Card from '@/components/Card.vue'

@Component({
  metaInfo () {
    return {
      title: 'Save the Date - Matias e Aniele'
    }
  },
  components: {
    Card
  }
})
export default class SaveTheDate extends Vue {}
</script>

<style scoped lang="scss">
.savethedate {
  width: 100%;
  height: 100%;
  background: center repeat url('../assets/images/background.jpg');
  overflow: hidden;
}
</style>
