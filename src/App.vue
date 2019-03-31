<template>
<div>
  <transition name="fade">
    <div class="ui container" v-if="step === 0">
      <AppHeader @newK="newK"/>
      <main class="ui main text container">
        <List  @createFrom="createFrom"/>
      </main>
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
      this.step = 1;
    },
    back() {
      this.step = 0;
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

</style>
