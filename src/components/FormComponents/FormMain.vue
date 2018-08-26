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
                    <p v-if="edit[0] === false">{{nazwa.content}}</p>
                    <div class="ui action input" v-if="edit[0]">
                        <input placeholder="Nazwa/Temat zbiórki" type="text" v-model="nazwa.content"/>
                        <div class="ui positive button" @click="halo(`${nazwa.content}`, 0)">
                            <i class="check icon" style="margin:0;"></i>
                        </div>
                        <div class="ui negative button">
                            <i class="plus icon" style="margin:0; transform: rotate(45deg);"></i>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    Odpowiedzialny/a:
                </td>
                <td>
                    <div class="ui action input">
                        <input placeholder="Imię i Nazwisko" type="text" v-model="odpowiedzialny"/>
                        <div class="ui positive button" @click="halo(`${odpowiedzialny}`)">
                            <i class="check icon" style="margin:0;"></i>
                        </div>
                        <div class="ui negative button" @click="empty(`${odpowiedzialny}`)">
                            <i class="plus icon" style="margin:0; transform: rotate(45deg);"></i>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    Termin:
                </td>
                <td>
                     <div class="ui action input">
                        <input type="date" v-model="kiedy" :placeholder="dzisiaj"/>
                        <div class="ui positive button" @click="halo(`${kiedy}`)">
                            <i class="check icon" style="margin:0;"></i>
                        </div>
                        <div class="ui negative button">
                            <i class="plus icon" style="margin:0; transform: rotate(45deg);"></i>
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
            },
            odpowiedzialny: "",
            kiedy: "",
            edit: [
                true
            ],
        };
    },
    methods: {
        halo(co, ed) {
            if(co){
                console.log(co);
                this.edit[ed] = false;
                console.log(this.edit[ed]);
            }
        },
        empty(co) {

            console.log(co);
        },
    },
    mounted() {
        this.dzisiaj = (new Date()).getDate();
        console.log(this.dzisiaj);
    },
}
</script>

<style lang="scss" scoped>

ul.ui.list li:before{
    content: '';
    display: none;
}

@media only screen and (max-width: 767px){
    table:first-child{
        width: 70vw !important;
    }
}
</style>
