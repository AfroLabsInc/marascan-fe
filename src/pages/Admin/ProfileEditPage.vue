<template>
    <q-page class="bg-grey-2">
        <div class="row justify-center q-mb-lg">
            <div class="col-12 col-md-4 col-lg-4 row items-center">
                <q-avatar size="100px" class="q-mr-md">
                <img src="https://cdn.quasar.dev/img/avatar.png">
                </q-avatar>
                <div>
                    <div class="text-subtitle1">Lauryn Hill</div>
                    <div class="text-caption"><small>Donor since Jul 2022</small></div>
                </div>
            </div>
        </div>

        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6 col-lg-6">
            <div class="q-mb-sm"><small>First Name</small></div>
            <q-input
            placeholder="First Name"
            v-model="data.fname"
            outlined
            dense
            />
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <div class="q-mb-sm"><small>Last Name</small></div>
            <q-input
            placeholder="Last Name"
            v-model="data.lname"
            outlined
            dense
            />
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <div class="q-mb-sm"><small>Email Address</small></div>
            <q-input
            placeholder="Email Address"
            v-model="data.email"
            outlined
            dense
            />
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <div class="q-mb-sm"><small>Password</small></div>
            <q-input
            placeholder="Password"
            v-model="data.password"
            outlined
            dense
            />
          </div>
          <div class="col-12 col-md-12 col-lg-12 q-mt-xl">
            <div class="row q-gutter-md justify-end">
              <q-btn size="md" outline label="Cancel" to="/proflie"/>
              <q-btn size="md" unelevated color="primary" label="update" />
            </div>
          </div>
        </div>
    </q-page>
</template>
  
<script>
import { defineComponent, ref } from 'vue'
  
export default {
  setup () {
    const data = ref ({})
    return {
      data
    }
  }
}
</script>