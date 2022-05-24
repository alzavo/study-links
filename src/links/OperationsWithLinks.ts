import { Link } from "./Link";
import { Parameter } from "./Parameter";
import linksJson from "@/links/links.json";

export function getFilteredLinks(targetKeyWords: string[]) {
    if (targetKeyWords.length !== 0) {
        return (linksJson as Link[]).filter((linkFromCollection) => {
            const composedKeyWords: string[] = [
                linkFromCollection.grade,
                linkFromCollection.subject,
                linkFromCollection.month,
            ];

            for (const word of targetKeyWords) {
                const contains = composedKeyWords.includes(word);
                if (!contains) {
                    return false;
                }
            }

            return true;
        });
    } else {
        return [];
    }
}

export function extractParametersValuesFromLinks(): Parameter[] {
    const links: Link[] = linksJson;
    let parameters: Parameter[] = createLinksParameters();
    for (let index = 0; index < links.length; index++) {
        const link = links[index];
        let gradeParameter = parameters.filter((param) => param.name === "KLASS")[0];
        let subjectParameter = parameters.filter((param) => param.name === "ÕPPEAINE")[0];

        if (!checkIfParameterContainsValue(link.grade, gradeParameter)) {
            gradeParameter.values.push(link.grade);
        }

        if (!checkIfParameterContainsValue(link.subject, subjectParameter)) {
            subjectParameter.values.push(link.subject);
        }
    }

    return parameters;
}

function createLinksParameters(): Parameter[] {
    return [
        { name: "KLASS", values: [] } as Parameter,
        { name: "ÕPPEAINE", values: [] } as Parameter,
        {
            // months and school's study periods will not change in the nearest future 
            name: "KUU", values: [
                "September",
                "Oktoober",
                "November",
                "Detsember",
                "Jaanuar",
                "Veebruar",
                "Märts",
                "April",
                "Mai",
            ],
        } as Parameter,
    ];
}

function checkIfParameterContainsValue(valueToCheck: string, parameter: Parameter): boolean {
    for (let index = 0; index < parameter.values.length; index++) {
        const valueInCollection = parameter.values[index];
        if (valueInCollection === valueToCheck) return true;
    }

    return false;
}
