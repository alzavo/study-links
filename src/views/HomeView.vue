<template>
    <div class="container">
        <LogoComponent />
        <form>
            <SelectComponent enumName="KLASS" :enumKeys="grades" />
            <SelectComponent enumName="ÕPPEAINE" :enumKeys="subjects" />
            <SelectComponent enumName="KUU" :enumKeys="months" />
            <ControlsComponent
                title="OTSI"
                functionName="goToResultPage"
                @goToResultPage="goToResultPage()"
            />
        </form>
    </div>
</template>

<script lang="ts">
import LogoComponent from "@/components/home/LogoComponent.vue";
import SelectComponent from "@/components/home/SelectComponent.vue";
import ControlsComponent from "@/components/home/ControlsComponent.vue";
import { Grade } from "@/records/constants/grades";
import { Subject } from "@/records/constants/subjects";
import { Month } from "@/records/constants/months";
import { KeyWord } from "@/records/constants/keyWords";

export default {
    components: {
        LogoComponent,
        SelectComponent,
        ControlsComponent,
    },

    data() {
        return {
            grades: [] as string[],
            subjects: [] as string[],
            months: [] as string[],
        };
    },

    created() {
        // @ts-ignore
        this.extractValuesFromEnum(Grade, this.grades);
        // @ts-ignore
        this.extractValuesFromEnum(Subject, this.subjects);
        // @ts-ignore
        this.extractValuesFromEnum(Month, this.months);
    },

    methods: {
        extractValuesFromEnum(valuesHolder: any, targetCollection: string[]) {
            for (const item of Object.values(valuesHolder)) {
                targetCollection.push(item as string);
            }
        },

        goToResultPage(): void {
            // @ts-ignore
            this.$router.push({
                // @ts-ignore
                name: "result",
                params: { recordsKeyWords: this.getRecordsKeyWords() },
            });
        },

        getRecordsKeyWords(): string[] {
            let keyWords: string[] = [];
            for (const id of Object.values(KeyWord)) {
                const htmlSelectElement = document.getElementById(id);
                const keyWord =
                    // @ts-ignore
                    htmlSelectElement.options[htmlSelectElement.selectedIndex]
                        .text;
                keyWords.push(keyWord);
            }
            return keyWords;
        },
    },
};
</script>
