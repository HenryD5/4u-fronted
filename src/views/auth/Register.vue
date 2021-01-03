<template>
  <div>
    <LayoutAuth>
     <FormRegister />
    </LayoutAuth>
  </div>
</template>

<script>
import LayoutAuth from '../../layouts/Auth'
import FormRegister from '../../components/auth/FormRegister'
export default {
  name: 'Login',
  components: {
    LayoutAuth,
    FormRegister
  }
}
</script>

<style>

</style>
