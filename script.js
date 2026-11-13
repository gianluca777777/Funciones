const boton = document.querySelector("#btn-gen");
const spanB = document.querySelector("#valor-b");
const spanC = document.querySelector("#valor-c");

const cajaLineal = document.querySelector("#caja-lineal");
const textoLineal = document.querySelector("#texto-lineal");

const cajaAfin = document.querySelector("#caja-afin");
const textoAfin = document.querySelector("#texto-afin");

boton.addEventListener("click", function() {
    
    let b = Math.floor(Math.random() * 21) - 10;
    let c = Math.floor(Math.random() * 21) - 10;

    spanB.innerText = b;
    spanC.innerText = c;

    if (c === 0) {
        cajaLineal.className = "recuadro activo";
        cajaAfin.className = "recuadro inactivo";

        textoLineal.innerHTML = "<strong>Función Lineal: f(x) = " + b + "x</strong><br>" +
            "<ul>" +
            "<li>Gráfica: Línea recta continua.</li>" +
            "<li>Paso obligatorio: Pasa por el origen (0, 0).</li>" +
            "<li>Pendiente: b = " + b + "</li>" +
            "</ul>";
        textoAfin.innerHTML = "<p>Muestra la lista de propiedades de la Función Afín si cumple la condición (c ≠ 0).</p>";

    } else {
        cajaAfin.className = "recuadro activo";
        cajaLineal.className = "recuadro inactivo";

        textoAfin.innerHTML = "<strong>Función Afín: f(x) = " + b + "x + " + c + "</strong><br>" +
            "<ul>" +
            "<li>Gráfica: Línea recta que no pasa por el origen.</li>" +
            "<li>Corte Eje Y: Interseca en el punto (0, " + c + ").</li>" +
            "<li>Pendiente: b = " + b + "</li>" +
            "</ul>";
        textoLineal.innerHTML = "<p>Muestra la lista de propiedades de la Función Lineal si cumple la condición (c = 0).</p>";
    }
});
