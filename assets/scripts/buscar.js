let inputBuscar = $("#input-buscar");
let inputBuscarVal;

// $(".btn-buscar").click(function (e) {
//   e.preventDefault();
//   inputBuscarVal = inputBuscar.val();
//   $(".lista-tareas li").each(function () {
//     const tarea = $(this).find("span").text();
//     if (tarea.includes(inputBuscarVal)) {
//       $(this).show();
//     } else {
//       $(this).hide();
//     }
//   });
// });

$(document).on("click", ".lista-tareas li", function (e) {
    const isCheckbox = $(e.target).is('input[type="checkbox"]');
    const isButton = $(e.target).hasClass("editar");
    
    let idNuevo = Date.now();
    if (!isCheckbox && !isButton) {
      e.preventDefault();
      let contenido = $(this).find("span").text();
      let modalId = "modal-" + idNuevo;

      $(".main").append(`
        <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Contenido de la tarea</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ${contenido}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      `);
      $(`#${modalId}`).modal('show');
    }
  });
  
$(inputBuscar).on("input", function () {
  // console.log($(this).val().length);
  inputBuscarVal = inputBuscar.val().toLowerCase();
  $(".lista-tareas li").each(function () {
    const tarea = $(this).find("span").text().toLowerCase();
    if (tarea.includes(inputBuscarVal)) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});

