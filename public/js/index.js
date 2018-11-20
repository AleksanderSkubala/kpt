function doPDF(kptName){

    document.querySelector('#konspekt').style.display = 'flex';
    var pdf = new jsPDF('p', 'mm', 'a4');

    pdf.fromHTML(document.querySelector('#konspekt'));

    pdf.save(kptName+'.pdf')
    document.querySelector('#konspekt').style.display = 'none';

}

function doPDF2(kptName) {

    document.querySelector('#konspekt').style.display = 'flex';

	html2canvas(document.querySelector('#konspekt'),
        {dpi: 300}
        .then(canvas => {
            var pdf = new jsPDF('p', 'mm', 'a4');
            var img = canvas.toDataURL('image/png');

            var counter = (canvas.height / 934)*80;
            // console.log(counter);
            //80 is a counter that works for height 934
            //we divide the canvas height by 934 and multiply it by 80

            // var counter = 74720 / canvas.height;
            // console.log(counter);
            //we divide height of pdf page by canvas height

			pdf.addImage(img, 'PNG', 0, 0, 0, counter);
            pdf.save(kptName+'.pdf');

            document.querySelector('#konspekt').style.display = 'none';
    }));
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

function downloadFILE(request, name){
    switch(request){
        case 'fromHTML':
            doPDF(name);
        break;

        case 'addHTML':
            addPDF(name);
        break;

        case 'html2canvas':
            doPDF2(name);
        break;

        case 'png':
            doPNG(name);
        break;
    }
}
