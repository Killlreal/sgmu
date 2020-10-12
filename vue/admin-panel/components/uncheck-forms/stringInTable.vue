<template lang="pug">
ul.uncheck__list
    li.uncheck__list_first {{list.title}}
    li {{list.student}}
    li {{list.group}}
    li {{list.comment}}
    li.uncheck__list_actions
        p Отправить обратно
        p Принять заявление 
    li Не просмотрено       


</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "uncheck-forms",
    data() {
        return {
        };
    },
    props: {
        list: {
            type: Object,
            title: null,
            student: null,
            group: null,
            comment: null,
            default() {
                return {};
            }
        }
    },
    components: {
        
    },
    computed: {
        ...mapGetters([
            'CHECK_TABLE'
        ])
    },
    methods: {
        ...mapActions([
            'RENDER_TABLE',
            'GET_TABLE'
        ])
    },
    created() {
        this.RENDER_TABLE()
    },
    mounted() {
        this.GET_TABLE()
        
    }
};
</script>

<style lang='scss'></style>
