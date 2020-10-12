<template lang="pug">
    .personal-area
        router-view



</template>
<script>
import admins from "../admin-panel/layout.vue"
import students from "../student-panel/layout.vue"

export default {
    data() {
        return {
        };
    },
    components: {
        admins,
        students
    },
    methods: {
    }
};
</script>
