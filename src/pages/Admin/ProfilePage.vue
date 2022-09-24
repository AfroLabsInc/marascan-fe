<template>
    <q-page class="bg-grey-2">
       
        <div class="row justify-center q-mb-lg">
            <div class="col-12 col-md-4 col-lg-4 row items-center">
                <q-avatar size="100px" class="q-mr-md">
                <img src="https://cdn.quasar.dev/img/avatar.png">
                </q-avatar>
                <div>
                    <div class="text-subtitle1">Lauryn Hill</div>
                    <div class="text-caption"><small>Donor since Jul 2022</small></div>
                    <q-btn size="sm" outline label="Edit" to="/proflie-edit" />
                </div>
            </div>
        </div>
       <div class="">
        <q-table
        hide-bottom
        flat
        title="My Donations"
        :rows="rows"
        :columns="columns"
        row-key="name"
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
                <q-td key="donor" :props="props">
                    <q-avatar size="30px" class="q-mr-sm">
                        <div style="width: 50px; height: 50px; background: #d9d9d9;"></div>
                    </q-avatar>
                    <small class="text-weight-light">{{ props.row.donor }}</small>
                </q-td>
                <q-td key="amount" :props="props">
                    <small class="text-weight-light">{{ props.row.amount }}</small>
                </q-td>
                <q-td key="beneficiary" :props="props">
                    <small class="text-weight-light">{{ props.row.beneficiary }}</small>
                </q-td>
            </q-tr>
        </template>
        </q-table>
       </div>
    </q-page>
</template>
  
<script>
  const columns = [
    { name: 'donor', label: 'Donor', field: 'donor', sortable: true, align: 'left' },
    { name: 'amount', label: 'Amount', field: 'amount', sortable: true, align: 'left'},
    { name: 'beneficiary', label: 'Beneficiary', field: 'beneficiary', sortable: true, align: 'left'}
  ]
  
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
    }
  ]
  
  export default {
    setup () {
      return {
        columns,
        rows
      }
    }
  }
  </script>