<template>
  <q-page class="green-bg">
    <section class="hero-wrapper page-angel flex items-center">
      <div class="container z-index flex column items-center">
        <h1 class="text-center text-white hero-title q-mb-md">
          Towards a Sustainable Wildlife Conservation in
          <span class="orange-text" style="background: #a1907e">
            Masai Mara</span
          >
        </h1>
        <p class="text-center text-white hero-desc">
          Our home is a precious abode, the bane of our identity. Our identity
          is a gem we shouldn’t accept to lose. Our ecosystem breeds life in
          every forms, we are called to take one action: TAKE CARE OF IT
        </p>
        <q-btn
          unelevated
          label="Donat Now"
          class="my-btn"
          color="secondary"
          to="/"
          no-caps
        />
      </div>
      <div id="overlay"></div>
    </section>

    <section class="about-wrapper pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4 col-lg-4">
            <div class="header-border"></div>
            <h2 class="about-title q-mb-lg">Our Mission</h2>
            <p class="about-desc q-mb-lg">
              The people of mara have been drastically affected by the covid 19
              pandemic. Wildlife are now on the brink of extinction because
              lands which were leased are now converted to farmlands, some are
              sold out because people are looking for food to eat.
            </p>
            <p class="about-desc q-mb-lg">
              There is an increase in overgrazing and this has led to greater
              threats to biodiversity.
            </p>
            <q-btn
              size="sm"
              unelevated
              label="Donate"
              class="my-btn q-py-sm q-px-lg"
              color="secondary"
              to="/"
              no-caps
            />
          </div>
          <div class="col-12 col-md-8 col-lg-8"></div>
        </div>
      </div>
      <div class="overlay-image desktop-only">
        <img src="../assets/images/about.png" alt="" style="width: 100%" />
      </div>
    </section>

    <section class="card-wrapper bg-white pt-100 pb-100">
      <div class="container">
        <h2 class="card-title text-black q-mb-md text-center">Why Choose Us</h2>
        <p class="card-desc text-black q-mb-xl text-center">
          We leverage modern day technologies and processes to ensure that your
          donations are impactful towards our cause.
        </p>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-4 col-lg-4">
            <q-card class="bg-grey-3" flat square style="height: 300px">
              <q-card-section> Tra </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-4 col-lg-4">
            <q-card class="bg-grey-3" flat square style="height: 300px">
              <q-card-section></q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-4 col-lg-4">
            <q-card class="bg-grey-3" flat square style="height: 300px">
              <q-card-section></q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <section class="one-wrapper bg-white">
      <img src="../assets/images/animals.png" class="full-width" />
    </section>

    <section class="two-wrapper pt-100 pb-100 bg-white">
      <div class="container">
        <div class="row justify-between">
          <div class="col-12 col-md-5 col-lg-5">
            <div class="header-border"></div>
            <h2 class="wrapper-title q-mb-lg">
              Building for Sustainable Impact
            </h2>
            <p class="wrapper-desc q-mb-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <q-btn
              size="sm"
              unelevated
              label="Donate"
              class="my-btn q-py-sm q-px-lg"
              color="secondary"
              to="/"
              no-caps
            />
          </div>
          <div class="col-12 col-md-5 col-lg-5 column justify-center">
            <div class="wrapper-three-list text-h4">
              14,500+ <small class="text-primary">Land owners</small>
            </div>
            <q-separator class="q-my-md" />
            <div class="wrapper-three-list text-h4">
              15+ <small class="text-primary">Conservanciess</small>
            </div>
            <q-separator class="q-my-md" />
            <div class="wrapper-three-list text-h4">
              280+ <small class="text-primary">Rangers</small>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="three-wrapper pt-100 pb-100 bg-grey-3">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-3 col-lg-3">
            <div class="header-border"></div>
          </div>
        </div>
        <h2 class="wrapper-title q-mb-lg">Stories</h2>
        <div class="row q-col-gutter-xl">
          <div class="col-12 col-md-4 col-lg-4">
            <img src="../assets/images/story1.png" alt="" class="full-width" />
            <div class="wrapper-desc q-mt-md">
              Untold story of the adopted Mother Elephant and her baby.
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-4">
            <img src="../assets/images/story2.png" alt="" class="full-width" />
            <div class="wrapper-desc q-mt-md">
              Untold story of the adopted Mother Elephant and her baby.
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-4">
            <img src="../assets/images/story3.png" alt="" class="full-width" />
            <div class="wrapper-desc q-mt-md">
              Untold story of the adopted Mother Elephant and her baby.
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="three-wrapper pt-100 pb-100 bg-white">
      <div class="container">
        <div class="row q-col-gutter-xl justify-center">
          <div class="col-12 col-md-6 col-lg-6">
            <h2 class="wrapper-title q-mb-md text-center">
              Join our Community
            </h2>
            <p class="text-subtitle1 text-grey-8 text-center">
              Get the latest conservation updates, be inspired to take action,
              and learn about ways to get involved
            </p>
            <div class="row q-col-gutter-md justify-bentween">
              <div class="col-9">
                <q-input
                  v-model="email"
                  outlined
                  class="bg-grey-3 w-px-md"
                  label="Email"
                />
              </div>
              <div class="col-3">
                <q-btn
                  size="lg"
                  unelevated
                  label="Submit"
                  class="my-btn q-py-sm q-px-lg full-height full-width"
                  color="secondary"
                  no-caps
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const email = '';
    return {
      email,
    };
  },
});
</script>
