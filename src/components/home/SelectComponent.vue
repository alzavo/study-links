<template>
    <form>
        <select
            v-for="element in linksParameters"
            :key="element"
            v-bind:name="element.name"
            v-bind:id="element.name"
        >
            <option v-bind:value="element.name">{{ element.name }}</option>
            <option
                v-for="value in element.values"
                :key="value"
                v-bind:value="value"
            >
                {{ value }}
            </option>
        </select>

        <div class="controls">
            <button class="btn" @click.prevent="submit">Otsi</button>
        </div>
    </form>
</template>

<script lang="ts">
import { extractParametersValuesFromLinks } from "@/links/OperationsWithLinks";
import { Parameter } from "@/links/Parameter";

export default {
    data() {
        return {
            linksParameters: [] as Parameter[],
        };
    },

    created() {
        // @ts-ignore
        this.$data.linksParameters = extractParametersValuesFromLinks();
    },

    methods: {
        submit() {
            // @ts-ignore
            this.$router.push({
                name: "links",
                params: { keyWords: this.getKeywords() },
            });
        },

        getKeywords() {
            let keyWords: string[] = this.getSelectedValues();
            keyWords = this.removeInitialValues(keyWords);
            return keyWords;
        },

        getSelectedValues() {
            let keyWords: string[] = [];

            // @ts-ignore
            for (const element of this.$data.linksParameters) {
                const selectHtmlElement: any = document.getElementById(
                    element.name
                );

                keyWords.push(
                    selectHtmlElement.options[selectHtmlElement.selectedIndex]
                        .text
                );
            }

            return keyWords;
        },

        removeInitialValues(keyWords: string[]): string[] {
            return keyWords.filter((word) => {
                let isInitial = false;

                // @ts-ignore
                for (const element of this.$data.linksParameters) {
                    if (element.name === word) {
                        isInitial = true;
                        break;
                    }
                }

                if (isInitial) {
                    return false;
                }
                return true;
            });
        },
    },
};
</script>
