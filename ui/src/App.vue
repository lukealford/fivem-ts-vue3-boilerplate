<script lang="ts">
import { defineComponent } from "vue";
import { useApp } from "./stores/useApp";

import HelloWorld from "./components/HelloWorld.vue";
import Counter from "./components/Counter.vue";
import Close from "./components/CloseNUI.vue";

export default defineComponent({
  name: "App",

  components: {
    HelloWorld,
    Counter,
    Close,
  },

  setup() {
    const store = useApp();

    window.addEventListener("message", (event) => {
      const action = event.data.action;

      if (action === "toggleNui") {
        const key = event.data.key;
        const params = event.data.params;
        if (key && params) store.$patch({ visible: params });
      }
    });

    return {
      store,
    };
  },
});
</script>

<template>
  <div v-if="store.visible" class="container mx-auto text-center pt-4">
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
