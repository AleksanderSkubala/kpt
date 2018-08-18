<template>
  <div class="ui container">
    <AppHeader />
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
};
</script>

<style lang="scss">

.main.container {
    margin-top: 5em;
}

</style>
