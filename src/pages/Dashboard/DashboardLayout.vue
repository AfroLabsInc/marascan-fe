<template>
  <q-layout view="lhh lpR lfr">
    <q-header class="bg-white text-black q-py-sm" height-hint="98">
      <div class="nav-bar">
        <q-toolbar>
          <q-toolbar-title class="q-ml-md">
            <q-img
              src="../../assets/logo.svg"
              v-if="false"
              spinner-color="primary"
              style="width: 71.5px; height: 39.85px"
              spinner-size="82px"
            />
          </q-toolbar-title>
          <q-btn
            label="Donate"
            color="primary"
            no-caps
            class="donate-btn q-mr-xs"
          />
        </q-toolbar>
      </div>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" bordered>
      <side-bar></side-bar>
    </q-drawer>
    <q-drawer v-model="rightDrawerOpen" side="right" bordered>
      <div class="q-pl-md">
        <h6>Recent Activity</h6>
      </div>
      <q-list>
        <q-item class="cursor-pointer">
          <q-item-section>Icon as avatar</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import SideBar from 'src/components/SideBar.vue';
import { ref } from 'vue';
export default {
  name: 'DashboardLayout',
  setup() {
    const leftDrawerOpen = ref(true);
    const rightDrawerOpen = ref(true);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
  components: { SideBar },
};
</script>
