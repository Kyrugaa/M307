window.addEventListener('load', setup)

function setup(){
  window.addEventListener('keydown', keyLogger)
}

function keyLogger(){
  console.log(Date() + event.key)
  var li = document.createElement("li")
  li.innerText = event.key
  var ul = document.getElementById("key-list")
  ul.appendChild(li)
}

/**
  innerer Event
*/
function liClick(){
  console.log(event.target.innerText)
  //event.stopPropagation()
}

/**
  äusserer Event
*/
function ulClick(){
  console.log("Eltern-Event "+event.target.innerText)
}
