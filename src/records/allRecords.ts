import { Grade } from "./constants/grades";
import { Month } from "./constants/months";
import { Subject } from "./constants/subjects";
import { Record } from "./record";

export const LINKS: Record[] = [
    {
        grade: Grade.First,
        subject: Subject.Art,
        month: Month.April,
        topic: "Art",
        link: "https://www.google.com/",
    },
    {
        grade: Grade.Second,
        subject: Subject.Biology,
        month: Month.December,
        topic: "Biology",
        link: "https://www.google.com/",
    },
    {
        grade: Grade.Third,
        subject: Subject.Estonian,
        month: Month.February,
        topic: "Estonian",
        link: "https://www.google.com/",
    },
    {
        grade: Grade.Fourth,
        subject: Subject.Humanities,
        month: Month.January,
        topic: "Humanities",
        link: "https://www.google.com/",
    },
    {
        grade: Grade.Fourth,
        subject: Subject.Mathematics,
        month: Month.March,
        topic: "Mathematics",
        link: "https://www.google.com/",
    },
]; 
