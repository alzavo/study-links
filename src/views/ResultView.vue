<template>
    <div class="container">
        <MessageComponent text="Ei leitud midagi!" v-if="records.length === 0" />
        <RecordsListComponent v-if="records.length > 0" />
        <div class="controls">
            <NavButtonComponent :parameters="controls" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavButtonComponent from "@/components/NavButtonComponent.vue";
import RecordsListComponent from "@/components/RecordsListComponent.vue";
import MessageComponent from "@/components/MessageComponent.vue";
import { useRecordsStore } from "@/stores/records";

export default defineComponent({
    components: {
        NavButtonComponent,
        RecordsListComponent,
        MessageComponent,
    },

    setup() {
        const store = useRecordsStore();
        const records = store.getRecordsByKeyWords();
        const controls = { text: "TAGASI", viewName: "home" };
        return { records, controls, store };
    },
})
</script>