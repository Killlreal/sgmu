<template lang="pug">
    .personal-area
        headerNav
        router-view



</template>
<script>
import headerNav from "./components/header-nav.vue"
import createForm from "./components/create-forms/create-form.vue"
import readyForms from "./components/ready-forms/ready-forms.vue"
import uncheckForms from "./components/uncheck-forms/uncheck-forms.vue"

export default {
    data() {
        return {
        };
    },
    components: {
        headerNav,
        createForm,
        readyForms,
        uncheckForms

    },
    methods: {
    }
};
</script>
