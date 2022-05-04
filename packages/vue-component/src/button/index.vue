<template>
  <button class="uk-button uk-button-default">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";

export default defineComponent({
  name: "uk-button",
});
</script>
