<template>
    <div class="ui container" id="container">
        <!--<header class="ui header">
            <FormHeader @back="$emit('back')" @newK="newK()"/>
        </header>-->
        <main class="ui main text container" >
            <FormMain @back="$emit('back')"/>
        </main>
    </div>
</template>

<script>
import FormHeader from '@/components/FormComponents/FormHeader.vue';
import FormMain from '@/components/FormComponents/FormMain.vue';

export default {
    name: "FormView",
    components: {
        FormHeader,
        FormMain,
    },
    data() {
        return {
            data: '',
        }
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
