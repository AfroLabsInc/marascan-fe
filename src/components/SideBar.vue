<template>
  <div class="side-bar">
    <div class="side-bar-logo">
      <q-img
        src="../assets/logo.svg"
        spinner-color="primary"
        style="width: 71.5px; height: 39.85px"
        spinner-size="82px"
      />
    </div>
    <q-space />
    <q-list padding class="q-ma-lg q-col-gutter-lg">
      <q-item
        clickable
        class="item-class rounded-borders"
        exact-active-class="exact-active-class"
        v-ripple
      >
        <q-item-section avatar>
          <q-icon name="home" />
        </q-item-section>
        <q-item-section>Home</q-item-section>
      </q-item>

      <q-item
        clickable
        to="/donor/dashboard"
        class="item-class rounded-borders"
        exact-active-class="exact-active-class"
        v-ripple
      >
        <q-item-section avatar>
          <q-icon name="dashboard" />
        </q-item-section>
        <q-item-section>Dashboard</q-item-section>
      </q-item>

      <q-item
        clickable
        class="item-class rounded-borders"
        exact-active-class="exact-active-class"
        v-ripple
      >
        <q-item-section avatar>
          <q-icon name="travel_explore" />
        </q-item-section>
        <q-item-section>MaraScan</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'SideBar',
});
</script>
