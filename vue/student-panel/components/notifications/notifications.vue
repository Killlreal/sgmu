<template lang = "pug">
    .personal-area
        headerNav
        .main
            section.available
                .notification
                        p.notification__title Уведомления
                        .notification__form-block
                            .notification__container
                                .notification__text
                                    .notification__number
                                        .number 1
                                    p.notification__application Заявление на предоставление академического отпуска
                                .notification__alert
                                    img.img-alert(src="icons/alert.svg", alt="Важно")
                                    p.notification__alert_text Уважаемый Константин, Вы неверно указали ФИО ректора. Мы рассмотрим Ваше завявление после исправления ошибки. Уважаемый Константин, Вы неверно указали ФИО ректора. Мы рассмотрим Ваше завявление после исправления ошибки
                                .notification_links
                                    button.notification__rewrite-button 
                                        figure.icon-pencile
                                        span Редактировать
                                    button.notification__delete-button 
                                        figure.icon-delete
                                        span Удалить
                        .notification__form-block
                            .notification__container
                                .notification__text
                                    .notification__number
                                        .number 2
                                    p.notification__application Заявление на предоставление академического отпуска
                                .notification__alert
                                    img.img-alert(src="icons/alert.svg", alt="Важно")
                                    p.notification__alert_text Уважаемый Константин, Вы неверно указали ФИО ректора. Мы рассмотрим Ваше завявление после исправления ошибки. Уважаемый Константин, Вы неверно указали ФИО ректора. Мы рассмотрим Ваше завявление после исправления ошибки
                                .notification_links
                                    button.notification__rewrite-button 
                                        figure.icon-pencile
                                        span Редактировать
                                    button.notification__delete-button 
                                        figure.icon-delete
                                        span Удалить
                        .notification__form-block
                            .notification__container
                                .notification__text
                                    .notification__number
                                        .number 3
                                    p.notification__application Заявление на предоставление академического отпуска
                                .notification__alert
                                    img.img-alert(src="icons/alert.svg", alt="Важно")
                                    p.notification__alert_text Уважаемый Константин, Вы неверно указали ФИО ректора. Мы рассмотрим Ваше завявление после исправления ошибки. Уважаемый Константин, Вы неверно указали ФИО ректора. Мы рассмотрим Ваше завявление после исправления ошибки
                                .notification_links
                                    button.notification__rewrite-button 
                                        figure.icon-pencile
                                        span Редактировать
                                    button.notification__delete-button 
                                        figure.icon-delete
                                        span Удалить

</template>
<script>
import headerNav from "../header-nav.vue";
import { mapGetters, mapActions } from "vuex";

export default {
    name: "notifications",
    components: {
        headerNav
    },
    data() {
        return {};
    },
    methods: {
        ...mapActions([
            "FETCH_FORMS",
            "REMEMBER_USER",
        ]),
    },
    computed: {
        ...mapGetters(["USER_ID","USER_NAME"])
    },
    async created() {
        console.log("try to call REMEMBER_USER")
        let user = this.USER_ID
        console.log(user)
        if (user === null){ await this.REMEMBER_USER()
            console.log("remembered")
        }
        // this.FETCH_FORMS(user) // fetch notifications
    },
};
</script>

<style lang='scss'></style>
