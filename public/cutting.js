const outerHeight = function(el){
    var elHeight = parseInt(window.getComputedStyle(el).getPropertyValue('height'));
    elHeight += parseInt(window.getComputedStyle(el).getPropertyValue('margin-top'));
    elHeight += parseInt(window.getComputedStyle(el).getPropertyValue('margin-bottom'));
    return elHeight;
};

NodeList.prototype.cut = function(marginBottom){
    var height = 0;
    var pages = 1;
    var margin = 0;
    var lastMargin = 0;

    this.forEach(el => {
        height += outerHeight(el);
        pages = height/(1123-marginBottom);

        if(pages>1) {
            pages = Math.floor(pages);
            margin = outerHeight(el)-(height-(pages*1123)); //margin var is equal height of the piece of element that is on the sheet
            el.style.marginTop = `${margin+lastMargin+marginBottom}px`; //positioning the element on the border of the page with marginBot
        } else {
            lastMargin = parseInt(window.getComputedStyle(el).getPropertyValue('margin-bottom')); //setting last(for next iteration) margin bottom as present margin botom
        }
    });
};

var elements = document.querySelectorAll('.box');
console.log(elements);
elements.cut(100);

// USAGE:
// NodeList.cut(margin);
// margin [int] => margin on the bottom and top of the page