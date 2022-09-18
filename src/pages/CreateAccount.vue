<template>
  <q-page class="create-account row items-center justify-evenly">
    <!-- <div> -->
    <div class="col-12 col-lg-6 col-md-6 side-form">
      <q-form @submit="register" class="q-gutter-md">
        <q-card class="field-section">
          <h6 class="text-center">
            Already have an account?
            <router-link to="/donor/login" class="text-decoration-none">
              Sign in</router-link
            >
          </h6>
          <q-card-section>
            <h4>Create An Account</h4>
            <div class="row q-col-gutter-md">
              <!-- email -->

              <div class="col-12 col-md-12 col-lg-12">
                <label class="text-subtitle2 q-mb-sm" for="fname"
                  >Email address</label
                >
                <q-input
                  outlined
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
                <label class="text-subtitle2 q-mb-sm" for="fname"
                  >Password</label
                >
                <q-input
                  outlined
                  v-model="form.password"
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
              <div class="col-12">
                <label class="text-subtitle2 q-mb-sm" for="fname"
                  >Confirm Password</label
                >
                <q-input
                  outlined
                  v-model="form.confirm_password"
                  ref="password"
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
                text-color="black"
                class="full-width"
                color="primary"
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
