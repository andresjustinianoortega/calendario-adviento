// Edita aquí tus 24 actividades (día 1 al día 24)
const actividades = [
  { dia: 1, titulo: "BIENVENIDA A NUESTRO DICIEMBRE", 
      descripcion: "Hola mi amorrr, este es nuestro calendario de adviento. Cada dia del mes hasta navidad se vienen cosas bonitas. ¡Prepárate para 24 días de sorpresas! \n\n Como primer dia, te prepare una carta para ti, para que sepas lo mucho que te amo y lo feliz que me hace tenerte en mi vida. ¡Espero que te guste!", 
      imagen: "nosotroscongorritos.png"},
  { dia: 2, titulo: "¿Cuanto nos conocemos?", 
      descripcion: "En esta ocasión, vamos a jugar un juego para descubrir cuánto realmente sabemos el uno del otro. Consiste en una ronda de 10 preguntas. El que pierda le debera una penitencia a la otra persona que puede ser cobrada en ese momento o cuando el ganador lo disponga.",
      imagen: "signos.png", enlace: "", textoEnlace: "Ver enlace" },
  { dia: 3, titulo: "Armemos nuestro arbolito", 
    descripcion: "En el dia de hoy, te invito a que armemos nuestro arbolito de navidad juntos. ¡Será un momento muy especial y divertido! \n\n Para esta ocasion tenemos las opciones de realizarlo el dia de hoy o programarlo para cuando tengamos mas tiempo.", 
    imagen: "arbolito.webp", enlace: "", textoEnlace: "Ver enlace" },
  { dia: 4, titulo: "Actividad Día 4", descripcion: "Descripción de la actividad del día 4.", imagen: "", enlace: "", textoEnlace: "Ver enlace" },
  { dia: 5, titulo: "Actividad Día 5", descripcion: "Descripción de la actividad del día 5.", imagen: "", enlace: "", textoEnlace: "Ver enlace" },
  { dia: 6, titulo: "Actividad Día 6", descripcion: "Descripción de la actividad del día 6.", imagen: "", enlace: "", textoEnlace: "Ver enlace" },
  { dia: 7, titulo: "Actividad Día 7", descripcion: "Descripción de la actividad del día 7.", imagen: "", enlace: "", textoEnlace: "Ver enlace" },
  { dia: 8, titulo: "Actividad Día 8", descripcion: "Descripción de la actividad del día 8.", imagen: "", enlace: "", textoEnlace: "Ver enlace" },
  { dia: 9, titulo: "Actividad Día 9", descripcion: "Descripción de la actividad del día 9.", imagen: "", enlace: "", textoEnlace: "Ver enlace" },
  { dia: 10, titulo: "Actividad Día 10", descripcion: "Descripción de la actividad del día 10.", imagen: "", enlace: "", textoEnlace: "Ver enlace" },
  { dia: 11, titulo: "Actividad Día 11", descripcion: "Descripción de la actividad del día 11.", imagen: "", enlace: "", textoEnlace: "Ver enlace" },
  { dia: 12, titulo: "Actividad Día 12", descripcion: "Descripción de la actividad del día 12.", imagen: "", enlace: "", textoEnlace: "Ver enlace" },
  { dia: 13, titulo: "Actividad Día 13", descripcion: "Descripción de la actividad del día 13.", imagen: "", enlace: "", textoEnlace: "Ver enlace" },
  { dia: 14, titulo: "Actividad Día 14", descripcion: "Descripción de la actividad del día 14.", imagen: "", enlace: "", textoEnlace: "Ver enlace" },
  { dia: 15, titulo: "Actividad Día 15", descripcion: "Descripción de la actividad del día 15.", imagen: "", enlace: "", textoEnlace: "Ver enlace" },
  { dia: 16, titulo: "Actividad Día 16", descripcion: "Descripción de la actividad del día 16.", imagen: "", enlace: "", textoEnlace: "Ver enlace" },
  { dia: 17, titulo: "Actividad Día 17", descripcion: "Descripción de la actividad del día 17.", imagen: "", enlace: "", textoEnlace: "Ver enlace" },
  { dia: 18, titulo: "Actividad Día 18", descripcion: "Descripción de la actividad del día 18.", imagen: "", enlace: "", textoEnlace: "Ver enlace" },
  { dia: 19, titulo: "Actividad Día 19", descripcion: "Descripción de la actividad del día 19.", imagen: "", enlace: "", textoEnlace: "Ver enlace" },
  { dia: 20, titulo: "Actividad Día 20", descripcion: "Descripción de la actividad del día 20.", imagen: "", enlace: "", textoEnlace: "Ver enlace" },
  { dia: 21, titulo: "Actividad Día 21", descripcion: "Descripción de la actividad del día 21.", imagen: "", enlace: "", textoEnlace: "Ver enlace" },
  { dia: 22, titulo: "Actividad Día 22", descripcion: "Descripción de la actividad del día 22.", imagen: "", enlace: "", textoEnlace: "Ver enlace" },
  { dia: 23, titulo: "Actividad Día 23", descripcion: "Descripción de la actividad del día 23.", imagen: "", enlace: "", textoEnlace: "Ver enlace" },
  { dia: 24, titulo: "Nochebuena juntos", descripcion: "Descripción especial del 24 de diciembre.", imagen: "", enlace: "", textoEnlace: "Abrir sorpresa" }
];

const params = new URLSearchParams(window.location.search);
let modoPrueba = params.get("test") === "true";
let toquesTitulo = 0;

const contenedor = document.getElementById("calendario");
const estadoFecha = document.getElementById("estado-fecha");
const tituloCalendario = document.getElementById("titulo-calendario");

const modal = document.getElementById("modal");
const cerrarModal = document.getElementById("cerrar-modal");
const modalDia = document.getElementById("modal-dia");
const modalTitulo = document.getElementById("modal-titulo");
const modalDescripcion = document.getElementById("modal-descripcion");
const modalImagen = document.getElementById("modal-imagen");
const modalEnlace = document.getElementById("modal-enlace");

function puedeAbrirDia(dia) {
  if (modoPrueba) return true;

  const hoy = new Date();
  const mes = hoy.getMonth(); // 11 = Diciembre (enero es 0)
  const diaActual = hoy.getDate();

  // Solo se habilitan días de diciembre que ya llegaron (o ya pasaron)
  return mes === 11 && dia <= diaActual;
}

function abrirModal(item) {
  modalDia.textContent = `${item.dia} de diciembre`;
  modalTitulo.textContent = item.titulo;
  modalDescripcion.textContent = item.descripcion;

  if (item.imagen && item.imagen.trim() !== "") {
    modalImagen.src = item.imagen;
    modalImagen.classList.remove("oculto");
  } else {
    modalImagen.removeAttribute("src");
    modalImagen.classList.add("oculto");
  }

  if (item.enlace && item.enlace.trim() !== "") {
    modalEnlace.href = item.enlace;
    modalEnlace.textContent = item.textoEnlace || "Abrir enlace";
    modalEnlace.classList.remove("oculto");
  } else {
    modalEnlace.removeAttribute("href");
    modalEnlace.classList.add("oculto");
  }

  modal.classList.remove("oculto");
}

function renderizarCalendario() {
  contenedor.innerHTML = "";
  const hoy = new Date();
  const esDiciembre = hoy.getMonth() === 11;

  if (modoPrueba) {
    estadoFecha.textContent = "Modo prueba activo: todos los días desbloqueados";
  } else if (esDiciembre) {
    estadoFecha.textContent = `Hoy es ${hoy.getDate()} de diciembre. Veamos que tenemos para hoy :)`;
  } else {
    estadoFecha.textContent = "Aún no es diciembre. Las casillas se abrirán cuando llegue su día correspondiente.";
  }

  actividades.forEach((item) => {
    const habilitado = puedeAbrirDia(item.dia);
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = `casilla ${habilitado ? "" : "bloqueada"}`;
    boton.innerHTML = `
      <span class="numero">${item.dia}</span>
      <span class="etiqueta">${habilitado ? "de diciembre" : "de diciembre"}</span>
    `;

    boton.addEventListener("click", () => {
      if (!habilitado) return;
      abrirModal(item);
    });

    contenedor.appendChild(boton);
  });
}

tituloCalendario.addEventListener("click", () => {
  toquesTitulo += 1;
  if (toquesTitulo >= 5) {
    modoPrueba = !modoPrueba;
    toquesTitulo = 0;
    renderizarCalendario();
  }
});

cerrarModal.addEventListener("click", () => modal.classList.add("oculto"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("oculto");
});

renderizarCalendario();