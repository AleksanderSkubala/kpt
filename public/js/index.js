const setup = function() {
    var el = document.querySelector('#container #todo tbody');
    var margin = 60; //40 - border
    el.childNodes.cut(margin, 469+margin, 940+margin);
}

function doPDF(kptName){
    var pdf = new jsPDF('p', 'mm', 'a4'),
    source = document.querySelector('#konspekt').outerHTML;

    var specialElementHandlers = {
        '#konspekt': function(element, renderer) {
        return true;
    }};

    pdf.fromHTML(source, {
        'pagesplit': true,
        'elementHandlers': specialElementHandlers
    });

    pdf.save(kptName+'.pdf');
    console.log('formHTML');
}

function doHTML(kptName) {
    html2canvas(document.querySelector('#konspekt'),{
            dpi: 300,
        }).then(canvas => {
            var pdf = new jsPDF('p', 'mm', 'a4');
            var img = canvas.todataKURL('image/png');

            var counter = (canvas.height / 934)*80;

            pdf.addImage(img, 'PNG', 0, 0, 0, counter);
            pdf.save(kptName+'.pdf');
    });
}

function addPDF(kptName){
    var pdf = new jsPDF('p', 'mm', 'a4');

    pdf.internal.scaleFactor = 11;

    pdf.addHTML(document.querySelector('#konspekt'), 0, 0,
        {
            pagesplit: true,
            background: '#fff',
            dpi: 300,
            margin: {'bottom' : 100},
        },
        function() {
            pdf.save(kptName+'.pdf');
        }
    );
}

function doPNG(kptName){
    html2canvas(document.querySelector('#konspekt'),
    {dpi: 300})
        .then(function(canvas) {
            canvas.toBlob(function(blob) {
                window.saveAs(blob, kptName+".png");
            });
        }
    );

}

///MAIN FUNCTION///

function downloadFILE(request, name, dataK){
    split();
    switch(request){
        case 'fromHTML':
            doPDF(name);
        break;

        case 'addHTML': //higher
            addPDF(name);
        break;

        case 'html2canvas': //lower
            doHTML(name);
        break;

        case 'png':
            doPNG(name);
        break;
    }
}