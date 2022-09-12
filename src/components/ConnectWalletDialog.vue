<template>
  <q-dialog v-model="store.openWalletModal">
    <div class="q-pa-lg dialog-card">
      <q-card class="connect-modal q-pa-sm">
        <div>
          <div class="text-h6 text-grey q-pa-md">Connect Crypto Wallet</div>
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
        <!--
        <q-card-section v-if="!walletIsDenied" class="q-pa-md">
          <div
            @click="toggleReadmore()"
            class="text-center text-negative cursor-pointer"
          >
            <span>Your wallet address is not approved for mint</span>
            <q-icon v-if="read_more" class="text-grey q-ml-sm" name="arrow_drop_up" />
            <q-icon v-else class="text-grey q-ml-sm" name="arrow_drop_down" />
          </div>
          <transition
            enter-active-class="animated slideInDown"
            leave-active-class="animated slideInUp"
            v-show="read_more"
            class="q-mt-sm"
          >
            <p class="text-grey text-center">{{ store.getters['utils/getErrorMessage'].msg }}</p>
          </transition>
        </q-card-section> -->
      </q-card>
    </div>
  </q-dialog>
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

const read_more = ref(true);

function toggleReadmore() {
  read_more.value = !read_more.value;
}
</script>
<style lang="scss">
.close_button {
  margin-top: -30px;
  margin-right: -30px;
}
.connectModal {
  padding: 0;
}

.walletconnect {
  cursor: pointer;
  padding: 10px;
  .walletconnect-img {
    width: 140px;
    height: 90px;
  }
  &:hover {
    background: rgba(51, 50, 50, 0.933);
    border-radius: 4px;
  }
}

.coinbase {
  cursor: pointer;
  padding: 10px;
  .coinbase-img {
    width: 90px;
    height: 90px;
  }
  &:hover {
    background: rgba(168, 167, 167, 0.933);
    border-radius: 4px;
  }
}
.metamask {
  cursor: pointer;
  padding: 10px;
  .metamask-img {
    width: 100px;
    height: 90px;
  }
  &:hover {
    background: rgba(168, 167, 167, 0.933);
    border-radius: 4px;
  }
}

.q-dialog__backdrop {
  background: rgb(0, 0, 0, 0.85);
}

.connect-modal {
  // background: #424242;
  border-radius: 10px;
  &-header {
    font-size: 30px;
    line-height: 45px;
    letter-spacing: -0.008em;
    // color: #ffffff;
  }
  &-subtitle {
    font-size: 18px;
    line-height: 23px;
    /* identical to box height */

    letter-spacing: -0.008em;
  }
}
</style>
