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
                <td> <!--style="width: 50%;"-->
                    Nazwa zbiórki:
                </td>
                <td>
                    <div v-if="title.edit === false">
                        {{title.content}}
                        <div class="ui right floated button editBtn" @click="edit(0)">
                            <i class="ui edit outline icon editIcon"></i>
                        </div>
                    </div>
                    <div class="ui action input" v-if="title.edit">
                        <input placeholder="Nazwa/Temat zbiórki" type="text" v-model="title.probably"/>
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
                    <div v-if="main.edit === false">
                        {{main.content}}
                        <div class="ui right floated button editBtn" @click="edit(1)">
                            <i class="ui edit outline icon editIcon"></i>
                        </div>
                    </div>
                    <div class="ui action input" v-if="main.edit">
                        <input placeholder="Odpowiedzialny" type="text" v-model="main.probably"/>
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
                    <div v-if="when.edit === false">
                        {{when.content}}
                        <div class="ui right floated button editBtn" @click="edit(2)">
                            <i class="ui edit outline icon editIcon"></i>
                        </div>
                    </div>
                    <div class="ui action input" v-if="when.edit">
                        <input type="date" v-model="when.probably"/>
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
                                <th colspan="2">Prowadzący:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="width: 50%;">
                                    <ul class="ui divided list segments" style="margin: 0;">
                                        <li class="ui segment" style="padding: 10px;"><em>Prowadzący: </em></li>
                                        <li v-for="item in people.list" class="ui segment" style="padding: 10px;">
                                            - {{item}}
                                        </li>
                                    </ul>
                                </td>
                                <td style="width: 50%;">
                                    <div class="ui action add input">
                                        <input type="text" v-model="people.probably" placeholder="Prowadzący"/>
                                        <div class="ui positive button" @click="add(0)">
                                            <i class="plus icon" style="margin: 0;"></i>
                                        </div>
                                        <div class="ui negative button" @click="cancelList(0)">
                                            <i class="plus icon cancelIcon"></i>
                                        </div>
                                    </div>
                                </td>
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
                                <th colspan="2">Cele:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="width: 50%;">
                                    <ul class="ui divided list segments" style="margin: 0;">
                                        <li class="ui segment" style="padding: 10px;"><em>Harcerz po zbiórce będzie umiał:</em></li>
                                        <li v-for="item in goals.list" class="ui segment" style="padding: 10px;">
                                            - {{item}}
                                        </li>
                                    </ul>
                                </td>
                                <td style="width: 50%;">
                                    <div class="ui action add input">
                                        <input type="text" v-model="goals.probably" placeholder="Cele"/>
                                        <div class="ui positive button" @click="add(1)">
                                            <i class="plus icon" style="margin: 0;"></i>
                                        </div>
                                        <div class="ui negative button" @click="cancelList(1)">
                                            <i class="plus icon cancelIcon"></i>
                                        </div>
                                    </div>
                                </td>
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
                                <th colspan="5">Przebieg:</th>
                            </tr>
                            <tr>
                                <th>Lp.</th>
                                <th>Treść</th>
                                <th>Czas</th>
                                <th>Materiały</th>
                                <th>Edycja</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1.</td>
                                <td>Jaki pkt</td>
                                <td>30min.</td>
                                <td>-</td>
                                <td>
                                    <div style="float: right;">
                                                <div class="ui button" style="padding: 0; background: none;"  @click="up(0, item)">
                                                <i class="angle up icon" style="margin: 0; font-size: 20px;"></i>
                                                </div>
                                                <div class="ui button" style="padding: 0; background: none;" @click="down(0, item)">
                                                <i class="angle down icon" style="margin: 0; font-size: 20px;"></i>
                                                </div>
                                                <div class="ui button" style="padding: 0; background: none;">
                                                <i class="delete icon" style="margin: 0; font-size: 20px;"></i>
                                                </div>
                                        </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>Jaki pkt2</td>
                                <td>20min.</td>
                                <td> - </td>
                                <td>
                                    <div style="float: right;">
                                                <div class="ui button" style="padding: 0; background: none;"  @click="up(0, item)">
                                                <i class="angle up icon" style="margin: 0; font-size: 20px;"></i>
                                                </div>
                                                <div class="ui button" style="padding: 0; background: none;" @click="down(0, item)">
                                                <i class="angle down icon" style="margin: 0; font-size: 20px;"></i>
                                                </div>
                                                <div class="ui button" style="padding: 0; background: none;">
                                                <i class="delete icon" style="margin: 0; font-size: 20px;"></i>
                                                </div>
                                        </div>
                                </td>
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
                                <th colspan="2">Załączniki:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="width: 50%;">
                                    <ul class="ui divided list segments" style="margin: 0;">
                                        <li class="ui segment" style="padding: 10px;"><em>Dodatkowe materiały: </em></li>
                                        <li v-for="item in added.list" class="ui segment" style="padding: 10px;">
                                            - {{item}}
                                        </li>
                                    </ul>
                                </td>
                                <td style="width: 50%;">
                                    <div class="ui action add input">
                                        <input type="text" v-model="added.probably" placeholder="Cele"/>
                                        <div class="ui positive button" @click="add(2)">
                                            <i class="plus icon" style="margin: 0;"></i>
                                        </div>
                                        <div class="ui negative button" @click="cancelList(2)">
                                            <i class="plus icon cancelIcon"></i>
                                        </div>
                                    </div>
                                </td>
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
            today: "",
            title: {
                content: "",
                edit: true,
                probably: "",
            },
            main: {
                content: "",
                edit: true,
                probably: "",
            },
            when: {
                content: "",
                edit: true,
                probably: "",
            },
            people: {
                probably: "",
                list: [],
            },
            goals: {
                probably: "",
                list: [],
            },
            added: {
                probably: "",
                list: [],
            },
        };
    },
    methods: {
        check(what){
            switch (what) {
                case 0:
                    if(this.title.probably){
                        this.title.edit = false;
                        this.title.content = this.title.probably;
                    }
                break;

                case 1:
                    if(this.main.probably){
                        this.main.edit = false;
                        this.main.content = this.main.probably;
                    }
                break;

                case 2:
                    if(this.when.probably){
                        this.when.edit = false;
                        this.when.content = this.when.probably;
                    }
                break;

                default:
                break;
            }
        },
        cancel(what){
            switch (what) {
                case 0:
                    if(this.title.probably){
                        if(!this.title.content){
                            this.title.probably = "";
                        }
                        else{
                            this.title.edit = false;
                        }
                    }
                break;

                case 1:
                    if(this.main.probably){
                        if(!this.main.content){
                            this.main.probably = "";
                        }
                        else{
                            this.main.edit = false;
                        }
                    }
                break;

                case 2:
                    if(this.when.probably){
                        if(!this.when.content){
                            this.when.probably = "";
                        }
                        else{
                            this.when.edit = false;
                        }
                    }
                break;

                default:
                break;
            }
        },
        edit(what){
            switch (what) {
                case 0:
                    this.title.edit = true;
                    this.title.probably = this.title.content;
                break;

                case 1:
                    this.main.edit = true;
                    this.main.probably = this.main.content;
                break;

                case 2:
                    this.when.edit = true;
                    this.when.probably = this.when.content;
                break;

                default:
                break;
            }

        },
        add(what){
            switch (what) {
                case 0:
                    this.people.list.push(this.people.probably);
                    this.people.probably = "";
                break;
                case 1:
                    this.goals.list.push(this.goals.probably);
                    this.goals.probably = "";
                break;
                case 2:
                    this.added.list.push(this.added.probably);
                    this.added.probably = "";
                break;
            }
        },
        cancelList(what){
            switch(what) {
                case 0:
                    this.people.probably = "";
                break;
                case 1:
                    this.goals.probably = "";
                break;
                case 2:
                    this.added.probably = "";
                break;
            }
        },
        up(list, item){
            var index = "";
            switch(list){
                case 0:
                    index = this.people.list.indexOf(item);
                    this.people.list.move(index, 1, index-1);
                break;
            }
        },
        down(list, item){
            var index = "";
            switch(list){
                case 0:
                    index = this.people.list.indexOf(item);
                    console.log(index-1);
                    this.people.list.move(index, 1, index-1);
                break;
            }
        },
    },
    mounted() {
        this.today = (new Date()).getDate();
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

.add{
    margin: auto;
}

@media only screen and (max-width: 575px){
    table:first-child{
        max-width:100%;
    }
}

.listS{
    padding: 10px;
}

</style>
