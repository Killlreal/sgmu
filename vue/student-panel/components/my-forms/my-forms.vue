<template lang = "pug">
    .personal-area
        headerNav
        .main
            section.available
                .editor
                    .editor__files
                        p.availabel__title Мои формы
                        .editor__form-block(v-show="deleteFormFirst")
                            .editor__container
                                .editor__text
                                    .editor__number
                                        .number 1
                                    p.editor__application Заявление на предоставление академического отпуска
                                .editor_links
                                    button.editor__rewrite-button(v-on:click="clickShowEditFirst")
                                        figure.icon-pencile
                                        span Редактировать
                                    button.editor__delete-button(v-on:click="removeFormFirst") 
                                        figure.icon-delete
                                        span Удалить
                        .editor__form-block(v-show="deleteFormSecond")
                            .editor__container
                                .editor__text
                                    .editor__number
                                        .number 2
                                    p.editor__application Заявление на предоставление академического отпуска
                                .editor_links
                                    button.editor__rewrite-button(v-on:click="clickShowEditSecond")
                                        figure.icon-pencile
                                        span Редактировать
                                    button.editor__delete-button(v-on:click="removeFormSecond")
                                        figure.icon-delete
                                        span Удалить
                        .editor__form-block(v-show="deleteFormThird")
                            .editor__container
                                .editor__text
                                    .editor__number
                                        .number 3
                                    p.editor__application Заявление на предоставление академического отпуска
                                .editor_links
                                    button.editor__rewrite-button(v-on:click="clickShowEditThird")
                                        figure.icon-pencile
                                        span Редактировать
                                    button.editor__delete-button(v-on:click="removeFormThird")
                                        figure.icon-delete
                                        span Удалить
                        .editor__form-block(v-show="deleteFormFourth")
                            .editor__container
                                .editor__text
                                    .editor__number
                                        .number 4
                                    p.editor__application Заявление на предоставление академического отпуска
                                .editor_links
                                    button.editor__rewrite-button(v-on:click="clickShowEditFourth")
                                        figure.icon-pencile
                                        span Редактировать
                                    button.editor__delete-button(v-on:click="removeFormFourth")
                                        figure.icon-delete
                                        span Удалить
                    .editor__forms
                        p.editor__title Редактирование формы
                        .delete-form.availabel__form-block(v-show="showEditFirst")
                            .blocks
                                form.form__blocks(action="", method="post")
                                    .flex
                                        label.label-text(for="input__rector_4") Ректору 1
                                        input#input__rector_4.input__rector.input(type="text" placeholder="ФИО ректора" name="torector" required)
                                    .flex
                                        label.label-text(for="input__student_4") От студента группы
                                        input#input__student_4.input__student.input(type="text" name="fromstudent" required )
                                    .flex
                                        label.label-text(for="input__faculty_4") Факультета
                                        input#input__faculty_4.input__faculty.input(type="text" placeholder="Наименование факультета" name="faculty" required)
                                    .flex
                                        label.label-text(for="input__names-student_4") ФИО студента
                                        input#input__names-student_4.input__names-student.input(type="text" placeholder="ФИО" name="names-student" required)
                                    .flex
                                        p.label-text Прошу предоставить мне академический отпуск по
                                        textarea.input__vacation.input.textarea-input(placeholder="Причина" name="vacation" required)
                                    .flex
                                        label.label-text(for="input__date-from_4") С
                                        input#input__date-from_4.input__date-from.input(type="date" name="date-from" required)
                                    .flex
                                        label.label-text(for="input__date-to_4") По
                                        input#input__date-to_4.input__date-to.input(type="date" name="date-to" required)
                                    .send
                                        label.upload-file__label(for="upload-file__input_4")
                                            figure.icon-clip
                                            span.upload-file__text Прикрепите документ, подтверждающий причину отпуска
                                        input#upload-file__input_4.upload-file__input(type="file", name="file", required, accept=".jpg, .jpeg, .png, .gif, .bmp, .doc, .docx, .xls, .xlsx, .txt, .tar, .zip, .7z, .7zip")
                                    .personal-date
                                        input#input__date_4.input__date(type="checkbox", name="personal-date" required)
                                        label.label-date(for="input__date_4") Согласие на обработку персональных данных
                                    input.send-submit(type="submit" value="Отправить форму")
                        .delete-form.availabel__form-block(v-show="showEditSecond")
                            .blocks
                                form.form__blocks(action="", method="post")
                                    .flex
                                        label.label-text(for="input__rector_4") Ректору 2
                                        input#input__rector_4.input__rector.input(type="text" placeholder="ФИО ректора" name="torector" required)
                                    .flex
                                        label.label-text(for="input__student_4") От студента группы
                                        input#input__student_4.input__student.input(type="text" name="fromstudent" required )
                                    .flex
                                        label.label-text(for="input__faculty_4") Факультета
                                        input#input__faculty_4.input__faculty.input(type="text" placeholder="Наименование факультета" name="faculty" required)
                                    .flex
                                        label.label-text(for="input__names-student_4") ФИО студента
                                        input#input__names-student_4.input__names-student.input(type="text" placeholder="ФИО" name="names-student" required)
                                    .flex
                                        p.label-text Прошу предоставить мне академический отпуск по
                                        textarea.input__vacation.input.textarea-input(placeholder="Причина" name="vacation" required)
                                    .flex
                                        label.label-text(for="input__date-from_4") С
                                        input#input__date-from_4.input__date-from.input(type="date" name="date-from" required)
                                    .flex
                                        label.label-text(for="input__date-to_4") По
                                        input#input__date-to_4.input__date-to.input(type="date" name="date-to" required)
                                    .send
                                        label.upload-file__label(for="upload-file__input_4")
                                            figure.icon-clip
                                            span.upload-file__text Прикрепите документ, подтверждающий причину отпуска
                                        input#upload-file__input_4.upload-file__input(type="file", name="file", required, accept=".jpg, .jpeg, .png, .gif, .bmp, .doc, .docx, .xls, .xlsx, .txt, .tar, .zip, .7z, .7zip")
                                    .personal-date
                                        input#input__date_4.input__date(type="checkbox", name="personal-date" required)
                                        label.label-date(for="input__date_4") Согласие на обработку персональных данных
                                    input.send-submit(type="submit" value="Отправить форму")
                        .delete-form.availabel__form-block(v-show="showEditThird")
                            .blocks
                                form.form__blocks(action="", method="post")
                                    .flex
                                        label.label-text(for="input__rector_4") Ректору 3
                                        input#input__rector_4.input__rector.input(type="text" placeholder="ФИО ректора" name="torector" required)
                                    .flex
                                        label.label-text(for="input__student_4") От студента группы
                                        input#input__student_4.input__student.input(type="text" name="fromstudent" required )
                                    .flex
                                        label.label-text(for="input__faculty_4") Факультета
                                        input#input__faculty_4.input__faculty.input(type="text" placeholder="Наименование факультета" name="faculty" required)
                                    .flex
                                        label.label-text(for="input__names-student_4") ФИО студента
                                        input#input__names-student_4.input__names-student.input(type="text" placeholder="ФИО" name="names-student" required)
                                    .flex
                                        p.label-text Прошу предоставить мне академический отпуск по
                                        textarea.input__vacation.input.textarea-input(placeholder="Причина" name="vacation" required)
                                    .flex
                                        label.label-text(for="input__date-from_4") С
                                        input#input__date-from_4.input__date-from.input(type="date" name="date-from" required)
                                    .flex
                                        label.label-text(for="input__date-to_4") По
                                        input#input__date-to_4.input__date-to.input(type="date" name="date-to" required)
                                    .send
                                        label.upload-file__label(for="upload-file__input_4")
                                            figure.icon-clip
                                            span.upload-file__text Прикрепите документ, подтверждающий причину отпуска
                                        input#upload-file__input_4.upload-file__input(type="file", name="file", required, accept=".jpg, .jpeg, .png, .gif, .bmp, .doc, .docx, .xls, .xlsx, .txt, .tar, .zip, .7z, .7zip")
                                    .personal-date
                                        input#input__date_4.input__date(type="checkbox", name="personal-date" required)
                                        label.label-date(for="input__date_4") Согласие на обработку персональных данных
                                    input.send-submit(type="submit" value="Отправить форму")
                        .delete-form.availabel__form-block(v-show="showEditFourth")
                            .blocks
                                form.form__blocks(action="", method="post")
                                    .flex
                                        label.label-text(for="input__rector_4") Ректору 4
                                        input#input__rector_4.input__rector.input(type="text" placeholder="ФИО ректора" name="torector" required)
                                    .flex
                                        label.label-text(for="input__student_4") От студента группы
                                        input#input__student_4.input__student.input(type="text" name="fromstudent" required )
                                    .flex
                                        label.label-text(for="input__faculty_4") Факультета
                                        input#input__faculty_4.input__faculty.input(type="text" placeholder="Наименование факультета" name="faculty" required)
                                    .flex
                                        label.label-text(for="input__names-student_4") ФИО студента
                                        input#input__names-student_4.input__names-student.input(type="text" placeholder="ФИО" name="names-student" required)
                                    .flex
                                        p.label-text Прошу предоставить мне академический отпуск по
                                        textarea.input__vacation.input.textarea-input(placeholder="Причина" name="vacation" required)
                                    .flex
                                        label.label-text(for="input__date-from_4") С
                                        input#input__date-from_4.input__date-from.input(type="date" name="date-from" required)
                                    .flex
                                        label.label-text(for="input__date-to_4") По
                                        input#input__date-to_4.input__date-to.input(type="date" name="date-to" required)
                                    .send
                                        label.upload-file__label(for="upload-file__input_4")
                                            figure.icon-clip
                                            span.upload-file__text Прикрепите документ, подтверждающий причину отпуска
                                        input#upload-file__input_4.upload-file__input(type="file", name="file", required, accept=".jpg, .jpeg, .png, .gif, .bmp, .doc, .docx, .xls, .xlsx, .txt, .tar, .zip, .7z, .7zip")
                                    .personal-date
                                        input#input__date_4.input__date(type="checkbox", name="personal-date" required)
                                        label.label-date(for="input__date_4") Согласие на обработку персональных данных
                                    input.send-submit(type="submit" value="Отправить форму")

</template>
<script>
import headerNav from "../header-nav.vue";
import { mapGetters, mapActions } from "vuex";

export default {
    name: "my-forms",
    components: {
        headerNav
    },
    data() {
        return {
            showEditFirst: false,
            showEditSecond: false,
            showEditThird: false,
            showEditFourth: false,
            deleteFormFirst: true,
            deleteFormSecond: true,
            deleteFormThird: true,
            deleteFormFourth: true
        };
    },
    computed: {
        ...mapGetters(["FORMS", "USER_ID", "USER_NAME"])
    },
    methods: {
        ...mapActions([
            "FETCH_FORMS",
            "REMEMBER_USER",
        ]),
        clickShowEditFirst() {
            this.showEditFirst = !this.showEditFirst;
        },
        clickShowEditSecond() {
            this.showEditSecond = !this.showEditSecond;
        },
        clickShowEditThird() {
            this.showEditThird = !this.showEditThird;
        },
        clickShowEditFourth() {
            this.showEditFourth = !this.showEditFourth;
        },
        removeFormFirst() {
            this.deleteFormFirst = !this.deleteFormFirst;
            if (this.showEditFirst) {
                this.showEditFirst = !this.showEditFirst;
            }
        },
        removeFormSecond() {
            this.deleteFormSecond = !this.deleteFormSecond;
            if (this.showEditSecond) {
                this.showEditSecond = !this.showEditSecond;
            }
        },
        removeFormThird() {
            this.deleteFormThird = !this.deleteFormThird;
            if (this.showEditThird) {
                this.showEditThird = !this.showEditThird;
            }
        },
        removeFormFourth() {
            this.deleteFormFourth = !this.deleteFormFourth;
            if (this.showEditFourth) {
                this.showEditFourth = !this.showEditFourth;
            }
        }
    },
    async created() {
        let user = this.USER_ID
        if (user === null) await this.REMEMBER_USER()
        // this.FETCH_FORMS(user) fetch forms status sent or edited
    },
};
</script>

<style lang='scss'></style>
