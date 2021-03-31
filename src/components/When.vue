<template>
  <div class="when container-fluid" id="quando">
    <div class="leaves"></div>
    <div class="container row mx-auto">
      <div class="wood col-lg-8 flex p-5" v-if="!isComplete">
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
      <div class="married achievement col-lg-8 flex" v-if="isComplete">
        <div class="icon">
          <img src="../assets/images/trophy.svg" />
        </div>
        <div class="title">Achievement Unlocked</div>
        <div class="description">Got married</div>
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

  public isComplete: boolean;
  public days: number;
  public hours: number;
  public minutes: number;
  public seconds: number;

  constructor () {
    super()

    this.isComplete = false
    this.days = 0
    this.hours = 0
    this.minutes = 0
    this.seconds = 0

    setInterval(this.tick, 200)
  }

  tick () {
    let diff = this.targetInMillis - Date.now()

    if (diff < 0) {
      this.isComplete = true
      return
    }

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
    box-shadow: 0 3px 8px -2px rgba(0, 0, 0, 0.95);
    font-family: $font-josefin;
    text-transform: uppercase;
    color: white;
    background: center no-repeat url('../assets/images/wood-texture.jpg');

    .headers {
      font-size: 0.8em;
      letter-spacing: 0.3em;
    }

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

  .achievement {
    position: relative;
    box-sizing: border-box;
    margin-top: -40px;
    padding: 35px 80px 35px 190px;
    height: 160px;
    z-index: 20;
    box-shadow: 0 3px 8px -2px rgba(0, 0, 0, 0.95);
    color: white;
    background: #0f7d0f;
    border-radius: 80px;

    .icon {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 160px;
      background: #299c10;
      border-radius: 80px;
    }

    .title {
      font-size: 2em;
      font-weight: 600;
    }

    .description {
      font-size: 2em;
    }
  }
}
</style>
