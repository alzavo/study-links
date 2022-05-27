<template>
    <select class="select" :id="parameters.name">
        <option value="">{{ parameters.name }}</option>
        <option v-for="item in parameters.values" :key="item" :value="item">
            {{ item }}
        </option>
    </select>
</template>

<script lang="ts">
export default {
    props: {
        parameters: Object,
    },
};
</script>