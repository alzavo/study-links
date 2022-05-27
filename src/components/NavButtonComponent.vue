<template>
    <button class="button" @click.prevent="$router.push({ name: parameters.viewName })">
        {{ parameters.text }}
    </button>
</template>

<script lang="ts">
export default {
    props: {
        parameters: Object,
    },
};
</script>