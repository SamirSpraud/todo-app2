let tareaVal;
let tituloVal;
let listaTareas = $(".lista-tareas");
let btnSelectAll = `<button type="button" class="btn btn-outline-primary text-dark" id="select-all">Seleccionar todos</button>`;
let btnEditar =`<button type="button" class="editar btn btn-close-white">Editar</button>`;

$(document).ready(function () {
  $("#select-all").hide();
  $(".btn-eliminar").hide();
});

function ocultarBoton() {
  const checks = $(".lista-tareas li input:checked").length;

  if (checks >= 1) {
    $(".btn-eliminar").show();
  } else {
    $(".btn-eliminar").hide();
  }
}
// $(selector).keydown(function (e) { 
    
// });
$(".btn-agregar").click(agregarTareas);
$("#input-tarea").keypress(function (e) {
    if (e.which === 13) { 
      agregarTareas();
    }
  });

function agregarTareas(){
    tituloVal = $("#input-titulo").val();
    tareaVal = $("#input-tarea").val();
  
    if (tareaVal && tituloVal != "") {
      const tareas = tareaVal.split(",");
  
  
      tareas.forEach((tarea) => {
        const checkId = `check-${tarea}`;
        let nuevaTarea = $(
          `<li class="list-group-item" data-bs-toggle="modal" data-bs-target="#modal"><input type="checkbox" name="${checkId}" id="${checkId}">
           <span>${tarea}</span>${btnEditar}</li>`
        );
  
        $(listaTareas).append(nuevaTarea);
        $("#select-all").show();
        $("#input-tarea").val("");
        $("#input-titulo").val("");
        //   $(".card-all").append(btnSelectAll);
      });
    }
}
$(document).on("click", '.editar', function (e) {
    e.preventDefault();
    editarTarea($(this).closest("li"));
  });
  
  function editarTarea(tarea) {
    // alert("Hola" + tarea.find('span').text().trim());
    const tareaSpan = tarea.find('span');
    const editar = prompt("Editar tarea:", tareaSpan.text());
    
    if (editar !== null) {
      tareaSpan.text(editar);
    }
  }
  


$("#select-all").click(function (e) {
  e.preventDefault();
  const isCheck = $('.lista-tareas input[type="checkbox"]').prop("checked");
  $('.lista-tareas input[type="checkbox"]').prop("checked", !isCheck);
  ocultarBoton();
});

$(".btn-eliminar").click(function (e) {
  e.preventDefault();
  const checks = $(".lista-tareas li:has(input:checked)");
  checks.remove();
  ocultarBoton();
});

$(document).on("change", 'input[type="checkbox"]', function () {
    const isCheck = $(this).is(":checked");
    const tarea = $(this).closest("li");
  
    if (isCheck) {
      tarea.wrapInner("<del></del>");
    } else {
        tarea.find("del").contents().unwrap();
    }
  
    ocultarBoton();
  });
  


