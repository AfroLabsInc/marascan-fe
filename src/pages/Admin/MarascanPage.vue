<template>
  <q-page class="bg-grey-2">
    <q-card flat class="q-pa-md q-mt-lg">
      <div class="row justify-between">
        <div class="text-h5 q-my-md">Marascan</div>
        <q-input v-model="text" type="text" label="Label" />
      </div>
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
          <tr
            v-for="(d, i) in AllDonations"
            :key="i"
            @click="
              router.push({
                name: 'DonationDetails',
                params: { id: d.donation.id },
              })
            "
          >
            <td class="text-left">{{ i + 1 }}</td>
            <td class="text-left">
              {{ d.donation.amount.amount }} {{ d.donation.amount.currency }}
            </td>
            <td class="text-left">Mara Siana</td>
            <td
              :class="
                d.donation.paymentStatus == 'paid'
                  ? 'text-green'
                  : d.donation.paymentStatus == 'pending'
                  ? 'text-orange-custom'
                  : 'text-red-3'
              "
            >
              {{ d.donation.paymentStatus }}
            </td>
            <td class="text-left">{{ formatDate(d.donation.createdAt) }}</td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card>
  </q-page>
</template>

<script lang="ts" setup>
import { usePaymentStore } from '../../stores/payment';
import { ref, watch, computed } from 'vue';
import { date } from 'quasar';
import { useRouter } from 'vue-router';
const payment = usePaymentStore();
const router = useRouter();
// export default defineComponent({
//   name: 'IndexPage',
//   setup() {
(async () => {
  await payment.getAllDonations();
})();

const AllDonations = computed(() => payment.allDonations);
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
