<template>
  <q-page class="bg-grey-2">
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-4 col-lg-4">
        <q-card style="border-radius: 15px" flat class="bg-black full-height">
          <q-card-section class="text-white">
            <div class="text-caption">Donations</div>
            <div class="text-h5">{{ AllDonations.length }}</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <q-card style="border-radius: 15px" flat class="bg-black full-height">
          <q-card-section class="text-white">
            <div class="text-caption">Average Amount Donated</div>
            <div class="text-h5">$0</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <q-card style="border-radius: 15px" flat class="bg-black full-height">
          <q-card-section class="text-white">
            <div class="text-caption">Trend</div>
            <svg
              width="73"
              height="44"
              viewBox="0 0 73 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 43L27 12.5L31.5 21.5L38 16L47 7L54 16L72 1.5"
                stroke="#0FD017"
                stroke-width="2"
              />
            </svg>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row justify-center q-my-xl" v-show="!payment.loadingDonor">
      <div class="col-12 col-md-6 col-lg-6">
        <div class="column justify-center items-center">
          <div class="text-h4 q-mb-lg">
            Start donating to save wildlife in the MaasaiMara
          </div>
          <q-btn
            color="primary"
            unelevated
            label="Donate"
            class="my-btn q-px-xl"
            no-caps
            @click="donationFormModalShow == true"
          />
        </div>
      </div>
    </div>

    <q-card flat class="q-pa-md q-mt-lg" v-show="payment.loadingDonor">
      <div class="text-h5 q-my-md">My Donations</div>
      <q-markup-table flat>
        <thead>
          <tr>
            <th class="text-left">SN</th>
            <th class="text-left">Amount</th>
            <th class="text-left">Conservancy</th>
            <th class="text-left">Payment Status</th>
            <th class="text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(d, i) in AllDonations" :key="i">
            <td class="text-left">{{ i + 1 }}</td>
            <td class="text-left">
              {{ d.amount.amount }} {{ d.amount.currency }}
            </td>
            <td class="text-left">Mara Siana</td>
            <td
              :class="
                d.paymentStatus == 'paid'
                  ? 'text-green'
                  : d.paymentStatus == 'pending'
                  ? 'text-orange-custom'
                  : 'text-red-3'
              "
            >
              {{ d.paymentStatus }}
            </td>
            <td class="text-left">{{ formatDate(d.createdAt) }}</td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card>

    <q-dialog v-model="donationFormModalShow">
      <DonationForm style="width: 500px" />
    </q-dialog>
  </q-page>
</template>

<script lang="ts" setup>
import { usePaymentStore } from '../../stores/payment';
import { ref, watch, computed } from 'vue';
import { date } from 'quasar';
const payment = usePaymentStore();
const donationFormModalShow = ref(false);
// export default defineComponent({
//   name: 'IndexPage',
//   setup() {
(async () => {
  await payment.getADonorsDonationRequest();
})();

const AllDonations = computed(() => payment.allDonorsDonationRequest);
// const  = ;

const formatDate = (d: string) => date.formatDate(d, 'MMM Do, YYYY');
</script>
<style>
.text-orange-custom {
  color: #ee8509 !important;
}
td {
  color: rgba(0, 0, 0, 0.653);
}
</style>
