<template>
    <div class="record-list">
        <RecordRowComponent v-for="item in records" :key="item" :record="item" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RecordRowComponent from "@/components/RecordRowComponent.vue";
import { useRecordsStore } from "@/stores/records";

export default defineComponent({
    components: {
        RecordRowComponent,
    },

    setup() {
        const store = useRecordsStore();
        const records = store.getRecordsByKeyWords();
        return { records };
    }
})
</script>