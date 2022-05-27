<template>
    <div class="message">{{ text }}</div>
</template>

<script lang="ts">
export default {
    props: {
        text: String,
    },
};
</script>