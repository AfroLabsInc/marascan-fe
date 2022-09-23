<template>
  <q-page class="page-angel bg-grey-2 pt-100 pb-100">
    <section class="full-height row justify-center" style="min-height: 100vh">
      <q-form @submit="processLogin" class="container">
        <div class="row justify-center q-mb-xl">
          <div class="col-12 col-md-6 col-lg-6">
            <q-card flat class="q-pa-xl">
              <q-card-section>
                <div class="text-h4">Sign In</div>
              </q-card-section>
              <q-card-section>
                <div class="row q-col-gutter-md">
                  <div class="col-12 col-md-12 col-lg-12">
                    <div class="q-mb-sm"><small>Email</small></div>
                    <q-input
                      placeholder="Email Address"
                      class="bg-white"
                      v-model="form.email"
                      outlined
                      lazy-rules
                      :rules="[
                        $rules.required('Please enter your email name'),
                        $rules.email('Please use a valid email'),
                      ]"
                    />
                  </div>
                  <div class="col-12 col-md-12 col-lg-12">
                    <div class="q-mb-sm"><small>Password</small></div>
                    <q-input
                      class="bg-white"
                      placeholder="Password"
                      v-model="form.password"
                      outlined
                      :type="isPwd ? 'password' : 'text'"
                      lazy-rules
                      :rules="[
                        $rules.required('Please enter your password'),
                        $rules.minLength(
                          7,
                          'Password should be greater than 7 characters'
                        ),
                      ]"
                    />
                  </div>
                  <div class="col-12 col-md-12 col-lg-12">
                    <q-checkbox
                      class="text-grey-9"
                      color="black"
                      v-model="remember"
                      >Remember</q-checkbox
                    >
                  </div>
                  <div class="col-12 col-md-12 col-lg-12">
                    <q-btn
                      size="lg"
                      style="width: 100%"
                      class="my-btn"
                      label="Sign In"
                      no-caps
                      unelevated
                      color="secondary"
                      :loading="submitting"
                      type="submit"
                    />
                  </div>
                </div>
                <!-- <div class="col-12 col-md-12 col-lg-12 row justify-center"> -->
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
                        :loading="store.LoadingWalletState"
                        no-caps
                        icon="account_balance_wallet"
                        label="Connect Wallet"
                        @click="store.openWalletModal = true"
                      />
                    </div>
                  </fieldset>
                </div>
                <!-- </div> -->
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-form>
    </section>
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
