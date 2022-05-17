<template>
  <button class="uk-button uk-button-default">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "uk-button",
});
</script>
