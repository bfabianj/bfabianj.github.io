let inputs = null
let form = null
let button = null

const regExpValidar = [
    /^.+$/, // regexp nombre
    /^[0-9]+$/, // regexp precio
    /^[0-9]+$/, // regexp stock
    /^.+$/  // regexp foto
]

const camposValidos = [ false, false, false, false ]
const algunCampoNoValido = () => {
    let valido = 
        camposValidos[0] &&
        camposValidos[1] &&
        camposValidos[2] &&
        camposValidos[3]

    return !valido
}


const setCustomValidity = function (mensaje, index) {
    const errorDivs = document.querySelectorAll('div.error-detail')
    errorDivs[index].innerHTML = mensaje
    errorDivs[index].parentNode.classList.toggle('input-group--error', !!mensaje)
}

function validar(valor, validador, index) {

    if (!validador.test(valor)) {
        setCustomValidity('Este campo no es válido', index)
        camposValidos[index] = false
        button.disabled = true
        return null
    }

    camposValidos[index] = true
    button.disabled = algunCampoNoValido()
    setCustomValidity('', index)
    return valor
}


function renderProds(productos) {
    fetch('vistas/alta.hbs')
    .then(r => r.text())
    .then(plantilla => {
        // compile the template
        var template = Handlebars.compile(plantilla);
        // execute the compiled template and print the output to the console
        let html = template({ productos: productos });

        document.querySelector('.listado-productos').innerHTML = html
    })
}

function leerProductoIngresado() {
    return {
        nombre: inputs[0].value,
        precio: inputs[1].value,
        stock: inputs[2].value,
        marca: selects[0].value,
        categoria: selects[1].value,
        detalles: textarea.value,
        foto: inputs[3].value,
        envio: inputs[4].checked,
    }
}

function limpiarFormulario(){
    //Inicializo los campos del formulario
    inputs.forEach(input => {
        input.type == 'checkbox' ? input.checked = false : input.value = ''
    })
    textarea.value = ''
    selects.forEach(select => select.value = '')

    button.disabled = true
    for(let i=0; i<camposValidos.length; i++){
        camposValidos[i] = false
    }
}

async function initAlta() {
    console.warn('initAlta')

    inputs = document.querySelectorAll('.section-add-form input')
    selects = document.querySelectorAll('.section-add-form select')
    textarea = document.querySelector('.section-add-form textarea')

    form = document.querySelector('.section-add-form')
    button = document.querySelector('button')

    textarea.value = ''
    button.disabled = true

    productosModel.inicializar(await productosController.obtenerProductos())
    renderProds(productosModel.obtener())

    inputs.forEach((input, index) => {
        if(input.type != 'checkbox'){
            input.addEventListener('input', () => {
                validar(input.value, regExpValidar[index], index)
            })
        }
    })
    
    form.addEventListener('submit', async e => {
        e.preventDefault()
    
        let producto = leerProductoIngresado()
        limpiarFormulario()

        await productosController.guardarProducto(producto)
    })
}