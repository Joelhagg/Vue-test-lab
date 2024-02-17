<template>
    <div>
      {{ greeting }}
    </div>
  </template>
  
  <script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Greeting",
  
    data() {
      return {
        greeting: "Vue and TDD"
      }
      
    }

    
  }
  </script>