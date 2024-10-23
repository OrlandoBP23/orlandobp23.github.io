
const palabrasAleatorias = [
    "sol", "libro", "café", "nube", "guitarra",
    "ventana", "camino", "sombra", "fuego", "montaña",
    "río", "luz", "jardín", "arena", "puente"
];

function Aleatorias() {
    var indice = Math.floor(Math.random() * palabrasAleatorias.length);
    document.getElementById("Elemento").value = palabrasAleatorias[indice];
    document.getElementById("iPush").value = `Push(${palabrasAleatorias[indice]})`;
}

function CambioTexto() {
    var texto = document.getElementById("Elemento").value;
    document.getElementById("iPush").value = `Push(${texto})`;
}

function Push() {
    //validar que el input no este vacio
    if (document.getElementById("Elemento").value.trim() != "") {

        document.getElementById("mensaje").innerHTML = ``;

        // La línea num 15 va a crear un nuevo renglón que se le va agregar a la tabla
        var renglon = document.createElement("tr");
        var celda1 = document.createElement("td");
        var celda2 = document.createElement("td");

        celda2.style.border = "1px solid black";
        celda1.textContent = "tope->";
        celda2.textContent = document.getElementById("Elemento").value;

        renglon.appendChild(celda1);
        renglon.appendChild(celda2);
        document.getElementById("tabla").appendChild(renglon);

        var rt = document.getElementById("tabla");

        if (rt.hasChildNodes()) {
            document.getElementById("tabla").firstChild.firstChild.textContent = "";
        }

        rt.insertBefore(renglon, rt.children[0]);
    } else {
        document.getElementById("mensaje").innerHTML = `No se aceptan cadenas vacias`;
    }
}

function Pop() {
    var rt = document.getElementById("tabla");
    if (rt.hasChildNodes()) {
        document.getElementById("mensaje").innerHTML = `Se elimino del tope ${rt.firstChild.childNodes[1].textContent}`;
        rt.removeChild(rt.firstChild);
        document.getElementById("tabla").firstChild.firstChild.textContent = "tope->"
    } else {
        document.getElementById("mensaje").innerHTML = `No se puede realizar Pop ya que no hay elementos en la pila`;

    }
}

function Peek() {
    var rt = document.getElementById("tabla");
    if (rt.hasChildNodes()) {
        document.getElementById("tabla").firstChild.firstChild.textContent = "tope->"
        document.getElementById("mensaje").innerHTML = `En el tope de la fila se encuentra ${rt.firstChild.childNodes[1].textContent}`;
    } else {
        document.getElementById("mensaje").innerHTML = `No se puede realizar Pop ya que no hay elementos en la pila`;
    }
}

function Clear() {
    var rt = document.getElementById("tabla").textContent = "";;
    document.getElementById("mensaje").innerHTML = `Se han eliminado todos los elementos de la pila`;
}

function Find() {
    var texto = document.getElementById("Elemento").value;
    var control = false;
    document.getElementById("iFind").value = `Find(${texto})`;
    var rt = document.getElementById("tabla");
    if (rt.hasChildNodes()) {
        for (let i = 0; i < rt.childNodes.length; i++) {
            let nodo = rt.childNodes[i].childNodes[1].textContent;
            if (nodo == document.getElementById("Elemento").value) {
                document.getElementById("mensaje").innerHTML = "Se encontro";
                control = true;
                break;
            }
        } if (!control) {
            document.getElementById("mensaje").innerHTML = "No se encontro";
        }
    } else {
        document.getElementById("mensaje").innerHTML = "Vacio";
    }
}

function IsEmpty() {
    var rt = document.getElementById("tabla");
    if (rt.hasChildNodes()) {
        document.getElementById("mensaje").innerHTML = "False";
    } else {
        document.getElementById("mensaje").innerHTML = "True";
    }
}

