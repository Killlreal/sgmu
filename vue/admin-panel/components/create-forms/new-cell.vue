<template lang="pug">
    .new-cell
        .new-cell__title-wrapper
            .new-cell__name(v-if="!changeName") {{info.name}}
            input.new-cell__name_change(v-else v-model="info.name")
            ul.new-cell__actions
                li.new-cell__edit(@click="changeCell")
                    svg
                        use(v-if="!changeName" href='icons/icons.svg#form-edit')
                        use(v-else href='icons/icons.svg#form-enter')
                li.new-cell__delete(@click="removeCell")
                    svg
                        use(href='icons/icons.svg#form-delete')
        .new-cell__inner.major-input 
            input.major-input__field(v-bind:placeholder="info.type" v-model="info.tip") 
            .major-input_leftup
            .major-input_rightup
            .major-input_leftbottom
            .major-input_rightbottom
</template>
<script>
import {mapActions} from "vuex"
export default {
    name: "new-cell",
    data() {
        return {
            changeName: false,
        };
    },
    props: {
    info: {
      type: Object,
        name: null,
        type:null,
        tip:null,
      default() {
        return {};
      }
    }
  },
    methods: {
        ...mapActions([
            'CHANGE_FIELD'
        ]),
        removeCell() {
      this.$emit('delete-cell')
    },
        changeCell() {
        this.changeName = !this.changeName
        this.CHANGE_FIELD
    },
  },
};
</script>

<style lang='scss'></style>
