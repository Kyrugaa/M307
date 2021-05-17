var counter = 0;

function lampeSteuern(){
  var lampe = document.getElementById('bulb');
  if (lampe.src.endsWith("img/pic_bulboff.gif")){
    lampe.src = "img/pic_bulbon.gif"
  } else {
    lampe.src = "img/pic_bulboff.gif"
  }
  counter = counter + 1
  document.getElementById('counter').innerText = counter
}

function zoom(){
  var lampe = document.getElementById('bulb')
  var slideAmount = document.getElementById('slider').value
  lampe.style.width=slideAmount+"%"
  lampe.style.height=slideAmount+"%"
}

/*
  setup ereignisbehandlung
  (wird nur einmal beim laden des skripts ausgeführt)
*/
var schalterLampe = document.getElementById("schalter-lampe")
schalterLampe.onclick = lampeSteuern

document.getElementById('slider').onchange = zoom
