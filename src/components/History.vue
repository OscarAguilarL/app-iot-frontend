<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { http } from '../modules/http';
import { statusIcons } from '../mappers/icon-mapper';

type GetLastRecordsResponse = {
  reg_date: string;
  status: string;
};

type Records = {
  date: string;
  time: string;
  command: string;
  icon: string | Array<String>;
};

const statusMappings: { [key: string]: string } = {
  S: 'Detener',
  ATM: 'Automático',
  '180DegL': 'Giro Izquierda 180°',
  '180DegR': 'Giro Derecha 180°',
  F: 'Adelante',
  B: 'Atrás',
  L: 'Left',
  R: 'Right',
};

const loading = ref<boolean>(false);
const records = ref<Array<Records>>([]);

const setRecords = (
  apiRecords: Array<GetLastRecordsResponse>
): Array<Records> => {
  return apiRecords.map((item) => {
    const command = statusMappings[item.status] || item.status;
    const icon = statusIcons[item.status] || item.status;
    const dateTime = new Date(item.reg_date);

    return {
      date: dateTime.toLocaleDateString(),
      time: dateTime.toLocaleTimeString(),
      command,
      icon,
    };
  });
};

onMounted(async () => {
  try {
    loading.value = true;
    const { data } = await http.get<Array<GetLastRecordsResponse>>(
      '/get-last-records.php'
    );
    records.value = setRecords(data);
    console.log(records.value);
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="container mt-1 p-5">
    <h1 class="text-center mb-5">
      Centro de Monitoreo <br />
      Remoto ESP32
    </h1>
    <template v-if="!loading">
      <div class="card mt-3" v-for="record in records" :key="record.command">
        <div class="card-body">
          <div class="container">
            <div class="row justify-content-start align-items-center">
              <div class="col-2 text-center bg">
                <FontAwesomeIcon :icon="record.icon" size="5x" />
              </div>
              <div class="col">
                <p><strong>Última acción:</strong> {{ record.command }}</p>
                <p><strong>Fecha:</strong> {{ record.date }}</p>
                <p><strong>Hora:</strong> {{ record.time }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
