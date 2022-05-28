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

    getters: {},

    actions: {
        setKeyWords(keyWords: string[]) {
            this.keyWords = removeInitialKeyWords(keyWords);
        },

        getRecordsByKeyWords(): Record[] {
            if (isEmpty(this.keyWords)) {
                return [] as Record[];
            }

            return this.records.filter((record: Record) => {
                for (const word of this.keyWords) {
                    if (!includes(composeKeyWords(record), word)) {
                        return false;
                    }
                }
                return true;
            });

        },
    }
})

function removeInitialKeyWords(keyWords: string[]): string[] {
    return keyWords.filter((word: string) => {
        if (!includes(Object.values(KeyWord), word)) {
            return true;
        } else {
            return false;
        }
    });
}

function includes(collection: string[], target: string): boolean {
    return collection.includes(target);
}

function isEmpty(collection: string[]): boolean {
    return collection.length === 0;
}

function composeKeyWords(record: Record): string[] {
    return [record.grade, record.subject, record.month];
}
