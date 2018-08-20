<template>
    <div class="ui container" id="container">
        <header class="ui header">
            <nav class="ui fixed menu">
                <div class="ui header item">
                    <div class="ui button" id="btnBack" @click="$emit('back')">
                        <i class="arrow left icon"></i>
                    </div>
                    <div id="mainTxt">
                        Tworzenie konspektu
                    </div>
                </div>
            </nav>
        </header>
        <main class="ui main text conatiner">
            <h1>Main</h1>
        </main>
    </div>
</template>

<script>
export default {
    name: "FormView",
}
</script>

<style lang="scss" scoped>

#container{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    min-height: 100vh;
}

#btnBack{
    background: none;
    padding: 10px;

    .icon{
        margin: 0;
    }
}

#mainTxt{
    margin-left: 20px;
}

</style>
