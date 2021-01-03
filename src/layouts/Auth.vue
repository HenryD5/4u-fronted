<template>
  <div>
    <div class="auth">
      <img
        class="auth__img"
        src="https://huykhong.com/codepen/wallpaper.jpg"
        alt=""
      />
      <div class="card-auth">
        <slot />
      </div>
      <div class="logo-app">
        <img
          class="login-logo"
          src="https://krisantuswanandi.github.io/alpha/003/logo-dark.svg"
          alt="Alpha Logo"
        />
        - Name
      </div>
      <!-- <div class="colaborador">
        <br />
        Stock - HenryD
        <br />
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutAuth'
}
</script>

<style scoped lang="scss">
.login-logo {
  width: 60px;
}

.auth {
  &__img {
    background-size: cover;
    min-height: 100%;
    min-width: 1024px !important;

    /* Set up proportionate scaling */
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
  }
}
.card-auth {
  background: white;
  position: relative;
  width: 100%;
  padding: 20px 25px;
  z-index: 1;
  @media (max-width: 768px) {
    height: 100%;
    overflow: hidden !important;
  }
  @media (min-width: 768px) {
    position: absolute;
    padding: 30px 60px;
    border-radius: 10px;
    width: 35%;
    top: 9%;
    right: 12%;
  }
}
.logo-app {
  font-size: 20px;
  color: white;
  font-weight: bold;
  position: absolute;
  bottom: 25%;
  left: 10%;
}
.colaborador {
  font-size: 15px;
  color: white;
  font-weight: bold;
  position: absolute;
  bottom: -10% !important;
}
</style>
