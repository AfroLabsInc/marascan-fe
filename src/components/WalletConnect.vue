<template>
  <q-dialog v-model="isOpened">
    <q-card class="dialog-card">
      <q-tabs
        v-model="tab"
        class="text-grey"
        active-color="black"
        indicator-color="black"
        align="justify"
      >
        <q-tab name="crypto" label="Crypto" />
        <q-separator vertical />
        <q-tab name="card" label="Card" />
      </q-tabs>

      <!-- <q-separator /> -->

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="crypto">
          <div class="text-h6 text-grey">Connect Crypto Wallet</div>
          <div>
            <q-list>
              <q-item clickable class="q-my-lg q-py-lg rounded-borders">
                <q-item-section avatar>
                  <q-icon size="lg" name="img:img/coinbase.png" />
                </q-item-section>
                <q-item-section>CoinBase</q-item-section>
              </q-item>
              <q-item clickable class="q-my-lg q-py-lg">
                <q-item-section avatar>
                  <q-icon size="lg" name="img:img/wc.png" />
                </q-item-section>
                <q-item-section>Wallet Connect</q-item-section>
              </q-item>
              <q-item clickable class="q-my-lg q-py-lg">
                <q-item-section avatar>
                  <q-icon size="lg" name="img:img/metamask.png" />
                </q-item-section>
                <q-item-section>MetaMask</q-item-section>
              </q-item>
            </q-list>
          </div>
        </q-tab-panel>

        <q-tab-panel name="card">
          <div class="text-h6">Alarms</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'WalletConnect',
  data() {
    return {
      isOpened: true,
      tab: 'crypto',
    };
  },
  methods: {
    open() {
      this.isOpened = true;
    },
  },
});
</script>
