<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { http } from '../modules/http';
import { ref } from 'vue';

const loading = ref<boolean>(false);

const sendDirectionCommand = (command: string) => {
  try {
    loading.value = true;
    http.get<{ value: string }>('/set-gearmotor-status.php', {
      params: { status: command },
    });
  } catch (err) {
    console.log(err);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <header class="container mx-auto my-5">
    <h1 class="text-center fs-1">
      Centro de Control y Comando <br />
      Remoto ESP32
    </h1>
  </header>

  <section class="container d-flex mt-5">
    <!-- BOTONES DE DIRECCIÓN -->
    <div class="container mt-5 crosshead">
      <button class="btn btn-primary up" @click="sendDirectionCommand('F')">
        <FontAwesomeIcon icon="arrow-up" />
      </button>
      <button class="btn btn-primary down" @click="sendDirectionCommand('B')">
        <FontAwesomeIcon icon="arrow-down" />
      </button>
      <button class="btn btn-primary center" @click="sendDirectionCommand('S')">
        <FontAwesomeIcon icon="ban" />
      </button>
      <button class="btn btn-primary left" @click="sendDirectionCommand('L')">
        <FontAwesomeIcon icon="arrow-left" />
      </button>
      <button class="btn btn-primary right" @click="sendDirectionCommand('R')">
        <FontAwesomeIcon icon="arrow-right" />
      </button>
    </div>

    <!-- BOTONES DIRECCIONALES -->
    <div class="container mt-5 action-buttons">
      <button
        class="btn btn-primary up-left"
        @click="sendDirectionCommand('FL')"
      >
        <font-awesome-icon :icon="['fas', 'reply']" />
      </button>
      <button
        class="btn btn-primary up-right"
        @click="sendDirectionCommand('FR')"
      >
        <font-awesome-icon class="transform-right" :icon="['fas', 'reply']" />
      </button>
      <button
        class="btn btn-primary down-left"
        @click="sendDirectionCommand('BL')"
      >
        <font-awesome-icon
          class="transform-down-left"
          :icon="['fas', 'reply']"
        />
      </button>
      <button
        class="btn btn-primary down-right"
        @click="sendDirectionCommand('BR')"
      >
        <font-awesome-icon
          class="transform-down-right"
          :icon="['fas', 'reply']"
        />
      </button>
    </div>
  </section>
</template>

<style lang="css" scoped>
.h-50 {
  height: 200px !important;
}

.crosshead {
  display: grid;
  grid-template-columns: repeat(3, 50px);
  grid-template-rows: repeat(3, 50px);
  gap: 10px;
  justify-content: center;
  align-content: center;
}

.up {
  grid-column: 2;
  grid-row: 1;
}
.down {
  grid-column: 2;
  grid-row: 3;
}
.left {
  grid-column: 1;
  grid-row: 2;
}
.right {
  grid-column: 3;
  grid-row: 2;
}
.center {
  grid-column: 2;
  grid-row: 2;
}

.transform-right {
  transform: scaleX(-1);
}
.transform-down-left {
  transform: scaleY(-1);
}
.transform-down-right {
  /* transform: scaleY(1); */
  transform: rotate(180deg);
}

.action-buttons {
  display: grid;
  grid-template-columns: repeat(2, 50px);
  grid-template-rows: repeat(2, 50px);
  gap: 35px;
  justify-content: center;
  align-content: center;
}
.up-left {
  grid-column: 1;
  grid-row: 1;
}
.up-right {
  grid-column: 2;
  grid-row: 1;
}
.down-left {
  grid-column: 1;
  grid-row: 2;
}
.down-right {
  grid-column: 2;
  grid-row: 2;
}
</style>
