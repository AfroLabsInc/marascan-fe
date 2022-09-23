<template>
  <q-page class="page-angel bg-grey-2 pt-100 pb-100">
    <section class="full-height row justify-center" style="min-height: 100vh">
      <div class="container q-pt-lg">
        <div class="row q-col-gutter-md">
          <!-- <div> -->
          <div class="col-12 col-lg-6 col-md-6">
            <q-form @submit="register">
              <!-- <q-card class="field-section"> -->
              <h6 class="text-center">
                Already have an account?
                <router-link to="/donor/login" class="text-decoration-none">
                  Sign in</router-link
                >
              </h6>
              <!-- <q-card-section> -->
              <div class="text-h5 q-mb-lg">Create an account</div>
              <div class="row registraion-progress q-mb-lg">
                <div class="col-4">
                  <div class="text-subtitle2 registration-progress-text active">
                    1. Basic Information
                  </div>
                  <div class="registration-progress-line active"></div>
                </div>
                <div class="col-4">
                  <div class="text-subtitle2 registration-progress-text">
                    2. Profile Details
                  </div>
                  <div class="registration-progress-line"></div>
                </div>
                <div class="col-4">
                  <div class="text-subtitle2 registration-progress-text">
                    3. KYC verification
                  </div>
                  <div class="registration-progress-line"></div>
                </div>
              </div>
              <div class="row q-col-gutter-md">
                <!-- email -->

                <div class="col-12 col-md-12 col-lg-12">
                  <div class="q-mb-sm"><small>Email</small></div>
                  <q-input
                    outlined
                    class="bg-white"
                    v-model="form.email"
                    ref="email"
                    lazy-rules
                    :rules="[
                      $rules.required('Please enter your email name'),
                      $rules.email('Please use a valid email'),
                    ]"
                  />
                </div>

                <!--password-->
                <div class="col-12">
                  <div class="q-mb-sm"><small>Password</small></div>
                  <q-input
                    outlined
                    v-model="form.password"
                    ref="password"
                    class="bg-white"
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
                <div class="col-12">
                  <div class="q-mb-sm"><small>Confirm Password</small></div>
                  <q-input
                    outlined
                    v-model="form.confirm_password"
                    ref="password"
                    class="bg-white"
                    :type="isPwd ? 'password' : 'text'"
                    lazy-rules
                    :rules="[
                      $rules.required('Please enter your password'),
                      $rules.sameAs(form.password, 'Passwords don\'t match'),
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
                <q-checkbox
                  :rules="[$rules.is(true, 'Please accept the license')]"
                  class="text-grey-9"
                  color="black"
                  v-model="remember"
                  >Accept Terms and Conditions</q-checkbox
                >
                <!-- <a href="#" class="forget-btn text-para-default"
                    >Forget password?</a
                  > -->
              </div>

              <div class="row">
                <q-btn
                  unelevated
                  class="full-width"
                  color="secondary"
                  no-caps
                  label="Sign up"
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
              <!-- </q-card-section>
        </q-card> -->
            </q-form>
          </div>
          <div class="col-12 col-lg-6 col-md-6 row justify-center">
            <img src="../assets/img/pngtree.png" class="full-width" />
          </div>
          <!-- </div> -->
        </div>
      </div>
    </section>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useQuasar, QSpinnerGears } from 'quasar';
import { onBeforeUnmount } from 'vue';
import { useUserStore } from '../stores/user';
import { useAuthStore } from '../stores/auth';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
const store = useUserStore();
const auth = useAuthStore();
const $q = useQuasar();

store.donorType = route.params.donorType as string;
let timer: any;

onBeforeUnmount(() => {
  if (timer !== void 0) {
    clearTimeout(timer);
    $q.loading.hide();
  }
});
const remember = ref(false);
const submitting = ref(false);
const isPwd = ref(true);
const form = ref({
  password: '',
  confirm_password: '',
  email: '',
});

// register Donor
async function register() {
  const { email, password } = form.value;
  submitting.value = true;
  await auth
    .registerDonor({
      email,
      password,
      donorType: (route.params.donorType as string).toLowerCase(),
    })
    .then(() => {
      showLoading();
    });

  submitting.value = false;
}
function showLoading() {
  $q.loading.show({
    message:
      'Creating Account in progress.<br/><span class="text-orange text-weight-bold"> Hang on...</span>',
    html: true,
  });

  timer = setTimeout(() => {
    $q.loading.show({
      spinner: QSpinnerGears,
      spinnerColor: 'blue',
      message: 'Logging in...',
      messageColor: 'black',
    });

    timer = setTimeout(() => {
      $q.loading.hide();
      timer = void 0;
      router.push('/donor/complete-profile');
    }, 2000);
  }, 3000);
}
</script>
