// Simulación de cursos adquiridos (en un sistema real, estos datos vendrían del backend)
let cursosAdquiridos = JSON.parse(localStorage.getItem('cursosAdquiridos')) || [];

// Función para verificar si un curso está habilitado para compra
function verificarCurso(idCurso) {
   const cursoPreviaAdquisicion = {
      "curso1": null,       // Curso 1 no requiere previo
      "curso2": "curso1",   // Curso 2 requiere Curso 1
      "curso3": "curso2"    // Curso 3 requiere Curso 2
   };

   const prerequisito = cursoPreviaAdquisicion[idCurso];
   if (prerequisito && !cursosAdquiridos.includes(prerequisito)) {
      alert(`Debes adquirir el ${prerequisito} antes de comprar este curso.`);
      return false;
   }
   return true;
}

// Función para agregar un curso a la lista de adquiridos (simulación de compra)
function comprarCurso(idCurso) {
   if (verificarCurso(idCurso)) {
      cursosAdquiridos.push(idCurso);
      localStorage.setItem('cursosAdquiridos', JSON.stringify(cursosAdquiridos));
      alert(`Has adquirido exitosamente el ${idCurso}.`);
   }
}

// Ejemplo de uso
document.getElementById('comprar-curso1').addEventListener('click', () => comprarCurso("curso1"));
document.getElementById('comprar-curso2').addEventListener('click', () => comprarCurso("curso2"));
document.getElementById('comprar-curso3').addEventListener('click', () => comprarCurso("curso3"));
// Función para validar la aceptación de términos y condiciones
function validarTerminos() {
    const terminosAceptados = document.getElementById('aceptar-terminos').checked;
    if (!terminosAceptados) {
       alert("Debes aceptar los términos y condiciones antes de continuar.");
       return false;
    }
    return true;
 }
 
 // Función para procesar la compra si se aceptaron los términos
 function procesarCompra() {
    if (validarTerminos()) {
       alert("Compra procesada con éxito. Gracias por su compra.");
       // Aquí iría la lógica para procesar el pago
    }
 }
 
 // Evento para el botón de compra
 document.getElementById('boton-comprar').addEventListener('click', procesarCompra);
// Textos en varios idiomas
const idiomas = {
    "es": {
       "titulo": "Experto en negociación de divisas",
       "descripcion": "Bienvenido a Zandoli Invest Srl, tu especialista en asesoría financiera."
    },
    "en": {
       "titulo": "Forex Trading Expert",
       "descripcion": "Welcome to Zandoli Invest Srl, your specialist in financial consulting."
    },
    "fr": {
       "titulo": "Expert en négociation de devises",
       "descripcion": "Bienvenue chez Zandoli Invest Srl, votre spécialiste en conseil financier."
    },
    "de": {
       "titulo": "Experte für Devisenhandel",
       "descripcion": "Willkommen bei Zandoli Invest Srl, Ihr Spezialist für Finanzberatung."
    }
 };
 
 // Función para cambiar el idioma de la página
 function cambiarIdioma(idioma) {
    document.getElementById('titulo').textContent = idiomas[idioma].titulo;
    document.getElementById('descripcion').textContent = idiomas[idioma].descripcion;
 }
 
 // Evento para botones de idioma
 document.getElementById('btn-es').addEventListener('click', () => cambiarIdioma('es'));
 document.getElementById('btn-en').addEventListener('click', () => cambiarIdioma('en'));
 document.getElementById('btn-fr').addEventListener('click', () => cambiarIdioma('fr'));
 document.getElementById('btn-de').addEventListener('click', () => cambiarIdioma('de'));
// Redireccionar al usuario a la página de Servicios
document.getElementById('cta-button').addEventListener('click', () => {
    window.location.href = 'servicios.html';
 });
   