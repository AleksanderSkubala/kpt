NodeList.prototype.cut = function(){
    var i = this.length;
    var height = 0;
    var pages = 1;
    var margin = 0;

    this.forEach(el => {
        height += el.offsetHeight;
        pages = height/1123;
        if(pages>1) {
            pages = Math.floor(pages);
            margin = el.offsetHeight-(height-(pages*1123));
            //setting the margin on the value, that element is on the sheet
            el.style.offsetTop = el.offsetTop+margin+112;
            //positioning the element with the border of the page with 10%(of 1123) margin

            //it all will be in for loop that will repeat this for all pages
        }
    });


    console.log('lenght:',i,'height:',height);
};

var elements = document.querySelectorAll('.box');
console.log(elements);
elements.cut();