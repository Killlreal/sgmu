<template lang="pug">
    .personal-area
        headerNav
        section.uncheck
            .container
                .uncheck__title Неразобранные формы
                .uncheck__wrapper
                    ul.uncheck__header
                        li.uncheck__list_first Наименование формы
                        li Отправитель, ФИО
                        li Группа
                        li Комментарий
                        li Действия
                        li Статус
                    stringInTable(v-for='(item, index) in this.CHECK_TABLE'
                                :key='item.id'
                                :list='item')
                    .uncheck__info
                        .uncheck__info_order Заявление на предоставление академического отпуска
                        .uncheck__info_date Константинов Константин Константинович
                        .uncheck__info_group 3333333333
                        .uncheck__info_comment Ошибка в заполнении фио ректора lorem
                        .uncheck__info_act
                            .uncheck__info_act_block
                                figure.icon-send-back
                                p.uncheck__info_send_title Отправить обратно
                            .uncheck__info_act_block
                                figure.icon-accept
                                p.uncheck__info_accept_title Принять заявление
                        .uncheck__info_status Отправлено для исправлений





</template>
<script>
import { mapActions, mapGetters } from "vuex";
import stringInTable from "./stringInTable.vue";
import headerNav from "../header-nav.vue";

export default {
    name: "uncheck-forms",
    data() {
        return {};
    },
    components: {
        stringInTable,
        headerNav
    },
    computed: {
        ...mapGetters(["CHECK_TABLE"])
    },
    methods: {
        ...mapActions(["RENDER_TABLE", "GET_TABLE"])
    },
    created() {
        this.RENDER_TABLE();
    },
    mounted() {
        this.GET_TABLE();
    }
};
</script>

<style lang='scss'></style>
