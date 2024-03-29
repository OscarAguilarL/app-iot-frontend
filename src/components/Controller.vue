<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { http } from '../modules/http';
import { ref } from 'vue';
import { statusIcons } from '../mappers/icon-mapper';

const loading = ref<boolean>(false);
const statusIcon = ref<any>([]);

const sendDirectionCommand = (command: string) => {
  console.log('command', command);
  try {
    loading.value = true;
    http.get<{ value: string }>('/set-gearmotor-status.php', {
      params: { status: command },
    });
    statusIcon.value = statusIcons[command] || null;
  } catch (err) {
    console.log(err);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="controller-container">
    <div class="controller">
      <div class="controller__cord"></div>
      <div class="left-pad">
        <div class="dpad">
          <div class="dpad__button button--vertical">
            <div
              class="dpad__arrow arrow--top"
              @click="sendDirectionCommand('F')"
            ></div>
            <div
              class="dpad__arrow arrow--bottom"
              @click="sendDirectionCommand('B')"
            ></div>
          </div>
          <div class="dpad__button button--horizontal">
            <div class="dpad__center">
              <div class="dpad__circle"></div>
            </div>
            <div
              class="dpad__arrow arrow--left"
              @click="sendDirectionCommand('L')"
            ></div>
            <div
              class="dpad__arrow arrow--right"
              @click="sendDirectionCommand('R')"
            ></div>
          </div>
        </div>
      </div>
      <div class="middle-pad">
        <div class="logo">
          <h1 class="logo__header">Super ESP32</h1>
          <h2 class="logo__byline">Entertainment System</h2>
        </div>
        <div class="start-select">
          <div class="start-select__button button--start">
            <div class="start-select__interior"></div>
          </div>
          <div class="start-select__button button--select">
            <div class="start-select__interior"></div>
          </div>
        </div>
      </div>
      <div class="right-pad">
        <div class="right-controls">
          <div class="right-controls__circle"></div>
          <div class="button-group button-group--top">
            <div
              class="button-group__button button--x"
              @click="sendDirectionCommand('180DegR')"
            ></div>
            <div
              class="button-group__button button--y"
              @click="sendDirectionCommand('180DegL')"
            ></div>
          </div>
          <div class="button-group button-group--bottom">
            <div
              class="button-group__button button--a"
              @click="sendDirectionCommand('S')"
            ></div>
            <div
              class="button-group__button button--b"
              @click="sendDirectionCommand('ATM')"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container w-full border-dark mx-auto bottom">
    <div class="row border bottom align-items-end text-center">
      <div class="col">
        <FontAwesomeIcon :icon="statusIcon" size="5x" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">

.bottom {
  height: 85vh;
}

.controller-container {
  height: 50%;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  /* top: -17; */
}

.controller {
  background: #a8aaaa;
  height: 14.5rem;
  margin: 0 auto;
  position: relative;
  top: 10rem;
  width: 22rem;
  z-index: 10;
}

.controller__cord {
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#080907),
    color-stop(#202020),
    to(#080907)
  );
  background: linear-gradient(to right, #080907, #202020, #080907);
  height: 10rem;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  top: -10rem;
  width: 1rem;
  /* z-index: 100; */
}

.left-pad,
.right-pad {
  background: #a8aaaa;
  border-radius: 50%;
  height: 17rem;
  position: absolute;
  width: 17rem;
  z-index: 20;
}

.bumper {
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#fff),
    to(#656565)
  );
  background: linear-gradient(to top, #fff, #656565);
  -webkit-box-shadow: 0 6px 3px -3px rgba(255, 255, 255, 0.4) inset;
  box-shadow: 0 6px 3px -3px rgba(255, 255, 255, 0.4) inset;
  height: 4rem;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  top: 6.6em;
  width: 10rem;
  z-index: 1;
}

.bumper:hover {
  cursor: pointer;
}

.bumper--left:active {
  -webkit-transform: rotate(-3deg);
  transform: rotate(-3deg);
}

.bumper--right:active {
  -webkit-transform: rotate(3deg) scaleX(-1);
  transform: rotate(3deg) scaleX(-1);
}

.bumper--left {
  border-radius: 120px/55px 10px;
  -webkit-transform: rotate(-2deg);
  transform: rotate(-2deg);
  left: -24rem;
}

.bumper--right {
  border-radius: 120px/55px 10px;
  left: 24rem;
  -webkit-transform: rotate(2deg) scaleX(-1);
  transform: rotate(2deg) scaleX(-1);
}

/* LEFT SIDE */
.left-pad {
  left: -9rem;
  z-index: 20;
}

.dpad {
  background: #a3a5a4;
  border-radius: 50%;
  -webkit-box-shadow: inset -1px 2px 1px 1px rgba(0, 0, 0, 0.4),
    inset 1px -2px 1px 1px rgba(255, 255, 255, 0.2);
  box-shadow: inset -1px 2px 1px 1px rgba(0, 0, 0, 0.4),
    inset 1px -2px 1px 1px rgba(255, 255, 255, 0.2);
  height: 9rem;
  left: 4rem;
  position: absolute;
  top: 4rem;
  width: 9rem;
  z-index: 20;
}

.dpad__button {
  background: #656565;
  border-radius: 10px;
  margin: 0 auto;
  position: absolute;
}

.dpad__center {
  background: #656565;
  height: 2.7rem;
  left: 2.2rem;
  position: absolute;
  width: 2.4rem;
}

.dpad__circle {
  background: radial-gradient(
    at bottom left,
    rgba(255, 255, 255, 0.4),
    rgba(0, 0, 0, 0.7)
  );
  border-radius: 50%;
  -webkit-box-shadow: -1px 1px rgba(255, 255, 255, 0.2);
  box-shadow: -1px 1px rgba(255, 255, 255, 0.2);
  height: 1.5rem;
  left: 8px;
  position: absolute;
  top: 8px;
  width: 1.5rem;
}

.button--vertical {
  -webkit-box-shadow: 1px 3px rgba(0, 0, 0, 0.7),
    inset -1px 2px 1px 1px rgba(255, 255, 255, 0.3);
  box-shadow: 1px 3px rgba(0, 0, 0, 0.7),
    inset -1px 2px 1px 1px rgba(255, 255, 255, 0.3);
  height: 7rem;
  left: 3.2rem;
  top: 1rem;
  width: 2.5rem;
}

.button--vertical:hover,
.button--horizontal:hover {
  cursor: pointer;
}

.button--vertical:active,
.button--horizontal:active {
  -webkit-box-shadow: 0 0 rgba(0, 0, 0, 0.7),
    inset -1px 2px 1px 1px rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 rgba(0, 0, 0, 0.7),
    inset -1px 2px 1px 1px rgba(255, 255, 255, 0.3);
}

.button--horizontal {
  -webkit-box-shadow: 2px 2px rgba(0, 0, 0, 0.7),
    inset -1px 2px 1px 1px rgba(255, 255, 255, 0.3);
  box-shadow: 2px 2px rgba(0, 0, 0, 0.7),
    inset -1px 2px 1px 1px rgba(255, 255, 255, 0.3);
  height: 2.5rem;
  left: 1rem;
  top: 3.2rem;
  width: 7rem;
}

.dpad__arrow {
  background-color: #585858;
  border-top-right-radius: 50%;
  height: 15px;
  position: absolute;
  width: 15px;
  z-index: 100;
}

.dpad__arrow:before,
.dpad__arrow:after {
  background-color: inherit;
  border-top-right-radius: 50%;
  content: '';
  height: 15px;
  position: absolute;
  width: 15px;
}

.dpad__arrow:before {
  -webkit-transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707)
    translate(0, -50%);
  transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707)
    translate(0, -50%);
}

.dpad__arrow:after {
  -webkit-transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414)
    translate(50%);
  transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);
}

.arrow--top {
  top: 0.8rem;
  left: 0.9rem;
  -webkit-transform: rotatez(-60deg) skewX(-30deg) scale(1, 0.866);
  transform: rotatez(-60deg) skewX(-30deg) scale(1, 0.866);
}

.arrow--bottom {
  bottom: 1rem;
  left: 0.7rem;
  -webkit-transform: rotatez(-120deg) skewX(-30deg) scale(1, 0.866);
  transform: rotatez(-120deg) skewX(-30deg) scale(1, 0.866);
}

.arrow--left {
  top: 1.1rem;
  left: 1rem;
  -webkit-transform: rotatez(90deg) skewX(-30deg) scale(1, 0.866);
  transform: rotatez(90deg) skewX(-30deg) scale(1, 0.866);
}

.arrow--right {
  top: 1.1rem;
  right: 1rem;
  -webkit-transform: rotatez(150deg) skewX(-30deg) scale(1, 0.866);
  transform: rotatez(150deg) skewX(-30deg) scale(1, 0.866);
}

/* MIDDLE */
.middle-pad {
  height: 14.5rem;
  left: 4.8rem;
  position: absolute;
  width: 12rem;
  z-index: 30;
}

.logo {
  font-style: italic;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  top: 1em;
}

.logo__header {
  color: #656565;
  display: inline;
  font-size: 2rem;
  font-weight: 700;
}

.logo__byline {
  background: #656565;
  color: #a8aaaa;
  font-size: 0.8rem;
  letter-spacing: 0.2rem;
}

.start-select {
  bottom: 4em;
  left: 2em;
  position: absolute;
  z-index: 30;
}

.start-select__button {
  background: -webkit-gradient(
    linear,
    right top,
    left bottom,
    from(#4c4c4c),
    to(rgba(255, 255, 255, 0.5))
  );
  background: linear-gradient(
    to bottom left,
    #4c4c4c,
    rgba(255, 255, 255, 0.5)
  );
  border-radius: 15px;
  display: inline-block;
  height: 1.6em;
  -webkit-transform: rotate(-40deg);
  transform: rotate(-40deg);
  width: 3.5em;
  z-index: 30;
}

.start-select__button:last-child {
  margin-left: 0.5em;
}

.start-select__button:before {
  color: #656565;
  font-size: 1rem;
  font-style: italic;
  font-weight: 700;
  text-transform: uppercase;
  position: absolute;
  -webkit-transform: rotate(40deg);
  transform: rotate(40deg);
}

.button--start:before {
  bottom: -1.3em;
  content: 'Start';
  left: -1.5em;
}

.button--select:before {
  bottom: -1.5em;
  content: 'Select';
  left: -1.4em;
}

.start-select__interior {
  background: -webkit-gradient(
    linear,
    right top,
    left bottom,
    from(rgba(255, 255, 255, 0.3)),
    to(#191919)
  );
  background: linear-gradient(
    to bottom left,
    rgba(255, 255, 255, 0.3),
    #191919
  );
  border: 1px solid #252525;
  border-radius: 15px;
  -webkit-box-shadow: -2px 2px 1px #252525;
  box-shadow: -2px 2px 1px #252525;
  height: 1em;
  left: 0.3em;
  position: relative;
  top: 0.3em;
  width: 3em;
}

.start-select__interior:hover {
  cursor: pointer;
}

.start-select__interior:active {
  -webkit-box-shadow: none;
  box-shadow: none;
}

/* RIGHT SIDE */
.right-pad {
  right: -9rem;
}

.right-controls {
  background: #656565;
  border-radius: 50%;
  border: 2px solid rgba(54, 58, 58, 0.3);
  height: 14rem;
  left: 1.7rem;
  position: absolute;
  top: 1.5rem;
  width: 14rem;
  z-index: 20;
}

.right-controls__circle {
  background: #a8aaaa;
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
  position: absolute;
  right: 1.2rem;
  bottom: 2.1rem;
}

.button-group {
  background: #a8aaaa;
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 50px;
  height: 3.4rem;
  position: absolute;
  width: 7.8rem;
  -webkit-transform: rotate(-40deg);
  transform: rotate(-40deg);
}

.button-group--top {
  left: 1.6rem;
  top: 4rem;
}

.button-group--bottom {
  left: 5.1rem;
  top: 7rem;
}

.button-group--top:after,
.button-group--top:before,
.button-group--bottom:after,
.button-group--bottom:before {
  color: #a8aaaa;
  font-family: 'Lato', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  position: absolute;
  -webkit-transform: rotate(40deg);
  transform: rotate(40deg);
}

.button-group--top:after {
  content: 'Y';
  left: -1.5rem;
  top: 1rem;
}

.button-group--top:before {
  content: 'X';
  right: -1.5rem;
  top: 1rem;
}

.button-group--bottom:after {
  content: 'B';
  left: -2rem;
  top: 1rem;
}

.button-group--bottom:before {
  content: 'A';
  right: -1.5rem;
  top: 1rem;
}

.button-group__button {
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  -webkit-box-shadow: -2px 2px rgba(0, 0, 0, 0.7),
    inset -2px 2px rgba(255, 255, 255, 0.3);
  box-shadow: -2px 2px rgba(0, 0, 0, 0.7),
    inset -2px 2px rgba(255, 255, 255, 0.3);
  height: 2.6em;
  position: absolute;
  width: 2.6em;
}

.button-group__button:hover {
  cursor: pointer;
}

.button-group__button:active {
  -webkit-box-shadow: 0 0 rgba(0, 0, 0, 0.7),
    inset -2px 2px rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 rgba(0, 0, 0, 0.7), inset -2px 2px rgba(255, 255, 255, 0.3);
}

.button--x {
  background: #0749b4;
  right: 0.4em;
  top: 0.3em;
}

.button--y {
  background: #008d45;
  left: 0.4em;
  top: 0.3em;
}

.button--a {
  background: #eb1a1d;
  right: 0.4em;
  top: 0.3em;
}

.button--b {
  background: #fece15;
  left: 0.4em;
  top: 0.3em;
}
</style>
