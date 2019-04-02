const save = function (data){
    var get = window.localStorage.getItem('konspekty');
    //window.localStorage.clear();

    if(!get) {
        window.localStorage.setItem('konspekty', JSON.stringify({konspekty: []}));
        save();
    } else if(data) {
        get = JSON.parse(get);
        console.log(data.title);
        /*get.konspekty.filter((value)=>{
            return value.title != data.title;
        });*/
        get.konspekty.unshift(data);
        get.konspekty.slice(0, 9);
        get = JSON.stringify(get);
        window.localStorage.setItem('konspekty', get);
    } else {
        console.error('You have to push data!!!');
    }
};

const read = function (elNum){
    var get = window.localStorage.getItem('konspekty');
    get = JSON.parse(get);
    if(get) {
        var data = get.konspekty;
        var list = data.length > elNum ? data.slice(elNum) : data;
        return list;
    } else {
        window.localStorage.setItem('konspekty', JSON.stringify({konspekty: []}));
        read(elNum);
    }
};

/* CONST STRUCTURE

[{1},{},...]

{1}:
{
    title: this.title.content,
    date: this.when.content,
    main: this.main.content,
    people: this.people.list,
    goals: this.goals.list,
    todo: this.todo.list,
}

*/
