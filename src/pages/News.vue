<template>
  <div class="news">
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <!-- 第一种写法 -->
        <RouterLink
          :to="`/news/detail/${news.id}/${news.title}/${news.content}`"
        >
          {{ news.title }}</RouterLink
        >
        <!-- 第二种写法 -->
        <!-- <RouterLink
          :to="{
            path: '/news/detail',
            query: {
              id: news.id,
              title: news.title,
              content: news.content,
            },
          }"
          >{{ news.title }}</RouterLink
        > -->
      </li>
    </ul>
    <div class="newsContent">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
import { reactive } from "vue";
const newsList = reactive([
  { id: "sfghj01", title: "很好的抗癌食物", content: "西兰花" },
  { id: "sfghj02", title: "如何一夜暴富", content: "大胆" },
  { id: "sfghj03", title: "万万没想到", content: "明天是周一" },
  { id: "sfghj04", title: "好消息", content: "快放假了" },
]);
</script>

<style scoped>
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background: #fff7e6;
  height: 100%;
}

.news ul {
  margin-top: 30px;
  padding-left: 10px;
}

.news li a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64964e;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}
.news li::marker {
  color: #64964e;
}
</style>
