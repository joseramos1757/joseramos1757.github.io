
const formulario = document.querySelector("#formulario");

//crear el evento
formulario.addEventListener( "submit", validarFormulario )


//mis funciones
function validarFormulario(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value
    const apellido = document.querySelector("#ape").value

    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `BIENVENIDO ${nombre}  ${apellido}`
}
