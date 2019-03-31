<template>
    <ul class="ui divided list selection">
        <ListItem v-for="item in list" :key="item.title"
            :title="item.title"
            :description="item.main"
            :date="item.date"
            :item="item"
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
    data() {
        return {
            list: [],
        };
    },
    mounted() {
        this.list = read(5);
    },
}
</script>

<style lang="scss" scoped>

ul.ui.list li:before {
  display: none;
  content: '';
}

ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

</style>
