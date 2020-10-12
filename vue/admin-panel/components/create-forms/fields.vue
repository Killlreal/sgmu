<template lang="pug">
.input-types__inner
    .input-types__title {{ name.type }}
    .input-types__input-type.major-input
        .major-input__field
        .major-input_leftup
        .major-input_rightup
        .major-input_leftbottom
        .major-input_rightbottom

</template>
<script>
export default {
  name: "fields",
  data() {
    return {};
  },
  props: {
    name: {
      type: Object,
      type: null,
      default() {
        return {};
      }
    }
  },
  components: {}
};
</script>

<style lang='scss'></style>
