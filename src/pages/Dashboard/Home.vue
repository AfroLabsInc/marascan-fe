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
              <div class="text-h6 text-grey-5">Donation</div>
            </q-card-section>
            <q-card-section>
              <div class="text-h3 text-weight-bolder text-white">$0</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="row items-center justify-evenly q-my-lg q-py-lg">
        <div class="col-12 col-md-8 col-lg-7 q-mt-lg q-pt-lg">
          <h3 class="text-center">Start Donating To Help The Masai People</h3>
          <div class="text-center">
            <q-btn color="primary" no-caps class="donate-btn" label="Donate" />
          </div>
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
