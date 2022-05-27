import { KeyWord } from '@/keyWords/constants/keyWords';
import { ALL_RECORDS } from '@/records/allRecords'
import type { Record } from '@/records/record';
import { defineStore } from 'pinia'

export const useRecordsStore = defineStore({
    id: 'records',

    state: () => ({
        records: ALL_RECORDS,
        keyWords: [] as string[],
    }),

    getters: {
        isKeyWordsChosen(state): boolean {
            return state.keyWords.length > 0;
        }
    },

    actions: {
        getRecordsGropedByKeyWords(): Record[] {
            if (this.keyWords.length === 0) {
                return [] as Record[];
            }

            return this.records.filter((record: Record) => {

                for (const word of this.keyWords) {
                    if (!this.composeRecordKeyWords(record).includes(word)) {
                        return false;
                    }
                }

                return true;
            });

        },

        removeInitialKeyWords(keyWords: string[]): string[] {
            return keyWords.filter((word: string) => {
                if (!(Object.values(KeyWord) as string[]).includes(word)) {
                    return true;
                } else {
                    return false;
                }
            });
        },

        composeRecordKeyWords(record: Record): string[] {
            return [record.grade, record.subject, record.month];
        },

        setKeyWords(keyWords: string[]) {
            this.keyWords = this.removeInitialKeyWords(keyWords);
        }
    }
})
