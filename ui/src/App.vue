<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Counter from "./components/Counter.vue";

export default defineComponent({
  name: "App",

  components: {
    HelloWorld,
    Counter,
  },

  setup() {
    return {};
  },
});
</script>

<template>
  <div class="container mx-auto text-center pt-4">
    <div class="flex w-full">
      <div
        class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center"
      >
        <h1 class="text-3xl font-bold underline">FiveM Boilerplate!</h1>
      </div>
      <div class="divider divider-horizontal"></div>
      <div
        class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center"
      >
        <HelloWorld msg="Vue3, tailwindcss, daisyui, pinia, typescript" />
      </div>
    </div>
    <Counter class="pt-4" />
  </div>
</template>
