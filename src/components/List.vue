<template>
    <ul class="ui divided list selection">
        <ListItem
            img="1"
            title="Lena"
            description="JavaScript dev"
        />
        <ListItem
            img="2"
            title="Rick"
            description="Seo"
        />
        <ListItem
            img="3"
            title="Morty"
            description="Front-End dev"
        />
      </ul>
</template>

<script>
import ListItem from '@/components/ListItem.vue';

export default {
    name: "List",
    components: {
        ListItem,
    },
}
</script>

<style lang="scss" scoped>

ul.ui.list li:before {
  display: none;
  content: '';
}

</style>
