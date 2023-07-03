import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./assets/css/main.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/feature/Header.vue'

const app = createApp(App)

app.use(router)
app.component('Header', Header);

app.mount('#app');
