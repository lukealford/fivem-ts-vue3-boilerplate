<script setup lang="ts">
import { useCounter } from "../use/useCounter";

const store = useCounter();

defineProps<{ msg: string }>();
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <button class="btn" type="button" @click="store.counter++">
      count is
      <div class="badge">{{ store.counter }}</div>
    </button>
  </div>
</template>
