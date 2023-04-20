
/* FORMULARIO DE COMPRA*/ 

$(document).ready(function() {
  $('#formularioDeCompra').submit(function(e) {
    e.preventDefault(); 
   
    var nombre = $('#nombre').val();
    var email = $('#email').val();
    var cantidad = $('#cantidad').val();

    if (nombre == '' || email == '' || cantidad == '') {
      alert('Por favor complete todos los campos.');
      return false;  
    }
    alert('Formulario enviado con éxito.');
    return true;
    

  });
});




/*  FORMULARIO CONTACTO */

  $("formularioDeContacto").validate({

  rules:{
    nombre:"required",
    email:{
      required:true,
      email :true
    },
    mensaje: "required"
  },
  messages:{
    nombre: "Por favor ingrese su nombre",
    email:{
      required:"Por favor ingrese su dirección de Gmail",
      email:"Por favor ingrese un dirreccion de Gmail valida"
    },
    submitHandler: function(form){
      var nombre = $("#nombre").val();
      var email = $("#email").val();
      var mensaje = $("#mensaje").val();
      
      $.ajax({
        url:"https://reqres.in/api/users?page=2",
        method:"POST",
        data:{
          nombre:nombre,
          email:email,
          mensaje:mensaje
        },
        success: function(response){
          console.log("Exito:", response);
          alert("Tu formulario fue enviado con exito, pronto nos comunicaremos contigo");
        },
        error:function(xhr,status, error){
          console.error("Error:",error)
          alert("Se a producido un error al enviar el formulario, por favor intente de nuevo o espere unos ")
        }
      })
    }
    
  }




  })











/*
$(document).ready(function() {
  $('#formularioDeContacto').submit(function(e) {
    e.preventDefault(); 
   
    var nombre = $('#nombre').val();
    var email = $('#email').val();
    var mensaje = $('#mensaje').val();

    if (nombre == '' || email == '' || mensaje == '') {
      alert('Por favor complete todos los campos.');
      return false;
    }
    alert('Formulario enviado con éxito.');
    return true;
  });
}); */



