<template>
    <div class="ui container" id="container">
        <!--<header class="ui header">
            <FormHeader @back="$emit('back')" @newK="newK()"/>
        </header>--> <!--It's merged with FormMain-->
        <main class="ui main text container" >
            <FormMain @back="$emit('back')" :konspektData="konspektData"/>
            <p id="footer">Created with <i>&#10084;</i> by Aleksander Skubała </br> (I know that this app is badly built, but I love it ;D) </br> &#x24D2; Copyright - All rights reserved.</p>
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
    margin: auto auto 3em;
}

#footer {
    font-size: .9em;
    text-align: center;
    margin-top: 2em;

    i {
        color: #E53A40;
        font-style: normal;
    }
}


@media only screen and (max-width: 764px){
    .ui.main.container{
        margin: 6em 1em 3em !important;
    }
}

@media only screen and (max-width: 575px){
    .ui.main.text.container{
        margin: 4em 0 3em !important;
    }

    .ui.container {
        margin: 0 !important;
    }
}

</style>
