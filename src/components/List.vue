<template>
    <ul class="ui divided list selection">
        <ListItem v-for="item in list" :key="list.indexOf(item)"
            :title="item.title"
            :description="item.main"
            :date="item.date"
            :res="JSON.stringify(item)"

            @createFrom="createFrom"
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
    methods: {
        createFrom(e) {
            this.$emit('createFrom', e)
        }
    },
    mounted() {
        this.list = read(10);
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
