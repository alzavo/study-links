<template>
    <select class="select" :id="enumName">
        <option value="">{{ enumName }}</option>
        <option v-for="item in enumKeys" :key="item" :value="item">
            {{ item }}
        </option>
    </select>
</template>

<script lang="ts">
export default {
    props: {
        enumName: String,
        enumKeys: Object,
    },
};
</script>
