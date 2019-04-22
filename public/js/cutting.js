const outerHeight = function(el){
    var elHeight = parseInt(window.getComputedStyle(el).getPropertyValue('height'));
    elHeight += parseInt(window.getComputedStyle(el).getPropertyValue('margin-top'));
    elHeight += parseInt(window.getComputedStyle(el).getPropertyValue('margin-bottom'));
    return elHeight;
};

NodeList.prototype.cut = function(marginBottom = 0, currHeight = 1123){
    var height = 0;
    var pages = 1;
    var margin = 0;
    var lastMargin = 0;

    for(var i = 0; i < this.length; i++) {
        var el = this[i];
        parent = el.parentNode;
        height += outerHeight(el);
        pages = height/(currHeight-marginBottom);

        if(pages>1) {
            pages = Math.floor(pages);
            margin = outerHeight(el)-(height-(currHeight)); //margin var is equal height of the piece of element that is on the sheet
            el.style.marginTop = `${margin+lastMargin+marginBottom}px`; //positioning the element on the border of the page with marginBot

            //multipage functionality => resetting all values
            height = outerHeight(el);
            pages = 1;
            margin = 0;
            lastMargin = 0;
        } else {
            lastMargin = parseInt(window.getComputedStyle(el).getPropertyValue('margin-bottom')); //setting last(for next iteration) margin bottom as present margin botom
        }
    }
};

// USAGE:
// NodeList.cut(margin, curentHeight);
// margin [int, 0 by default] => margin on the bottom and top of the page
//currentHeight [int, 1123 bu default] => max height of the page
