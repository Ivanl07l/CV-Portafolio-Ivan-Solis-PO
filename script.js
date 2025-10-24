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


// Función para abrir el modal (puedes llamarla desde donde quieras, por ejemplo, un botón)
function openModal() {
    modal.style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = "none";
}

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


// **EJEMPLO DE USO:**
// Para probar, si quieres que el modal se abra automáticamente 2 segundos después de cargar la página,
// puedes descomentar la siguiente línea:
// setTimeout(openModal, 2000); 

// Si quieres que un elemento de tu página abra el modal,
// por ejemplo, si agregas un botón con el id="openModalBtn", usarías:
// var btn = document.getElementById("openModalBtn");
// btn.onclick = openModal;


