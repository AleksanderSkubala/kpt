const save = function (data){
    window.localStorage.clear();
    var get = window.localStorage.getItem('konspekty');

    if(!get) {
        window.localStorage.setItem('konspekty', JSON.stringify({konspekty: []}));
        save();
    } else if(data) {
        get = JSON.parse(get);
        console.log(data.title);
        
        var index = data.index;
        var first = get.konspekty.slice(0,index);
        var second = get.konspekty.slice(index+1);
        get.konspekty = first.concat(second);
        
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
