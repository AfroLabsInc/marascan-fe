<template>
    <q-page class="bg-grey-2">
        <div class="row q-col-gutter-md">
            <div class="col-12 col-md-4 col-lg-4">
                <q-card style="border-radius: 15px;" flat class="bg-black full-height">
                    <q-card-section class="text-white">
                        <div class="text-caption">Donations</div>
                        <div class="text-h5">0</div>
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-12 col-md-4 col-lg-4">
                <q-card style="border-radius: 15px;" flat class="bg-black full-height">
                    <q-card-section class="text-white">
                        <div class="text-caption">Average Amount Donated</div>
                        <div class="text-h5">$0</div>
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-12 col-md-4 col-lg-4">
                <q-card style="border-radius: 15px;" flat class="bg-black full-height">
                    <q-card-section class="text-white">
                        <div class="text-caption">Trend</div>
                        <svg width="73" height="44" viewBox="0 0 73 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 43L27 12.5L31.5 21.5L38 16L47 7L54 16L72 1.5" stroke="#0FD017" stroke-width="2"/>
                        </svg>
                    </q-card-section>
                </q-card>
            </div>
        </div>
       <div class="row justify-center q-my-xl">
        <div class="col-12 col-md-6 col-lg-6">
            <div class="column justify-center items-center">
                <div class="text-h4 q-mb-lg">start donating to help the maasai people</div>
                <q-btn 
                color="primary"
                unelevated
                label="Donate"
                class="my-btn q-px-xl"
                no-caps
                />
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