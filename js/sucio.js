function establecerColor(id)
{

    let obtenerClase = this.id.getAttribute('data-celda');

    switch (obtenerClase) {
        case 'A','B','C','D','E','F','H','I':
        this.id.style.backgroundColor = '#A5A5A5';

        break;
    default:
        break;
    }
}


