<template>
  <q-page class="continue row items-center justify-evenly">
    <!-- <div> -->
    <div class="text-h4">Continue as</div>
    <div class="row items-center justify-center continue-div">
      <div
        class="continue-card shadow-1 rounded-borders row items-center justify-evenly"
      >
        <div class="text-h6">Individual</div>
      </div>
      <div
        class="continue-card shadow-1 rounded-borders row items-center justify-evenly"
      >
        <div class="text-h6">Organisation</div>
      </div>
    </div>
    <div>
      <q-btn color="primary" no-caps class="continue-btn" label="Continue" />
    </div>
    <!-- </div> -->
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',

  setup() {
    return {};
  },
});
</script>
