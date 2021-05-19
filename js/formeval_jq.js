$(document).ready(function(){

  //$('#email').blur(checkEmail)
  //$('#passwd').blur(checkPasswdLength)

  $('#anmeldung').on('submit', function(){
    checkEmail()
    checkPasswdLength()
    passwordsEqual()

    if ($('.has-error').length > 0){
      event.stopPropagation()
      event.preventDefault()
    } else {
      alert("sending form data now")
    }
  })

  var checkEmail = function(){
    var email =$('#email').val()
    if (email.length < 4 || email.search('@')<1){
      $('#email').addClass('has-error')
    } else {
      $('#email').removeClass('has-error')
    }
  }

  var checkPasswdLength = function(){
    if ($('#passwd').val().length < 5){
      $('#passwd').addClass('has-error')
      $('#passwd').next()
        .text("Passwort zu kurz")
        .css('display','block')
    } else {
      $('#passwd').removeClass('has-error')
      $('#passwd').next().css('display','none')
    }
  }

  var passwordsEqual = function(){
    if ($('#passwd').val()!=$('#passwd2').val()){
      $('#passwd2').addClass('has-error')
      $('#passwd2').next()
        .text("Passwörter stimmen nicht überein")
        .css('display','block')
    } else {
      $('#passwd2').removeClass('has-error')
      $('#passwd2').next().css('display','none')
    }
  }
})
