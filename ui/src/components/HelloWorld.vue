<script lang="ts">
import { defineComponent, PropType } from "vue";

interface Props {
  msg: string;
}

export default defineComponent({
  name: "Counter",
  props: {
    msg: {
      type: String as PropType<Props["msg"]>,
      default: "",
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>
