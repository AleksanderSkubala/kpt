<template>
    <nav class="ui fixed menu">
        <div class="ui header item">
            <div class="ui button" id="btnBack" @click="$emit('back')">
                <i class="arrow left icon"></i>
            </div>
            <div id="mainTxt">
                Tworzenie konspektu
            </div>
        </div>
        <div class="ui right floated header item">
            <div class="ui animated primary button" @click="$emit('newK')">
                <!--<div class="visible content">Zapisz</div>
                <div class="hidden content">
                    <i class="download icon"></i>
                </div>-->

                <div class="ui dropdown">
                    <div class="text">Zapisz</div>
                    <i class="dropdown icon"></i>
                    <div class="menu">

                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "FormHeader",
}
</script>

<style lang="scss" scoped>

#btnBack{
    background: none;
    padding: 10px;

    .icon{
        margin: 0;
    }
}

.ui .button{
    .icon{
        margin: 0;
    }
}

#mainTxt{
    margin-left: 20px;
}

@media only screen and (max-width: 575px){
    .ui.right.floated.header.item::before{
        display: none;
        content: '';
    }

    #btnBack{
        padding: 0;
    }
}

</style>
