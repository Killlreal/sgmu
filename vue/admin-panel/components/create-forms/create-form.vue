<template lang="pug">
.personal-area
    headerNav
    section.creater
        .container
            .creater__inner
                .creater__template
                    form.template__inner
                        .template__radios
                            .template__title Срок заполнения формы
                            .template__notime_box
                                input.template__notime#template__notime(type="radio" name="date" value="nodate" v-on:change="offCalendar")
                                label.template__notime_label(for="template__notime") Бессрочно
                            .template__date_box
                                input.template__notime#template__date(type="radio" name="date" value="withdate" v-on:change="onCalendar")
                                label.template__notime_label(for="template__date" ) Выбрать дату
                                    img.template__img(src="/icons/date.svg")
                                input.template__date_calendar(v-show = "showCalendar" type="date" v-model="expired" @change="setExpired")
                        .template__title Создать форму
                        .template__shell
                            .template__name
                                input.template__name_input(type="text"
                                                            placeholder="Название формы*"
                                                            v-model="formTitle"
                                                            v-if="showTitleForm"
                                                            )
                                span.template__enter(@click="renderTitle"
                                                    v-if="showTitleForm")
                                    svg
                                        use(href='icons/icons.svg#form-enter')
                                .template__name_output(type="text"
                                                        v-if="!showTitleForm") {{MAINTITLE}}
                                    span.template__edit(@click="renderTitle")
                                        svg
                                            use(href='icons/icons.svg#form-edit')
                                newCell(v-for='(field, index) in this.FIELDS' 
                                        :key='field.id' 
                                        :info='field' 
                                        @delete-cell="deleteField(index)"
                                        @change="changeField(index)")
                                .template__select
                                    .template__addform
                                        .template__drop(v-bind:class="{template__drop_bdred : shineText, template__drop_bd : !shineText}")
                                          draggable.list-group-item(:list='dragArray'
                                                                      group='people'
                                                                      @change="copyField()")
                                            |Перенесите сюда необходимый вариант поля
                                        .template__types-menu-button(@click='show = !show') +
                                    ul.template__list-data-types(v-if="show")
                                        li(v-for='(item, index) in typesFields'
                                            :key="item.id"
                                            @click="renderField(item.type)") {{item.type}}
                                input.template__send-button.btn(type="submit" 
                                                                value="Сохранить форму"
                                                                @click.prevent="SAVE_FORM"
                                                                )
                .creater__line
                .creater__fields
                    .fields__title Варианты полей формы
                    draggable.list-group-item(:list='typesFields',
                                        :group="{ name: 'people', pull: 'clone', put: false }" 
                                        :clone="cloneField"
                                        @start="changeView"
                                        @end="changeView")
                        fields.list-group-item(v-for = '(item, index) in typesFields'
                                              :key='item.id'
                                              :name='item')
</template>
<script>
import headerNav from "../header-nav.vue";
import fields from "./fields.vue";
import newCell from "./new-cell.vue";
import draggable from "vuedraggable";
import { mapGetters, mapActions } from "vuex";

export default {
    name: "create-form",
    data() {
        return {
            typesFields: [
                {
                    type: "Числовое"
                },
                {
                    type: "Текстовая строка"
                },
                {
                    type: "Текстовое поле"
                },
                {
                    type: "Поле загрузки данных"
                },
                {
                    type: "Поле календарь"
                }
            ],
            show: false,
            showTitleForm: true,
            name: "",
            formTitle: "",
            expired: "0000-00-00",
            mainForm: [],
            shineText: false,
            dragArray: [],
            showCalendar: false
        };
    },
    computed: {
        ...mapGetters(["FIELDS", "MAINTITLE", "FORM", "USER_ID"])
    },
    methods: {
        ...mapActions([
            "ADD_FIELD",
            "ADD_ADMIN",
            "DELETE_FIELD",
            "CHANGE_MAINTITLE",
            "CHANGE_EXPIRED",
            "SAVE_FORM"
        ]),
        renderField(type) {
            if (this.name !== "" && this.name !== null) {
                let object = {
                    name: this.name,
                    type: type
                };
                this.ADD_FIELD(object);
                this.name = null;
                this.show = !this.show;
            } else {
                this.$refs.namefield.placeholder = "Введите название поля";
            }
        },
        renderTitle() {
            if (this.formTitle !== "") {
                let title = this.formTitle;
                this.CHANGE_MAINTITLE(title);
                this.showTitleForm = !this.showTitleForm;
            }
        },
        setExpired() {
            this.CHANGE_EXPIRED(this.expired)
        },
        deleteField(index) {
            this.DELETE_FIELD(index);
        },

        cloneField({ id, type }) {
            return {
                name: `Введите название формы`,
                type: type
            };
        },
        copyField() {
            const obj = {}
            obj.name = this.dragArray[0].name
            obj.type = this.dragArray[0].type
            this.ADD_FIELD(obj)
        },
        changeView() {
            this.shineText = !this.shineText;
        },
        onCalendar() {
            this.showCalendar = !this.showCalendar;
        },
        offCalendar() {
            if (this.showCalendar) {
                this.showCalendar = !this.showCalendar;
            }
        }
      },
      created() {
        this.ADD_ADMIN(this.USER_ID)
      },
    components: {
        headerNav,
        fields,
        newCell,
        draggable,
    }
 };
</script>

<style lang='scss'></style>
