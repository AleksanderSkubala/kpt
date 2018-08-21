<template>
    <div class="ui container" id="container">
        <header class="ui header">
            <FormHeader @back="$emit('back')"/>
        </header>
        <main class="ui main text container" >
            <FormMain />
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
    margin-right: auto !important;
    margin-top: 5.5em;
    margin-bottom: 3em;
}

@media only screen and (max-width: 767px){
    .main.container{
        // width: 80vw !important;
    }
}

</style>
