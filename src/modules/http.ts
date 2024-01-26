import axios from 'axios';

// https://iot.oscaragl.com/get-gearmotor-status.php

export const http = axios.create({
  baseURL: 'https://iot.oscaragl.com',
});
