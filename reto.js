function Calcular (){
    const tabla = document.getElementById("Valores").value.split(',').map(parseFloat);
    
    // Guardamos datos en el contador para estar seguros de que se guarde en una array XD
    const contador = [...tabla];

    // ciclo for para que itere en la funcion multi
    for (let index = 0; index < contador.length; index++) {
        const element = contador[index];
        multi(element);
    }
}


// Funcion de multiplicar para hacerlo automaticamente en el HTML <3
function multi(a) {
    let b = 0;
    const resultaos = document.getElementById('guardarResultados');
    while (b <= 10) {
        if (b <= 10){
            const multiplicacion = a * b;
            resultaos.innerHTML = ` ${resultaos.innerHTML} ${a} x ${b} = ${multiplicacion} <br>`
            b++;
            console.log(multiplicacion);
        }
            else{
                b=0;
        }
    }
}

function Limpiar() {
    document.getElementById('guardarResultados').innerHTML= ``;;
    document.getElementById('Formulario').reset();s
}
