<template>
<div>
  <transition name="fade">
    <div class="ui container" v-if="step === 0">
      <AppHeader @newK="newK"/>
      <main class="ui main text container">
        <List  @createFrom="createFrom"/>
      </main>
      <p id="footer">Created with <i>&#10084;</i> by Aleksander Skubała </br> (I know that this app is badly built, but I love it ;D) </br> &#x24D2; Copyright - All rights reserved.</p>
    </div>
  </transition>
  <transition name="slider">
    <FormView v-if="step === 1" @back="back" :konspektData="konspektData"/>
  </transition>
</div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import List from '@/components/List.vue';
import FormView from '@/components/FormView.vue';

export default {
  name: 'app',
  components: {
    AppHeader,
    List,
    FormView,
  },
  data() {
    return {
      step: 0,
      loading: false,
      konspektData: '',
    };
  },
  methods: {
    newK() {
      this.konspektData = '';
      this.step = 1;
    },
    back() {
      // this.step = 0;
      location.href = location.href;
    },
    createFrom(item) {
      this.konspektData = item;
      this.step = 1;
    },
  },
};
</script>

<style lang="scss">

.main.container {
    margin-top: 5em !important;
}

.slider-enter-active, .slider-leave-active {
  transition: opacity 0.7s ease;
}
.slider-enter, .slider-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
   transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
   opacity: 0;
}

#footer {
    font-size: .99em;
    text-align: center;
    margin-top: 2em;

    i {
        color: #E53A40;
        font-style: normal;
    }
}

</style>
