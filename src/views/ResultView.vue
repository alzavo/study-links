<template>
    <div class="container">
        <MessageComponent
            v-if="getFilteredRecords().length === 0"
            text="Ei leitud midagi!"
        />
        <div v-if="getFilteredRecords().length !== 0" class="record-list">
            <RecordRowComponent
                v-for="record in getFilteredRecords()"
                :key="record"
                :record="record"
            />
        </div>
        <ControlsComponent
            title="TAGASI"
            functionName="goToHomeView"
            @goToHomeView="$router.push({ name: 'home' })"
        />
    </div>
</template>

<script lang="ts">
import ControlsComponent from "@/components/ControlsComponent.vue";
import MessageComponent from "@/components/MessageComponent.vue";
import RecordRowComponent from "@/components/RecordRowComponent.vue";
import { Record } from "@/records/record";
import { ALL_RECORDS } from "@/records/allRecords";
import { KeyWord } from "@/records/constants/keyWords";
import router from "@/router";

export default {
    components: {
        ControlsComponent,
        MessageComponent,
        RecordRowComponent,
    },

    data() {
        return {
            chosenKeyWords: [] as string[],
        };
    },

    created() {
        // @ts-ignore
        const keyWords = this.$route.params.recordsKeyWords;
        if (keyWords === undefined) {
            router.push({ name: "home" });
        } else {
            // @ts-ignore
            this.chosenKeyWords = keyWords.filter((word: string) => {
                if (!(Object.values(KeyWord) as string[]).includes(word)) {
                    return true;
                } else {
                    return false;
                }
            });
        }
    },

    methods: {
        getFilteredRecords() {
            // @ts-ignore
            if (this.chosenKeyWords.length === 0) {
                return [];
            }

            return ALL_RECORDS.filter((record: Record) => {
                // @ts-ignore
                for (const word of this.chosenKeyWords) {
                    if (
                        !this.composeKeyWordsCollection(record).includes(word)
                    ) {
                        return false;
                    }
                }

                return true;
            });
        },

        composeKeyWordsCollection(record: Record): string[] {
            return [record.grade, record.subject, record.month];
        },
    },
};
</script>
