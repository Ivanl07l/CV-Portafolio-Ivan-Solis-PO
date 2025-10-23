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