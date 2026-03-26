<template>
    <div class="person">
        姓:<input type="text" v-model="firstName"> <br>
        名:<input type="text" v-model="lastName"> <br>
        <!-- 全名:<span>{{firstName.slice(0,1).toUpperCase()+firstName.slice(1,)}}{{lastName}}</span> <br> -->
        <!-- //用计算属性(compute): -->
        <span>{{fullName}}</span><br>
        <button @click="changeFullName">更改</button>
    </div>
</template>

<script setup name="hihi" lang="ts">
    import { ref, computed } from "vue"
    let firstName = ref("zhang")
    let lastName = ref("san")
    // 这么定义的fullName是计算属性,且是只读的
    // let fullName = computed(() => {
    // return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + "-" + lastName.value
    // })
    let fullName = computed({
        get() {
            return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + "-" + lastName.value
        },
        set(v) {
            let [a, b] = v.split("-")
            firstName.value = a
            lastName.value = b
        }
    })
    function changeFullName() {
        fullName.value = "li-si"
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

    li {
        font-size: 20px;
    }
</style>