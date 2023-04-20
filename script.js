var tables = {
  table1: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63],
  table2: [2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31, 34, 35, 38, 39, 42, 43, 46, 47, 50, 51, 54, 55, 58, 59, 62, 63],
  table3: [4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31, 36, 37, 38, 39, 44, 45, 46, 47, 52, 53, 54, 55, 60, 61, 62, 63],
  table4: [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31, 40, 41, 42, 43, 44, 45, 46, 47, 56, 57, 58, 59, 60, 61, 62, 63],
  table5: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63],
  table6: [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63]
}

const body = document.querySelector('.sec-container');

createTable(tables.table1);
createTable(tables.table2);
createTable(tables.table3);
createTable(tables.table4);
createTable(tables.table5);
createTable(tables.table6);

function createTable( element ){
  var tableContainer = document.createElement('div');
  tableContainer.classList.add('div');

  element.forEach(el => {
    var paragraph = document.createElement('p'); 
    var txt = document.createTextNode(el);
    
    paragraph.appendChild(txt);
    tableContainer.appendChild(paragraph);
    

  });

  body.appendChild(tableContainer);

}

function advinhar(){
  var checkbox = document.querySelectorAll('input');
  
  var numAdvinhado = 0;

  checkbox.forEach(el => {

    if(el.checked){
      var val = parseInt(el.value);
      numAdvinhado += val;
      
    } else {
      numAdvinhado += 0;
    }
  })

  if(numAdvinhado == 0){
    return 'Nenhum número foi pensado.';
  };

  checkbox.forEach(el => {
    el.checked = false;
  });

  return "Você pensou no número " + numAdvinhado;

}

const btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
  alert(advinhar());
});
