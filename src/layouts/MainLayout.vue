<template>
  <q-layout view="lHh Lpr lFf">
    <div class="nav-bar" v-if="route.name === 'dashboard-donor'">
      <q-toolbar>
        <q-toolbar-title class="q-ml-md">
          <q-img
            src="../assets/logo.svg"
            spinner-color="primary"
            style="width: 71.5px; height: 39.85px"
            spinner-size="82px"
          />
        </q-toolbar-title>
      </q-toolbar>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
    <connect-wallet
      :connectCoinbase="ConnectCoinBaseWallet"
      :connectMetaMask="ConnectMetaMaskWallet"
      :connectWalletConnect="ConnectWalletConnect"
    ></connect-wallet>
  </q-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import {
  switchNetwork,
  connectCoinbase,
  connectMetaMask,
  WalletConnect,
  WalletIsConnected,
} from 'src/scripts/utils/walletUtil';
import { useUserStore } from '../stores/user';
const route = useRoute();
const leftDrawerOpen = ref(false);

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
</script>
