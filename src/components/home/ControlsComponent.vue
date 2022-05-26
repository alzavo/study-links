<template>
    <div class="controls">
        <button class="btn" @click.prevent="$emit(functionName)">
            {{ title }}
        </button>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        title: String,
        functionName: String,
    },
};
</script>
