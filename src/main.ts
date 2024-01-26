import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// --- Font Awesome ---
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import Router from './router';

library.add(fas, far);

createApp(App)
  .component('fa', FontAwesomeIcon)
  .use(Router)
  .mount('#app')
