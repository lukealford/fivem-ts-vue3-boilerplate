<script lang="ts">
import { defineComponent } from "vue";
import { useCounter } from "../use/useCounter";

export default defineComponent({
  name: "Counter",
  setup() {
    const store = useCounter();

    return {
      store,
    };
  },
});
</script>

<template>
  <div class="flex w-full">
    <button class="btn btn-block" type="button" @click="store.counter++">
      count is
      <div class="badge">{{ store.counter }}</div>
    </button>
  </div>
</template>
