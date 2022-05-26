<template>
    <div class="controls">
        <button class="button" @click.prevent="$emit(functionName)">
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
