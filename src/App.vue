<template>
  <div class="ui container">
    <AppHeader @newK="newK"/>
    <main class="ui main text container">
      <List />
    </main>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import List from '@/components/List.vue';

export default {
  name: 'app',
  components: {
    AppHeader,
    List,
  },
  methods: {
    newK() {
      console.log("Działa2");
    },
  },
  data() {
    return {
      step: 0,
      loading: false,
    };
  },
};
</script>

<style lang="scss">

body {
  height: 0%;
}

.main.container {
    margin-top: 5em;
}

</style>
