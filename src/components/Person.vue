<template>
    <div class="person">
        <h2>姓名:{{name}}</h2>
        <h2>年龄:{{age}}</h2>
        <h2>电话:{{tel}}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="show">查看</button>
    </div>
</template>

<script>
    export default {
        name: 'Person',
        setup() {
            // 数据
            let name = '达尼亚尔' //此时的name不是响应式的
            let age = 23 //此时的age不是响应式的
            let tel = '176'
            // 方法
            function changeName() {
                name = '达尼亚尔·库尔班江'
            }
            function changeAge() {
                age++
            }
            function show() {
                console.log("as")
                alert(tel)
            }
            return { name, age, tel, changeAge, changeName, show }
        }
    }
</script>

<style>
    .person {
        background-color: #39b3e7;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }

    button {
        margin: 0 5px;
    }
</style>