<template>
  <q-layout view="lh Lpr lFf">
    <q-header class="bg-transparent q-py-md">
      <div class="container">
        <q-toolbar>
          <q-btn
            v-if="$q.platform.is.mobile"
            :color="route.name == 'index' ? 'white' : 'black'"
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />
          <q-space v-if="$q.platform.is.mobile" />
          <q-toolbar-title
            :class="$q.platform.is.mobile ? 'flex justify-end' : ''"
          >
            <LogoWhite v-if="route.name == 'index'" />
            <LogoBlack v-else />
          </q-toolbar-title>

          <div v-if="!$q.platform.is.mobile && route.name == 'index'">
            <q-btn class="my-btn" label="Home" to="/" no-caps flat />
            <q-btn
              class="my-btn"
              label="Donate"
              to="/donor/get-started"
              no-caps
              flat
            />
            <q-btn
              class="my-btn"
              label="Become a Beneficiary"
              to="/"
              no-caps
              flat
            />
          </div>
        </q-toolbar>
      </div>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <q-page-container class="my-page-container">
      <router-view />
    </q-page-container>

    <footer class="my-footer pt-100 pb-100">
      <div class="container">
        <div class="row q-col-gutter-md q-mb-md">
          <div
            class="col-12 col-md-2 col-lg-2 flex items-center justify-center"
          >
            <LogoWhite />
          </div>
          <div class="col-12 col-md-8 col-lg-8 flex items-center">
            <div class="row justify-between q-col-gutter-md full-width">
              <div
                class="col-12 col-md-auto col-lg-auto flex items-center justify-center"
              >
                <router-link
                  style="text-decoration: none"
                  class="text-white"
                  to="/"
                  >Home</router-link
                >
              </div>
              <div
                class="col-12 col-md-auto col-lg-auto flex items-center justify-center"
              >
                <router-link
                  style="text-decoration: none"
                  class="text-white"
                  to="/donor/get-started"
                  >Donate</router-link
                >
              </div>
              <div
                class="col-12 col-md-auto col-lg-auto flex items-center justify-center"
              >
                <router-link
                  style="text-decoration: none"
                  class="text-white"
                  to="/"
                  >Roadmap</router-link
                >
              </div>
              <div
                class="col-12 col-md-auto col-lg-auto flex items-center justify-center"
              >
                <router-link
                  style="text-decoration: none"
                  class="text-white"
                  to="/"
                  >Blog</router-link
                >
              </div>
              <div
                class="col-12 col-md-auto col-lg-auto flex items-center justify-center"
              >
                <router-link
                  style="text-decoration: none"
                  class="text-white"
                  to="/"
                  >Become a beneficiary</router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="text-grey-6 text-center text-caption">
          © Copyright 2022. All rights reserved.
        </div>
      </div>
    </footer>
    <connect-wallet
      :connectCoinbase="ConnectCoinBaseWallet"
      :connectMetaMask="ConnectMetaMaskWallet"
      :connectWalletConnect="ConnectWalletConnect"
    ></connect-wallet>
    <q-dialog v-model="donationFormModalShow">
      <DonationForm style="width: 500px" />
    </q-dialog>
  </q-layout>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import {
  connectCoinbase,
  connectMetaMask,
  WalletConnect,
  WalletIsConnected,
} from 'src/scripts/utils/walletUtil';
import { useUserStore } from '../stores/user';
import EssentialLink from 'components/EssentialLink.vue';
const essentialLinks = ref([
  {
    title: 'Home',
    icon: '',
    link: '/',
  },
  {
    title: 'Donate',
    icon: '',
    link: '/donor/get-started',
  },
  {
    title: 'Become a Beneficiary',
    icon: '',
    link: '/',
  },
]);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
const route = useRoute();

const $store = useUserStore();

/**
 * Connect WallectConnect
 */
const ConnectWalletConnect = () => WalletConnect($store);

/**
 * Connect CoinBase Wallet
 */
const ConnectCoinBaseWallet = () => connectCoinbase($store);

const LoadWallet = async () => {
  const res = await WalletIsConnected($store);
  console.log(res);
};
(async () => {
  await LoadWallet();
})();
/**
 * Connect MetaMask Wallet
 */
const ConnectMetaMaskWallet = () => connectMetaMask($store);
const leftDrawerOpen = ref(false);
const $q = useQuasar();
const donationFormModalShow = ref(false);
</script>
