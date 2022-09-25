<template>
  <div class="row q-pa-md">
    <!-- <div class=""> -->
    <div class="col-12">
      <q-btn
        square
        class="full-width my-input q-py-lg"
        unelevated
        color="white"
        text-color="black"
        flat
        no-caps
        label="Crypto"
      />
    </div>
    <div class="col-12" v-if="!$store.account">
      <wallet-connect
        :connectCoinbase="ConnectCoinBaseWallet"
        :connectMetaMask="ConnectMetaMaskWallet"
        :connectWalletConnect="ConnectWalletConnect"
      />
    </div>
    <!-- </div> -->
    <div class="col-12" v-else-if="showWindow == 1">
      <div class="column text-center q-mb-md relative-position">
        <div class="text-h5 q-pb-md">Amount</div>
        <!-- <div
          class="text-h4 text-grey-6"
          v-if="!choseInput"
          @click="choseInput = true"
        >
          {{ amountCrypto }}
        </div> -->
        <div class="row items-center justify-center amount">
          <!-- <span class="fs-20">$</span> -->
          <!-- <input
            type="number"
            v-model="amountCrypto"
            class="card-input"
            style=""
          /> -->
          <q-input
            v-model="amountCrypto"
            class="fs-18 card-input text-right"
            style="min-width: 260px; text-align: center"
            type="number"
          />
          <q-select
            v-model="selectedToken"
            class="q-mx-md"
            :options="approvedTokens"
          />
        </div>
        <!-- <div class="text-h4 text-grey-6 flex justify-center" v-if="choseInput">
          <div class="row">
            <div>
              <q-input
                outlined
                square
                type="number"
                style="min-width: 40px; max-width: 100px"
                v-model="amountCrypto"
              />
            </div>
            <div>
              <q-btn
                @click="choseInput = false"
                label="submit"
                square
                dense
                unelevated
                color="primary"
                class="full-height"
              />
            </div>
          </div>
        </div> -->
        <!--
        <q-select
          standout
          v-model="selectedToken"
          class="q-mx-md"
          :options="approvedTokens"
          rounded
        /> -->
      </div>
      <q-item flat class="q-mb-md q-px-none">
        <q-item-section>
          <div class="text-caption text-grey-9">Connected</div>
          <div class="text-caption text-primary">
            {{ $store.AccountFormated }}
          </div>
        </q-item-section>
        <q-item-section avatar>
          <q-btn
            rounded
            unelevated
            outline
            no-caps
            class="my-btn"
            color="black"
            label="Switch Account"
          >
          </q-btn>
        </q-item-section>
      </q-item>

      <div class="row q-col-gutter-md">
        <div class="col-12 col-md-12 col-lg-12">
          <div class="q-mb-sm text-grey-10">
            <small>Select Conservancy</small>
          </div>
          <q-select
            class="bg-white"
            outlined
            @filter="filterFn"
            v-model="selectedConservancy"
            :options="conservancies"
          />
        </div>
        <div v-if="selectedConservancy" class="col-12 col-md-12 col-lg-12">
          <div class="q-mb-sm text-grey-6">
            <small>Select Category in {{ selectedConservancy.name }}</small>
          </div>
          <q-select
            class="bg-white"
            outlined
            @filter="filterFnCat"
            v-model="selectedCategory"
            :options="allCategoriesInConservancy"
          />
        </div>
        <div class="col-12 col-md-12 col-lg-12">
          <div class="q-mb-sm text-grey-6"><small>Notes</small></div>
          <q-input type="textarea" class="bg-white" v-model="notes" outlined />
        </div>
        <div class="col-12 col-md-12 col-lg-12">
          <q-checkbox
            style="font-size: 12px"
            v-model="terms"
            label="I would like to cover processing fee and other expenses"
          />
        </div>
        <div class="col-12 col-md-12 col-lg-12">
          <q-btn
            size="md"
            style="width: 100%"
            class="my-btn q-mt-md"
            label="Proceed to pay"
            no-caps
            :loading="loadingProcess"
            @click="createDonationRequest"
            unelevated
            color="secondary"
          />
        </div>
      </div>
      <div class="col-12 col-md-12 col-lg-12 text-center">Step 1 of 3</div>
    </div>
    <div class="col-12" v-else-if="showWindow == 2">
      <div class="column text-center q-mb-md relative-position">
        <div class="text-center">
          <div class="text-caption tex-grey-10">Amount</div>
          <div class="text-subtitle">
            {{ amountCrypto }} {{ selectedToken.value }}
          </div>
        </div>
        <div class="text-center">
          <div class="text-caption text-grey-6">Conservancy</div>
          : <span class="text-black">{{ selectedConservancy?.name }}</span>
        </div>
        <div class="text-center">
          <div class="text-caption text-grey-6">Beneficiaries</div>
          <div class="text-subtitle">
            {{ selectedCategory?.title }}
          </div>
        </div>
        <div class="text-center">
          <div class="text-caption text-grey-6">Note</div>
          <div class="text-subtitle">
            {{ notes }}
          </div>
        </div>
      </div>
      <div class="col-12 col-md-12 col-lg-12">
        <q-btn
          size="md"
          style="width: 100%"
          class="my-btn q-mt-md"
          label="Pay"
          no-caps
          :loading="loadingProcess"
          @click="cryptoPayment()"
          unelevated
          color="secondary"
        />
      </div>
      <div class="col-12 col-md-12 col-lg-12 text-center">Step 2 of 3</div>
    </div>
    <div class="col-12" v-else-if="showWindow == 3">
      <div class="column text-center q-mb-md relative-position">
        <div class="text-cente r">
          <div class="text-h5">Donation is currently being processed</div>
        </div>
        <div class="col-12 col-md-12 col-lg-12">
          <q-btn
            v-close-popup
            size="md"
            style="width: 20%"
            class="my-btn q-mt-md"
            label="Close"
            no-caps
            unelevated
            color="secondary"
          />
        </div>
        <!-- <div class="col-12 col-md-12 col-lg-12 text-center">Comp</div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// eslint-disable @typescript-eslint/no-explicit-any
import { ref, computed, Ref, ComputedRef } from 'vue';
import { usePaymentStore } from '../stores/payment';
import { useUserStore } from '../stores/user';
import { BigNumber } from 'ethers';
import approvedToken from '../scripts/approvedTokens';
import {
  BeneficiaryInput,
  categoriesInConservancy,
  Conservancy,
} from '../scripts/types/storeTypes';
import {
  connectCoinbase,
  connectMetaMask,
  WalletConnect,
  WalletIsConnected,
} from 'src/scripts/utils/walletUtil';

import MaraScan from '../scripts/utils/contractUtils';
const $store = useUserStore();
const payment = usePaymentStore();

const loadingCryptoDonation = ref(false);
const donationRequest = ref(1);
const selectedConservancy: Ref<Conservancy | null> = ref(null);
const selectedCategory: Ref<categoriesInConservancy | null> = ref(null);

// const currencyCard = ref('USD');
const amountCrypto = ref(0.0);
const loadingProcess = ref(false);
const notes = ref('');
const terms = ref(false);
const showWindow = ref(1);
const close_button = ref(false);
const selectedToken = ref({
  value: 'USDC',
  label: 'USDC',
  contractAddress: '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
  decimal: 1000000,
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
const filterFn = (val: any, update: any, abort: any) => {
  if (conservancies.value.length !== 0) {
    // already loaded
    update();
    return;
  }

  update(async () => {
    await payment.getAllConservancies();
  });
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
const filterFnCat = (val: any, update: any, abort: any) => {
  if (allCategoriesInConservancy.value.length !== 0) {
    // already loaded
    update();
    return;
  }

  update(
    async () =>
      await payment.getCategoriesInAConservancy(
        selectedConservancy.value?.id as number
      )
  );
};
const conservancies = computed(() => {
  return payment.allConservancies.map((c) => ({
    ...c,
    label: c.name,
  }));
});

const allCategoriesInConservancy = computed(() =>
  payment.categoriesInConservancy.map((c) => ({
    ...c,
    label: c.title,
  }))
);

const beneficiaryInput: ComputedRef<BeneficiaryInput | undefined> = computed(
  () =>
    selectedCategory.value?.beneficiaries.map((r) => [
      r.ethereumAccountAddress,
      r.land.numOfAcres,
    ])
);

// const donationRequest = computed(() => payment.currentDonationRequest);
const totalNumberOfAcres = computed(() =>
  selectedCategory.value?.beneficiaries
    .map((r) => r.land.numOfAcres)
    .reduce((acc, elem) => acc + elem)
);

const cryptoPayment = async () => {
  loadingCryptoDonation.value = true;
  const amount = selectedToken.value.decimal * amountCrypto.value;
  console.log(beneficiaryInput.value);
  const processPayment = async () => {
    await ms.makeDonation(
      amount,
      amountCrypto.value,
      selectedToken.value.contractAddress,
      $store.account,
      beneficiaryInput.value as BeneficiaryInput,
      totalNumberOfAcres.value as number,
      selectedToken.value.value == 'ETH',
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      payment.currentDonationRequestId,
      terms.value
    );
    showWindow.value = 3;
    await payment.getADonorsDonationRequest();
  };
  const ms = new MaraScan($store);
  if (selectedToken.value.value == 'ETH') {
    await processPayment();
  } else {
    const allowance: boolean = await ms.checkAllowace(
      amount,
      selectedToken.value.contractAddress,
      $store.account
    );

    if (allowance) {
      // step.value = 2;
      await processPayment();
    } else {
      await ms
        .approveContract(amount, selectedToken.value.contractAddress)
        .then(async (res) => {
          if (res) {
            // step.value = 2;
            await processPayment();
            // payment.getADonorsDonationRequest();
          }
        });
    }
  }
};

// list of approved tokens
const approvedTokens = ref(approvedToken);

// donation request function
const createDonationRequest = async () => {
  loadingProcess.value = true;
  const payload = {
    paymentMethod: 'crypto',
    categoryIds: [1],
    conservancyId: selectedConservancy.value?.id as number,
    amount: {
      currency: selectedToken.value.value,
      amount: Number(amountCrypto.value),
    },
    note: notes.value,
  };
  console.log(payload);
  await payment.createDonationRequest(payload).then(() => {
    showWindow.value = 2;
    donationRequest.value = payment.currentDonationRequestId;
  });
  loadingProcess.value = false;
};
/**
 * Connect WallectConnect
 */
const ConnectWalletConnect = () => WalletConnect($store, false);

/**
 * Connect CoinBase Wallet
 */
const ConnectCoinBaseWallet = () => connectCoinbase($store, false);

const LoadWallet = async () => {
  const res = await WalletIsConnected($store);
  console.log(res);
};
(async () => {
  await LoadWallet();
})();

const ConnectMetaMaskWallet = () => connectMetaMask($store, false);
</script>
<style lang="scss">
.amount {
  .q-field__native,
  .q-field__input {
    text-align: center;
    &::-webkit-outer-spin-button {
      -webkit-appearance: none !important;
      margin: 0;
    }
  }
}

.card-input:focus {
  outline: none;
}
.card-input {
  width: 200px;
  height: 50px;
  font-size: 45px;
  border: none;
  color: #7a7676;
  font-weight: 400;
  /* text-align: center; */
}
</style>
