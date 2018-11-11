<template>
<div>

<!--TEMPLATE-->

    <div id="konspekt">
        <div id="container">
            <h1 style="margin: 20px;">Zbiórka {{title.content}}</h1>
        </div>
    </div>

<!--END OF TEMPLATE-->

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
            <div class="ui animated primary button" @click="newK()">
                <div class="visible content">Zapisz</div>
                <div class="hidden content">
                    <i class="download icon"></i>
                </div>
            </div>
        </div>
    </nav>
      <table class="ui celled center aligned table" id="mainTable">
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
                                            <div v-if="item.edit === false">
                                                <div class="itemName">{{item.name}}</div>
                                                <div class="ui right floated button editBtn" style="padding-top: 0;" @click="deleteList(0, item)">
                                                    <i class="ui cancel outline icon editIcon"></i>
                                                </div>
                                                <div class="ui right floated button editBtn" style="padding-top: 0;" @click="editList(0, item)">
                                                    <i class="ui edit outline icon editIcon"></i>
                                                </div>
                                            </div>
                                            <div class="ui action add input" style="margin-top: 5px;" v-if="item.edit">
                                                <input type="text" v-model="item.editContent"/>
                                                <div class="ui positive button" @click="confirm(0, item)">
                                                    <i class="check icon" style="margin: 0;"></i>
                                                </div>
                                                <div class="ui negative button" @click="item.edit = false">
                                                    <i class="plus icon cancelIcon"></i>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </td>
                                <td style="width: 50%;">
                                    <div class="ui action add input">
                                        <input type="text" v-model="people.probably" placeholder="Prowadzący"/>
                                        <div class="ui yellow button" @click="add(0)">
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
                                        <li class="ui segment" style="padding: 10px;"><em>Harcerz po zbiórce będzie umiał: </em></li>
                                        <li v-for="item in goals.list" class="ui segment" style="padding: 10px;">
                                            <div v-if="item.edit === false">
                                                <div class="itemName">{{item.name}}</div>
                                                <div class="ui right floated button editBtn" style="padding-top: 0;" @click="deleteList(1, item)">
                                                    <i class="ui cancel outline icon editIcon"></i>
                                                </div>
                                                <div class="ui right floated button editBtn" style="padding-top: 0;" @click="editList(1, item)">
                                                    <i class="ui edit outline icon editIcon"></i>
                                                </div>
                                            </div>
                                            <div class="ui action add input" style="margin-top: 5px;" v-if="item.edit">
                                                <input type="text" v-model="item.editContent"/>
                                                <div class="ui positive button" @click="confirm(1, item)">
                                                    <i class="check icon" style="margin: 0;"></i>
                                                </div>
                                                <div class="ui negative button" @click="item.edit = false">
                                                    <i class="plus icon cancelIcon"></i>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </td>
                                <td style="width: 50%;">
                                    <div class="ui action add input">
                                        <input type="text" v-model="goals.probably" placeholder="Cele"/>
                                        <div class="ui yellow button" @click="add(1)">
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
                            <tr v-for="item in todo.list">
                                <td>{{todoIndex(item)}} .</td>
                                <td>{{item.content}}</td>
                                <td class="time">{{item.time}}</td>
                                <td>{{item.materials}}</td>
                                <td>
                                    <div style="float: right;">
                                                <div class="ui button" style="padding: 0; background: none;"  @click="up(item)">
                                                    <i class="angle up icon" style="margin: 0; font-size: 20px;"></i>
                                                </div>
                                                <div class="ui button" style="padding: 0; background: none;" @click="down(item)">
                                                    <i class="angle down icon" style="margin: 0; font-size: 20px;"></i>
                                                </div>
                                                <div class="ui button" style="padding: 0; background: none;" @click="todoDelete(item)">
                                                    <i class="delete icon" style="margin: 0; font-size: 20px;"></i>
                                                </div>
                                                <div class="ui button" style="padding: 0; background: none;" @click="todoEdit(item)">
                                                    <i class="ui edit outline icon editIcon" style="margin: 0; font-size: 20px;"></i>
                                                </div>
                                        </div>
                                </td>
                            </tr>
                            <tr id="todoRow">
                                <td colspan="2">
                                    <div class="ui input processInput">
                                        <input type="text" placeholder="Treść" v-model="todo.probablyContent"/>
                                    </div>
                                </td>
                                <td>
                                    <div class="ui input processInput">
                                        <input type="text" placeholder="Czas" v-model="todo.probablyTime"/>
                                    </div>
                                </td>
                                <td>
                                    <div class="ui input processInput">
                                        <input type="text" placeholder="Materiały" v-model="todo.probablyMaterials"/>
                                    </div>
                                </td>
                                <td>
                                    <div class="ui buttons" id="todoBtn">
                                        <button class="ui yellow button" @click="todoAdd" tabindex="0">
                                            <i class="ui plus icon" style="margin: 0;"></i>
                                        </button>
                                        <button class="ui negative button"  @click="todoCancel" tabindex="0">
                                            <i class="ui plus icon cancelIcon" style="margin: 0;"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="ui segment" id="todoDiv">
                        <div id="todoInputs">
                            <div class="ui input processInput2" style="max-width: 40% !important;">
                                <input type="text" placeholder="Treść" v-model="todo.probablyContent"/>
                            </div>
                            <div class="ui input processInput2"  style="max-width: 20% !important;">
                                <input type="text" placeholder="Czas" v-model="todo.probablyTime"/>
                            </div>
                            <div class="ui input processInput2" style="max-width: 30% !important;">
                                <input type="text" placeholder="Materiały" v-model="todo.probablyMaterials"/>
                            </div>
                            <div class="ui buttons" id="todoBtn">
                                <button class="ui yellow button" @click="todoAdd" tabindex="0">
                                    <i class="ui plus icon" style="margin: 0;"></i>
                                </button>
                                <button class="ui negative button" @click="todoCancel" tabindex="0">
                                    <i class="ui plus icon cancelIcon" style="margin: 0;"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <transition name="fade">
                <div id="overlay" v-if="todo.edit.isEditing">
                    <div id="modal" class="ui card">
                        <div id="todoInputs">
                            <div class="ui input processInput2" style="width: 40% !important;">
                                 <input type="text" placeholder="Treść" v-model="todo.edit.editContent"/>
                             </div>
                            <div class="ui input processInput2" style="max-width: 20% !important;">
                                <input type="text" placeholder="Czas" v-model="todo.edit.editTime"/>
                            </div>
                            <div class="ui input processInput2" style="width: 40% !important;">
                                <input type="text" placeholder="Materiały" v-model="todo.edit.editMaterials"/>
                            </div>
                            <br/>
                            <div class="ui buttons" id="todoBtn">
                                <button class="ui positive button" @click="todoEditConfirm" tabindex="0">
                                    <i class="ui check icon" style="margin: 0;"></i>
                                </button>
                                <button class="ui negative button" @click="todoEditCancel" tabindex="0">
                                    <i class="ui plus icon cancelIcon" style="margin: 0;"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
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
                                        <li class="ui segment" style="padding: 10px;"><em>Materiały dodatkowe: </em></li>
                                        <li v-for="item in added.list" class="ui segment" style="padding: 10px;">
                                            <div v-if="item.edit === false">
                                                <div class="itemName">{{item.name}}</div>
                                                <div class="ui right floated button editBtn" style="padding-top: 0;" @click="deleteList(2, item)">
                                                    <i class="ui cancel outline icon editIcon"></i>
                                                </div>
                                                <div class="ui right floated button editBtn" style="padding-top: 0;" @click="editList(2, item)">
                                                    <i class="ui edit outline icon editIcon"></i>
                                                </div>
                                            </div>
                                            <div class="ui action add input" style="margin-top: 5px;" v-if="item.edit">
                                                <input type="text" v-model="item.editContent"/>
                                                <div class="ui positive button" @click="confirm(2, item)">
                                                    <i class="check icon" style="margin: 0;"></i>
                                                </div>
                                                <div class="ui negative button" @click="item.edit = false">
                                                    <i class="plus icon cancelIcon"></i>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </td>
                                <td style="width: 50%;">
                                    <div class="ui action add input">
                                        <input type="text" v-model="added.probably" placeholder="Materiały"/>
                                        <div class="ui yellow button" @click="add(2)">
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
            todo: {
                edit: {
                    isEditing: false,
                    editContent: "",
                    editTime: "",
                    editMaterials: "",
                    index: '',
                },
                probablyContent: "",
                probablyTime: "",
                probablyMaterials: "",
                list: [],
            },
            /*apiUrl: 'http://aleksanderskubala.github.io/pdfApi/php/index.php?',*/
            apiUrl: 'http://localhost/kptApi/php/?',
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
                    if(this.people.probably){
                        this.people.list.push({
                            name: this.people.probably,
                            edit: false,
                            editContent: '',
                        });
                        this.people.probably = "";
                    }
                break;
                case 1:
                    if(this.goals.probably){
                        this.goals.list.push({
                            name: this.goals.probably,
                            edit: false,
                            editContent: '',
                        });
                        this.goals.probably = "";
                    }
                break;
                case 2:
                    if(this.added.probably){
                        this.added.list.push({
                            name: this.added.probably,
                            edit: false,
                            editContent: '',
                        });
                        this.added.probably = "";
                    }
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
        editList(what, item){
            var index;
            switch(what) {
                case 0:
                    index = this.people.list.indexOf(item);
                    this.people.list[index].editContent = this.people.list[index].name;
                    this.people.list[index].edit = true;
                break;

                case 1:
                    index = this.goals.list.indexOf(item);
                    this.goals.list[index].editContent = this.goals.list[index].name;
                    this.goals.list[index].edit = true;
                break;

                case 2:
                    index = this.added.list.indexOf(item);
                    this.added.list[index].editContent = this.added.list[index].name;
                    this.added.list[index].edit = true;
                break;
            }
        },
        confirm(list, item){
            var index;
            switch (list) {
                case 0:
                    index = this.people.list.indexOf(item);
                    this.people.list[index].name = this.people.list[index].editContent;
                    this.people.list[index].edit = false;
                break;

                case 1:
                    index = this.goals.list.indexOf(item);
                    this.goals.list[index].name = this.goals.list[index].editContent;
                    this.goals.list[index].edit = false;
                break;

                case 2:
                    index = this.added.list.indexOf(item);
                    this.added.list[index].name = this.added.list[index].editContent;
                    this.added.list[index].edit = false;
                break;

                default:
                break;
            }
        },
        deleteList(what, item){
            var index;
            var newLess;
            var newMore;
            switch (what) {
                case 0:
                    index = this.people.list.indexOf(item);
                    newLess = this.people.list.slice(0, index);
                    newMore = this.people.list.slice(index+1);
                    this.people.list = [].concat(newLess, newMore);
                break;

                case 1:
                    index = this.goals.list.indexOf(item);
                    newLess = this.goals.list.slice(0, index);
                    newMore = this.goals.list.slice(index+1);
                    this.goals.list = [].concat(newLess, newMore);
                break;

                case 2:
                    index = this.added.list.indexOf(item);
                    newLess = this.added.list.slice(0, index);
                    newMore = this.added.list.slice(index+1);
                    this.added.list = [].concat(newLess, newMore);
                break;

                default:
                break;
            }
        },
        up(item){
            var index;

            var lessRest;
            var first;
            var second;
            var third;
            var rest;

            var index = this.todo.list.indexOf(item);

            lessRest = this.todo.list.slice(0, index-1);
            first = this.todo.list.slice(index-1, index);
            second = this.todo.list.slice(index, index+1);
            third = this.todo.list.slice(index+1, index+2);
            rest = this.todo.list.slice(index+2);

            if(index>0)
                this.todo.list = [].concat(lessRest, second, first, third, rest);
            else
                this.todo.list = [].concat(second, first, third, rest);
        },
        down(item){
            var index;
            var max;

            var lessRest;
            var first;
            var second;
            var third;
            var rest;

            index = this.todo.list.indexOf(item);
            max = this.todo.list.length - 1;

            lessRest = this.todo.list.slice(0, index-1);
            first = this.todo.list.slice(index-1, index);
            second = this.todo.list.slice(index, index+1);
            third = this.todo.list.slice(index+1, index+2);
            rest = this.todo.list.slice(index+2);

            if(index === max){}
            else if(index > 0)
                this.todo.list = [].concat(lessRest, first, third, second, rest);
            else
                this.todo.list = [].concat(third, second, rest);

        },
        todoAdd(){
            var content = this.todo.probablyContent;
            var time = this.todo.probablyTime;
            var materials = this.todo.probablyMaterials;
            var index = this.todo.list.length;
            index++;

            if(!materials) materials = "-";

            if(content && time){
                this.todo.list.push({
                    content: content,
                    time: time,
                    materials: materials,
                });
                this.todo.probablyContent = "";
                this.todo.probablyTime = "";
                this.todo.probablyMaterials = "";
            }
        },
        todoIndex(item) {
            return this.todo.list.indexOf(item)+1;
        },
        todoCancel() {
            this.todo.probablyContent = "";
            this.todo.probablyTime = "";
            this.todo.probablyMaterials = "";
        },
        todoDelete(item) {
            var index = this.todo.list.indexOf(item);
            var less;
            var more;

            less = this.todo.list.slice(0, index);
            more = this.todo.list.slice(index+1);

            this.todo.list = [].concat(less, more);
        },
        todoEdit(item) {
            var index = this.todo.list.indexOf(item);

            this.todo.edit.isEditing = true;

            this.todo.edit.index = index;
            this.todo.edit.editContent = this.todo.list[index].content;
            this.todo.edit.editTime = this.todo.list[index].time;
            this.todo.edit.editMaterials = this.todo.list[index].materials;
        },
        todoEditConfirm() {
            var index = this.todo.edit.index;

            if(this.todo.edit.editContent && this.todo.edit.editTime) {
                this.todo.list[index].content = this.todo.edit.editContent;
                this.todo.list[index].time = this.todo.edit.editTime;
            }

            if(this.todo.edit.editMaterials)
                this.todo.list[index].materials = this.todo.edit.editMaterials;

            else {
                this.todo.list[index].materials = '-';
            }

            this.todo.edit.isEditing = false;
        },
        todoEditCancel() {
            this.todo.edit.isEditing = false;
        },
        newK() {

            var el = document.querySelector('#konspekt');
            var kptName = '';

            if(this.when.content){
                kptName = 'konspekt('+this.when.content+').pdf';
            } else{
                kptName = 'konspekt.pdf';
            }

            doPDF2(kptName);

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

#mainTable {
    width: 100%;
    // border-color: rgba(34,36,38,.30);
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

    #todoDiv {
        display: none;
    }

    .processInput{
        width: 100%;
        padding: 10px;
    }

    #todoBtn{
        display: flex;
        justify-content: center;
    }

    #modal {
        width: 100% !important;
        height: 60% !important;

        left: 0% !important;
        top: 20% !important;

        .processInput{
            clear: both !important;
            width: 100% !important;
        }
    }
}

@media screen and (min-width: 576px) {
    #todoRow{
        display: none !important;
    }
}

.listS{
    padding: 10px;
}

.itemName {
    display: inline-block;
    max-width: 70%;
}

.todoInputs {
    width: 100%;
}

.processInput{
    display: flex;
    float: left;
}

#todoDiv {
    border: none !important;
    box-shadow: none;
}

.processInput2{
    display: flex;
    float: left;

    width: 40%;
    padding: 10px;
    box-sizing: border-box;
}

.processInput input{
    width: 70%;
}

.time {
    max-width: 10% !important;
}

#todoBtn {
    clear: both;
    margin-top: 10px;
}

#overlay {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0, .60);

    position: fixed;
    z-index: 102;

    top: 0;
    left: 0;
    right: auto;
    bottom: auto;

    #modal{
        width: 50%;
        height: 40%;

        left: 25%;
        top: 30%;
        right: auto;
        bottom: auto;

        display: flex;
        align-items: center;
    }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}


///HEADER///

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

#konspekt{

    position: absolute;
    left: 0;
    display: none;
    width: 794px;

    #container{
        font-family: 'Segoe UI', sans-serif;
        font-size: 15px;

        max-width: 80%;
        display: flex;
        margin: auto;

        align-items: center;
        justify-content: center;
    }
}

</style>
