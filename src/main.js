import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/feature/Header.vue'
const app = createApp(App)

app.use(router)

app.mount('#app')
app.component('Header', Header)
