<template>
  <q-page class="create-account row items-center justify-evenly">
    <!-- <div> -->

    <div class="col-12 col-lg-6 col-md-6 side-form">
      <q-form @submit="updateOrCreateProfile" class="q-gutter-md">
        <q-card class="field-section" flat>
          <q-card-section>
            <h4>Update Your Profile</h4>
            <div class="row q-col-gutter-md q-mb-lg">
              <!-- email -->

              <div class="col-12 col-md-12 col-lg-12">
                <label class="text-subtitle2 q-mb-sm" for="fname"
                  >Email address</label
                >
                <q-input
                  outlined
                  v-model="profileData.email"
                  disable
                  ref="email"
                />
              </div>
              <template v-if="auth.donor.donorType === 'individual'">
                <div class="col-12 col-md-12 col-lg-12">
                  <label class="text-subtitle2 q-mb-sm" for="fname"
                    >First Name</label
                  >
                  <q-input
                    outlined
                    v-model="profileData.firstName"
                    ref="firstName"
                  />
                </div>
                <div class="col-12 col-md-12 col-lg-12">
                  <label class="text-subtitle2 q-mb-sm" for="fname"
                    >Last name</label
                  >
                  <q-input
                    outlined
                    v-model="profileData.lastName"
                    ref="lastName"
                  />
                </div>
              </template>
              <template v-if="auth.donor.donorType === 'organization'">
                <div class="col-12 col-md-12 col-lg-12">
                  <label class="text-subtitle2 q-mb-sm" for="fname"
                    >Organization Name</label
                  >
                  <q-input
                    outlined
                    v-model="profileData.name"
                    ref="firstName"
                  />
                </div>
                <div class="col-12 col-md-12 col-lg-12">
                  <label class="text-subtitle2 q-mb-sm" for="fname"
                    >Organization Description</label
                  >
                  <q-input
                    outlined
                    type="textarea"
                    v-model="profileData.description"
                    ref="description"
                  />
                </div>
                <div class="col-12 col-md-12 col-lg-12">
                  <label class="text-subtitle2 q-mb-sm" for="fname"
                    >Organization Type</label
                  >
                  <q-select
                    outlined
                    :options="org_type"
                    v-model="profileData.type"
                    ref="type"
                  />
                </div>
              </template>
              <div class="col-12 col-md-12 col-lg-12">
                <label class="text-subtitle2 q-mb-sm" for="fname"
                  >Country</label
                >
                <q-input outlined v-model="profileData.country" ref="country" />
              </div>
              <div class="col-12 col-md-12 col-lg-12">
                <label class="text-subtitle2 q-mb-sm" for="fname">State</label>
                <q-input outlined v-model="profileData.region" ref="region" />
              </div>
              <template v-if="auth.donor.donorType === 'individual'">
                <div class="col-12 col-md-12 col-lg-12">
                  <label class="text-subtitle2 q-mb-sm" for="fname"
                    >Address</label
                  >
                  <q-input
                    outlined
                    v-model="profileData.address"
                    ref="address"
                  />
                </div>
              </template>
              <template v-if="auth.donor.donorType === 'organization'">
                <div class="col-12 col-md-12 col-lg-12">
                  <label class="text-subtitle2 q-mb-sm" for="fname"
                    >Address 1</label
                  >
                  <q-input
                    outlined
                    v-model="profileData.addressOne"
                    ref="address1"
                  />
                </div>
                <div class="col-12 col-md-12 col-lg-12">
                  <label class="text-subtitle2 q-mb-sm" for="fname"
                    >Address 2</label
                  >
                  <q-input
                    outlined
                    v-model="profileData.addressTwo"
                    ref="address2"
                  />
                </div>
              </template>
              <div
                class="col-12 col-md-12 col-lg-12"
                v-if="auth.donor.donorType === 'individual'"
              >
                <label class="text-subtitle2 q-mb-sm" for="fname"
                  >Occupation</label
                >
                <q-input
                  outlined
                  v-model="profileData.occupation"
                  ref="occupation"
                />
              </div>
              <div
                v-if="auth.donor.donorType === 'organization'"
                class="col-12 col-md-12 col-lg-12"
              >
                <label class="text-subtitle2 q-mb-sm" for="fname"
                  >Organization website</label
                >
                <q-input
                  outlined
                  v-model="profileData.occupation"
                  ref="website"
                  :rules="[$rules.url('Use a valid website')]"
                />
              </div>
            </div>

            <div class="row q-mt-lg">
              <q-btn
                unelevated
                text-color="black"
                class="full-width"
                color="primary"
                no-caps
                label="Save"
                :loading="submitting"
                type="submit"
              />
            </div>

            <!-- <div class="text-center q-py-lg">
              <fieldset class="rounded-borders">
                <legend>
                  <span class="text-center q-mx-md">
                    or continue with wallet
                  </span>
                </legend>
                <div class="row justify-center">
                  <q-btn
                    unelevated
                    text-color="white"
                    class=""
                    color="green"
                    no-caps
                    icon="account_balance_wallet"
                    label="Connect Wallet"
                    @click="store.openWalletModal = true"
                  />
                </div>
              </fieldset>
            </div> -->
          </q-card-section>
        </q-card>
      </q-form>
    </div>
    <div class="col-12 col-lg-6 col-md-6 side-png">
      <q-img
        src="../assets/img/pngtree.png"
        spinner-color="primary"
        spinner-size="82px"
      />
    </div>
    <!-- </div> -->
  </q-page>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';
import { useUserStore } from '../stores/user';
import { useAuthStore } from '../stores/auth';
const user = useUserStore();
const auth = useAuthStore();
const payload: Ref<any> = ref(null);
const org_type = [
  { label: 'Governmental', value: 'governmental' },
  { label: 'Non-Governmental', value: 'non-governmental' },
];
const profileData = ref({
  firstName: '',
  lastName: '',
  country: '',
  occupation: '',
  region: '',
  address: '',
  email: auth.donor.email,
  type: { label: 'Non-Governmental', value: 'non-governmental' },
  name: '',
  addressOne: '',
  addressTwo: '',
  website: '',
  description: '',
});
const submitting = ref(false);

const updateOrCreateProfile = async () => {
  if (auth.donor.donorType === 'individual') {
    const { firstName, lastName, country, region, address, email, occupation } =
      profileData.value;
    payload.value = {
      firstName,
      lastName,
      country,
      region,
      address,
      email,
      occupation,
    };
  }
  if (auth.donor.donorType === 'organization') {
    const {
      name,
      description,
      country,
      region,
      addressOne,
      addressTwo,
      email,
      website,
      type,
    } = profileData.value;
    payload.value = {
      name,
      description,
      country,
      region,
      addressOne,
      addressTwo,
      email,
      website,
      type: type.value,
    };
  }
  submitting.value = true;
  await user.createDonorProfile(payload.value).then(() => {
    console.log('Changed');
  });
  submitting.value = false;
};
</script>
