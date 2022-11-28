<template>
  <q-layout view="lHh lpR fFf">
    <q-header bordered class="bg-white">
      <q-toolbar>
        <q-btn
          color="black"
          v-if="$q.platform.is.mobile"
          dense
          flat
          round
          icon="menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Title </q-toolbar-title>

        <q-btn
          color="primary"
          unelevated
          label="Donate"
          class="my-btn"
          no-caps
          @click="donationFormModalShow = true"
        />

        <q-btn
          color="black"
          v-if="$q.platform.is.mobile"
          dense
          flat
          round
          icon="menu"
          @click="toggleRightDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <div class="q-pa-md">
        <LogoBlack />
      </div>
      <q-list class="q-px-md">
        <q-item
          :class="route.name == 'dashboard' ? 'menu-active' : ''"
          exact
          clickable
          v-ripple
          to="/donor/dashboard"
        >
          <q-item-section avatar>
            <q-icon name="ion-apps" />
          </q-item-section>
          <q-item-section> Dashboard </q-item-section>
        </q-item>

        <q-item
          :class="
            route.name == 'dashboard-donor-proflie' ||
            route.name == 'dashboard-donor-proflie-edit'
              ? 'menu-active'
              : ''
          "
          exact
          clickable
          v-ripple
          :to="{ name: 'dashboard-donor-proflie' }"
        >
          <q-item-section avatar>
            <q-icon name="ion-apps" />
          </q-item-section>
          <q-item-section> Profile </q-item-section>
        </q-item>

        <q-item
          :class="route.name == 'marascan' ? 'menu-active' : ''"
          exact
          clickable
          v-ripple
          to="/donor/dashboard/marascan"
        >
          <q-item-section avatar>
            <q-icon name="ion-apps" />
          </q-item-section>
          <q-item-section> Marascan </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <div class="q-pa-md">
        <div class="text-subtitle1 q-mb-md">Recent Activity</div>
        <div class="text-caption">Logged In</div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view class="q-pa-md" />
    </q-page-container>

    <q-dialog v-model="donationFormModalShow">
      <DonationForm style="width: 500px" />
    </q-dialog>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { usePaymentStore } from '../stores/payment';
import { useQuasar } from 'quasar';
import { useRoute } from 'vue-router';
import DonationForm from 'src/components/DonationForm.vue';

export default {
  preFetch({ store }) {
    const payment = usePaymentStore(store);
  },
  setup() {
    const payment = usePaymentStore();

    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);
    const $q = useQuasar();
    const route = useRoute();
    const donationFormModalShow = ref(false);
    return {
      route,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
      donationFormModalShow,
    };
  },
};
</script>

<style>
.menu-active {
  background: #000;
  border-radius: 100px;
  color: #fff !important;
}
.q-item.q-router-link--active,
.q-item--active {
  background: #000;
  border-radius: 100px;
  color: #fff !important;
}
</style>
