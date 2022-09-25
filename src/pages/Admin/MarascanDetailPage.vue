<template>
  <q-page class="bg-grey-2">
    <div class="">
      <q-table hide-bottom flat :rows="rows" :columns="columns" row-key="name">
        <template v-slot:top>
          <div class="column">
            <div class="text-subtitle1">01x3223</div>
            <div class="text-grey-6"><small>payment method: Fiat</small></div>

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
        </template>
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
            <q-td key="donor" :props="props">
              <q-avatar size="30px" class="q-mr-sm">
                <div
                  style="width: 50px; height: 50px; background: #d9d9d9"
                ></div>
              </q-avatar>
              <small class="text-weight-light">{{ props.row.donor }}</small>
            </q-td>
            <q-td key="amount" :props="props">
              <small class="text-weight-light">{{ props.row.amount }}</small>
            </q-td>
            <q-td key="beneficiary" :props="props">
              <small class="text-weight-light">{{
                props.row.beneficiary
              }}</small>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
const columns = [
  {
    name: 'donor',
    label: 'Donor',
    field: 'donor',
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

const rows = [
  {
    donor: 'Wakandan Warrior',
    amount: '$40.30',
    beneficiary: 'Land Owner',
  },
  {
    donor: 'Wakandan Warrior',
    amount: '$40.30',
    beneficiary: 'Land Owner',
  },
  {
    donor: 'Wakandan Warrior',
    amount: '$40.30',
    beneficiary: 'Land Owner',
  },
  {
    donor: 'Wakandan Warrior',
    amount: '$40.30',
    beneficiary: 'Land Owner',
  },
  {
    donor: 'Wakandan Warrior',
    amount: '$40.30',
    beneficiary: 'Land Owner',
  },
  {
    donor: 'Wakandan Warrior',
    amount: '$40.30',
    beneficiary: 'Land Owner',
  },
  {
    donor: 'Wakandan Warrior',
    amount: '$40.30',
    beneficiary: 'Land Owner',
  },
  {
    donor: 'Wakandan Warrior',
    amount: '$40.30',
    beneficiary: 'Land Owner',
  },
  {
    donor: 'Wakandan Warrior',
    amount: '$40.30',
    beneficiary: 'Land Owner',
  },
  {
    donor: 'Wakandan Warrior',
    amount: '$40.30',
    beneficiary: 'Land Owner',
  },
];

export default {
  setup() {
    const toggleSwitch = (val) => {
      if (type.value != val) {
        type.value = val;
      }
    };
    const type = ref('benefeciaries');

    return {
      columns,
      rows,
      type,
      toggleSwitch,
    };
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
  border-radius: 100px;
  padding: 7px 24px;
  cursor: pointer;
}
.my-toggle-btn.active {
  background: white;
}
</style>
