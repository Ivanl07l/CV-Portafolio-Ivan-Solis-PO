document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    const contentSections = document.querySelectorAll('.page-content');

    // Función para manejar el cambio de página
    function showPage(targetId) {
        // 1. Ocultar todos los contenidos
        contentSections.forEach(section => {
            section.classList.remove('active-content');
        });

        // 2. Mostrar el contenido objetivo
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active-content');
        }
    }

    // 3. Asignar el evento click a cada botón del menú
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            
            // a. Remover la clase 'active' de todos los botones
            menuItems.forEach(btn => {
                btn.classList.remove('active');
            });

            // b. Agregar la clase 'active' al botón clickeado
            item.classList.add('active');

            // c. Obtener el ID del contenido a mostrar (del atributo data-target)
            const targetId = item.getAttribute('data-target');
            
            // d. Mostrar la página correspondiente
            showPage(targetId);
        });
    });

    // Opcional: Asegurarse de que el contenido 'All' se muestre al inicio (ya se hace en HTML, pero es buena práctica)
    // showPage('all'); 
});

// Obtener el elemento del modal
var modal = document.getElementById("simpleModal");

// Obtener el botón de cierre (la X)
var span = document.getElementsByClassName("close-button")[0];

// Obtener el botón de acción dentro del modal (Entendido!)
var actionButton = document.getElementsByClassName("modal-action-button")[0];




// Cuando el usuario haga click en (x), cerrar el modal
span.onclick = function() {
    closeModal();
}

// Cuando el usuario haga click en el botón de acción, cerrar el modal
actionButton.onclick = function() {
    closeModal();
}

// Cuando el usuario haga click fuera del modal, cerrarlo
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// ----------------------------------------------------
// 2. LÓGICA DE MODALES (Genérica para Múltiples Modales)
// ----------------------------------------------------

/**
 * Función genérica para cerrar un modal.
 * @param {HTMLElement} modalElement - El elemento modal a cerrar.
 */
function closeModal(modalElement) {
    if (modalElement) {
        modalElement.style.display = "none";
    }
}

// 1. Manejo del Clic en Botones de Cierre (X y Cerrar)
document.addEventListener('click', (event) => {
    let modalElement = null;

    // Caso 1: Clic en el botón 'X' o 'Cerrar' dentro de un modal
    if (event.target.classList.contains('close-button') || event.target.classList.contains('modal-action-button')) {
        // En este caso, el padre del padre del botón es el modal, o lo encontramos con un selector.
        modalElement = event.target.closest('.modal');
        
    } 
    // Caso 2: Clic fuera de un modal
    else if (event.target.classList.contains('modal') && event.target.id.startsWith('modal')) {
        // Si el elemento clickeado es el fondo del modal (el propio modal div)
        modalElement = event.target;
    }

    if (modalElement) {
        closeModal(modalElement);
    }
});

// Función para abrir el modal (llamada desde el HTML)
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "flex";
    }
}
