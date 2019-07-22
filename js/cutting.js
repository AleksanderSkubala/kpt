const outerHeight = function(el){
    var elHeight = parseInt(window.getComputedStyle(el).getPropertyValue('height'));
    elHeight += parseInt(window.getComputedStyle(el).getPropertyValue('margin-top'));
    elHeight += parseInt(window.getComputedStyle(el).getPropertyValue('margin-bottom'));
    return elHeight;
};

NodeList.prototype.cut = function(marginBottom, currHeight, secondHeight){
    var height = 0;
    var pages = 1;
    var margin = 0;
    var lastMargin = 0;

    if(this.lenght!==1)
    for(var i = 0; i < this.length; i++) {
        var el = this[i];
        height += outerHeight(el);
        pages = height/(currHeight-marginBottom);

        if(pages>1) {
            pages = Math.floor(pages);
            margin = outerHeight(el)-(height-(currHeight));
            margin = margin+lastMargin+marginBottom

            document.querySelectorAll('#container #todo tbody tr.space').forEach(elmnt => {
                elmnt.remove();
            });
            var node = document.createElement('tr');
            node.setAttribute('style',
            `background: none !important;border: none !important; height: ${margin}px !important;`);
            node.setAttribute('class','space');
            el.parentNode.insertBefore(node.cloneNode(), el);
            node = null;

            height = outerHeight(el);
            pages = 1;
            margin = 0;
            lastMargin = 0;
            currHeight = secondHeight;
        } else {
            lastMargin = parseInt(window.getComputedStyle(el).getPropertyValue('margin-bottom'));
        }
    }
};
