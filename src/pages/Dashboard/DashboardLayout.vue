<template>
  <q-layout view="lhh lpR lFf">
    <div class="nav-bar">
      <q-toolbar>
        <q-toolbar-title class="q-ml-md">
          <q-img
            src="../../assets/logo.svg"
            spinner-color="primary"
            style="width: 71.5px; height: 39.85px"
            spinner-size="82px"
          />
        </q-toolbar-title>
      </q-toolbar>
    </div>
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <side-bar></side-bar>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import SideBar from 'src/components/SideBar.vue';

export default {
  name: 'DashboardLayout',
  setup() {
    return {};
  },
  components: { SideBar },
};
</script>
