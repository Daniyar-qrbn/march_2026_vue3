<template>
  <ul class="new-list">
    <li>编号:{{ route.params.id }}</li>
    <li>标题:{{ route.params.title }}</li>
    <li>内容:{{ route.params.content }}</li>
  </ul>
</template>

<script setup lang="ts" name="About">
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style scoped>
.new-list {
  list-style: none;
  padding-left: 30px;
}
.new-list li {
  line-height: 20px;
}
</style>
