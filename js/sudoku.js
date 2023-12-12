class Sudoku {
    constructor(mezclas = 30) {
        this.datos = [
            9,	2,	3,	8,	6,	1,	7,	4,	5,
            5,	4,	1,	2,	7,	9,	3,	8,	6,
            7,	6,	8,	4,	3,	5,	2,	9,	1,
            2,	8,	6,	7,	5,	3,	4,	1,	9,
            3,	7,	9,	6,	1,	4,	8,	5,	2,
            4,	1,	5,	9,	2,	8,	6,	3,	7,
            1,	9,	2,	3,	4,	7,	5,	6,	8,
            8,	3,	7,	5,	9,	6,	1,	2,	4,
            6,	5,	4,	1,	8,	2,	9,	7,	3
        ];
        this.nuevo(mezclas);
    }

    intercambiaFila(i = 10) {
        switch (i) {
            case 0:
                this.cambiaFilas(1, 2);
                break;
            case 1:
                this.cambiaFilas(0, 2);
                break;
            case 2:
                this.cambiaFilas(0, 1);
                break;
            case 3:
                this.cambiaFilas(4, 5);
                break;
            case 4:
                this.cambiaFilas(3, 5);
                break;
            case 5:
                this.cambiaFilas(3, 4);
                break;
            case 6:
                this.cambiaFilas(7, 8);
                break;
            case 7:
                this.cambiaFilas(6, 8);
                break;
            case 8:
                this.cambiaFilas(6, 7);
                break;
            default:
                this.intercambiaFila(Math.floor(Math.random() * 9));
                break;
        }
    }

    cambiaFilas(a, b) {
        // creamos las filas 
        let f1 = a*9;
        let f2 = b*9;

        for (let i = 0; i < 9; i++) {
            let aux = this.datos[f1 + i];
            this.datos[f1 + i] = this.datos[f2 + i];
            this.datos[f2 + i] = aux;
        }
    }

    intercambiaColumna(i = 10) {
        switch (i) {
            case 0:
                this.cambiaColumnas(1, 2);
                break;
            case 1:
                this.cambiaColumnas(0, 2);
                break;
            case 2:
                this.cambiaColumnas(0, 1);
                break;
            case 3:
                this.cambiaColumnas(4, 5);
                break;
            case 4:
                this.cambiaColumnas(3, 5);
                break;
            case 5:
                this.cambiaColumnas(3, 4);
                break;
            case 6:
                this.cambiaColumnas(7, 8);
                break;
            case 7:
                this.cambiaColumnas(6, 8);
                break;
            case 8:
                this.cambiaColumnas(6, 7);
                break;
            default:
                this.intercambiaColumna(Math.floor(Math.random() * 9));
                break;
        }
    }

    cambiaColumnas(a, b) {
        let c1 = a;
        let c2 = b;

        for (let i = 0; i < 10; i++) {
           let aux = this.datos[c1];
           this.datos[c1] = this.datos[c2];
           this.datos[c2] = aux;
           c1 += 9;
           c2 += 9;
        }     
    }

    nuevo(mezclas = 10) {
        for (let i = 0; i < mezclas; i++) {
            this.intercambiaFila();
            this.intercambiaColumna();
        }
        // Guardar una copia de los números antes de que se aplique el porcentaje
        this.sudokuOriginal = [...this.datos];
    }
    
    muestra(porcentaje = 1) {
        for (let i = 0; i < 81; i++) {
            const celd = document.getElementById('td' + i);
            document.getElementById('td' + i).innerText = this.datos[i] = Math.random() < porcentaje ? this.datos[i] : '';
            celd.style.color = 'green';
            celd.style.fontWeight = 'bold';
        }
    }

    mostrarResultados() {
        const sudokuResultados = [...this.datos];
        for (let i = 0; i < 81; i++) {
            const celd = document.getElementById('td' + i);
            if (celd.innerText.trim() === '') {
                celd.innerText = sudokuResultados[i];
                celd.style.color = 'black'; // Cambia el color del texto para diferenciar los resultados
            }
        }
    }    

}

document.getElementById('rendirse').addEventListener('click', function() {
    miSudoku.mostrarResultados();
});

function mostrarMensaje(mensaje) {
    alert(mensaje);
}

        //Comprobamos las filas, las columnas y los minisudokus

function verificarFilas() {
    for (let fila = 1; fila <= 9; fila++) {
        let numeros = [];
        const filas = document.querySelectorAll('[data-fila="f' + fila + '"]');
        
        for (let i = 0; i < filas.length; i++) {
            const numero = filas[i].innerText.trim();
            if (numeros.includes(numero) || numero === '') {
                //Miramos si hay algun numero repetido o esta vacío
                return false; 
            }
            numeros.push(numero);
        }
    }
    return true; 
}

function verificarColumnas() {
    for (let columna = 1; columna <= 9; columna++) {
        let numeros = [];
        const columnas = document.querySelectorAll('[data-columna="c' + columna + '"]');
        
        for (let i = 0; i < columnas.length; i++) {
            const numero = columnas[i].innerText.trim();
            if (numeros.includes(numero) || numero === '') {
                return false; 
            }
            numeros.push(numero);
        }
    }
    return true; 
}

function verificarMiniSudokus() {
    let bloques = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    for (let bloque of bloques) {
        let numeros = [];
        const miniSudoku = document.querySelectorAll('[data-celda="' + bloque + '"]');
        
        for (let i = 0; i < miniSudoku.length; i++) {
            const numero = miniSudoku[i].innerText.trim();
            if (numeros.includes(numero) || numero === '') {
                return false; 
            }
            numeros.push(numero);
        }
    }
    return true; 
}


function establecerColor(id) {
    // Si no esta selecionado quitamos el color
    let todasLasCeldas = document.querySelectorAll('.cellnormal');
    todasLasCeldas.forEach(function (celda) {
        celda.style.backgroundColor = '#FFF';
    });

    //Obtenemos las celdas que estan seleccionadas
    let celdaSeleccionada = document.getElementById(id);
    let dataCelda = celdaSeleccionada.getAttribute('data-celda');
    let filaCelda = celdaSeleccionada.getAttribute('data-fila');
    let columnaCelda = celdaSeleccionada.getAttribute('data-columna');

    
    let celdas = document.querySelectorAll('[data-celda="' + dataCelda + '"]');
    celdas.forEach(function (celda) {
        celda.style.backgroundColor = '#85FEBC'; //celeste
    });

    let filas = document.querySelectorAll('[data-fila="' + filaCelda + '"]');
    filas.forEach(function (fila) {
        fila.style.backgroundColor = '#85FEBC'; //celeste
    });

    let columnas = document.querySelectorAll('[data-columna="' + columnaCelda + '"]');
    columnas.forEach(function (columna) {
        columna.style.backgroundColor = '#85FEBC'; //celeste
    });
}

// miSudoku.muestra(0.75);

function nuevoSudoku(evento) {
    const miSudoku = new Sudoku();
    //evento.preventDefault();
    miSudoku.nuevo();
    miSudoku.muestra(0.5);
}

let celdaUltimoFoco = -1;

function clickEnTabla(evento) {
    if (evento.target.id.charAt(0) != 't' || evento.target.id.charAt(1) != 'd')
        return;
    console.log("click en el id: " + evento.target.id);
    console.log("último foco en " + celdaUltimoFoco);

    let celdas = document.querySelectorAll('.cellnormal');
    celdas.forEach(function (celda) {
        celda.addEventListener('click', function (event) {
            // Cambia el color
            establecerColor(event.target.id);
        });
    });
}

const miSudoku = new Sudoku();
document.getElementById('nuevoSudoku').addEventListener('click', nuevoSudoku);

document.getElementById('playtable').addEventListener('click', clickEnTabla);

document.getElementById('comprobar').addEventListener('click', comprobar);

            //Nivel

document.getElementById('BtnFacil').addEventListener('click', function() {
    const miSudoku = new Sudoku();
    miSudoku.nuevo();
    miSudoku.muestra(0.75);
});

document.getElementById('BtnMedio').addEventListener('click', function() {
    const miSudoku = new Sudoku();
    miSudoku.nuevo();
    miSudoku.muestra(0.5);

});

document.getElementById('BtnDificil').addEventListener('click', function() {
    const miSudoku = new Sudoku();
    miSudoku.nuevo();
    miSudoku.muestra(0.35);
});

document.getElementById('rendirse').addEventListener('click', function() {
    miSudoku.reiniciar();
});
                //Cambiar numero en las celdas seleccionadas
document.addEventListener('DOMContentLoaded', function() {
    let celdaSeleccionada = null; // Variable para almacenar la celda seleccionada

    const cells = document.querySelectorAll('td');

    // Asignar evento de click para seleccionar la celda
    cells.forEach(celda => {
        celda.addEventListener('click', function() {
            celdaSeleccionada = this; // Almacena la celda seleccionada
        });
    });

    //Numeros por teclado
    document.addEventListener('keydown', function(event) {
        const teclaPresionada = event.key;
        const esNumero = !isNaN(parseInt(teclaPresionada));

        if (celdaSeleccionada !== null && esNumero && parseInt(teclaPresionada) > 0 && parseInt(teclaPresionada) <= 9) {
            celdaSeleccionada.innerText = teclaPresionada;
            establecerColor(celdaSeleccionada.id); 
        }
    });
        function establecerColor(celda) {
        const seleccionarCelda = document.getElementById(celda);
        seleccionarCelda.style.backgroundColor = '#B5FDA3'; //color más clarito
    }
});


const cells = document.querySelectorAll('td');
const celdasMostrar = document.querySelectorAll('.btnSeleccionar');
// cuando hagamos clic en una celda, guardamos en una variable todos los valores que tenga el mismo valor que data-fila
// y lo guardamos en un array para luego mostrarlos

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function() {
        let fila = this.getAttribute('data-fila');
        let columna = this.getAttribute('data-columna');
        let miniSudoku = this.getAttribute('data-celda');
        
        // Obtener los números de la fila correspondiente
        let arrNum = [];
        let celdFila = document.querySelectorAll(`[data-fila="${fila}"]`);
        for (let j = 0; j < celdFila.length; j++) {
            const numero = celdFila[j].innerText.trim();
            if (numero !== '') {
                arrNum.push(parseInt(numero));
            }
        }

        // Ahora hacemos lo mismo con la columna
        let celColumna = document.querySelectorAll(`[data-columna="${columna}"]`);
        for (let j = 0; j < celColumna.length; j++) {
            const numero = celColumna[j].innerText.trim();
            if (numero !== '') {
                arrNum.push(parseInt(numero));
            }
        }

        // Y por último el mini sudoku
        let celMiniSudoku = document.querySelectorAll(`[data-celda="${miniSudoku}"]`);
        for (let j = 0; j < celMiniSudoku.length; j++) {
            const numero = celMiniSudoku[j].innerText.trim();
            if (numero !== '') {
                arrNum.push(parseInt(numero));
            }
        }

        // Mostramos los valores
        //Obtenemos los valores ordenados y sin repetidos
        arrNum.sort(function (a, b) {
            return a - b;
        });
          
        const numMostrados = new Set(arrNum);
        const mostrarNumeros = [];

        for (let i = 1; i <=9; i++) {
            if (!numMostrados.has(i)) {
                mostrarNumeros.push(i);                
            }
        }

        console.log(mostrarNumeros);

        // Borrramos los valores para que no se vayan aculmulando
        celdasMostrar.forEach(celda => {
            celda.innerText = '';
        });

        // Mostrar los nuevos valores
        let e = 0;  
        mostrarNumeros.forEach(numero => {
            if (e < celdasMostrar.length) {
                celdasMostrar[e].innerText = numero;
                e++;
            }
        });
    });
    const celdasSeleccionables = document.querySelectorAll('.btnSeleccionar');
}


function comprobar() {
    //Vamos a mirar que todas las condiciones sean true
    const sudokuValido = verificarFilas() && verificarColumnas() && verificarMiniSudokus();
    const mensajeElemento = document.getElementById('mensajeSudoku');
    mensajeElemento.style.color = 'black';
    mensajeElemento.style.fontSize = '14px';

    const celdas = document.querySelectorAll('td');

    let sudokuIncompleto = false;

    for (let i = 0; i < celdas.length; i++) {
        if (celdas[i].innerText.trim() === '') {
            sudokuIncompleto = true;
            break;
        }
    }

    if (sudokuIncompleto) {
        mensajeElemento.textContent = 'El Sudoku está incompleto.';
        //Mostramos el mensaje 3 segundos
        setTimeout(() => {
            mensajeElemento.textContent = '';
        }, 3000);
    } else {
        if (sudokuValido) {
            mostrarMensaje("Enhorabuena! ;)");
        } else {
            mostrarMensaje("Fallaste! Inténtalo de nuevo");
        }
    }
}
