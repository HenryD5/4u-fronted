<template>
  <div class="desktop container mt-5">
    <div class="row">
      <div class="col-6 fs-12">
        ©{{ year }}
        <a class="text-dark text-decoration-none" href="#"
          >4u.com</a
        >
        | Todos los derechos reservados
      </div>
      <div class="col-6 text-right fs-12">
        <router-link
          to="/terminos-y-condiciones"
          class="text-dark text-decoration-none"
          >Términos y condiciones
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>
