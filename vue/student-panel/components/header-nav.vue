<template lang="pug">
header.header
    .container
        .header__inner
            nav.menu
                ul.menu__list
                    li
                        router-link(to="/myforms")
                            span
                                svg
                                    use(href='icons/icons.svg#header-forms')
                            a Мои формы
                    li
                        router-link(to="/notifications")
                            span
                                svg
                                    use(href='icons/icons.svg#header-forms-list')
                            a Уведомления
                    li
                        router-link(to="/avaliableforms")
                            span
                                svg
                                    use(href='icons/icons.svg#header-form-create')
                            a Доступные формы
            .header__line
            ul.header__auth
                li.header__auth_admin
                    a(href="#")
                        svg
                            use(href='icons/icons.svg#header-profile')
                        .header__auth_block-link 
                            p.header__auth_admin_name Константинов Константин 
                            p.header__auth_admin_title (Студент)
                li
                    a(href="#")
                        svg
                            use(href='icons/icons.svg#header-logout')
                        span.header__auth_exit Выйти

        .header__mobile
            nav.menu
                .menu__btn(@click="show=!show")
                    svg
                        use(href='icons/icons.svg#menu-btn')
                ul.menu__list(v-if="show")
                    li
                        router-link(to="/myforms")
                            a(@click="show=!show") Мои формы
                    li
                        router-link(to="/notifications")
                            a(@click="show=!show") Уведомления
                    li
                        router-link(to="/avaliableforms")
                            a(@click="show=!show") Доступные формы
                    .menu__btn-close(@click="show=!show")
                        svg
                            use(href='icons/icons.svg#form-close')
            
            ul.header__auth
                li
                    span
                        svg
                            use(href='icons/icons.svg#header-profile')
                li
                    span
                        svg
                            use(href='icons/icons.svg#header-logout')
        



</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "header-nav",
    data() {
        return {
            show: false
        };
    },
    computed: {
        ...mapGetters(["USER_NAME"])
    },
    components: {},
    methods: {}
};
</script>

<style lang='scss'></style>
