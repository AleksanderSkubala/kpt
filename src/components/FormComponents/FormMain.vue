<template>
<div>

<!--TEMPLATE-->

    <div id="konspekt">
        <div class="page">
            <div id="content">

            </div>
            <h1>Zbiórka "{{title.content}}"</h1>
            <div id="details">
                <p><b>Odpowiedzialny: </b>{{main.content}}</p>
                <p><b>Kiedy: </b>{{when.content}}</p>
                <div id="people">
                    <p id="main">Prowadzący:</p>
                    <ol v-for="item in people.list" :key="item.name">
                        <li>{{indexList(item, 1)}}. {{item.name}}</li>
                    </ol>
                </div>
                <div id="goals">
                    <p id="main">Cele(osoba po zbiórce powinna umieć) :</p>
                    <ol v-for="item in goals.list" :key="item.name">
                        <li>{{indexList(item, 2)}}. {{item.name}}</li>
                    </ol>
                </div>
                <div id="added" v-if="added.list.length > 0">
                    <p id="main">Załączniki:</p>
                    <ol v-for="item in added.list" :key="item.name">
                        <li>{{indexList(item, 3)}}. {{item.name}}</li>
                    </ol>
                </div>
                <p id="main">Przebieg: </p>
            </div>
            <table id="todo" border="1">
                <thead id="todoHead">
                    <tr>
                        <th>Lp.</th>
                        <th>Treść</th>
                        <th>Czas</th>
                        <th>Materiały</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in todo.list" :key="item.name">
                        <th>{{todoIndex(item)}}. </th>
                        <th>{{item.content}}</th>
                        <th>{{item.time}}</th>
                        <th>{{item.materials}}</th>
                    </tr>
                </tbody>
            </table>
            <p id="footer">
                Konspekt wygenerowany w Generatorze Konspektów: <br/>
                <a href="https://aleksanderskubala.github.io/kpt">https://aleksanderskubala.github.io/kpt</a>
            </p>
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
                <div class="ui animated primary button" @click="newK()" id="dropBtn">
                    <div class="visible content">Zapisz</div>
                    <div class="hidden content">
                        <i class="download icon"></i>
                    </div>
                </div>
        </div>
    </nav><!--END OF HEADER-->


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
                                        <li v-for="item in people.list" :key="item.name" class="ui segment" style="padding: 10px;">
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
                                        <li v-for="item in goals.list" :key="item.name" class="ui segment" style="padding: 10px;">
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
                   <!-- MOBILE -->
                   <table class="ui striped table mobile" id="todoTable">
                        <thead>
                            <tr>
                                <th colspan="5">Przebieg:</th>
                            </tr>
                            <tr>
                                <th>Lp.</th>
                                <th>
                                    <div>Treść</div>
                                    <div>Czas</div>
                                    <div>Materiały</div>
                                </th>
                                <th>Edycja</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in todo.list" :key="item.name">
                                <td>{{todoIndex(item)}}</td>
                                <td>
                                    <div>{{item.content}}</div>
                                    <div>{{item.time}}</div>
                                    <div>{{item.materials}}</div>
                                </td>
                                <td>
                                    <div id="operation">
                                        <div class="ui button"  @click="up(item)">
                                            <i class="angle up icon"></i>
                                        </div>
                                        <div class="ui button" @click="down(item)">
                                            <i class="angle down icon"></i>
                                        </div>
                                        <div class="ui button" @click="todoDelete(item)">
                                            <i class="delete icon"></i>
                                        </div>
                                        <div class="ui button" @click="todoEdit(item)">
                                            <i class="ui edit outline icon editIcon"></i>
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

                    <!--DESKTOP-->
                    <table class="ui striped table pc" id="todoTable">
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
                            <tr v-for="item in todo.list" :key="item.name">
                                <td>{{todoIndex(item)}}</td>
                                <td>{{item.content}}</td>
                                <td>{{item.time}}</td>
                                <td>{{item.materials}}</td>
                                <td>
                                    <div id="operation">
                                        <div class="ui button" @click="up(item)">
                                            <i class="angle up icon"></i>
                                        </div>
                                        <div class="ui button" @click="down(item)">
                                            <i class="angle down icon"></i>
                                        </div>
                                        <div class="ui button" @click="todoDelete(item)">
                                            <i class="delete icon"></i>
                                        </div>
                                        <div class="ui button" @click="todoEdit(item)">
                                            <i class="ui edit outline icon editIcon"></i>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="ui segment pc" id="todoDiv">
                        <div id="todoInputs">
                            <div class="ui input processInput2">
                                <input type="text" placeholder="Treść" v-model="todo.probablyContent"/>
                            </div>
                            <div class="ui input processInput2">
                                <input type="text" placeholder="Czas" v-model="todo.probablyTime"/>
                            </div>
                            <div class="ui input processInput2">
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
                            <div class="ui input processInput2">
                                 <input type="text" placeholder="Treść" v-model="todo.edit.editContent"/>
                             </div>
                            <div class="ui input processInput2">
                                <input type="text" placeholder="Czas" v-model="todo.edit.editTime"/>
                            </div>
                            <div class="ui input processInput2">
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
                                        <li v-for="item in added.list" :key="item.name" class="ui segment" style="padding: 10px;">
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
                show: true,
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
            can: false,
        };
    },
    props: {
        konspektData: {
            type: String,
            required: false,
        },
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

            var can = true;
            var el = document.querySelector('#konspekt');
            var kptName = '';

            if(this.when.content){
                kptName = 'konspekt('+this.when.content+')';
            } else{
                kptName = 'konspekt';
                can = false;
            }

            if(!this.title){
                can = false;
            }

            if(!this.main){
                can = false;
            }

            if(this.people.list.length > 0){
                can = true;
            } else {
                can = false;
            }

            if(this.goals.list.length > 0){
                can = true;
            } else {
                can = false;
            }

            if(this.todo.list.length > 0){
                can = true;
            } else {
                can = false;
            }

            if(can === true){
                if(document.querySelector('#konspekt').style.offsetHeight < 1123){
                    downloadFILE('html2canvas', kptName);
                }   else{
                    downloadFILE('addHTML', kptName);
                }

                var elData = {
                    title: this.title.content,
                    date: this.when.content,
                    main: this.main.content,
                    people: this.people.list,
                    goals: this.goals.list,
                    todo: this.todo.list,
                    added: this.added.list,
                };

                var oldData = this.konspektData ? JSON.parse(this.konspektData) :
                save(elData, oldData);
            }else{
                can = true;
                console.error("App cant' do pdf file.");
                alert("Masz za mało danych");
            }

        },
        indexList(item, list) {
            switch(list){
                case 1:
                    return this.people.list.indexOf(item)+1;
                break;

                case 2:
                    return this.goals.list.indexOf(item)+1;
                break;

                case 3:
                    return this.added.list.indexOf(item)+1;
                break;
            }

        },
    },
    mounted() {
        this.today = (new Date()).getDate();

        if(this.konspektData) {
            var data = JSON.parse(this.konspektData);

            this.title.content = data.title;
            this.title.edit = false;

            this.when.content = data.date;
            this.when.edit = false;

            this.main.content = data.main;
            this.main.edit = false;

            this.people.list = data.people;
            this.goals.list = data.goals;
            this.todo.list = data.todo;
            this.added.list = data.added;
        }
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
    width: 100%;
}

#mainTable > tbody > tr > td {
    box-sizing: border-box;
}

@media only screen and (max-width: 767px){

    #mainTable {
        border: none !important;
        margin-top: 0;
    }

    #todoDiv{
        display: none;
    }

    .processInput{
        width: 100%;
        padding: 10px;
    }

    #modal {
        width: 100% !important;
        height: 60% !important;

        margin: auto auto;

        .processInput{
            clear: both !important;
            width: 100% !important;
        }
    }

    .pc{
        display: none !important;
    }

    .mobile{
        display: flex !important;
    }

    #todoTable:first-child{
        display: table !important;
    }

    #todoTable {
        max-width: 100% !important;
        width: 100%;

        thead tr{
            display: flex;
            width: 100%;

            th{
                width: 20% !important;
            }

            th:nth-child(2){
                width: 50% !important;

                div{
                    display: flex;
                    justify-content: center;
                }
            }
        }

        tr {
            display: flex !important;
            width: 100%;

            td{
                display: block !important;
                width: 20% !important;
                float: right;
            }

            td:nth-child(2){
                width: 50% !important;

                div {
                    display: flex;
                    justify-content: center;
                    text-align: center;
                    margin: 4px;
                }
            }
        }

        #todoRow{

            display: table !important;
            width: 100% !important;

            td {
                width: 100% !important;
                clear: both;
            }
        }
    }

    #overlay #modal{
        width: 95vw !important;
        height: 95vh !important;

        top: 2.5vh !important;
        left: 2.5vw !important;

        display: flex;
        align-items: center;
        justify-content: center;

        #todoInputs .ui.input {
            max-width: 100%;
            width: 100%;
        }
    }
}

@media screen and (min-width:768px){
    #todoRow {
        display: none;
    }

    .pc{
        display: table;
    }

    .mobile{
        display: none;
    }
}

#operation {
    * {
        float: left;
    }

    div {
        background: none;
        margin: 0;
        padding: 5px;

        i {
            font-size: 23px;
            margin: 0;
        }
    }
}

.listS{
    padding: 10px;
}

.itemName {
    display: inline-block;
    max-width: 70%;
}

#todoInputs {
    div {
        box-sizing: border-box;
    }

    div:first-child {
        max-width: 50%;
    }

    div:nth-child(2) {
        max-width: 20%;
    }

    div:last-child {
        max-width: 30%;
    }
}

.processInput{
    display: flex;
    float: left;
}

#todoTable {
    text-align: center;
}

#todoDiv {
    border: none !important;
    box-shadow: none;
    margin: auto auto;
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
    min-width: 50%;
}

#overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, .60);

    position: fixed;
    z-index: 102;

    top: 0;
    left: 0;
    right: auto;
    bottom: auto;

    #modal{
        $width: 70%;
        $height: 60%;

        width: $width;
        height: $height;
        position: fixed;

        $left: (100% - $width) / 2;
        left: $left;

        $top: (100% - $height) / 2;
        top: $top;

        #todoInputs {
            width: 90%;
            margin: auto auto;
        }

        #todoBtn {
            min-width: 35%;
        }
    }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}


///HEADER///

#dropdown {
    display: block;
    position: fixed;
}

.show{
    display: block;
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

    position: fixed;
    left: 100vw;
    display: block;
    width: 794px;

    background-color: white;
    z-index: 15;

    font-family: 'Segoe UI', sans-serif;
    font-size: 15px;

    .page{
        width: 65%;
        margin: auto;
        margin-bottom: 15px;

        #footer {
            font-size: 0.95em;
            margin-top: 5vh;
            text-align: center;
        }

        #details{
            margin-bottom: 20px;
            float: left;
        }

        #main{
            font-weight: bold;
        }

        p{
            padding-top: 2px;
        }

            ul{
                padding: 1px;
            }

            div{
                margin-top: 2px;
            }

            h1{
                display: flex;
                justify-content: center;
            }
        }

        #todo{
            width: 100%;
            justify-content: center;

            border-collapse: collapse;
            border: none;

            th, td{
                border: 1px solid black;
                padding: 4px;
            }

            tr > th {
                &:first-child{
                    max-width: 5% !important;
                }

                &:nth-child(2){
                    width: 40% !important;
                }

                &:nth-child(3){
                    max-width: 10% !important;
                }

                &:last-child{
                    max-width: 25% !important;
                }
            }

            tr:last-child(){
                border-bottom: 1px solid black;
            }
        }

    h1:first-child{
        margin: 40px;
    }
}

</style>
