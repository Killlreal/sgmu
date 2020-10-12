<template lang="pug">
    .personal-area
        headerNav
        router-view
    
</template>
<script>
import headerNav from "./components/header-nav.vue"
import avaliableForms from "./components/avaliable-forms/avaliable-forms.vue"
import myForms from "./components/my-forms/my-forms.vue"
import notifications from "./components/notifications/notifications.vue"

import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
        };
    },
    components: {
        headerNav,
        avaliableForms,
        myForms,
        notifications
    },
    computed: {
        ...mapGetters(["USER_ID"])
    },
    methods: {
        ...mapActions([
            "FETCH_FORMS",
            "REMEMBER_USER",
        ]),
    },
    async created() {
        let user = this.USER_ID
        if (user === null) await this.REMEMBER_USER()
        this.FETCH_FORMS(user)
    }
};
</script>
