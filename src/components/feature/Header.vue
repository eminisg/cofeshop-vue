<template>
  <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <img src="src/assets/images/logo.png" alt="">
      </a>

      <ul class="nav col-12 col-md-4 mb-2 justify-content-between mb-md-0">
        <li><router-link to="/home" :class="getActiveNavLink('home')">Home</router-link></li>
        <li><router-link to="/services" :class="getActiveNavLink('services')">Services</router-link></li>
        <li><router-link to="/project" :class="getActiveNavLink('project')">Project</router-link></li>
        <li><router-link to="/about" :class="getActiveNavLink('about')">About</router-link></li>
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" class="btn__custom-primary btn__custom-primary__small me-2">Sign In</button>
        <button type="button" class="btn__custom-primary btn__custom-primary__small">Sign-up</button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    getActiveNavLink(name) {
      let classString = ""

      if (this.$route.name === name) {
        classString += "active"
      }
      return classString;
    }
  }
}
</script>

<style scoped>
a {
  color: #ffffff;
}

.active {
  color: #F54E51;
}

.active:after {
  content: ' ';
  display: block;
  border-bottom: 1px solid #F54E51;
}
</style>
