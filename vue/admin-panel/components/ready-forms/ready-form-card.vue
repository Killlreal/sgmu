<template lang="pug">
section.form-card
    .form-card__inner
        .form-card__info
            .form-card__number 1
            .form-card__title {{info.title}}
        .form-card__actions
            .form-card__edit.btn-mini
                span
                    svg
                        use(href='icons/icons.svg#form-edit')
                |Редактировать
            .form-card__delete.btn-mini
                span
                    svg
                        use(href='icons/icons.svg#form-delete')
                |Удалить
            .form-card__appoint.btn-mini(@click='show = !show')
                span
                    svg
                        use(href='icons/icons.svg#form-choose-user')
                |Назначить
        form.form-card__choice-people(action="" method="" v-if="show")
            .choice-people__filters-inner
                .choice-people__filters-header
                    .filters-header__title Фильтры
                    .filters-header__close(@click="clickToShow") {{btnText}}
                .choice-people__filters-main(v-if="showFilter")
                    .filters-main__block
                        .filters-main__course
                            p Назначить курс
                            select#select__course.select__course.input-filter(name="selectCourse" v-model="courseSelect" )
                                option(v-for="option in ['Все', ...this.COURSES]" v-bind:value="option") {{ option }}
                        .filters-main__allstudents
                            p Назначить студента
                            .filters-main__students
                                input.input-filter.filters-main__students_second-name(v-model="query"
                                                                                      @input = "findPeople"
                                                                                      type="text"
                                                                                      placeholder="Фамилия Имя Отчество"
                                                                                      required)
                    .filters-main__group
                        .filters-main__group_course
                            p Назначить группу
                            select#select__course.select__course.input-filter(v-model="groupSelect" required)
                                option(v-for="option in ['Все', ...this.GROUPS]" v-bind:value="option") {{ option }}
                        button.button-course.btn-mini 
                            figure.icon-pencile
                            span Назначить
                .choice-people__filters-people
                    p.choice-people_title Курс
                    p.choice-people_title Группа
                    p.choice-people_title ФИО
                    p.choice-people_title Действия
                .choice-people__block(v-if="query.length>0" v-for="val in this.PEOPLE")
                    .choice-people__block_flex
                        .choice-people__course {{ val.course }}
                        .choice-people__group {{ val.group }}
                        .choice-people__date {{ val.name }}
                        a.choice-people__act(href="#")
                            img.choice-people__img(src="icons/act.svg")
                            p Назначить 
                        a.choice-people__cancel(href="#")
                            img.choice-people__img(src="icons/cancel.svg")
                            p Отменить назначение
                .buttons__block
                    input.buttons__block_submit.btn-mini(type="submit" value="Сохранить")
                    input.buttons__block_rest.btn-mini(type="rest" value="Отменить изменения")
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "ready-form-card",
    data() {
        return {
            show: false,
            showFilter: false,
            isActive: false,
            groupSelect: "Все",
            courseSelect: "Все",
            query: ""
        };
    },
    methods: {
        ...mapActions(["FETCH_GROUPS", "FETCH_COURSES", "FETCH_PEOPLE"]),
        findPeople() {
            console.log("try to find ", this.query);
            this.FETCH_PEOPLE(this.query);
        },
        selectCourse() {
            this.isActive = !this.isActive;
            console.log(this.isActive);
        },
        clickToShow() {
            this.showFilter = !this.showFilter;
        }
    },
    computed: {
        ...mapGetters(["COURSES", "GROUPS", "PEOPLE"]),
        btnText: function() {
            if (this.showFilter) {
                return "Скрыть";
            }

            return "Показать";
        }
    },
    props: {
        info: {
            type: Object,
            title: null,
            default() {
                return {};
            }
        }
    },
    components: {},
    async created() {
        await this.FETCH_COURSES();
        await this.FETCH_GROUPS();
    }
};
</script>

<style lang='scss'></style>
