<template>
    <div class="container">
        <div class="stepper-pane">
            <img
                src="@/assets/images/draakon.jpg"
                alt="Dragon with three heads."
            />
        </div>

        <form>
            <select
                v-for="section in searchSections"
                :key="section"
                v-bind:name="section.name"
                v-bind:id="section.id"
            >
                <option v-bind:value="section.name">{{ section.name }}</option>
                <option
                    v-for="value in section.values"
                    :key="value"
                    v-bind:value="value"
                >
                    {{ value }}
                </option>
            </select>
        </form>

        <div class="controls">
            <button class="btn" @click="increaseCurrentStepNumber">Otsi</button>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            searchSections: [
                { name: "KLASS", values: ["1", "2", "3", "4"] },
                { name: "ÕPPEAINE", values: ["Kunst", "Matemaatika"] },
                {
                    name: "KUU",
                    values: [
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
                },
            ],
        };
    },

    methods: {
        searchSuitableLinks() {},
    },
};
</script>
