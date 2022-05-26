<template>
    <button class="record" @click="openLink()">
        {{ record.topic }}
    </button>
</template>
<script lang="ts">
export default {
    props: {
        record: Object,
    },

    methods: {
        openLink() {
            // @ts-ignore
            window.open(this.record.link);
        },
    },
};
</script>
