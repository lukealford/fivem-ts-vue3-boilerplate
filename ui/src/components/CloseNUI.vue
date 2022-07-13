<script lang="ts">
import { defineComponent } from "vue";
import fetchNui from "../utils/cfx";

export default defineComponent({
  name: "CloseNUI",
  setup() {
    const close = () => {
      fetchNui("closeNui");
    };
    return {
      close,
    };
  },
});
</script>

<template>
  <div class="flex w-full">
    <button class="btn btn-square" @click.prevent="close()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
</template>
