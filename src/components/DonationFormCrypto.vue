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
    <!-- </div> -->
    <div class="col-12">
      <div class="column text-center q-mb-md relative-position">
        <div class="text-caption">Amount</div>
        <div
          class="text-h4 text-grey-6"
          v-if="!choseInput"
          @click="choseInput = true"
        >
          {{ amountCrypto }}
        </div>
        <div class="text-h4 text-grey-6 flex justify-center" v-if="choseInput">
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
        </div>

        <q-select
          standout
          v-model="selectedToken"
          class="q-mx-md"
          :options="approvedTokens"
          rounded
        />
      </div>
      <q-item flat class="q-mb-md q-px-none">
        <q-item-section>
          <div class="text-caption text-grey-6">Connected</div>
          <div class="text-caption text-primary">0x051...21e7</div>
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
          <div class="q-mb-sm text-grey-6">
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
            v-close-popup
            size="md"
            style="width: 100%"
            class="my-btn q-mt-md"
            label="Proceed to pay"
            no-caps
            unelevated
            color="secondary"
          />
        </div>
        <div class="col-12 col-md-12 col-lg-12 text-center">Step 1 of 3</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, Ref } from 'vue';
import { usePaymentStore } from '../stores/payment';
import {
  categoriesInConservancy,
  Conservancy,
} from '../scripts/types/storeTypes';
const payment = usePaymentStore();

// (async () => {
//   await payment.getAllConservancies();
// })();

const choseInput = ref(false);
const selectedConservancy: Ref<Conservancy | null> = ref(null);
const selectedCategory: Ref<categoriesInConservancy | null> = ref(null);
// const currencyCard = ref('USD');
const amountCrypto = ref(0.0);
const notes = ref('');
const terms = ref(false);
const selectedToken = ref({
  value: 'USDC',
  label: 'USDC',
  contractAddress: '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
  decimal: 1000000,
});

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
const filterFnCat = (val: any, update: any, abort: any) => {
  if (selectedConservancy.value !== null) {
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

const beneficiaryInput = () =>
  selectedCategory.value?.beneficiaries.map((r) => [
    r.address,
    r.land.numOfAcres,
  ]);

const totalNumberOfAcres = () =>
  selectedCategory.value?.beneficiaries
    .map((r) => r.land.numOfAcres)
    .reduce((acc, elem) => acc + elem);

const approvedTokens = ref([
  { value: 'ETH', label: 'ETH', contractAddress: '' },
  {
    value: 'USDC',
    label: 'USDC',
    contractAddress: '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
    decimal: 1000000,
  },
  {
    value: 'USDT',
    label: 'USDT',
    contractAddress: '0x509Ee0d083DdF8AC028f2a56731412edD63223B9',
    decimal: 1000000,
  },
  {
    value: 'APECOIN',
    label: 'APECOIN',
    contractAddress: '0x73967c6a0904aA032C103b4104747E88c566B1A2',
    decimal: 1000000000000000000,
  },
]);
</script>
