<template>
    <ul class="ui divided list selection">
        <ListItem
            img="1"
            title="Lena"
            description="JavaScript dev"
            date="2016-10-16"
        />
        <ListItem
            img="2"
            title="Rick"
            description="Seo"
            date= "2016-10-16"
        />
        <ListItem
            img="3"
            title="Morty"
            description="Front-End dev"
            date= "2016-10-16"
        />
        <ListItem
            img="4"
            title="Adelle"
            description="Back-End dev"
            date= "2016-10-16"
        />
        <ListItem
            img="5"
            title="Charlie"
            description="Designer"
            date= "2016-10-16"
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
