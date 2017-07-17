$(document).ready(function () {
    $('#gracias').hide();
    $("form").submit(function (e) {
        e.preventDefault();
    });
    $('#btnEnviarDos').click(function () {
        $('#formulario').show('slow');
        $('#gracias').hide();
        $('#formulario').trigger("reset");
    });
    $('#btnEnviar').click(function () {
        $('#btnEnviar').text('Enviando...');
        var nombre = $('#txtNombre').val();
        var mail = $('#txtMail').val();
        var telefono = $('#txtTelefono').val();
        var texto = "Edad: " + $('#txtEdad').val() + "/ Ciudad: " + $('#txtCiudad').val();
        var edad = $('#txtEdad').val();
        if(edad >= 23){
            if (nombre != "" && (mail != "" | telefono != "")) {
            
                var usuarioRequest = {
                    Nombre: nombre,
                    Email: mail,
                    Telefono: telefono,
                    TextArea: texto,
                    IdPrograma: 3
                }
                $.ajax({
                    type: 'POST',
                    url: 'http://www.instaclientes.com/api/usuarios/IngresoDatos',
                    //url: 'http://localhost:58924/api/usuarios/IngresoDatos',
                    dataType: 'json',
                    data: JSON.stringify(usuarioRequest),
                    contentType: 'application/json; charset=utf-8',
                    async: false,
                    success: function (data) {
                        $('#formulario').hide();
                        $('#gracias').show('slow');
                        $('#btnEnviar').text('Enviar');
                    },
                    error: function (xhr) {
                        alert('Problemas al ingresar los datos. Intente nuevamente.');
                        $('#btnEnviar').text('Enviar');
                    }
                });
            } else {
                $('#btnEnviar').text('Enviar');
                alert('Por favor llene todos los campos');
            }
        } else {
            alert('Este servicio es unicamente para personas mayores de 25 a\u00f1os.');
            $('#btnEnviar').text('Enviar');
        }
    });

});