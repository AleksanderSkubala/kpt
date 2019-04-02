<template>
    <li class="item" @click="$emit('createFrom', res)">
        <!-- <img :src="url" class="ui mini avatar image" /> -->
        <div class="content" style='float: left;'>
            <h4 class="header">{{this.title}}</h4>
            <div class="description">{{this.description}}</div>
        </div>
        <div class="content" style='float: right;'>
            <div class="description">{{this.date}}</div>
        </div>
    </li>
</template>

<script>
export default {
    name: "ListItem",
    props: {
        title: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: false,
        },
        date: {
            type: String,
            required: false,
        },
        res: {
            type: String,
            required: false,
        },
        id: {
            type: Number,
            required: false,
        },
    },
    data() {
        return{
            url: null,
        };
    },
    mounted() {
        this.url = `https://api.adorable.io/avatars/55/typeofweb${this.img}.png`;
        this.res.id = this.id;
    },
}
</script>

<style lang="scss" scoped>

.item {
    width: 75%;
}

</style>
