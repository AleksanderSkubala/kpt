<template>
<div>
  <div class="ui container">
    <AppHeader @newK="newK"/>
    <main class="ui main text container">
      <List />
    </main>
  </div>
  <FormView v-if="step === 1" @back="back"/>
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
    };
  },
  methods: {
    newK() {
      this.step = 1;
    },
    back() {
      this.step = 0;
    }
  },
};
</script>

<style lang="scss">

body {
  height: 0;
}

.main.container {
    margin-top: 5em;
}

</style>
