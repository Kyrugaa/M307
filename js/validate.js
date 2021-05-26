$().ready(function(){
  $("#myform").validate({
    rules: {
      userFirstName:{
        required: true,
        minlength: 2,
      },
      userLastName:{
        required: true,
        minlength: 2,
      },


      userEmail: {
        remote: {
            url: "ajax_handler.php",
            type: "get",
         data: {
              email: function(){
              return $('#email').val(),
            }
          }
        },


      }

    },
    messages: {
      userFirstName:{
        required: "Please enter your firstname.",
        minlength: "Name too short."
      },
      userLastName:{
        required: "Please enter your lastname.",
        minlength: "Name too short."
      },
      userEmail:{
        remote: "Email existiert schon."
      }
    }
  })
})
