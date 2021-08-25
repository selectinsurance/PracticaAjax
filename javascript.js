$(document).ready(function () {


    //Obteniendo datos de un documento de texto y mostrandolo en consola
    $('#Clicktxt').click(function (e) {
        e.preventDefault();
        $.get("archivo.txt",
            function (data, textStatus, jqXHR) {
                console.log(data);
            },
        );
    });


    //Obteniendo Datos de un json y ingresandolos en un label en html usando su ID
    $("#Clickjson").click(function (e) {
        e.preventDefault();
        $.get("empleados.json",
            function (data, textStatus, jqXHR) {
                $("#DatosEmpleado").html(//Funcion para mostrar en una etiqueta HTMl los datos obtenidos
                    `
                    Nombre: ${data.Nombre} </br>
                    Puesto: ${data.Puesto} </br>
                    Edad: ${data.Edad} </br>
                    `
                );
                console.log(data);
            },
        );
    });



    $("#Texteando").keyup(function (e) { //Capturando teclas precionadas en el teclado, mostrandolo valores tanto en 
        $("#DatosEmpleado").html('Hola:' + $('#Texteando').val());//html como en consola
        var variable = $('#Texteando').val();
        console.log(variable);
    });



    //Realizando ejercicio simple para mostrar la suma de 2 numeros
    $('#Calcular').click(function (e) {
        e.preventDefault();
        var num1, num2, total;
        num1 = parseInt($('#num1').val());
        num2 = parseInt($('#num2').val());
        total = num1 + num2;
        $('#total').html(`
            Total: ${total}
        `);
        console.log(total);
    });



    //Leyendo Array de Empleados en json y mostrandolos en lista
    $('#LeerArray').click(function (e) {
        e.preventDefault(); //Evitar que se refresque la pagina
        $('#ListaEmpleados').html('');//Limpia el componente con el id ListaEmpleados
        $.get("array.json",//Leo el Json comunmente
            function (data, textStatus, jqXHR) {


                //Ejecuto funcion Each de jquery y paso la variable de los datos del json y la pongo en collection
                $.each(data, function (index, Item) {



                    //Concateno funcion html con el id dentro del html para que me despliegue todos los datos, 
                    //ya que si no, reemplaza el primero por el segundo consecutivamente
                    $('#ListaEmpleados').html($('#ListaEmpleados').html() + `
                    <li>${Item.Nombre} ${Item.Puesto}</li>
                    `);
                });
                console.log(data);
            },
        );
    });


    //practicando con un nuevo Array pero mostrandolo en una tabla
    $('#MostrarTabla').click(function (e) {
        e.preventDefault();
        $('#Tabla').html(`
        <table class="table table-hover" id="TablaObjeto">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Direccion</th>
                <th>Correo</th>
                <th>Usuario</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            </tr>
        </tbody>
    </table>
        `);
        $.get('tabla.json',
            function (data, textStatus, jqXHR) {
                $.each(data, function (index, valor) {
                    $('#Tabla').html($('#Tabla').html() + `
                        <td>${valor.Nombre}</td>
                        <td>${valor.Apellido}</td>
                        <td>${valor.Direccion}</td>
                        <td>${valor.Correo}</td>
                        <td>${valor.Usuario}</td>
                    `);
                });
            },
        );
    });


    //Usando la funcion getJSON para convertir un txt a json, Debe tener si o si estructura de json
    $('#btnMostrarTabla').click(function (e) {
        e.preventDefault();
        $('#TablaSinJson').html(`
        <table class="table table-hover" id="TablaObjeto">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Direccion</th>
                <th>Correo</th>
                <th>Usuario</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            </tr>
        </tbody>
    </table>
        `);
        $.getJSON("array.txt",
            function (data, textStatus, jqXHR) {
                //console.log(data);
                $.each(data, function (indexInArray, valor) {
                    $('#TablaSinJson').html($('#TablaSinJson').html() + `
                    <td>${valor.Nombre}</td>
                    <td>${valor.Apellido}</td>
                    <td>${valor.Direccion}</td>
                    <td>${valor.Correo}</td>
                    <td>${valor.Usuario}</td>
                    `);
                });
            }
        );
    });


    //Colorcar un arreglo dentro de un objeto en json
    $('#ObjetoJson').click(function (e) {
        e.preventDefault();
        $('#TablaObjeto').html(`
        <table class="table table-hover" id="TablaObjeto">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Direccion</th>
                <th>Correo</th>
                <th>Usuario</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            </tr>
        </tbody>
    </table>
        `);
        $.getJSON("objeto.json",
            function (data, textStatus, jqXHR) {
                //console.log(data.Temporales);
                $.each(data.Temporales, function (indexInArray, valor) {//llamar el nombre dle objeto despues del punto
                    $('#TablaObjeto').html($('#TablaObjeto').html() + `
                    <td>${valor.Nombre}</td>
                    <td>${valor.Apellido}</td>
                    <td>${valor.Direccion}</td>
                    <td>${valor.Correo}</td>
                    <td>${valor.Usuario}</td>
                    `);
                });
            }
        );
    });


    //Filtrando Datos desde TextBox
    var empleados;//Se declara variable para almacenar todo lo del json
    $.getJSON("filtrando.json",
        function (data, textStatus, jqXHR) {
            empleados = data.Temporales;
            //console.log(empleados); se comprueba que existan datos
        });

    $('#txtfiltro').keyup(function (e) { //se llama la funcion keyup para capturar teclas
        var nombre = $(this).val();      //Se capturan valores de las teclas y se guardan en variable
        $('#TablaFiltro').html(`
        <table class="table table-hover" id="TablaObjeto">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Direccion</th>
                <th>Correo</th>
                <th>Usuario</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            </tr>
        </tbody>
    </table>
        `);                              //Limpiador con sintaxis de tabla
        $.each(empleados, function (indexInArray, valores) { //Ciclo Each para recorrer el json de la variable empleados
            if (valores.Nombre.toLowerCase().indexOf(nombre.toLowerCase()) !== -1) {

                /*Condicional para sacar los valores del ciclo each, 
                compará los datos del indice Nombre del json con los 
                valores del ciclo y muestra las coincidencias si aplican con -1*/

                $('#TablaFiltro').html($('#TablaFiltro').html() + `
                <td>${valores.Nombre}</td>
                <td>${valores.Apellido}</td>
                <td>${valores.Direccion}</td>
                <td>${valores.Correo}</td>
                <td>${valores.Usuario}</td>
                `);
            }
        });
    });




    //FILTRANDO A LO DATATABLE
    var Empleados;
    $.getJSON("datatable.json",
        function (data, textStatus, jqXHR) {
            Empleados = data.empleados;
            //console.log(Empleados);
        }
    );

    $('#Nombre').keyup(function (e) {
        var Nombre = $(this).val();
        $('#tbody').html(`
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        `);
        $.each(Empleados, function (indexInArray, Valor) {
            if (Valor.Nombre.toLowerCase().indexOf(Nombre.toLowerCase()) !== -1) {
                $('#DataTable').html($('#DataTable').html() + `
                    <td>${Valor.Nombre}</td>
                    <td>${Valor.Apellido}</td>
                    <td>${Valor.Direccion}</td>
                    <td>${Valor.Correo}</td>
                    <td>${Valor.Usuario}</td>
                `);
            }
        });
    });


    $('#Apellido').keyup(function (e) {
        var Apellido = $(this).val();
        $('#tbody').html(`
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        `);
        $.each(Empleados, function (indexInArray, Valor) {
            if (Valor.Apellido.toLowerCase().indexOf(Apellido.toLowerCase()) !== -1) {
                $('#DataTable').html($('#DataTable').html() + `
                    <td>${Valor.Nombre}</td>
                    <td>${Valor.Apellido}</td>
                    <td>${Valor.Direccion}</td>
                    <td>${Valor.Correo}</td>
                    <td>${Valor.Usuario}</td>
                `);
            }
        });
    });
    $('#Direccion').keyup(function (e) {

        var Direccion = $(this).val();
        $('#tbody').html(`
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        `);
        $.each(Empleados, function (indexInArray, Valor) {
            if (Valor.Direccion.toLowerCase().indexOf(Direccion.toLowerCase()) !== -1) {
                $('#DataTable').html($('#DataTable').html() + `
                    <td>${Valor.Nombre}</td>
                    <td>${Valor.Apellido}</td>
                    <td>${Valor.Direccion}</td>
                    <td>${Valor.Correo}</td>
                    <td>${Valor.Usuario}</td>
                `);
            }
        });
    });
    $('#Correo').keyup(function (e) {

        var Correo = $(this).val();
        $('#tbody').html(`
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        `);
        $.each(Empleados, function (indexInArray, Valor) {
            if (Valor.Correo.toLowerCase().indexOf(Correo.toLowerCase()) !== -1) {
                $('#DataTable').html($('#DataTable').html() + `
                    <td>${Valor.Nombre}</td>
                    <td>${Valor.Apellido}</td>
                    <td>${Valor.Direccion}</td>
                    <td>${Valor.Correo}</td>
                    <td>${Valor.Usuario}</td>
                `);
            }
        });
    });
    $('#Usuario').keyup(function (e) {

        var Usuario = $(this).val();
        $('#tbody').html(`
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        `);
        $.each(Empleados, function (indexInArray, Valor) {
            if (Valor.Usuario.toLowerCase().indexOf(Usuario.toLowerCase()) !== -1) {
                $('#DataTable').html($('#DataTable').html() + `
                    <td>${Valor.Nombre}</td>
                    <td>${Valor.Apellido}</td>
                    <td>${Valor.Direccion}</td>
                    <td>${Valor.Correo}</td>
                    <td>${Valor.Usuario}</td>
                `);
            }
        });
    });


});