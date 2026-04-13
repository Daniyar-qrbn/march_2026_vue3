<template>
  <div class="app">
    <Header></Header>
    <!-- 导航区 -->
    <div class="navigation">
      <RouterLink to="/home" active-class="active">首页</RouterLink>
      <RouterLink :to="{ path: '/news' }" active-class="active"
        >新闻</RouterLink
      >
      <RouterLink :to="{ name: 'heqqide' }" active-class="active"
        >关于</RouterLink
      >
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup name="App">
import { RouterView, RouterLink } from "vue-router";
import Header from "@/components/Header.vue";
</script>

<style scoped>
.app {
  width: 800px;
  margin: 50px auto;
  padding: 30px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  font-family: "Microsoft YaHei", Arial, sans-serif;
}

.navigation {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 25px;
  padding: 12px;
  background: #f5f7fa;
  border-radius: 10px;
}

.navigation a {
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  color: #555;
  padding: 8px 18px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.navigation a:hover {
  background: #409eff;
  color: white;
}

.main-content {
  min-height: 200px;
  padding: 20px;
  background: #fafafa;
  border: 1px solid #e4e7ed;
  border-radius: 10px;
  font-size: 16px;
  line-height: 1.8;
  color: #444;
}
.active {
  background: #89add1;
  color: white;
}
</style>
