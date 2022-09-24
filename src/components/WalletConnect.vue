<template>
  <div>
    <div class="text-h6 text-grey">Connect Crypto Wallet</div>
    <div>
      <q-list>
        <q-item
          clickable
          @click="() => props.connectCoinbase()"
          class="q-my-lg q-py-lg rounded-borders"
        >
          <q-item-section avatar>
            <q-icon size="lg" name="img:img/coinbase.png" />
          </q-item-section>
          <q-item-section>CoinBase</q-item-section>
        </q-item>
        <q-item
          clickable
          @click="() => props.connectWalletConnect()"
          class="q-my-lg q-py-lg"
        >
          <q-item-section avatar>
            <q-icon size="lg" name="img:img/wc.png" />
          </q-item-section>
          <q-item-section>Wallet Connect</q-item-section>
        </q-item>
        <q-item
          clickable
          @click="() => props.connectMetaMask()"
          class="q-my-lg q-py-lg"
        >
          <q-item-section avatar>
            <q-icon size="lg" name="img:img/metamask.png" />
          </q-item-section>
          <q-item-section>MetaMask</q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, defineProps } from 'vue';
import { useUserStore } from '../stores/user';
const store = useUserStore();
const props = defineProps({
  connectMetaMask: { type: Function, required: true },
  connectCoinbase: { type: Function, required: true },
  connectWalletConnect: { type: Function, required: true },
});

console.log('loaded');
</script>
