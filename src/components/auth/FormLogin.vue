<template>
  <div class="login">
    <div class="login-header">
      <h1 class="login-title">Inicio de sesión</h1>
      <div class="login-subtitle">
        ¿Eres un nuevo usuario?
        <router-link to="/registro">Crear una cuenta</router-link>
      </div>
    </div>
    <div class="login-body">
      <form class="login-form" id="login-form" method="post">
        <div class="form-group">
          <label class="form-label" for="login-email">Dirección de correo electrónico</label>
          <input
            class="form-control"
            type="email"
            id="login-email"
            placeholder="example@email.com"
          />
        </div>
        <div class="form-group">
          <label class="form-label" for="login-password">Contraseña</label>
          <input
            class="form-control"
            type="password"
            id="login-password"
            placeholder="*******"
          />
        </div>
        <div class="form-group link-forgot-container">
          <a class="link link-forgot" href="#">¿Olvidaste tu contraseña?</a>
        </div>
        <div class="form-group">
          <button class="login-button">Login</button>
        </div>
      </form>
      <!-- <div class="mb-4">
        <hr data-content="O" class="hr-text" />
      </div> -->
     <!--  <div class="social">
        <div class="form-group">
          <a class="login-social google">Continuar con Google</a>
        </div>
        <div class="form-group">
          <a class="login-social facebook">Continuar con Facebook</a>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
hr.hr-text {
  position: relative;
  border: none;
  height: 1px;
  background: #999;
}

hr.hr-text::before {
  content: attr(data-content);
  display: inline-block;
  background: #fff;
  font-weight: bold;
  font-size: 0.85rem;
  color: #999;
  border-radius: 30rem;
  padding: 0.1rem 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
input:focus,
input.form-control:focus {
  outline: none !important;
  outline-width: 0 !important;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
}
.login-title {
  margin-top: 30px;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.3;
}

.login-subtitle {
  margin-top: 10px;
  color: #9d9e9d;
}

.login-form {
  margin-top: 50px;
}

.login-button {
  display: block;
  width: 100%;
  padding: 15px 0;
  color: #fff;
  background: #7251d3;
  border: none;
  border-radius: 25px;
  font-size: 14px;
  cursor: pointer;
}
.social {
  margin-top: 10px;
}
.login-social {
  text-align: center;
  border-radius: 50px;
  display: block;
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  padding: 15px 0;
  text-decoration: none;
}
.google {
  border: 1px solid grey;
  color: black;
}
.facebook {
  color: white;
  border: 1px solid #3b5998;
  background: #3b5998;
}
.login-footer {
  margin-top: 40px;
  color: #9d9e9d;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-size: 12px;
  transition: color 0.2s;
}

.form-control {
  display: block;
  width: 100%;
  padding: 10px 0;
  background: transparent;
  border: none;
  border-radius: 0px;
  border-bottom: 2px solid #eee;
  font-size: 14px;
  outline: none;
  transition: border-bottom-color 0.2s;
}

.form-group.error .form-label {
  color: #dc3030;
}

.form-group.error .form-control {
  border-bottom-color: #dc3030;
}

.form-control:focus {
  border-bottom-color: #7251d3;
}

.link {
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.link-forgot-container {
  font-size: 12px;
  text-align: right;
}

.link-forgot {
  color: #9d9e9d;
}

.link-register {
  color: #7251d3;
}
</style>
