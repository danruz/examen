var ar = [];
var rc = ["B", "B", "A", "A", "D", "D", "B", "C", "D", "C"];
var nota = 0;
var valor = [0.5, 1, 0.8, 0.2, 0.3, 0.4, 0.6, 0.7, 0.2, 0.3]

function captura(op,pos)
{
   ar[pos] = op
}

function mostrar()
{
  var c = ar.join(" - ")
  document.getElementById('t1').value = c;
}

function lanota(){
  nota = 0
  for (var i = 0; i < ar.length; i++)
  {
    if (ar[i]==rc[i]) {nota++
        document.getElementById('t2').value = nota
    }
    
  }
}
