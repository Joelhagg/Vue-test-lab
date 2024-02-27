<template>
    <div class="hello">
      {{ $t("helloWorld") }}
    </div>
  </template>
  
  <script>
    export default {
      // eslint-disable-next-line vue/multi-word-component-names
      name: "Bilingual",

        "en": {
            helloWorld: "Hello world!"
        },
        "ja": {
            helloWorld: "こんにちは、世界！"
        }
    }
  </script>