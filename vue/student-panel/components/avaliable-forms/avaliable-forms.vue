<template lang = "pug">
    .personal-area
        headerNav
        .main
            section.available
                .available__blocks
                    .available__forms
                        p.availabel__title Доступные формы
                        .availabel__form-block(v-for='(form, index) in this.FORMS')
                            .availabel__container
                                .availabel__text
                                    .availabel__number
                                        .number {{ index + 1}}
                                    p.availabel__application {{ form.title }}
                                button.availabel__write-button(@click="clickwriteInFirst")
                                    figure.icon-pencile
                                    span Заполнить
                            .blocks
                                .blocks__hidden(v-show="showWriteInFirst")
                                    form.form__blocks(action="", method="post")
                                        .flex(v-for='field in JSON.parse(form.content)')
                                            label.label-text {{field.name}}
                                            input.input__rector.input(type="text"
                                                                      name="torector"
                                                                      required
                                                                      v-if="field.type === 'Текстовая строка'"
                                                                      v-bind:placeholder="field.tip"
                                                                      )
                                            textarea.input__rector.input(name="torector"
                                                                      required
                                                                      v-else-if="field.type === 'Текстовое поле'"
                                                                      v-bind:placeholder="field.tip"
                                                                      )
                                            input.input__rector.input(type="number"
                                                                      name="torector"
                                                                      required
                                                                      v-else-if="field.type === 'Числовое'"
                                                                      v-bind:placeholder="field.tip"
                                                                      )
                                            input.input__rector.input(type="date"
                                                                      name="torector"
                                                                      required
                                                                      v-else-if="field.type === 'Поле календарь'"
                                                                      v-bind:placeholder="field.tip"
                                                                      )
                                            .send(v-else-if="field.type === 'Поле загрузки данных'")
                                                label.upload-file__label(for="upload-file__input_1")
                                                    figure.icon-clip
                                                    span.upload-file__text {{ field.tip }}
                                                input#upload-file__input_1.upload-file__input(type="file", name="file", required, accept=".jpg, .jpeg, .png, .gif, .bmp, .doc, .docx, .xls, .xlsx, .txt, .tar, .zip, .7z, .7zip")
                                        .personal-date
                                            input#input__date_1.input__date(type="checkbox", name="personal-date" required)
                                            label.label-date(for="input__date_1") Согласие на обработку персональных данных
                                        input.send-submit(type="submit" value="Отправить форму")
                    .availabel__files
                        p.availabel__title Доступные файлы
                        .download__form-block
                            .download__container
                                .download__text
                                    .download__number
                                        .number 1
                                    p.download__application Заявление на предоставление fadas академического отпуска
                                .download_links
                                    a(href="#" download).download__write-button 
                                        figure.icon-download
                                        span Скачать
                                    a(href="#" target="_blank").target__write-button 
                                        figure.icon-target
                                        span Открыть в новом окне
                        .download__form-block
                            .download__container
                                .download__text
                                    .download__number
                                        .number 2
                                    p.download__application Заявление на предоставление академического отпуска
                                .download_links
                                    a(href="#" download).download__write-button 
                                        figure.icon-download
                                        span Скачать
                                    a(href="#" target="_blank").target__write-button 
                                        figure.icon-target
                                        span Открыть в новом окне
                        .download__form-block
                            .download__container
                                .download__text
                                    .download__number
                                        .number 3
                                    p.download__application Заявление на предоставление академического отпуска
                                .download_links
                                    a(href="#" download).download__write-button 
                                        figure.icon-download
                                        span Скачать
                                    a(href="#" target="_blank").target__write-button 
                                        figure.icon-target
                                        span Открыть в новом окне
                        .download__form-block
                            .download__container
                                .download__text
                                    .download__number
                                        .number 4
                                    p.download__application Заявление на предоставление академического отпуска
                                .download_links
                                    a(href="#" download).download__write-button 
                                        figure.icon-download
                                        span Скачать
                                    a(href="#" target="_blank").target__write-button 
                                        figure.icon-target
                                        span Открыть в новом окне

</template>
<script>
import headerNav from "../header-nav.vue";
import { mapGetters, mapActions } from "vuex";

export default {
    name: "avaliable-forms",
    components: {
        headerNav
    },
    data() {
        return {
            showWriteInFirst: false,
            showWriteInSecond: false,
            showWriteInThird: false,
            showWriteInFourth: false
        };
    },
    computed: {
        ...mapGetters(["FORMS", "USER_ID", "USER_NAME"])
    },
    async created() {
        let user = this.USER_ID
        if (user === null) {
            await this.REMEMBER_USER()
            this.FETCH_FORMS(this.USER_ID)
        } else {
            this.FETCH_FORMS(this.USER_ID)
        }
        
    },
    methods: {
        ...mapActions([
            "FETCH_FORMS",
            "REMEMBER_USER",
        ]),
        clickwriteInFirst() {
            this.showWriteInFirst = !this.showWriteInFirst;
            console.log(this.showWriteInFirst);
        },
        clickwriteInSecond() {
            this.showWriteInSecond = !this.showWriteInSecond;
            console.log(this.showWriteInSecond);
        },
        clickwriteInThird() {
            this.showWriteInThird = !this.showWriteInThird;
            console.log(this.showWriteInThird);
        },
        clickwriteInFourth() {
            this.showWriteInFourth = !this.showWriteInFourth;
            console.log(this.showWriteInFourth);
        }
    },
};
</script>

<style lang='scss'></style>
