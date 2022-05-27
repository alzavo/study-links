<template>
    <form class="form">
        <SelectComponent :parameters="grades" />
        <SelectComponent :parameters="subjects" />
        <SelectComponent :parameters="months" />
        <div class="controls">
            <NavButtonComponent :parameters="controls" @click.prevent="handleClick" />
        </div>
    </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SelectComponent from "@/components/SelectComponent.vue";
import NavButtonComponent from "@/components/NavButtonComponent.vue";
import { useSelectOptionsStore } from "@/stores/selectOptions";
import { storeToRefs } from "pinia";
import { KeyWord } from "@/keyWords/constants/keyWords";
import { useRecordsStore } from "@/stores/records";
import router from "@/router";

export default defineComponent({
    components: {
        SelectComponent,
        NavButtonComponent,
    },

    setup() {
        const recordsStore = useRecordsStore();

        const selectOptionsStore = useSelectOptionsStore();
        const { grades, subjects, months } = storeToRefs(selectOptionsStore);

        const controls = { text: "OTSI", viewName: "result" };

        return { grades, subjects, months, controls, recordsStore };
    },

    methods: {
        handleClick() {
            this.setRecordKeyWords();
            this.goToPage("result");
        },

        setRecordKeyWords(): void {
            const keyWords = this.getRecordKeyWords();
            this.recordsStore.setKeyWords(keyWords);
        },

        getRecordKeyWords(): string[] {
            let keyWords: string[] = [];
            for (const id of Object.values(KeyWord)) {
                const htmlSelectElement: any = document.getElementById(id);
                const keyWord = htmlSelectElement.options[htmlSelectElement.selectedIndex].text;
                keyWords.push(keyWord);
            }
            return keyWords;
        },

        goToPage(pageName: string) {
            router.push({ name: pageName });
        }
    }
})
</script>