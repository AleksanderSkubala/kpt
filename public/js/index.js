function dropdown(){
    document.querySelector('#dropdown').classList.toggle('show');
}

function doPDF(kptName){

    document.querySelector('#konspekt').style.display = 'flex';
    var pdf = new jsPDF('p', 'mm', 'a4');

    var specialElementHandlers = {
        '#konspekt': function(element, renderer) {
        return true;
    }};

    pdf.fromHTML(document.querySelector('#konspekt').outerHTML, {
        'pagesplit': true,
        'elementHandlers': specialElementHandlers
    });

    pdf.save(kptName+'.pdf');
    console.log('formHTML');
    document.querySelector('#konspekt').style.display = 'none';

}

function doHTML(kptName) {

    document.querySelector('#konspekt').style.display = 'flex';

    html2canvas(document.querySelector('#konspekt'),{
            dpi: 300,
        }).then(canvas => {
            var pdf = new jsPDF('p', 'mm', 'a4');
            var img = canvas.todataKURL('image/png');

            var counter = (canvas.height / 934)*80;

            pdf.addImage(img, 'PNG', 0, 0, 0, counter);
            pdf.save(kptName+'.pdf');

            document.querySelector('#konspekt').style.display = 'none';
    });
}

function addPDF(kptName){
    document.querySelector('#konspekt').style.display = 'flex';

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

    document.querySelector('#konspekt').style.display = 'none';
}

function doPNG(kptName){
    document.querySelector('#konspekt').style.display = 'flex';

    html2canvas(document.querySelector('#konspekt'),
    {dpi: 300})
        .then(function(canvas) {
            canvas.toBlob(function(blob) {
                window.saveAs(blob, kptName+".png");
            });

            document.querySelector('#konspekt').style.display = 'none';
        }
    );

}

///MAIN FUNCTION///

function downloadFILE(request, name, dataK){
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