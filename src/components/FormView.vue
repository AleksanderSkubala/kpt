<template>
    <div class="ui container" id="container">
        <!--<header class="ui header">
            <FormHeader @back="$emit('back')" @newK="newK()"/>
        </header>--> <!--It's meged with FormMain-->
        <main class="ui main text container" >
            <FormMain @back="$emit('back')" :konspektData="konspektData"/>
        </main>
    </div>
</template>

<script>
import FormMain from '@/components/FormComponents/FormMain.vue';

export default {
    name: "FormView",
    components: {
        FormMain,
    },
    data() {
        return {
            data: '',
        }
    },
    props: {
        konspektData: {
            type: String,
            required: false,
        },
    },
    methods: {
        newK() {
            this.data = 'Hei';
            alert(this.data);
        },
    },
}
</script>

<style lang="scss" scoped>

#container{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

.main.container{
    margin-right: auto;
    margin-top: 5.5em;
    margin-bottom: 3em;
}

@media only screen and (max-width: 575px){
    .ui.main.container{
        margin-left: 0 !important;
    }
}

</style>
