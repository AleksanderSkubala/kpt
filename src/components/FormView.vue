<template>
    <div class="ui fixed container" id="container">
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
                <div class="ui right floated header item">
                    <div class="ui animated primary button" @click="$emit('newK')">
                        <div class="visible content">Zapisz</div>
                        <div class="hidden content">
                        <i class="download icon"></i>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <main class="ui main text container" >
            <ul class="ui divided list selection">
                <li class="item">
                    <img src="https://api.adorable.io/avatars/55/typeofweb1.png" class="ui avatar image" />
                    <div class="content">
                        <div class="header">To ja</div>
                        <div class="description">Twój main</div>
                    </div>
                </li>
            </ul>
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
}

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

.main.container{
    margin-top: 5em;
}

ul.ui.list li:before{
    content: '';
    display: none;
}

</style>
