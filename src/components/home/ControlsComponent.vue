<template>
    <div class="controls">
        <button class="btn" @click.prevent="handleClick()">{{ title }}</button>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        title: String,
    },

    methods: {
        handleClick() {
            console.log("contionue");
        },
    },
};
</script>
