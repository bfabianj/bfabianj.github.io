let productos = null

let inputs = null
let form = null
let button = null


const setCustomValidity = function (mensaje, index) {
    const errorDivs = document.querySelectorAll('div.error-detail')
    errorDivs[index].innerHTML = mensaje
    errorDivs[index].parentNode.classList.toggle('input-group--error', !!mensaje)
}

function validar(valor, validador, index) {

    if (!validador.test(valor)) {
        setCustomValidity('Este campo no es válido', index)
        return null
    }

    setCustomValidity('', index)
    return valor
}


function renderProds() {
    let html = ''

    for (let i = 0; i < productos.length; i++) {
        // html += `<p>${productos[i]}</p>`
        html += `<p>${JSON.stringify(productos[i])}</p>`
    }

    document.querySelector('.listado-productos').innerHTML = html
}


function initAlta() {
    console.warn('initAlta')

    productos = []

    inputs = document.querySelectorAll('.section-add-form input')
    selects = document.querySelectorAll('.section-add-form select')
    textarea = document.querySelector('.section-add-form textarea')

    form = document.querySelector('.section-add-form')
    button = document.querySelector('button')
    
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            validar(input.value, /abc/, 0)
        })
    })
    
    form.addEventListener('submit', e => {
        e.preventDefault()
    
        let producto = {
            nombre: inputs[0].value,
            precio: inputs[1].value,
            stock: inputs[2].value,
            marca: selects[0].value,
            categoria: selects[1].value,
            detalles: textarea.value,
            foto: inputs[3].value,
            envio: inputs[4].checked,
        }
    
        // console.log(producto)
        productos.push(producto)
        console.log(productos)
        renderProds()
    
        inputs.forEach(input => input.value = '')
    
    })
}