<template>
  <div>
    <LayoutAuth>
     <FormLogin />
    </LayoutAuth>
  </div>
</template>

<script>
import LayoutAuth from '../../layouts/Auth'
import FormLogin from '../../components/auth/FormLogin'
export default {
  name: 'Login',
  components: {
    LayoutAuth,
    FormLogin
  }
}
</script>

<style>

</style>
