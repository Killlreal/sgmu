<template lang="pug">
    .personal-area
        headerNav
        section.ready-forms
            .container
                .ready-forms__inner
                    .ready-forms__title Созданные формы
                    readyFormCard
</template>
<script>
import readyFormCard from "./ready-form-card.vue";
import headerNav from "../header-nav.vue";
import { mapGetters, mapActions } from "vuex";

export default {
    name: "ready-forms",
    components: {
        readyFormCard,
        headerNav
    },
    data() {
        return {};
    },
    methods: {
        ...mapActions(["GET_FORM"])
    },
    created() {
        this.GET_FORM();
        console.log("test" + this.ALLFORMS);
    },
    computed: {
        ...mapGetters(["ALLFORMS"])
    }
};
</script>

<style lang='scss'></style>
