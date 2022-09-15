<template>
  <q-page class="row items-center justify-evenly">
    <!-- content -->
    <q-form @submit="processLogin" class="q-gutter-md">
      <q-card class="col-12 col-md-5 col-lg-4 field-section q-ma-lg">
        <q-card-section class="q-pa-lg q-ma-lg">
          <h4>Sign In to Donate</h4>
          <div class="row q-col-gutter-md">
            <!-- email -->

            <div class="col-12 col-md-12 col-lg-12">
              <label class="text-subtitle2" for="fname">Email address</label>
              <q-input
                outlined
                v-model="form.email"
                class="q-mt-sm"
                ref="email"
                lazy-rules
                :rules="[
                  $rules.required('Please enter your email name'),
                  $rules.email('Please use a valid email'),
                ]"
              />
            </div>

            <!--password-->
            <div class="col-12 col-md-12 col-lg-12">
              <label class="text-subtitle2" for="fname">Password</label>
              <q-input
                outlined
                v-model="form.password"
                class="q-mt-sm"
                ref="password"
                :type="isPwd ? 'password' : 'text'"
                lazy-rules
                :rules="[
                  $rules.required('Please enter your password'),
                  $rules.minLength(
                    5,
                    'Password should be greater than 5 characters'
                  ),
                ]"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
            </div>
          </div>
          <div class="row justify-between items-center q-mb-md">
            <q-checkbox class="text-grey-9" color="black" v-model="remember"
              >Remember</q-checkbox
            >
            <a href="#" class="forget-btn text-blue-10">Forgot password?</a>
          </div>

          <div class="row">
            <q-btn
              unelevated
              text-color="black"
              class="full-width"
              color="primary"
              label="Sign In"
              no-caps
              :loading="submitting"
              type="submit"
            />
          </div>

          <div class="text-center q-py-lg">
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
          </div>
        </q-card-section>
      </q-card>
    </q-form>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '../stores/user';
const route = useRoute();
const router = useRouter();
const auth = useAuthStore();
const store = useUserStore();
const remember = ref(false);
const isPwd = ref(true);
const form = ref({
  password: '',
  email: '',
});
const submitting = ref(false);

const processLogin = async () => {
  const { email, password } = form.value;
  submitting.value = true;
  await auth
    .loginDonor({
      email,
      password,
    })
    .then(() => {
      // if (!auth.donor.individualProfile && !auth.donor.organizationProfile) {
      //   router.push({ name: 'complete-profile' });
      // }
    });

  submitting.value = false;
};
</script>
