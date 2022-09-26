<template>
  <q-page class="bg-grey-2">
    <div class="">
      <div>
        <div>
          <div class="column">
            <div class="text-subtitle1">
              Donor:
              <span class="text-orange">{{
                currentDonationDetail.donation.donor.accountAddress.substr(
                  0,
                  5
                ) +
                '...' +
                currentDonationDetail.donation.donor.accountAddress.substr(-4)
              }}</span>
            </div>
            <div class="text-grey-9 q-py-sm fs-17">
              <small
                >Payment method:
                {{ currentDonationDetail.donation.paymentMethod }}</small
              >
            </div>
            <div class="text-grey-9 q-py-sm fs-17">
              <small
                >Payment status:
                {{ currentDonationDetail.donation.paymentStatus }}</small
              >
            </div>
            <div class="text-grey-9 q-py-sm fs-17">
              <small
                >Amount Donated:
                {{
                  currentDonationDetail.donation.amount.amount +
                  ' ' +
                  currentDonationDetail.donation.amount.currency
                }}</small
              >
            </div>

            <div class="my-toggle q-mt-lg">
              <button
                @click="toggleSwitch('benefeciaries')"
                :class="type == 'benefeciaries' ? 'active' : ''"
                class="my-toggle-btn"
              >
                <small>Benefeciaries</small>
              </button>
              <button
                @click="toggleSwitch('notes')"
                :class="type == 'notes' ? 'active' : ''"
                class="my-toggle-btn"
              >
                <small>Notes</small>
              </button>
            </div>
          </div>
        </div>
        <!-- <q-table
          hide-bottom
          flat
          :rows="rows"
          :columns="columns"
          row-key="name"
          v-if="type == 'benefeciaries'"
        >
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th
                v-for="col in props.cols"
                :key="col.name"
                :props="props"
                class="text-grey-6 text-weight-light"
              >
                <small class="text-weight-light">{{ col.label }}</small>
              </q-th>
            </q-tr>
          </template>

          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="name" :props="props">
                <q-avatar size="30px" class="q-mr-sm">
                  <div
                    style="width: 50px; height: 50px; background: #d9d9d9"
                  ></div>
                </q-avatar>
                <small class="text-weight-bold">{{ props.row.name }}</small>
              </q-td>
              <q-td key="amount" :props="props">
                <small class="text-weight-bold">{{ props.row.amount }}</small>
              </q-td>
              <q-td key="beneficiary" :props="props">
                <small class="text-weight-bold">{{
                  props.row.beneficiary
                }}</small>
              </q-td>
            </q-tr>
          </template>
        </q-table> -->
        <q-markup-table v-if="type == 'benefeciaries' && rows.length">
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-right">Amount</th>
              <th class="text-right">Beneficiary</th>
            </tr>
          </thead>
          <tbody>
            <tr for="b, i in rows" :key="i">
              <td class="text-left">{{ b.name }}</td>
              <td class="text-right">{{ b.amount }}</td>
              <td class="text-right">{{ b.beneficiary }}</td>
            </tr>
          </tbody>
        </q-markup-table>
        <q-card flat v-if="type == 'notes'">
          <q-card-section>
            {{ currentDonationDetail.donation.note }}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
// import { defineComponent } from 'vue';
import { mapState } from 'pinia';
import { usePaymentStore } from '../../stores/payment';
const columns = [
  {
    name: 'name',
    label: 'Name',
    field: 'name',
    sortable: true,
    align: 'left',
  },
  {
    name: 'amount',
    label: 'Amount',
    field: 'amount',
    sortable: true,
    align: 'left',
  },
  {
    name: 'beneficiary',
    label: 'Beneficiary',
    field: 'beneficiary',
    sortable: true,
    align: 'left',
  },
];

export default {
  async preFetch({ store, currentRoute }) {
    const payment = usePaymentStore(store);
    await payment.getDonationDetail(currentRoute.params.id);
  },
  data() {
    return {
      columns,
      rows: [],
      type: 'benefeciaries',
    };
  },
  // mounted() {
  //   const payment = usePaymentStore();
  //   const donation = computed(() => payment.currentDonationDetail);
  //   // const rows = ref([]);
  //   for (let i = 0; i < donation.value.beneficiaries.length; i++) {
  //     const e = donation.value.beneficiaries[i];
  //     const obj = {
  //       name: e.firstName + ' ' + e.$event,
  //       amount:
  //         donation.value.disbursedAmount + ' ' + donation.value.amount.currency,
  //       beneficiary:
  //         e.ethereumAccountAddress.substr(0, 5) +
  //         '...' +
  //         e.ethereumAccountAddress.substr(-4),
  //     };
  //     this.rows.push(obj);
  //   }
  // },
  mounted() {
    console.log('The initial count is 1.');
    const payment = usePaymentStore();
    (async () => {
      await payment.getDonationDetail(this.$route.params.id);
      for (
        let i = 0;
        i < payment.currentDonationDetail.beneficiaries.length;
        i++
      ) {
        const e = payment.currentDonationDetail.beneficiaries[i];
        const obj = {
          name: e.firstName + ' ' + e.lastName,
          amount:
            payment.currentDonationDetail.donation.disbursedAmount +
            ' ' +
            payment.currentDonationDetail.donation.amount.currency,
          beneficiary:
            e.ethereumAccountAddress.substr(0, 5) +
            '...' +
            e.ethereumAccountAddress.substr(-4),
        };
        this.rows.push(obj);
      }
      console.log(this.rows);
    })();
  },
  computed: {
    ...mapState(usePaymentStore, ['currentDonationDetail']),
  },
  methods: {
    toggleSwitch(val) {
      if (this.type != val) {
        this.type = val;
      }
      console.log('J');
    },
  },
};
</script>

<style>
.my-toggle {
  background: whitesmoke;
  padding: 4px 4px;
  border-radius: 100px;
}
.my-toggle-btn {
  border: 0;
  background: transparent;
  /* border-radius: 100px; */
  padding: 7px 24px;
  cursor: pointer;
}
.my-toggle-btn.active {
  background: white;
}
</style>
