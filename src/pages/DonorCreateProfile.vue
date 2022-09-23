<template>
  <q-page class="page-angel bg-grey-2 pt-100 pb-100">
    <section class="full-height row justify-center" style="min-height: 100vh">
      <div class="container q-pt-lg">
        <div class="row q-col-gutter-md">
          <q-form
            @submit="updateOrCreateProfile"
            class="col-12 col-md-6 col-lg-6"
          >
            <div class="text-h5 q-mb-lg">Create Profile</div>
            <div class="row registraion-progress q-mb-lg">
              <div class="col-6">
                <div class="text-subtitle2 registration-progress-text active">
                  1. Basic Information
                </div>
                <div class="registration-progress-line active"></div>
              </div>
              <div class="col-6">
                <div class="text-subtitle2 registration-progress-text active">
                  2. Profile Details
                </div>
                <div class="registration-progress-line active"></div>
              </div>
              <div class="col-6">
                <div class="text-subtitle2 registration-progress-text">
                  3. KYC verification
                </div>
                <div class="registration-progress-line"></div>
              </div>
            </div>
            <div class="row q-col-gutter-md q-mb-lg">
              <!-- email -->

              <div class="col-12 col-md-12 col-lg-12">
                <div class="q-mb-sm"><small>Email</small></div>
                <q-input
                  outlined
                  class="bg-white"
                  v-model="profileData.email"
                  :disable="auth.donor.email"
                  ref="email"
                />
              </div>
              <template v-if="auth.donor.donorType === 'individual'">
                <div class="col-12 col-md-12 col-lg-12">
                  <div class="q-mb-sm"><small>First Name</small></div>
                  <q-input
                    class="bg-white"
                    outlined
                    v-model="profileData.firstName"
                    ref="firstName"
                  />
                </div>
                <div class="col-12 col-md-12 col-lg-12">
                  <div class="q-mb-sm"><small>Last Name</small></div>
                  <q-input
                    outlined
                    v-model="profileData.lastName"
                    ref="lastName"
                    class="bg-white"
                  />
                </div>
              </template>
              <template v-if="auth.donor.donorType === 'organization'">
                <div class="col-12 col-md-12 col-lg-12">
                  <div class="q-mb-sm"><small>Organization Name</small></div>
                  <q-input
                    outlined
                    v-model="profileData.name"
                    ref="firstName"
                    class="bg-white"
                  />
                </div>
                <div class="col-12 col-md-12 col-lg-12">
                  <div class="q-mb-sm">
                    <small>What does your Organization do?</small>
                  </div>
                  <q-input
                    outlined
                    type="textarea"
                    v-model="profileData.description"
                    ref="description"
                    class="bg-white"
                  />
                </div>
                <div class="col-12 col-md-12 col-lg-12">
                  <div class="q-mb-sm">
                    <small>Organization Category</small>
                  </div>
                  <q-select
                    outlined
                    :options="org_type"
                    v-model="profileData.type"
                    ref="type"
                    class="bg-white"
                  />
                </div>
              </template>
              <div class="col-12 col-md-12 col-lg-12">
                <div class="q-mb-sm"><small>Country</small></div>
                <q-input
                  outlined
                  v-model="profileData.country"
                  class="bg-white"
                  ref="country"
                />
              </div>
              <div class="col-12 col-md-12 col-lg-12">
                <div class="q-mb-sm"><small>State</small></div>
                <q-input outlined v-model="profileData.region" ref="region" />
              </div>
              <template v-if="auth.donor.donorType === 'individual'">
                <div class="col-12 col-md-12 col-lg-12">
                  <div class="q-mb-sm"><small>Address</small></div>
                  <q-input
                    outlined
                    v-model="profileData.address"
                    ref="address"
                    class="bg-white"
                  />
                </div>
              </template>
              <template v-if="auth.donor.donorType === 'organization'">
                <div class="col-12 col-md-12 col-lg-12">
                  <div class="q-mb-sm"><small>Address 1</small></div>
                  <q-input
                    outlined
                    v-model="profileData.addressOne"
                    ref="address1"
                    class="bg-white"
                  />
                </div>
                <div class="col-12 col-md-12 col-lg-12">
                  <div class="q-mb-sm"><small>Address 2</small></div>
                  <q-input
                    outlined
                    v-model="profileData.addressTwo"
                    ref="address2"
                    class="bg-white"
                  />
                </div>
              </template>
              <div
                class="col-12 col-md-12 col-lg-12"
                v-if="auth.donor.donorType === 'individual'"
              >
                <div class="q-mb-sm"><small>Occupation</small></div>
                <q-input
                  outlined
                  v-model="profileData.occupation"
                  ref="occupation"
                  class="bg-white"
                />
              </div>
              <div
                v-if="auth.donor.donorType === 'organization'"
                class="col-12 col-md-12 col-lg-12"
              >
                <div class="q-mb-sm"><small>Organization website</small></div>
                <q-input
                  outlined
                  v-model="profileData.occupation"
                  ref="website"
                  :rules="[$rules.url('Use a valid website')]"
                  class="bg-white"
                />
              </div>
            </div>
            <div class="row q-mt-lg">
              <q-btn
                unelevated
                class="full-width"
                color="secondary"
                no-caps
                label="Submit"
                :loading="submitting"
                type="submit"
              />
            </div>
          </q-form>
          <div class="col-12 col-md-6 col-lg-6 row justify-center">
            <img src="../assets/img/pngtree.png" alt="" class="full-width" />
          </div>
        </div>
      </div></section
  ></q-page>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user';
import { useAuthStore } from '../stores/auth';
const user = useUserStore();
const auth = useAuthStore();
const router = useRouter();
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
    router.push({ name: 'submit-kyc' });
  });
  submitting.value = false;
};
</script>

<style>
.registration-progress-line.active {
  height: 10px;
  background: #b53125;
  border-radius: 100px;
}
.registration-progress-line {
  height: 10px;
  background: #dfdfdf;
  border-radius: 0 100px 100px 0;
}
.registration-progress-text.active {
  color: #000;
}
.registration-progress-text {
  color: #c9c9c9;
}
</style>
