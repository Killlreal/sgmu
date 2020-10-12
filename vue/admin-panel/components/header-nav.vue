<template lang="pug">
header.header
    .container
        .header__inner
            nav.menu
                ul.menu__list
                    li
                        router-link(to="/readyforms")
                            span
                                svg
                                    use(href='icons/icons.svg#header-forms')
                            a Созданные формы
                    li
                        router-link(to="/uncheckforms")
                            span
                                svg
                                    use(href='icons/icons.svg#header-forms-list')
                            a Неразобранные формы
                    li
                        router-link(to="/createforms")
                            span
                                svg
                                    use(href='icons/icons.svg#header-form-create')
                            a Создать форму
                    li
                        router-link(to="/calendar")
                            svg
                                use(href='icons/icons.svg#header-dates')
                            a Календарь
            .header__line
            ul.header__auth
                li.header__auth_admin
                    a(href="#")
                        svg
                            use(href='icons/icons.svg#header-profile')
                        .header__auth_block-link 
                            p.header__auth_admin_name Христофоридная Апполинария
                            p.header__auth_admin_title (Администратор)
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
                        router-link(to="/readyforms")
                            a(@click="show=!show") Созданные формы
                    li
                        router-link(to="/uncheckforms")
                            a(@click="show=!show") Неразобранные формы
                    li
                        router-link(to="/")
                            a(@click="show=!show") Создать форму
                    li
                        router-link(to="/")
                            a(@click="show=!show") Календарь
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
export default {
    name: "header-nav",
    data() {
        return {
            show: false
        };
    },
    components: {},
    methods: {}
};
</script>

<style lang='scss'></style>
