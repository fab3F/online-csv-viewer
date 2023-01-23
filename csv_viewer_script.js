var input = document.getElementById('input-file');
var handsontableContainer = document.getElementById('handsontable-container');

input.onchange = function () {
  var file = this.files[0];
  var reader = new FileReader();

  reader.onload = function (e) {
    var csv = e.target.result;
    var data = Papa.parse(csv, {
      header: true,
      skipEmptyLines: true
    });

    // reset container
    document.getElementById("content").getElementsByTagName("section")[0].remove();
    document.getElementById("content").setAttribute("class","background p-5");
    
    handsontableContainer.innerHTML = '';
    handsontableContainer.className = '';

    Handsontable(handsontableContainer, {
      data: data.data,
      rowHeaders: true,
      colHeaders: data.meta.fields,
      columnSorting: true,
      width: '100%',
      licenseKey: 'non-commercial-and-evaluation',
    });
  }

  file && reader.readAsText(file);
}

var spacing = window.setInterval(function(){
  let holder = document.getElementsByClassName("wtHolder")[0];
  if(typeof holder === 'undefined'){
        return;
  }
  holder.setAttribute("style", '');
}, 50);
