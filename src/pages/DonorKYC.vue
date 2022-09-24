<template>
  <q-page class="page-angel bg-grey-2 pt-100 pb-100">
    <section class="full-height row justify-center" style="min-height: 100vh">
      <div class="container q-pt-lg">
        <div class="row q-col-gutter-md">
          <div class="col-12 col-lg-6 col-md-6">
            <q-form @submit="submitKyc">
              <!-- <q-card class="field-section"> -->

              <!-- <q-card-section> -->
              <div class="text-h5 q-mb-lg">Continue KYC</div>
              <div class="row registraion-progress q-mb-lg">
                <div class="col-4">
                  <div class="text-subtitle2 registration-progress-text">
                    1. Basic Information
                  </div>
                  <div class="registration-progress-line active1"></div>
                </div>
                <div class="col-4">
                  <div class="text-subtitle2 registration-progress-text">
                    2. Profile Details
                  </div>
                  <div class="registration-progress-line active1"></div>
                </div>
                <div class="col-4">
                  <div class="text-subtitle2 registration-progress-text">
                    3. KYC verification
                  </div>
                  <div class="registration-progress-line active2"></div>
                </div>
              </div>
              <div
                class="row q-col-gutter-md"
                v-if="auth.donor.donorType == 'individual'"
              >
                <!-- <div class="col-12 col-md-12 col-lg-12">
                  <div class="q-mb-sm"><small>Title Deed Number</small></div>
                  <q-input
                    class="bg-white"
                    v-model="detailsData.individual.deed_number"
                    outlined
                  />
                </div> -->
                <div class="col-12 col-md-6 col-lg-6">
                  <div class="q-mb-sm">
                    <small>ID card front page</small>
                  </div>
                  <q-field
                    v-model="detailsData.individual.front_id_photo"
                    ref="image"
                    dense
                    borderless
                    hint
                  >
                    <input
                      type="file"
                      ref="files"
                      style="display: none"
                      @input="uploadImage"
                      accept=".png, .jpg, .jpeg, .gif"
                    />
                    <q-btn
                      style="width: 150px !important; height: 150px"
                      @click="$refs.files.click()"
                      text-color="grey-9"
                      color="grey-3"
                      unelevated
                      outline
                    >
                      <svg
                        width="25"
                        height="21"
                        viewBox="0 0 25 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.8281 0.734375H19.5312C19.3094 0.734375 19.1422 0.918359 19.1406 1.14023C19.1293 2.58906 17.5316 3.66797 16.0027 2.72109C15.4617 2.38633 15.2441 1.75508 15.2344 1.11875C15.2312 0.905859 15.0574 0.734375 14.8438 0.734375H10.1562C9.93437 0.734375 9.76719 0.918359 9.76562 1.14023C9.7543 2.58906 8.15703 3.66797 6.62773 2.72109C6.08672 2.38633 5.86914 1.75508 5.85938 1.11875C5.85625 0.905859 5.68242 0.734375 5.46875 0.734375H1.17188C0.740234 0.734375 0.390625 1.08398 0.390625 1.51562V19.4844C0.390625 19.916 0.740234 20.2656 1.17188 20.2656H23.8281C24.2598 20.2656 24.6094 19.916 24.6094 19.4844V1.51562C24.6094 1.08398 24.2598 0.734375 23.8281 0.734375ZM7.8125 6.98438C8.88945 6.98438 9.76562 7.86055 9.76562 8.9375C9.76562 10.0145 8.88945 10.8906 7.8125 10.8906C6.73555 10.8906 5.85938 10.0145 5.85938 8.9375C5.85938 7.86055 6.73555 6.98438 7.8125 6.98438ZM11.7188 15.9688H3.90625C3.69062 15.9688 3.51562 15.7937 3.51562 15.5781C3.51562 13.6398 5.09297 12.0625 7.03125 12.0625H8.59375C10.532 12.0625 12.1094 13.6398 12.1094 15.5781C12.1094 15.7937 11.9344 15.9688 11.7188 15.9688ZM20.3125 14.0156H14.8438C14.6281 14.0156 14.4531 13.8406 14.4531 13.625C14.4531 13.4094 14.6281 13.2344 14.8438 13.2344H20.3125C20.5281 13.2344 20.7031 13.4094 20.7031 13.625C20.7031 13.8406 20.5281 14.0156 20.3125 14.0156ZM20.3125 10.1094H14.8438C14.6281 10.1094 14.4531 9.93437 14.4531 9.71875C14.4531 9.50313 14.6281 9.32812 14.8438 9.32812H20.3125C20.5281 9.32812 20.7031 9.50313 20.7031 9.71875C20.7031 9.93437 20.5281 10.1094 20.3125 10.1094Z"
                          fill="#A9A9A9"
                        />
                      </svg>
                    </q-btn>
                  </q-field>
                </div>
                <div class="col-12 col-md-6 col-lg-6">
                  <div class="q-mb-sm">
                    <small>ID card back image</small>
                  </div>
                  <q-field
                    v-model="detailsData.individual.back_id_photo"
                    ref="image"
                    dense
                    borderless
                    hint
                  >
                    <input
                      type="file"
                      ref="files"
                      style="display: none"
                      @input="uploadImage"
                      accept=".png, .jpg, .jpeg, .gif"
                    />
                    <q-btn
                      style="width: 150px !important; height: 150px"
                      @click="$refs.files.click()"
                      text-color="grey-9"
                      color="grey-3"
                      unelevated
                      outline
                    >
                      <svg
                        width="25"
                        height="21"
                        viewBox="0 0 25 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.8281 0.734375H19.5312C19.3094 0.734375 19.1422 0.918359 19.1406 1.14023C19.1293 2.58906 17.5316 3.66797 16.0027 2.72109C15.4617 2.38633 15.2441 1.75508 15.2344 1.11875C15.2312 0.905859 15.0574 0.734375 14.8438 0.734375H10.1562C9.93437 0.734375 9.76719 0.918359 9.76562 1.14023C9.7543 2.58906 8.15703 3.66797 6.62773 2.72109C6.08672 2.38633 5.86914 1.75508 5.85938 1.11875C5.85625 0.905859 5.68242 0.734375 5.46875 0.734375H1.17188C0.740234 0.734375 0.390625 1.08398 0.390625 1.51562V19.4844C0.390625 19.916 0.740234 20.2656 1.17188 20.2656H23.8281C24.2598 20.2656 24.6094 19.916 24.6094 19.4844V1.51562C24.6094 1.08398 24.2598 0.734375 23.8281 0.734375ZM7.8125 6.98438C8.88945 6.98438 9.76562 7.86055 9.76562 8.9375C9.76562 10.0145 8.88945 10.8906 7.8125 10.8906C6.73555 10.8906 5.85938 10.0145 5.85938 8.9375C5.85938 7.86055 6.73555 6.98438 7.8125 6.98438ZM11.7188 15.9688H3.90625C3.69062 15.9688 3.51562 15.7937 3.51562 15.5781C3.51562 13.6398 5.09297 12.0625 7.03125 12.0625H8.59375C10.532 12.0625 12.1094 13.6398 12.1094 15.5781C12.1094 15.7937 11.9344 15.9688 11.7188 15.9688ZM20.3125 14.0156H14.8438C14.6281 14.0156 14.4531 13.8406 14.4531 13.625C14.4531 13.4094 14.6281 13.2344 14.8438 13.2344H20.3125C20.5281 13.2344 20.7031 13.4094 20.7031 13.625C20.7031 13.8406 20.5281 14.0156 20.3125 14.0156ZM20.3125 10.1094H14.8438C14.6281 10.1094 14.4531 9.93437 14.4531 9.71875C14.4531 9.50313 14.6281 9.32812 14.8438 9.32812H20.3125C20.5281 9.32812 20.7031 9.50313 20.7031 9.71875C20.7031 9.93437 20.5281 10.1094 20.3125 10.1094Z"
                          fill="#A9A9A9"
                        />
                      </svg>
                    </q-btn>
                  </q-field>
                </div>
                <div class="col-12 col-md-6 col-lg-6">
                  <div class="q-mb-sm">
                    <small>Your Photo</small>
                  </div>
                  <q-field
                    v-model="detailsData.individual.your_photo"
                    ref="image"
                    dense
                    borderless
                    hint
                  >
                    <input
                      type="file"
                      ref="files"
                      style="display: none"
                      @input="uploadImage"
                      accept=".png, .jpg, .jpeg, .gif"
                    />
                    <q-btn
                      style="width: 150px !important; height: 150px"
                      @click="$refs.files.click()"
                      text-color="grey-9"
                      color="grey-3"
                      unelevated
                      outline
                    >
                      <q-icon name="photo_camera" />
                    </q-btn>
                  </q-field>
                </div>
                <div class="col-12 col-md-12 col-lg-12">
                  <slot name="actionSlot"></slot>
                </div>
              </div>

              <div
                class="row q-col-gutter-md"
                v-if="auth.donor.donorType == 'organization'"
              >
                <div class="col-12 col-md-6 col-lg-6">
                  <div class="q-mb-sm"><small>Organisation ID</small></div>
                  <q-input
                    placeholder="Share your Organisation ID"
                    class="bg-white"
                    v-model="detailsData.organisation.organisation_id"
                    outlined
                  />
                </div>
                <div class="col-12 col-md-6 col-lg-6">
                  <div class="q-mb-sm">
                    <small>Front Page of your ID</small>
                  </div>
                  <q-field
                    v-model="detailsData.organisation.fron_id_photo"
                    ref="image"
                    dense
                    borderless
                    hint
                  >
                    <input
                      type="file"
                      ref="files"
                      style="display: none"
                      @input="uploadImage"
                      accept=".png, .jpg, .jpeg, .gif"
                    />
                    <q-btn
                      style="width: 150px !important; height: 150px"
                      @click="$refs.files.click()"
                      text-color="grey-9"
                      color="grey-3"
                      unelevated
                      outline
                    >
                      <svg
                        width="25"
                        height="21"
                        viewBox="0 0 25 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.8281 0.734375H19.5312C19.3094 0.734375 19.1422 0.918359 19.1406 1.14023C19.1293 2.58906 17.5316 3.66797 16.0027 2.72109C15.4617 2.38633 15.2441 1.75508 15.2344 1.11875C15.2312 0.905859 15.0574 0.734375 14.8438 0.734375H10.1562C9.93437 0.734375 9.76719 0.918359 9.76562 1.14023C9.7543 2.58906 8.15703 3.66797 6.62773 2.72109C6.08672 2.38633 5.86914 1.75508 5.85938 1.11875C5.85625 0.905859 5.68242 0.734375 5.46875 0.734375H1.17188C0.740234 0.734375 0.390625 1.08398 0.390625 1.51562V19.4844C0.390625 19.916 0.740234 20.2656 1.17188 20.2656H23.8281C24.2598 20.2656 24.6094 19.916 24.6094 19.4844V1.51562C24.6094 1.08398 24.2598 0.734375 23.8281 0.734375ZM7.8125 6.98438C8.88945 6.98438 9.76562 7.86055 9.76562 8.9375C9.76562 10.0145 8.88945 10.8906 7.8125 10.8906C6.73555 10.8906 5.85938 10.0145 5.85938 8.9375C5.85938 7.86055 6.73555 6.98438 7.8125 6.98438ZM11.7188 15.9688H3.90625C3.69062 15.9688 3.51562 15.7937 3.51562 15.5781C3.51562 13.6398 5.09297 12.0625 7.03125 12.0625H8.59375C10.532 12.0625 12.1094 13.6398 12.1094 15.5781C12.1094 15.7937 11.9344 15.9688 11.7188 15.9688ZM20.3125 14.0156H14.8438C14.6281 14.0156 14.4531 13.8406 14.4531 13.625C14.4531 13.4094 14.6281 13.2344 14.8438 13.2344H20.3125C20.5281 13.2344 20.7031 13.4094 20.7031 13.625C20.7031 13.8406 20.5281 14.0156 20.3125 14.0156ZM20.3125 10.1094H14.8438C14.6281 10.1094 14.4531 9.93437 14.4531 9.71875C14.4531 9.50313 14.6281 9.32812 14.8438 9.32812H20.3125C20.5281 9.32812 20.7031 9.50313 20.7031 9.71875C20.7031 9.93437 20.5281 10.1094 20.3125 10.1094Z"
                          fill="#A9A9A9"
                        />
                      </svg>
                    </q-btn>
                  </q-field>
                </div>
                <div class="col-12 col-md-6 col-lg-6">
                  <div class="q-mb-sm"><small>Back Page of your ID</small></div>
                  <q-field
                    v-model="detailsData.organisation.back_id_photo"
                    ref="image"
                    dense
                    borderless
                    hint
                  >
                    <input
                      type="file"
                      ref="files"
                      style="display: none"
                      @input="uploadImage"
                      accept=".png, .jpg, .jpeg, .gif"
                    />
                    <q-btn
                      style="width: 150px !important; height: 150px"
                      @click="$refs.files.click()"
                      text-color="grey-9"
                      color="grey-3"
                      unelevated
                      outline
                    >
                      <svg
                        width="25"
                        height="21"
                        viewBox="0 0 25 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.8281 0.734375H19.5312C19.3094 0.734375 19.1422 0.918359 19.1406 1.14023C19.1293 2.58906 17.5316 3.66797 16.0027 2.72109C15.4617 2.38633 15.2441 1.75508 15.2344 1.11875C15.2312 0.905859 15.0574 0.734375 14.8438 0.734375H10.1562C9.93437 0.734375 9.76719 0.918359 9.76562 1.14023C9.7543 2.58906 8.15703 3.66797 6.62773 2.72109C6.08672 2.38633 5.86914 1.75508 5.85938 1.11875C5.85625 0.905859 5.68242 0.734375 5.46875 0.734375H1.17188C0.740234 0.734375 0.390625 1.08398 0.390625 1.51562V19.4844C0.390625 19.916 0.740234 20.2656 1.17188 20.2656H23.8281C24.2598 20.2656 24.6094 19.916 24.6094 19.4844V1.51562C24.6094 1.08398 24.2598 0.734375 23.8281 0.734375ZM7.8125 6.98438C8.88945 6.98438 9.76562 7.86055 9.76562 8.9375C9.76562 10.0145 8.88945 10.8906 7.8125 10.8906C6.73555 10.8906 5.85938 10.0145 5.85938 8.9375C5.85938 7.86055 6.73555 6.98438 7.8125 6.98438ZM11.7188 15.9688H3.90625C3.69062 15.9688 3.51562 15.7937 3.51562 15.5781C3.51562 13.6398 5.09297 12.0625 7.03125 12.0625H8.59375C10.532 12.0625 12.1094 13.6398 12.1094 15.5781C12.1094 15.7937 11.9344 15.9688 11.7188 15.9688ZM20.3125 14.0156H14.8438C14.6281 14.0156 14.4531 13.8406 14.4531 13.625C14.4531 13.4094 14.6281 13.2344 14.8438 13.2344H20.3125C20.5281 13.2344 20.7031 13.4094 20.7031 13.625C20.7031 13.8406 20.5281 14.0156 20.3125 14.0156ZM20.3125 10.1094H14.8438C14.6281 10.1094 14.4531 9.93437 14.4531 9.71875C14.4531 9.50313 14.6281 9.32812 14.8438 9.32812H20.3125C20.5281 9.32812 20.7031 9.50313 20.7031 9.71875C20.7031 9.93437 20.5281 10.1094 20.3125 10.1094Z"
                          fill="#A9A9A9"
                        />
                      </svg>
                    </q-btn>
                  </q-field>
                </div>

                <div class="col-12 col-md-6 col-lg-6">
                  <div class="q-mb-sm"><small>Your Photo</small></div>
                  <q-field
                    v-model="detailsData.organisation.your_photo"
                    ref="image"
                    dense
                    borderless
                    hint
                  >
                    <input
                      type="file"
                      ref="files"
                      style="display: none"
                      @input="uploadImage"
                      accept=".png, .jpg, .jpeg, .gif"
                    />
                    <q-btn
                      style="width: 150px !important; height: 150px"
                      @click="$refs.files.click()"
                      text-color="grey-9"
                      color="grey-3"
                      unelevated
                      outline
                    >
                      <svg
                        width="25"
                        height="21"
                        viewBox="0 0 25 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.8281 0.734375H19.5312C19.3094 0.734375 19.1422 0.918359 19.1406 1.14023C19.1293 2.58906 17.5316 3.66797 16.0027 2.72109C15.4617 2.38633 15.2441 1.75508 15.2344 1.11875C15.2312 0.905859 15.0574 0.734375 14.8438 0.734375H10.1562C9.93437 0.734375 9.76719 0.918359 9.76562 1.14023C9.7543 2.58906 8.15703 3.66797 6.62773 2.72109C6.08672 2.38633 5.86914 1.75508 5.85938 1.11875C5.85625 0.905859 5.68242 0.734375 5.46875 0.734375H1.17188C0.740234 0.734375 0.390625 1.08398 0.390625 1.51562V19.4844C0.390625 19.916 0.740234 20.2656 1.17188 20.2656H23.8281C24.2598 20.2656 24.6094 19.916 24.6094 19.4844V1.51562C24.6094 1.08398 24.2598 0.734375 23.8281 0.734375ZM7.8125 6.98438C8.88945 6.98438 9.76562 7.86055 9.76562 8.9375C9.76562 10.0145 8.88945 10.8906 7.8125 10.8906C6.73555 10.8906 5.85938 10.0145 5.85938 8.9375C5.85938 7.86055 6.73555 6.98438 7.8125 6.98438ZM11.7188 15.9688H3.90625C3.69062 15.9688 3.51562 15.7937 3.51562 15.5781C3.51562 13.6398 5.09297 12.0625 7.03125 12.0625H8.59375C10.532 12.0625 12.1094 13.6398 12.1094 15.5781C12.1094 15.7937 11.9344 15.9688 11.7188 15.9688ZM20.3125 14.0156H14.8438C14.6281 14.0156 14.4531 13.8406 14.4531 13.625C14.4531 13.4094 14.6281 13.2344 14.8438 13.2344H20.3125C20.5281 13.2344 20.7031 13.4094 20.7031 13.625C20.7031 13.8406 20.5281 14.0156 20.3125 14.0156ZM20.3125 10.1094H14.8438C14.6281 10.1094 14.4531 9.93437 14.4531 9.71875C14.4531 9.50313 14.6281 9.32812 14.8438 9.32812H20.3125C20.5281 9.32812 20.7031 9.50313 20.7031 9.71875C20.7031 9.93437 20.5281 10.1094 20.3125 10.1094Z"
                          fill="#A9A9A9"
                        />
                      </svg>
                    </q-btn>
                  </q-field>
                </div>
                <div class="col-12 col-md-12 col-lg-12">
                  <slot name="actionSlot"></slot>
                </div>
              </div>

              <div class="row">
                <q-btn
                  unelevated
                  class="full-width"
                  color="secondary"
                  no-caps
                  label="Complete Registration"
                  :loading="submitting"
                  type="submit"
                />
              </div>
              <!-- </q-card-section>
        </q-card> -->
            </q-form>
          </div>
          <div class="col-12 col-lg-6 col-md-6 row justify-center">
            <img src="../assets/img/pngtree.png" class="full-width" />
          </div>
        </div>
      </div></section
  ></q-page>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';
import { useUserStore } from '../stores/user';
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';
const user = useUserStore();
const auth = useAuthStore();
const payload: Ref<any> = ref(null);
const router = useRouter();

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
let detailsData = ref({
  individual: {
    back_id_photo: null,
    front_id_photo: '',
    your_photo: '',
  },
  organisation: {
    organisation_id: null,
    fron_id_photo: '',
    back_id_photo: '',
    your_photo: '',
  },
});

const uploadImage = () => {
  console.log('image');
};
const submitKyc = () => {
  router.push({ name: 'dashboard-donor-home' });
};
// watch(
//   () => detailsData,
//   (val) => {
//     emit("update:modelValue", val);
//   },
//   { deep: true }
// );
</script>
<style lang="scss" scoped>
.registration-progress-line.active1 {
  height: 10px;
  background: #b53125;
  border-radius: 100px 0px 0px 100px;
}

.registration-progress-line.active2 {
  height: 10px;
  background: #b53125;
  border-radius: 0 100px 100px 0px;
}
.registration-progress-text {
  color: black;
}
</style>
