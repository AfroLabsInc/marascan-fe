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
          <!-- <div class="text-h6">Carle</div> -->
          <div class="q-my-lg">
            <q-img
              src="/img/visa logo.png"
              class="cards-accepted"
              spinner-color="primary"
              spinner-size="82px"
            />
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
            <div class="col-12 col-md-8 col-lg-8">
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
            <div class="col-12 col-md-4 col-lg-4">
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
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'WalletConnect',
  data() {
    return {
      isOpened: true,
      tab: 'crypto',
      currencyCard: 'USD',
      amountCard: 0.0,
      currencyOptions: ['USD'],
      rememberCard: true,
      card: {
        cvv: '',
        cardNumber: '',
        cardHolder: '',
        expiry_date: '',
      },
    };
  },
  methods: {
    open() {
      this.isOpened = true;
    },
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
  -webkit-appearance: none;
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
