window.addEventListener('load', setup)

function setup(){
  var clickMeBtn =document.getElementById('click-me')

  clickMeBtn.addEventListener('click', fun1)
  clickMeBtn.addEventListener('click', fun2)
}

function fun1(){
  console.log("Hallo, ich bin fun1")
}

function fun2(){
  console.log("Hallo, ich bin fun2")
}
