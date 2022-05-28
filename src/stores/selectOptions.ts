import { ALL_KEY_WORDS } from '@/keyWords/allKeyWords'
import { Grade } from '@/records/constants/grades';
import { KeyWord } from '@/keyWords/constants/keyWords';
import { Month } from '@/records/constants/months';
import { Subject } from '@/records/constants/subjects';
import { defineStore } from 'pinia'

export const useSelectOptionsStore = defineStore({
    id: 'selectOptions',

    state: () => ({
        keyWords: ALL_KEY_WORDS,

        grades: {
            name: KeyWord.Grade,
            values: Object.values(Grade),
        },

        subjects: {
            name: KeyWord.Subject,
            values: Object.values(Subject),
        },

        months: {
            name: KeyWord.Month,
            values: Object.values(Month),
        },
    }),

    getters: {},

    actions: {},
})