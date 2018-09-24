<template>
    <li class="item">
        <img :src="url" class="ui mini avatar image" />
        <div class="content">
            <h4 class="header">{{this.title}}</h4>
            <div class="description">{{this.description}}</div>
        </div>
        <div class="content" style="float: right;">
            <div class="description">{{this.date}}</div>
        </div>
    </li>
</template>

<script>
export default {
    name: "ListItem",
    props: {
        img: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
        date: {
            type: String,
            required: false,
        },
    },
    data() {
        return{
            url: null,
        };
    },
    mounted() {
        this.url = `https://api.adorable.io/avatars/55/typeofweb${this.img}.png`
    },
}
</script>

<style lang="scss" scoped>

</style>
