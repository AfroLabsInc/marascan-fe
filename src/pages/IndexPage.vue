<template>
  <q-page class="continue row items-center justify-evenly">
    <!-- <div> -->
    <div class="text-h4">Continue as</div>
    <div class="row items-center justify-center continue-div">
      <div
        v-for="(t, i) in donorTypes"
        :key="i"
        @click="selectType(t)"
        class="continue-card shadow-1 rounded-borders row items-center justify-evenly"
      >
        <svg
          :class="selectedType !== t ? 'hidden' : ''"
          class="active-tick"
          width="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0C4.4775 0 0 4.4775 0 10C0 15.5225 4.4775 20 10 20C15.5225 20 20 15.5225 20 10C20 4.4775 15.5225 0 10 0ZM8.45 14.6144L3.84875 10.0125L5.61625 8.245L8.44938 11.0794L14.46 5.06875L16.2275 6.83625L8.45 14.6144Z"
            fill="#ffda03"
          />
        </svg>
        <div class="text-h6">{{ t }}</div>
      </div>
    </div>
    <div>
      <q-btn
        color="primary"
        :disable="selectedType == ''"
        no-caps
        :to="{ name: 'create-account', params: { donorType: selectedType } }"
        class="continue-btn"
        label="Continue"
      />
    </div>
    <!-- </div> -->
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const donorTypes = ref(['Organization', 'Individual']);
const selectedType = ref('');
function selectType(type: string) {
  selectedType.value = type;
}
</script>
<style>
.active-tick {
  position: absolute;
  top: 15px;
  right: 15px;
}
</style>
