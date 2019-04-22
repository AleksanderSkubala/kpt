const outerHeight = function(el){
    var elHeight = parseInt(window.getComputedStyle(el).getPropertyValue('height'));
    elHeight += parseInt(window.getComputedStyle(el).getPropertyValue('margin-top'));
    elHeight += parseInt(window.getComputedStyle(el).getPropertyValue('margin-bottom'));
    return elHeight;
};

const cutFun = function(arr, mar) {
    arr.cut(mar);
};

NodeList.prototype.cut = function(marginBottom = 0){
    var parent = this[0];
    var index = 0;
    var height = 0;
    var pages = 1;
    var margin = 0;
    var lastMargin = 0;

    var nodes = this;
    var fragment = document.createDocumentFragment();

    for(var i = 0; i < this.length; i++) {
        var el = this[i];
        parent = el.parentNode;
        height += outerHeight(el);
        pages = height/(1123-marginBottom);

        if(pages>1) {
            pages = Math.floor(pages);
            margin = outerHeight(el)-(height-(pages*1123)); //margin var is equal height of the piece of element that is on the sheet
            el.style.marginTop = `${margin+lastMargin+marginBottom}px`; //positioning the element on the border of the page with marginBot

            //multipage functionality => resetting all values
            index = 0;
            height = outerHeight(el);
            pages = 1;
            margin = 0;
            lastMargin = 0;
        } else {
            lastMargin = parseInt(window.getComputedStyle(el).getPropertyValue('margin-bottom')); //setting last(for next iteration) margin bottom as present margin botom
            index += 1;
        }
    }
};

var elements = document.querySelectorAll('.box');
console.log(elements);
elements.cut();

// USAGE:
// NodeList.cut(margin);
// margin [int, 0 by default] => margin on the bottom and top of the page
