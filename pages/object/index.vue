<template>
  <div>{{ data }}</div>
</template>

<script setup>
import { useAsyncData } from "nuxt/app";
import axios from "axios";

const { data } = await useAsyncData("filters", async () => {
  const response = await axios.get(
    "https://energyflow.b.goit.study/api/filters"
  );
  return response.data;
});
</script>

<style lang="scss" scoped></style>
