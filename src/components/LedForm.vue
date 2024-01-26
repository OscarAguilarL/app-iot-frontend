<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { http } from '../modules/http';

const ledStatus = ref<Boolean>(false);
const loading = ref<Boolean>(false);

const getInitialLedStatus = async () => {
  try {
    loading.value = true;
    const response = await http.get<{ value: string }>(
      '/get-gearmotor-status.php'
    );
    const responseValue = response.data.value === '1';
    ledStatus.value = responseValue;
    console.log({ responseValue });
  } catch (err) {
    console.log(err);
  } finally {
    loading.value = false;
  }
};

const handleChecboxChange = async () => {
  try {
    loading.value = true;
    await http.get('/set-gearmotor-status.php', {
      params: { status: ledStatus.value ? 1 : 0 },
    });
    console.log({ sentValue: ledStatus.value });
  } catch (err) {
    console.log(err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => getInitialLedStatus());
</script>

<template>
  <div class="container px-6 mt-5">
    <h1 class="">{{ ledStatus ? 'Apagar' : 'Encender' }} LED</h1>

    <div class="container" v-if="loading">
      <h3>Cargando...</h3>
    </div>

    <div class="form-group" v-else>
      <div class="form-check">
        <input
          v-model="ledStatus"
          @change="handleChecboxChange"
          type="checkbox"
          class="form-check-input"
          id="checkboxExample"
        />
        <label class="form-check-label" for="checkboxExample">
          {{ ledStatus ? 'Apagar' : 'Encender' }} LED
        </label>
      </div>
    </div>
  </div>
</template>
