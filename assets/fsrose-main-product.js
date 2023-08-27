
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

  let dayAfterTomorrow = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000);
  dayAfterTomorrow = dayAfterTomorrow.toLocaleString('default', { weekday: 'short', day: 'numeric' });

  let nextMonday = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
  nextMonday = nextMonday.toLocaleString('default', { weekday: 'short', day: 'numeric' });

  let nextTuesday = new Date(now.getTime() + 4 * 24 * 60 * 60 * 1000);
  nextTuesday = nextTuesday.toLocaleString('default', { weekday: 'short', day: 'numeric' });

  let nextWednesday = new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000);
  nextWednesday = nextWednesday.toLocaleString('default', { weekday: 'short', day: 'numeric' });

  if (currentDay >= 1 && currentDay <= 2) {
    if (currentHour < 16 && currentMonth !== 'agosto') {
      return `Entrega GRATIS MAÑANA o ${dayAfterTomorrow}`;
    } else {
      return `Entrega GRATIS entre el ${dayAfterTomorrow} o ${nextMonday}`;
    }
  } else if (currentDay === 3) {
    if (today < 20) {
      return `Entrega GRATIS el ${nextTuesday} o ${nextWednesday}`;
    } else {
      if (currentHour < 16 && currentMonth !== 'agosto') {
        return `Entrega GRATIS MAÑANA o ${nextMonday}`;
      } else {
        return `Entrega GRATIS el ${dayAfterTomorrow} o ${nextMonday}`;
      }
    }
  } else if (currentDay === 4) {
    let nextMonday = new Date(now.getTime() + 4 * 24 * 60 * 60 * 1000);
    nextMonday = nextMonday.toLocaleString('default', { weekday: 'short', day: 'numeric' });

    let nextTuesday = new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000);
    nextTuesday = nextTuesday.toLocaleString('default', { weekday: 'short', day: 'numeric' });

    let nextWednesday = new Date(now.getTime() + 6 * 24 * 60 * 60 * 1000);
    nextWednesday = nextWednesday.toLocaleString('default', { weekday: 'short', day: 'numeric' });

    if (today < 20) {
      return `Entrega GRATIS el ${nextTuesday} o ${nextWednesday}`;
    } else {
      if (currentHour < 16 && currentMonth !== 'agosto') {
        return `Entrega GRATIS MAÑANA o ${nextMonday}`;
      } else {
        return `Entrega GRATIS el ${nextMonday} o ${nextTuesday}`;
      }
    }
  } else if (currentDay === 5) {
    let nextMonday = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
    nextMonday = nextMonday.toLocaleString('default', { weekday: 'short', day: 'numeric' });

    let nextTuesday = new Date(now.getTime() + 4 * 24 * 60 * 60 * 1000);
    nextTuesday = nextTuesday.toLocaleString('default', { weekday: 'short', day: 'numeric' });

    let nextWednesday = new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000);
    nextWednesday = nextWednesday.toLocaleString('default', { weekday: 'short', day: 'numeric' });

    if (today < 20) {
      return `Entrega GRATIS el ${nextTuesday} o ${nextWednesday}`;
    } else {
      if (currentHour < 16 && currentMonth !== 'agosto') {
        return `Entrega GRATIS MAÑANA o ${nextMonday}`;
      } else {
        return `Entrega GRATIS el ${nextMonday} o ${nextTuesday}`;
      }
    }
  } else if (currentDay === 6) {
    let nextTuesday = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
    nextTuesday = nextTuesday.toLocaleString('default', { weekday: 'short', day: 'numeric' });

    let nextWednesday = new Date(now.getTime() + 4 * 24 * 60 * 60 * 1000);
    nextWednesday = nextWednesday.toLocaleString('default', { weekday: 'short', day: 'numeric' });

    return `Entrega GRATIS el ${nextTuesday} o ${nextWednesday}`;
  } else if (currentDay === 0) {
    let nextTuesday = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000);
    nextTuesday = nextTuesday.toLocaleString('default', { weekday: 'short', day: 'numeric' });

    let nextWednesday = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
    nextWednesday = nextWednesday.toLocaleString('default', { weekday: 'short', day: 'numeric' });

    return `Entrega GRATIS el <b>${nextTuesday} o ${nextWednesday}</b>`;
  }
}

console.log(obtenerFechaEntrega());


console.log(obtenerFechaEntrega());


var messageDeliveryElement = document.getElementById("messageDelivery");
messageDeliveryElement.innerHTML = obtenerMensajeEntrega();

var deliveryDateElement = document.getElementById("deliveryDate");
deliveryDateElement.innerHTML = obtenerFechaEntrega();




