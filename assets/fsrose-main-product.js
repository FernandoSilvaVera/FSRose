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
messageDeliveryElement.textContent = obtenerFechaEntrega();





