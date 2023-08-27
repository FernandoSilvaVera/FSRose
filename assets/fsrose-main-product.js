
function obtenerMensajeEntrega() {
    const now = new Date();
    const currentDay = now.getDay();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    
    // LUNES - MIÉRCOLES
    if (currentDay >= 1 && currentDay <= 3) {
        if (currentHour > 8 && currentHour < 15) {
            const remainingHours = 14 - currentHour; // 15:00 - currentHour
            const remainingMinutes = 60 - currentMinute;
            return `Entrega más rápida. Haz el pedido antes de ${remainingHours}horas y ${remainingMinutes} mins`;
        }
        if (currentHour > 15 && currentHour < 22) {
            const remainingHours = 21 - currentHour; // 22:00 - currentHour
            const remainingMinutes = 60 - currentMinute;
            return `Entrega más rápida. Haz el pedido antes de ${remainingHours}horas y ${remainingMinutes} mins`;
        }
    }
    
    // JUEVES
    else if (currentDay === 4) {
        // Lógica para el jueves
    }
    
    // VIERNES
    else if (currentDay === 5) {
        // Lógica para el viernes
    }
    
    // SÁBADO
    else if (currentDay === 6) {
        if (currentHour < 22) {
            const remainingHours = 21 - currentHour; // 22:00 - currentHour
            const remainingMinutes = 60 - currentMinute;
            return `Entrega más rápida. Haz el pedido antes de ${remainingHours}horas ${remainingMinutes} mins`;
        }
    }
    
    // DOMINGO
    else if (currentDay === 0) {
        if (currentHour < 20) {
            const remainingHours = 19 - currentHour; // 20:00 - currentHour
            const remainingMinutes = 60 - currentMinute;
            return `Entrega más rápida. Haz el pedido antes de ${remainingHours}horas ${remainingMinutes} mins`;
        }
    }
    
    return ''; // En caso de no cumplir ninguna condición
}




        // Obtener una referencia al elemento con el ID "deliveryDate"
        var deliveryElement = document.getElementById('deliveryDate');
        
        // Crear el nuevo elemento <span> con estilo y salto de línea
        var newSpanElement = document.createElement('span');
        newSpanElement.style.color = '#007600';
        newSpanElement.style.fontSize = '90%';
        newSpanElement.innerHTML = '<br>' + obtenerMensajeEntrega();
        
        // Insertar el nuevo elemento <span> después del elemento con el ID "deliveryDate"
        deliveryElement.parentNode.insertBefore(newSpanElement, deliveryElement.nextSibling);