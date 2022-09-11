<template>
  <q-page padding>
    <div class="container">
      <div class="row q-col-gutter-lg">
        <div class="col-12 col-md-4 col-lg-4">
          <q-card class="stats-summary bg-black rounded-borders" flat>
            <q-card-section>
              <div class="text-h6 text-grey-5">Your Donations</div>
            </q-card-section>
            <q-card-section>
              <div class="text-h3 text-weight-bolder text-white">$0</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-4 col-lg-4">
          <q-card class="stats-summary bg-black rounded-borders" flat>
            <q-card-section>
              <div class="text-h6 text-grey-5">Total Donations</div>
            </q-card-section>
            <q-card-section>
              <div class="text-h3 text-weight-bolder text-white">$0</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-4 col-lg-4">
          <q-card class="stats-summary bg-black rounded-borders" flat>
            <q-card-section>
              <div class="text-h6 text-grey-5">Avg Amount Donated</div>
            </q-card-section>
            <q-card-section>
              <div class="text-h3 text-weight-bolder text-white">$0</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="row items-center justify-evenly q-my-lg q-py-lg" v-if="false">
        <div class="col-12 col-md-8 col-lg-7 q-mt-lg q-pt-lg">
          <h3 class="text-center">Start Donating To Help The Masai People</h3>
          <div class="text-center">
            <q-btn color="primary" no-caps class="donate-btn" label="Donate" />
          </div>
        </div>
      </div>
      <div class="latest-donations q-py-lg q-my-sm">
        <div class="">
          <h4>Latest Donations</h4>
        </div>
        <q-markup-table flat cellspacing="15">
          <thead>
            <tr>
              <th class="text-left">Donor</th>
              <th class="text-center">Amount</th>
              <th class="text-center">Beneficiaries</th>
            </tr>
          </thead>
          <tbody>
            <tr class="q-tr--no-hover">
              <td class="text-left cursor-pointer">Frozen Yogurt</td>
              <td class="text-center">$40.30</td>
              <td class="text-center">6</td>
            </tr>
            <tr class="q-tr--no-hover">
              <td class="text-left cursor-pointer">Ice cream sandwich</td>
              <td class="text-center">$40.30</td>
              <td class="text-center">9</td>
            </tr>
            <tr class="q-tr--no-hover">
              <td class="text-left cursor-pointer">Eclair</td>
              <td class="text-center">$40.30</td>
              <td class="text-center">16</td>
            </tr>
            <tr class="q-tr--no-hover">
              <td class="text-left cursor-pointer">Cupcake</td>
              <td class="text-center">$40.30</td>
              <td class="text-center">3.7</td>
            </tr>
            <tr class="q-tr--no-hover">
              <td class="text-left cursor-pointer">Gingerbread</td>
              <td class="text-center">$40.30</td>
              <td class="text-center">16</td>
            </tr>
          </tbody>
        </q-markup-table>
        <div class="text-center q-py-lg">
          <q-btn flat label="Explore More" icon="open_in_new" no-caps />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'DonorHome',
});
</script>
