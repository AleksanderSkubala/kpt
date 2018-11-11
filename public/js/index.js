function doPDF(kptName){

    document.querySelector('#konspekt').style.display = 'flex';

    var pdf = new jsPDF('p', 'mm', 'a4');

    pdf.fromHTML(document.querySelector('#konspekt'));

    pdf.save(kptName)

    document.querySelector('#konspekt').style.display = 'none';

}

function doPDF2(kptName) {

    document.querySelector('#konspekt').style.display = 'flex';

	html2canvas(document.querySelector('#konspekt'),
        {dpi: 576})
        .then(canvas => {
			let pdf = new jsPDF('p', 'mm', 'a4');
			pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 0, 20);
            pdf.save(kptName);

            document.querySelector('#konspekt').style.display = 'none';
	});
}
