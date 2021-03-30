<template>
  <div class="when container-fluid" id="quando">
    <div class="leaves"></div>
    <div class="container row mx-auto">
      <div class="wood col-lg-8 flex p-5">
        <div class="row headers mb-4">
          <div class="col-6 text-left">Contagem regressiva</div>
          <div class="col-6 text-right">31 de outubro de 2021</div>
        </div>
        <div class="row counter align-items-center">
          <div class="col-3 fraction">
            <span class="number">{{ days }}</span>
            <span class="label text-left">Dias</span>
          </div>
          <div class="col-1 separator">:</div>
          <div class="col-2 fraction">
            <span class="number">{{ hours }}</span>
            <span class="label text-left">Horas</span>
          </div>
          <div class="col-1 separator">:</div>
          <div class="col-2 fraction">
            <span class="number">{{ minutes }}</span>
            <span class="label text-left">Minutos</span>
          </div>
          <div class="col-1 separator">:</div>
          <div class="col-2 fraction">
            <span class="number">{{ seconds }}</span>
            <span class="label text-left">Segundos</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class When extends Vue {
  private targetInMillis = new Date(2021, 10, 31, 16, 30, 0).getTime();
  private millisInADay = 86_400_000;
  private millisInAnHour = 3_600_000;
  private millisInAMinute = 60_000;
  private millisInASecond = 1_000;

  public days: number;
  public hours: number;
  public minutes: number;
  public seconds: number;

  constructor () {
    super()

    this.days = 0
    this.hours = 0
    this.minutes = 0
    this.seconds = 0

    setInterval(this.tick, 200)
  }

  tick () {
    let diff = this.targetInMillis - Date.now()

    this.days = Math.floor(diff / this.millisInADay)
    diff -= this.days * this.millisInADay

    this.hours = Math.floor(diff / this.millisInAnHour)
    diff -= this.hours * this.millisInAnHour

    this.minutes = Math.floor(diff / this.millisInAMinute)
    diff -= this.minutes * this.millisInAMinute

    this.seconds = Math.floor(diff / this.millisInASecond)
  }
}
</script>

<style scoped lang="scss">
@import '../assets/style/variables';

.when {
  position: relative;

  .leaves {
    position: absolute;
    top: 3px;
    left: 0;
    right: 0;
    z-index: 10;
    height: 50px;
    background: top repeat-x url('../assets/images/leaves.png');
  }

  .wood {
    position: relative;
    margin-top: -60px;
    z-index: 20;
    border-radius: 8px;
    box-shadow: 0 3px 8px -2px rgba(0, 0, 0, 0.95);
    font-family: $font-josefin;
    text-transform: uppercase;
    color: white;
    background: center no-repeat url('../assets/images/wood-texture.jpg');

    .counter {
      .fraction {
        span {
          display: block;
          line-height: 1em;
        }

        .number {
          font-size: 4.5em;
          font-weight: 600;
        }

        .label {
          margin-top: -10px;
          font-size: 0.8em;
          opacity: 0.6;
        }
      }

      .separator {
          font-size: 2.5em;
          opacity: 0.5;
      }
    }
  }
}
</style>
