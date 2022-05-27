import { Grade } from "./constants/grades";
import { Month } from "./constants/months";
import { Subject } from "./constants/subjects";
import type { Record } from "./record";

export const ALL_RECORDS: Record[] = [
    {
        grade: Grade.First,
        subject: Subject.Art,
        month: Month.April,
        topic: "Art",
        link: "https://www.google.com/",
    },
]; 
