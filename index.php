<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ajax</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>
    <div class="container-fluid">
        <div class="row my-4">
            <div class="col-lg-3"></div>
            <div class="col-lg-6 table-responsive">
                <center>
                    <h3>Data Table</h3>
                </center>
                <table id="DataTable" class="table table-hover text-center">
                    <thead>
                        <tr>
                            <th>
                                <input type="text" id="Nombre" class="form-control" autocomplete="off">
                            </th>
                            <th>
                                <input type="text" id="Apellido" class="form-control" autocomplete="off">
                            </th>
                            <th>
                                <input type="text" id="Direccion" class="form-control" autocomplete="off">
                            </th>
                            <th>
                                <input type="text" id="Correo" class="form-control" autocomplete="off">
                            </th>
                            <th>
                                <input type="text" id="Usuario" class="form-control" autocomplete="off">
                            </th>
                        </tr>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Direccion</th>
                            <th>Correo</th>
                            <th>Usuario</th>
                        </tr>

                    </thead>
                    <tbody id="tbody">
                        <tr>

                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-lg-3"></div>
        </div>
        <div class="row my-4">
            <div class="col-lg-4"></div>
            <div class="col-lg-4">
                <input type="text" id="txtfiltro" class="form-control" placeholder="Filtrar por Nombre">
                <table class="table table-hover" id="TablaFiltro">
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
            </div>
            <div class="col-lg-4"></div>
        </div>
        <div class="row">
            <div class="col-lg-4"></div>
            <div class="col-lg-4">
                <center>
                    <h1>ajax</h1>
                </center>
                <button type="button" id="Clicktxt" class="btn btn-success my-4">Recibiendo Datos del TXT</button>
                <button class="btn btn-danger" id="Clickjson">Recibiendo Datos del Json</button>
                <input type="text" id="Texteando" class="form-control my-4">
                <label for="Texteando" id="DatosEmpleado">Hola Mundo</label>
            </div>
            <div class="col-lg-4"></div>
        </div>
        <div class="row">
            <div class="col-lg-4"></div>
            <div class="col-lg-4">
                <input type="text" id="num1" class="form-control" placeholder="Ingrese numero 1"><br>
                <input type="text" id="num2" class="form-control" placeholder="Ingrese numero 2"><br>
                <button class="btn btn-secondary" id="Calcular">calcular</button>
                <label id="total">Total:</label>
            </div>
            <div class="col-lg-4"></div>
        </div>
        <div class="row my-4">
            <div class="col-lg-4"></div>
            <div class="col-lg-4">
                <button type="button" class="btn btn-primary" id="LeerArray">Mostrando Empleados</button>
                <ul id="ListaEmpleados">
                    <li>Datos Empleados</li>
                </ul>
            </div>
            <div class="col-lg-4"></div>
        </div>
        <div class="row my-4 shadow-lg">
            <div class="col-lg-4"></div>
            <div class="col-lg-4 table-responsive">
                <button class="btn btn-success" id="MostrarTabla">Mostrar Tabla</button>
                <table class="table table-hover" id="Tabla">
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
            </div>
            <div class="col-lg-4"></div>
        </div>
        <div class="row my-4">
            <div class="col-lg-4"></div>
            <div class="col-lg-4">
                <button type="button" id="btnMostrarTabla" class="btn btn-primary">Mostrar Tabla</button>
                <table class="table table-hover" id="TablaSinJson">
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
            </div>
            <div class="col-lg-4"></div>
        </div>
        <div class="row my-4">
            <div class="col-lg-4"></div>
            <div class="col-lg-4">
                <button id="ObjetoJson" class="btn btn-secondary">Objeto Json</button>

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
            </div>
            <div class="col-lg-4"></div>
        </div>
        <hr>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="javascript.js"></script>
</body>

</html>