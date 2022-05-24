<template>
    <div class="container">
        <LogoComponent />
        <SelectComponent />
    </div>
</template>

<script lang="ts">
import SelectComponent from "@/components/home/SelectComponent.vue";
import LogoComponent from "@/components/home/LogoComponent.vue";

export default {
    components: {
        SelectComponent,
        LogoComponent,
    },
};
</script>
