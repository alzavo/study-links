<template>
    <section class="labels">
        <div class="container">
            <form
                @submit.prevent="onSubmit($event)"
                @change.prevent="getSelectedItems($event)"
            >
                <div class="select-container">
                    <select
                        v-for="columnWithValues in columnsWithValues"
                        :key="columnWithValues"
                    >
                        <option value="">
                            {{ columnWithValues.column.label }}
                        </option>
                        <option
                            v-for="value in columnWithValues.values"
                            :key="value"
                            value="{{value}}"
                        >
                            {{ value }}
                        </option>
                    </select>
                </div>

                <div class="submit-container">
                    <button type="submit">Otsi</button>
                </div>
            </form>

            <div class="result">
                <div v-for="link in links" :key="link" class="link">
                    <button
                        @click.prevent="
                            openUrl(
                                link.dataCells[link.dataCells.length - 1].value
                            )
                        "
                    >
                        {{ link.dataCells[link.dataCells.length - 2].value }}
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import jsonLinks from "@/data/links.json";

export default class HomeView extends Vue {
    hasNoData: boolean = true;
    selectedLabels: string[] = [];
    lastQuery: string[] = [];

    created(): void {
        console.log(jsonLinks);
    }

    getSelectedItems(event: any): void {
        this.selectedLabels.push(
            event.target.options[event.target.options.selectedIndex].text
        );
    }

    openUrl(url: string): void {
        window.open(url);
    }
}
</script>
