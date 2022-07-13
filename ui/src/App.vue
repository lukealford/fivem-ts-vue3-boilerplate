<script setup lang="ts">
  import { ref } from "vue";
  import HelloWorld from "./components/HelloWorld.vue";
  import Counter from "./components/Counter.vue";
  import Close from "./components/CloseNUI.vue";

  const appVisible = ref(false) 
  window.addEventListener("message", (event) => {
    const action = event.data.action;
    const key = event.data.key;
    const params = event.data.params;

    console.log(`action: ${action}, key: ${key}, params: ${params}`)

    if (action === "toggleNui") {
      appVisible.value = params;
    }

  });
</script>

<template>
  <div v-if="appVisible" class="container mx-auto text-center pt-4">
    <div class="flex w-full pb-4">
      <Close class="justify-end" />
    </div>
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
