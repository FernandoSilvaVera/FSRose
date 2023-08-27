
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

function obtenerFechaEntrega() {
    const now = new Date();
    const currentDay = now.getDay();
    const currentHour = now.getHours();
    const currentMonth = now.toLocaleString('default', { month: 'long' });
    const today = now.getDate();

    if (currentDay >= 1 && currentDay <= 2) {
        const dayAfterTomorrow = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000);
        const twoDaysAfterTomorrow = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);

        if (currentHour < 16 && currentMonth !== 'agosto') {
            return `Entrega GRATIS <b>MAÑANA o ${dayAfterTomorrow.toLocaleString('es-ES', { weekday: 'short', day: 'numeric' })}</b>`;
        } else {
            return `Entrega GRATIS <b>entre el ${dayAfterTomorrow.toLocaleString('es-ES', { weekday: 'short', day: 'numeric' })} o ${twoDaysAfterTomorrow.toLocaleString('es-ES', { weekday: 'short', day: 'numeric' })}</b>`;
        }
    } else if (currentDay === 3) {
        // Lógica para miércoles
    } else if (currentDay === 4) {
        // Lógica para jueves
    } else if (currentDay === 5) {
        // Lógica para viernes
    } else if (currentDay === 6) {
        const nextTuesday = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000);
        const nextWednesday = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
        return `Entrega GRATIS <b>${nextTuesday.toLocaleString('es-ES', { weekday: 'short', day: 'numeric' })} o ${nextWednesday.toLocaleString('es-ES', { weekday: 'short', day: 'numeric' })}</b>`;
    } else if (currentDay === 0) {
        const nextTuesday = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000);
        const nextWednesday = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
        return `Entrega GRATIS el <b>${nextTuesday.toLocaleString('es-ES', { weekday: 'short', day: 'numeric' })} o ${nextWednesday.toLocaleString('es-ES', { weekday: 'short', day: 'numeric' })}</b>`;
    }

    return ''; // En caso de no cumplir ninguna condición
}

var messageDeliveryElement = document.getElementById("messageDelivery");
messageDeliveryElement.innerHTML = obtenerMensajeEntrega();




