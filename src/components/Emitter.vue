<template>
    <div>
    </div>
  </template>
  
  <script>
    export default {
      // eslint-disable-next-line vue/multi-word-component-names
      name: "Emitter",
  
      methods: { 
        emitEvent() {
          this.$emit("myEvent", "name", "password")
        }
      }
    }
  </script>
  
  <style scoped>
  </style>