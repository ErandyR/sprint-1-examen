var estudiantes = [];
function obtenerListaEstudiantes( ) {
   // TO DO: Retornar la lista de estudiantes

   return estudiantes;
}

function agregarEstudiante() {
   // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
   // Hint: El estudiante debe ser agregado a la lista de estudiantes
   // TO DO: Retornar el estudiante recientemente creado
   var nombreDelEstudiante = prompt("Nombre del estudiante");
   var puntosTecnicos = prompt("Puntos Tecnicos");
   var puntosDeHse = prompt('Puntos de HSE');

   var alumno = {
     "nombreDelEstudiante": nombreDelEstudiante,
     "puntosTecnicos": puntosTecnicos,
     "puntosDeHse": puntosDeHse
   };
   estudiantes.push(alumno);
   return alumno;
}

function mostrar(estudiante) {
   // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
   var resultado = "";
   resultado += "<div class='row'>";
   resultado += "<div class='col m12'>";
   resultado += "<div class='card blue-grey darken-1'>";
   resultado += "<div class='card-content white-text'>";
   resultado += "<p><strong>Nombre:</strong> " + estudiante.nombreDelEstudiante + "</p>";
   resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntosTecnicos + "</p>";
   resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntosDeHse + "</p>";
   resultado += "</div>";
   resultado += "</div>";
   resultado += "</div>";
   resultado += "</div>";
   return resultado;
}

function mostrarLista(estudiantes) {
   // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
   // Retornar el template de todos los estudiantes
   var listaDeEstudiantes = "";

   estudiantes.forEach(function (estudiante) {
     listaDeEstudiantes += mostrar(estudiante);
   });
   return listaDeEstudiantes;
}

function buscar(nombre, estudiantes) {
   // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
   // Retornar el objeto del estudiante buscado
   // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
   var estudiantesBuscados = estudiantes.filter(function(alumno) {
     return alumno.nombreDelEstudiante.toLowerCase() == nombre.toLowerCase();
   });
   return estudiantesBuscados;
}

function topTecnico(estudiantes) {
   // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor   \
   var ordenarPorPuntosTecnicos = estudiantes.sort(function(itemA,itemB){
     return itemB.puntosTecnicos - itemA.puntosTecnicos;
   });
   return ordenarPorPuntosTecnicos;
}

function topHSE(estudiantes) {
   // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
   var ordenarPorPuntosHse = estudiantes.sort(function(itemA,itemB) {
     return itemB.puntosDeHse - itemA.puntosDeHse;
   });
   return ordenarPorPuntosHse;
}
