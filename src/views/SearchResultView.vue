<template>
    <div class="container">
        <button
            v-for="item in links"
            :key="item"
            @click.prevent="openLink(item.link)"
        >
            {{ item.topic }}
        </button>
        <div class="controls">
            <button class="btn" @click.prevent="goBack">Tagasi</button>
        </div>
    </div>
</template>

<script lang="ts">
import linksJson from "@/links/links.json";
import { Link } from "@/links/Link";
import { getFilteredLinks } from "@/links/OperationsWithLinks";
export default {
    components: {},

    data() {
        return {
            links: [] as Link[],
        };
    },

    created() {
        // @ts-ignore
        if (this.$route.params.keyWords === undefined) {
            // @ts-ignore
            this.$router.push({ name: "home" });
        } else {
            // @ts-ignore
            this.$data.links = getFilteredLinks(this.$route.params.keyWords);
        }
    },

    methods: {
        openLink(link: string) {
            window.open(link);
        },

        goBack() {
            // @ts-ignore
            this.$router.go(-1);
        },
    },
};
</script>