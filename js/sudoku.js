class Sudoku {
    constructor(mezclas = 30) {
        this.datos = [
/*            1, 1, 1, 1, 1, 1, 1, 1, 1,
            2, 2, 2, 2, 2, 2, 2, 2, 2,
            3, 3, 3, 3, 3, 3, 3, 3, 3,
            4, 4, 4, 4, 4, 4, 4, 4, 4,
            5, 5, 5, 5, 5, 5, 5, 5, 5,
            1, 2, 3, 4, 5, 6, 7, 8, 9,
            1, 2, 3, 4, 5, 6, 7, 8, 9,
            1, 2, 3, 4, 5, 6, 7, 8, 9,
            1, 2, 3, 4, 5, 6, 7, 8, 9*/

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
    }

    muestra(porcentaje=1) {
        for (let i = 0; i < 81; i++) {
            document.getElementById('td' + i).innerText = this.datos[i] = Math.random()<porcentaje ? this.datos[i]:'';
        }
    }

    estaResuelto() {
        // debe devolver true o false
    }

    
}

function establecerColor(id) {
    let celdaSeleccionada = document.getElementById(id);
    let dataCelda = celdaSeleccionada.getAttribute('data-celda');
    let celdas = document.querySelectorAll('[data-celda="' + dataCelda + '"]');
    celdas.forEach(function (celda) {
        celda.style.backgroundColor = '#85FEBC'; //celeste
    });

    let todasLasCeldas = document.querySelectorAll('.cellnormal');
    todasLasCeldas.forEach(function (celda) {
        if (celda.getAttribute('data-celda') !== dataCelda) {
            celda.style.backgroundColor = '#FFF';
        }
    });

    let filaSeleccionada = document.getElementById(id);
    let filaCelda = filaSeleccionada.getAttribute('data-fila');
    let filas = document.querySelectorAll('[data-fila="' + filaCelda + '"]');
    filas.forEach(function (fila) {
        fila.style.backgroundColor = '#85FEBC'; //celeste
    });

    let todasLasFilas = document.querySelectorAll('.cellnormal');
    todasLasFilas.forEach(function (fila) {
        if (fila.getAttribute('data-fila') !== filaCelda) {
            fila.style.backgroundColor = '#FFF';
        }
    });

    let columnaSeleccionada = document.getElementById(id);
    let columnaCelda = columnaSeleccionada.getAttribute('data-columna');
    let columnas = document.querySelectorAll('[data-columna="' + columnaCelda + '"]');
    columnas.forEach(function (columna) {
        columna.style.backgroundColor = '#85FEBC'; //celeste
    });

    let todasLascolumna = document.querySelectorAll('.cellnormal');
    todasLascolumna.forEach(function (columna) {
        if (columna.getAttribute('data-columna') !== dataColumna) {
            columna.style.backgroundColor = '#FFF';
        }
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
    if (celdaUltimoFoco != -1) {
        document.getElementById(celdaUltimoFoco).classList.remove("gamehighlighttd");
    }
    evento.target.classList.add("gamehighlighttd");
    celdaUltimoFoco = evento.target.id;

    let celdas = document.querySelectorAll('.cellnormal');
    celdas.forEach(function (celda) {
        celda.addEventListener('click', function (event) {
            // Cambiar color
            establecerColor(event.target.id);
        });
    });
}

document.getElementById('nuevoSudoku').addEventListener('click', nuevoSudoku);

// document.getElementById(' BtnFacil').addEventListener('click',nuevoSudoku(0.75));
// document.getElementById(' BtnMedio').addEventListener('click',nuevoSudoku(0.5));
// document.getElementById(' BtnDificil').addEventListener('click',nuevoSudoku(0.35));

document.getElementById('playtable').addEventListener('click', clickEnTabla);

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


document.addEventListener('DOMContentLoaded', function() {
    // Guardamos todas las celdas del sudoku y las celdas con los nmeros del 1 al 9
    const celdas = document.querySelectorAll('.cellnormal'); 
    const valorCeldas = document.querySelectorAll('.btnSeleccionar');
    let seleccionarCelda = null;


    // Le añadimo el evento click y miramos si esta vacía para poder insertar uno d elos valores del 1 al 9
    celdas.forEach(celda => {
        celda.addEventListener('click', function(event) {
            seleccionarCelda = event.target; //evento clic al selecionar una celda

            if (seleccionarCelda.innerText.trim() === '') {
                valorCeldas.forEach(valorCelda => {
                    valorCelda.addEventListener('click', function() {
                        const valorSelec = valorCelda.innerText;// Obtenemos el valor seleccionado
                        seleccionarCelda.innerText = valorSelec;

                        establecerColor(seleccionarCelda.id);// Cambiar el color de la celda seleccionada en el Sudoku
                    });
                });
            } else {
                seleccionarCelda = null;
            }
        });
    });

    function establecerColor(celda) {
        const seleccionarCelda = document.getElementById(celda);
        seleccionarCelda.style.backgroundColor = '#B5FDA3'; //color más clarito
    }
});






