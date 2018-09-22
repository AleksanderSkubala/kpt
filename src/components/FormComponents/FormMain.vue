<template>
<div>
      <table class="ui celled striped center aligned table" id="mainTable">
        <thead>
            <tr>
                <th colspan="2">
                    Konspekt
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td> <!--class="collapsing"-->
                    Nazwa zbiórki:
                </td>
                <td>
                    <div v-if="nazwa.edit === false">
                        {{nazwa.content}}
                        <div class="ui right floated button editBtn" @click="edit(0)">
                            <i class="ui edit outline icon editIcon"></i>
                        </div>
                    </div>
                    <div class="ui action input" v-if="nazwa.edit">
                        <input placeholder="Nazwa/Temat zbiórki" type="text" v-model="nazwa.probably"/>
                        <div class="ui positive button" @click="check(0)">
                            <i class="check icon" style="margin:0;"></i>
                        </div>
                        <div class="ui negative button" @click="cancel(0)">
                            <i class="plus icon cancelIcon"></i>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    Odpowiedzialny/a:
                </td>
                <td>
                    <div v-if="odpowiedzialny.edit === false">
                        {{odpowiedzialny.content}}
                        <div class="ui right floated button editBtn" @click="edit(1)">
                            <i class="ui edit outline icon editIcon"></i>
                        </div>
                    </div>
                    <div class="ui action input" v-if="odpowiedzialny.edit">
                        <input placeholder="Odpowiedzialny" type="text" v-model="odpowiedzialny.probably"/>
                        <div class="ui positive button" @click="check(1)">
                            <i class="check icon" style="margin:0;"></i>
                        </div>
                        <div class="ui negative button" @click="cancel(1)">
                            <i class="plus icon cancelIcon"></i>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    Termin:
                </td>
                <td>
                    <div v-if="kiedy.edit === false">
                        {{kiedy.content}}
                        <div class="ui right floated button editBtn" @click="edit(2)">
                            <i class="ui edit outline icon editIcon"></i>
                        </div>
                    </div>
                    <div class="ui action input" v-if="kiedy.edit">
                        <input type="date" v-model="kiedy.probably"/>
                        <div class="ui positive button" @click="check(2)">
                            <i class="check icon" style="margin:0;"></i>
                        </div>
                        <div class="ui negative button" @click="cancel(2)">
                            <i class="plus icon cancelIcon"></i>
                        </div>
                    </div>
                </td>
            </tr>
            <tr style="background: none;">
                <td colspan="2">
                   <table class="ui striped table">
                        <thead>
                            <tr>
                                <th>Prowadzący:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Jaki Prowadzący</td>
                            </tr>
                            <tr>
                                <td>Jaki Prowadzący2</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <table class="ui striped table">
                        <thead>
                            <tr>
                                <th>Cele:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Jaki cel</td>
                            </tr>
                            <tr>
                                <td>Jaki cel2</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr style="background: none;">
                <td colspan="2">
                   <table class="ui striped table">
                        <thead>
                            <tr>
                                <th colspan="4">Przebieg:</th>
                            </tr>
                            <tr>
                                <th>Lp.</th>
                                <th>Treść</th>
                                <th>Czas</th>
                                <th>Materiały</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1.</td>
                                <td>Jaki pkt</td>
                                <td>30min.</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>Jaki pkt2</td>
                                <td>20min.</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <table class="ui striped table">
                        <thead>
                            <tr>
                                <th>Załączniki:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Jaki załącznik</td>
                            </tr>
                            <tr>
                                <td>Jaki załącznik2</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
    name: "FormMain",
    data(){
        return{
            dzisiaj: "",
            nazwa: {
                content: "",
                edit: true,
                probably: "",
            },
            odpowiedzialny: {
                content: "",
                edit: true,
                probably: "",
            },
            kiedy: {
                content: "",
                edit: true,
                probably: "",
            },
        };
    },
    methods: {
        check(what){
            switch (what) {
                case 0:
                    if(this.nazwa.probably){
                        this.nazwa.edit = false;
                        this.nazwa.content = this.nazwa.probably;
                    }
                break;

                case 1:
                    if(this.odpowiedzialny.probably){
                        this.odpowiedzialny.edit = false;
                        this.odpowiedzialny.content = this.odpowiedzialny.probably;
                    }
                break;

                case 2:
                    if(this.kiedy.probably){
                        this.kiedy.edit = false;
                        this.kiedy.content = this.kiedy.probably;
                    }
                break;

                default:
                break;
            }
        },
        cancel(what){
            switch (what) {
                case 0:
                    if(this.nazwa.probably){
                        this.nazwa.edit = false;
                    }
                break;

                case 1:
                    if(this.odpowiedzialny.probably){
                        this.odpowiedzialny.edit = false;
                    }
                break;

                case 2:
                    if(this.kiedy.probably){
                        this.kiedy.edit = false;
                    }
                break;

                default:
                break;
            }
        },
        edit(what){
            switch (what) {
                case 0:
                    this.nazwa.edit = true;
                    this.nazwa.probably = this.nazwa.content;
                break;

                case 1:
                    this.odpowiedzialny.edit = true;
                    this.odpowiedzialny.probably = this.odpowiedzialny.content;
                break;

                case 2:
                    this.kiedy.edit = true;
                    this.kiedy.probably = this.kiedy.content;
                break;

                default:
                break;
            }
            this.nazwa.edit = true;
            this.nazwa.probably = this.nazwa.content;
        },
    },
    mounted() {
        this.dzisiaj = (new Date()).getDate();
    },
}
</script>

<style lang="scss" scoped>

ul.ui.list li:before{
    content: '';
    display: none;
}


.editBtn {
    background: none;
    padding: 0;
    padding-top: 0.3em;
}

.editBtn:hover{
    background: none;
}

.editIcon{
    margin: 0;
    font-size: 20px;
}

.cancelIcon{
    margin :0 !important;
    transform: rotate(45deg);
}

@media only screen and (max-width: 767px){
    table:first-child{
        max-width:100%;
    }
}

</style>
