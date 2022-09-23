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
        <q-tab name="crypto" label="Crypto" class="q-pa-md" />
        <q-separator vertical />
        <q-tab name="card" label="Card" class="q-pa-md" />
      </q-tabs>

      <!-- <q-separator /> -->

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="crypto">
          <wallet-dialogue
            v-if="!account"
            :connectCoinbase="ConnectCoinBaseWallet"
            :connectMetaMask="ConnectMetaMaskWallet"
            :connectWalletConnect="ConnectWalletConnect"
          />
          <div v-else>
            <div class="row justify-center bg-grey-3 q-pa-md rounded-borders">
              Connected as <span class="q-mx-md"> {{ accountFormated }}</span>
            </div>
            <div class="row justify-center bg-grey-3 q-pa-md">
              <q-btn
                flat
                text-color="black"
                class="text-center"
                icon-right="sync_alt"
                style="width: 260px"
                unelevated
                no-caps
                @click="cryptoDonation"
                label="Switch Account"
              />
            </div>

            <div class="row q-ma-md">
              <div
                class="row justify-between full-width rounded-borders bg-grey-3 q-pa-sm"
              >
                <q-input
                  v-model="amountCrypto"
                  class="fs-18"
                  style="min-width: 260px"
                  type="number"
                  standout
                />
                <q-select
                  standout
                  v-model="selectedToken"
                  class="q-mx-md"
                  :options="['ETH', 'USDC', 'USDT', 'APECOIN', 'DAI']"
                  rounded
                />
              </div>
            </div>
            <div class="row q-ma-md">
              <div
                class="row justify-center full-width rounded-borders bg-grey-3 q-pa-sm"
              >
                <!-- <q-input
                  v-model="amountCrypto"
                  class="fs-18"
                  style="min-width: 260px"
                  type="number"
                  standout
                /> -->
                <q-select
                  standout
                  label="Select a category in MasaiMara"
                  v-model="selectedCategory"
                  class="full-width"
                  :options="['MasaiMara']"
                />
                <div
                  class="row justify-center full-width rounded-borders bg-grey-3 q-pa-sm"
                >
                  <!-- <q-input
                  v-model="amountCrypto"
                  class="fs-18"
                  style="min-width: 260px"
                  type="number"
                  standout
                /> -->
                  <q-select
                    standout
                    label="Select a conservancy"
                    v-model="selectedConservancy"
                    class="full-width"
                    :options="['MasaiMara']"
                  />
                </div>
              </div>
              <div class="row justify-center q-pa-md q-ma-md">
                <div class="row items-center justify-evenly">
                  <div class="text-h6">Amount: &nbsp;&nbsp;</div>
                </div>
                <div class="row items-center justify-center">
                  <span class="fs-20">$</span
                  ><input
                    type="number"
                    v-model="amountUSDT"
                    class="card-input"
                    style=""
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <q-btn
                unelevated
                class="full-width"
                color="primary"
                @click="cryptoDonation"
                label="Approve"
                :loading="loadingCryptoDonation"
                type="submit"
              />
            </div>
            <div>Step {{ step }} of 3</div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="card">
          <!-- <div class="text-h6">Carle</div> -->
          <div class="q-my-lg">
            <q-img
              src="/img/visa logo.png"
              class="cards-accepted"
              spinner-color="primary"
              spinner-size="82px"
            />
            <q-space />
            <q-img
              src="/img/mastercard logo.png"
              class="cards-accepted"
              spinner-color="primary"
              spinner-size="82px"
            />
          </div>
          <div class="row items-center justify-evenly">
            <div class="text-h6">Amount</div>
          </div>
          <div class="row items-center justify-center">
            <span class="fs-20">$</span
            ><input
              type="number"
              v-model="amountCard"
              class="card-input"
              style=""
            />

            <!-- <span class="fs-20">USD</span> -->
          </div>
          <div class="row q-col-gutter-md">
            <!-- email -->
            <div class="col-12 col-md-12 col-lg-12">
              <label class="fs-13 q-mb-lg" for="fname">Cardholder</label>
              <q-input
                id="fname"
                outlined
                class="q-mt-md"
                v-model="card.cardHolder"
                placeholder="CardHolder's name"
                ref="name"
                lazy-rules
                :rules="[$rules.required('Please enter name on card')]"
              />
            </div>
            <div class="col-12 col-md-12 col-lg-12">
              <label class="fs-13 q-mb-lg" for="lname"
                >Credit Card Number</label
              >
              <q-input
                id="lname"
                outlined
                v-model="card.cardNumber"
                class="q-mt-md"
                ref="name"
                mask="####-####-####-####"
                lazy-rules
                :rules="[$rules.required('Provide your card numbers')]"
              />
            </div>
            <div class="col-12 col-md-8 col-lg-8 col-sm-8">
              <label class="fs-13 q-mb-lg" for="lname">Expiry Date</label>

              <q-input
                id="lname"
                outlined
                v-model="card.expiry_date"
                class="q-mt-md"
                ref="name"
                mask="##/##"
                lazy-rules
                :rules="[$rules.required('Provide card expiry date')]"
              />
            </div>
            <div class="col-12 col-md-4 col-lg-4 col-sm-4">
              <label class="fs-13 q-mb-lg" for="lname">CVV</label>
              <q-input
                id="lname"
                class="q-mt-md"
                outlined
                v-model="card.cvv"
                ref="name"
                mask="###"
                lazy-rules
                :rules="[$rules.required('Provide your card\'s CVV')]"
              />
            </div>
            <div class="col-12 col-md-4 col-lg-4 col-sm-4">
              <label class="fs-13 q-mb-lg" for="lname">CVV</label>
              <q-input
                id="lname"
                class="q-mt-md"
                outlined
                v-model="card.cvv"
                ref="name"
                mask="###"
                lazy-rules
                :rules="[$rules.required('Provide your card\'s CVV')]"
              />
            </div>

            <div class="col-12 col-md-4 col-lg-4 col-sm-4">
              <label class="fs-13 q-mb-lg" for="lname">CVV</label>
              <q-input
                id="lname"
                class="q-mt-md"
                outlined
                v-model="card.cvv"
                ref="name"
                mask="###"
                lazy-rules
                :rules="[$rules.required('Provide your card\'s CVV')]"
              />
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-12">
            <label class="text-subtitle2 q-mb-sm" for="fname">Country</label>
            <q-input outlined v-model="card.country" ref="address" />
          </div>
          <div class="col-12 col-md-12 col-lg-12">
            <label class="text-subtitle2 q-mb-sm" for="fname">City</label>
            <q-input outlined v-model="card.line1" ref="address" />
          </div>
          <div class="col-12 col-md-12 col-lg-12">
            <label class="text-subtitle2 q-mb-sm" for="fname">Address</label>
            <q-input outlined v-model="card.line2" ref="address" />
          </div>
          <div class="col-12 col-md-12 col-lg-12">
            <label class="text-subtitle2 q-mb-sm" for="fname">Address</label>
            <q-input outlined v-model="card.district" ref="address" />
          </div>
          <div class="row justify-between items-center q-mb-md">
            <q-checkbox class="text-grey-9" color="black" v-model="rememberCard"
              >Save my card for future donations</q-checkbox
            >
            <!-- <a href="#" class="forget-btn text-para-default"
                    >Forget password?</a
                  > -->
          </div>
          <div class="row">
            <q-btn
              unelevated
              text-color="black"
              class="full-width"
              color="primary"
              label="Donate"
              type="submit"
            />
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import {
  switchNetwork,
  connectCoinbase,
  connectMetaMask,
  WalletConnect,
  WalletIsConnected,
} from 'src/scripts/utils/walletUtil';
import { useUserStore } from '../stores/user';
import { useAuthStore } from '../stores/auth';
import { usePaymentStore } from '../stores/payment';
import MaraScan from '../scripts/utils/contractUtils';
import { BigNumber } from 'ethers';
export default defineComponent({
  name: 'WalletConnect',
  setup() {
    const $store = useUserStore();
    const payment = usePaymentStore();
    const auth = useAuthStore();

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

    const isOpened = ref(false);
    const loadingCryptoDonation = ref(false);
    const tab = ref('crypto');
    const selectedToken = ref({
      value: 'USDC',
      label: 'USDC',
      contractAddress: '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
      decimal: 1000000,
    });
    const currencyCard = ref('USD');
    const amountCard = ref(0.0);
    const amountUSDT = ref(10);
    const amountCrypto = ref(10);
    const currencyOptions = ref(['USD']);
    const rememberCard = ref(true);
    const selectedConservancy = ref('MasaiMara');
    const step = ref(1);
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
    const selectedCategory = ref('Land owners');

    const card = ref({
      cvv: '',
      cardNumber: '',
      cardHolder: '',
      expiry_date: '',
    });

    const account = computed(() => $store.account);

    const accountFormated = computed(() => $store.AccountFormated);

    const createDonationRequest = async () => {
      await payment.createDonationRequest({
        paymentMethod: tab.value,
        categoryIds: [1],
        amount: {
          currency: selectedToken.value.value,
          amount: amountCrypto.value,
        },
        note: '',
      });
    };
    const cryptoDonation = async () => {
      loadingCryptoDonation.value = true;
      const amount = BigNumber.from(
        selectedToken.value.decimal * amountCrypto.value
      );
      console.log(3);
      await createDonationRequest();
      const ms = new MaraScan($store);
      console.log(1);
      if (selectedToken.value.value == 'ETH') {
        console.log(2);
        step.value = 2;
        await ms.makeDonation(
          amount,
          amountCrypto.value,
          selectedToken.value.contractAddress,
          $store.account,
          selectedToken.value.value == 'ETH',
          payment.currentDonationRequest?.id as number
        );
      } else {
        console.log(1);
        const allowance: boolean = await ms.checkAllowace(
          amount,
          selectedToken.value.contractAddress,
          $store.account
        );
        console.log(allowance);
        if (allowance) {
          step.value = 2;
          await ms.makeDonation(
            amount,
            amountCrypto.value,
            selectedToken.value.contractAddress,
            $store.account,
            selectedToken.value.value == 'ETH',
            payment.currentDonationRequest?.id as number
          );
        } else {
          await ms
            .approveContract(amount, selectedToken.value.contractAddress)
            .then(async (res) => {
              if (res) {
                step.value = 2;
                await ms.makeDonation(
                  amount,
                  amountCrypto.value,
                  selectedToken.value.contractAddress,
                  $store.account,
                  selectedToken.value.value == 'ETH',
                  payment.currentDonationRequest?.id as number
                );
              }
            });
        }
      }

      // console.log(
      //   await ms.approveContract(
      //     BigNumber.from(1000000 * amountUSDT.value),
      //     '0x07865c6E87B9F70255377e024ace6630C1Eaa37F'
      //   )
      // );

      // setTimeout(async () => {
      //   await ms.makeDonation(
      //     BigNumber.from(1000000 * amountUSDT.value),
      //     amountUSDT.value
      //   );
      loadingCryptoDonation.value = false;
      // }, 20000);
    };

    return {
      account,
      isOpened,
      accountFormated,
      approvedTokens,
      tab,
      step,
      currencyCard,
      amountCard,
      currencyOptions,
      rememberCard,
      amountUSDT,
      amountCrypto,
      selectedConservancy,
      selectedCategory,
      selectedToken,
      cryptoDonation,
      card,
      loadingCryptoDonation,
      ConnectWalletConnect,
      ConnectCoinBaseWallet,
      ConnectMetaMaskWallet,
      open() {
        isOpened.value = true;
      },
    };
  },
});
</script>
<style lang="scss">
.cards-accepted {
  width: 31px;
  height: 19px;
}
</style>
<style scoped>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
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
