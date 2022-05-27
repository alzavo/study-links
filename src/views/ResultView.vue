<template>
    <div class="container">
        <MessageComponent text="Ei leitud midagi!" v-if="!store.isKeyWordsChosen" />
        <RecordsListComponent v-if="store.isKeyWordsChosen" />
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
        const records = store.getRecordsGropedByKeyWords();
        const controls = { text: "TAGASI", viewName: "home" };
        return { records, controls, store };
    },
})
</script>