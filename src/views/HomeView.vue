<template>
    <div class="container">
        <LogoComponent />
        <form>
            <SelectComponent
                enumName="KLASS"
                :enumKeys="this.$data.gradeEnumValues"
            />
            <SelectComponent
                enumName="ÕPPEAINE"
                :enumKeys="this.$data.subjectEnumValues"
            />
            <SelectComponent
                enumName="KUU"
                :enumKeys="this.$data.monthEnumValues"
            />
            <ControlsComponent title="OTSI" />
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

export default {
    components: {
        LogoComponent,
        SelectComponent,
        ControlsComponent,
    },

    data() {
        return {
            gradeEnumValues: [] as string[],
            subjectEnumValues: [] as string[],
            monthEnumValues: [] as string[],
        };
    },

    created() {
        // @ts-ignore
        this.extractValuesFromEnum(Grade, this.gradeEnumValues);
        // @ts-ignore
        this.extractValuesFromEnum(Subject, this.subjectEnumValues);
        // @ts-ignore
        this.extractValuesFromEnum(Month, this.monthEnumValues);
    },

    methods: {
        extractValuesFromEnum(valuesHolder: any, targetCollection: string[]) {
            for (const item of Object.values(valuesHolder)) {
                targetCollection.push(item as string);
            }
        },
    },
};
</script>
