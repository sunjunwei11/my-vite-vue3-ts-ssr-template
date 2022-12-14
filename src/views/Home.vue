<template>
  <div>This is Home Page</div>
  <span>Count from Pinia:</span>
  <button @click="increaseCount">{{ count }}</button>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCounterStore } from "../pinia";
const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);
const { increaseCount } = counterStore;
</script>
