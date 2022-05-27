<template>
    <div class="container">
        <LogoComponent />
        <FormComponent />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LogoComponent from "@/components/LogoComponent.vue";
import FormComponent from "@/components/FormComponent.vue";

export default defineComponent({
    components: {
        LogoComponent,
        FormComponent,
    }
})
</script>