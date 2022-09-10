<template>
  <q-page padding>
    <div class="container">
      <div class="row q-col-gutter-lg">
        <div class="col-12 col-md-3 col-lg-3">
          <q-card class="stats-summary bg-black rounded-borders" flat>
            <q-card-section>
              <div class="text-h6 text-grey-5">Donation</div>
            </q-card-section>
            <q-card-section>
              <div class="text-h3 text-weight-bolder text-white">$0</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-4 col-lg-4">
          <q-card class="stats-summary bg-black rounded-borders" flat>
            <q-card-section>
              <div class="text-h6 text-grey-5">Average Amount Donated</div>
            </q-card-section>
            <q-card-section>
              <div class="text-h3 text-weight-bolder text-white">$0</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-3 col-lg-3">
          <q-card class="stats-summary">
            <q-card-section>
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </q-card-section>
          </q-card>
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
