<template>
    <button class="record" @click.prevent="openLink(record.link)">
        {{ record.topic }}
    </button>
</template>
<script lang="ts">
export default {
    props: {
        record: Object,
    },

    methods: {
        openLink(link: string) {
            window.open(link);
        }
    }
};
</script>
