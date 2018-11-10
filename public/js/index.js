function doPDF(kptName){

    html2canvas(document.querySelector('#konspekt'),{
        onrendered:function(canvas){
            var img=canvas.toDataURL("image/png");
            var doc = new jsPDF();
            doc.addImage(img,'JPEG', 0, 10);
            doc.save(kptName);
        }
    });

}