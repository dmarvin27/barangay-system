<template>
  <div>
    <h1>Hello Bitches</h1>
    <button class="btn btn-primary mb-2" @click="goToConstituent()">Proceed Mother Fucker</button>
  </div>
</template>

<script>
export default {

  methods: {
    goToConstituent() {
      this.$router.push('/Constituent')
    }
  }
}
</script>

