const setup = function() {
    document.querySelector('#konspekt').childNodes.cut(50, 1029+50);
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
    setup();
    switch(request){
        case 'fromHTML':
            doPDF(name);
        break;

        case 'addHTML':
            addPDF(name);
        break;

        case 'html2canvas':
            doHTML(name);
        break;

        case 'png':
            doPNG(name);
        break;
    }
}