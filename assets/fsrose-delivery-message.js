function obtenerMensajeEntrega() {
    const now = new Date();
    const currentDay = now.getDay();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    
    // LUNES - MIÉRCOLES
    if (currentDay >= 1 && currentDay <= 3) {
        if (currentHour > 8 && currentHour < 12) {
            const remainingHours = 11 - currentHour; // 15:00 - currentHour
            const remainingMinutes = 60 - currentMinute;
            return `Entrega más rápida. Haz el pedido antes de ${remainingHours}horas y ${remainingMinutes} mins`;
        }
        if (currentHour > 12 && currentHour < 22) {
            const remainingHours = 21 - currentHour; // 22:00 - currentHour
            const remainingMinutes = 60 - currentMinute;
            return `Entrega más rápida. Haz el pedido antes de ${remainingHours}horas y ${remainingMinutes} mins`;
        }
    }
    
    // JUEVES
    else if (currentDay === 4) {

         if (currentHour < 22) {
            const remainingHours = 21 - currentHour; // 22:00 - currentHour
            const remainingMinutes = 60 - currentMinute;
            return `Entrega más rápida. Haz el pedido antes de ${remainingHours}horas ${remainingMinutes} mins`;
        }     
      
    }
    
    // VIERNES
    else if (currentDay === 5) {
        if (currentHour < 22) {
            const remainingHours = 21 - currentHour; // 22:00 - currentHour
            const remainingMinutes = 60 - currentMinute;
            return `Entrega más rápida. Haz el pedido antes de ${remainingHours}horas ${remainingMinutes} mins`;
        }
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
        if (currentHour < 22) {
            const remainingHours = 21 - currentHour; // 20:00 - currentHour
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
  dayAfterTomorrow = dayAfterTomorrow.toLocaleString('default', { weekday: 'long', day: 'numeric' });

  let nextMonday = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
  nextMonday = nextMonday.toLocaleString('default', { weekday: 'long', day: 'numeric' });

  let nextTuesday = new Date(now.getTime() + 4 * 24 * 60 * 60 * 1000);
  nextTuesday = nextTuesday.toLocaleString('default', { weekday: 'long', day: 'numeric' });

  let nextWednesday = new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000);
  nextWednesday = nextWednesday.toLocaleString('default', { weekday: 'long', day: 'numeric' });

  if (currentDay >= 1 && currentDay <= 2) {
    if (currentHour < 12 ) {
      return `Entrega GRATIS <b>MAÑANA o ${dayAfterTomorrow}</b>`;
    } else {
      return `Entrega GRATIS <b>entre el ${dayAfterTomorrow} o ${nextMonday}</b>`;
    }
  } else if (currentDay === 3) {
      if (currentHour < 20) {
        return `Entrega GRATIS <b>MAÑANA o ${dayAfterTomorrow}</b>`;
      } else {
        return `Entrega GRATIS <b>el ${dayAfterTomorrow} o ${nextMonday}</b>`;
      }
  } else if (currentDay === 4) {

    let saturday = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000);
    saturday = saturday.toLocaleString('default', { weekday: 'long', day: 'numeric' });
    
    let nextMonday = new Date(now.getTime() + 4 * 24 * 60 * 60 * 1000);
    nextMonday = nextMonday.toLocaleString('default', { weekday: 'long', day: 'numeric' });

    let nextTuesday = new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000);
    nextTuesday = nextTuesday.toLocaleString('default', { weekday: 'long', day: 'numeric' });

    let nextWednesday = new Date(now.getTime() + 6 * 24 * 60 * 60 * 1000);
    nextWednesday = nextWednesday.toLocaleString('default', { weekday: 'long', day: 'numeric' });

      if (currentHour < 12) {
        return `Entrega GRATIS <b>MAÑANA o ${saturday}</b>`;
      } else {
        return `Entrega GRATIS <b>el ${nextMonday} o ${nextTuesday}</b>`;
      }
    
  } else if (currentDay === 5) {
    let nextMonday = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
    nextMonday = nextMonday.toLocaleString('default', { weekday: 'long', day: 'numeric' });

    let nextTuesday = new Date(now.getTime() + 4 * 24 * 60 * 60 * 1000);
    nextTuesday = nextTuesday.toLocaleString('default', { weekday: 'long', day: 'numeric' });

    let nextWednesday = new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000);
    nextWednesday = nextWednesday.toLocaleString('default', { weekday: 'long', day: 'numeric' });

    if (today < 20) {
      return `Entrega GRATIS el ${nextTuesday} o ${nextWednesday}`;
    } else {
      if (currentHour < 12 && false) {
        return `Entrega GRATIS <b>MAÑANA o ${nextMonday}</b>`;
      } else {
        return `Entrega GRATIS el <b>${nextMonday} o ${nextTuesday}</b>`;
      }
    }
  } else if (currentDay === 6) {
    let nextTuesday = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
    nextTuesday = nextTuesday.toLocaleString('default', { weekday: 'long', day: 'numeric' });

    let nextWednesday = new Date(now.getTime() + 4 * 24 * 60 * 60 * 1000);
    nextWednesday = nextWednesday.toLocaleString('default', { weekday: 'short', day: 'numeric' });

    return `Entrega GRATIS el <b>${nextTuesday} o ${nextWednesday}</b>`;
  } else if (currentDay === 0) {
    let nextTuesday = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000);
    nextTuesday = nextTuesday.toLocaleString('default', { weekday: 'long', day: 'numeric' });

    let nextWednesday = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
    nextWednesday = nextWednesday.toLocaleString('default', { weekday: 'short', day: 'numeric' });

    return `Entrega GRATIS el <b>${nextTuesday} o ${nextWednesday}</b>`;
  }
}


var messageDeliveryElement = document.getElementById("messageDelivery");
messageDeliveryElement.innerHTML = obtenerMensajeEntrega();

var deliveryDateElement = document.getElementById("deliveryDate");
deliveryDateElement.innerHTML = obtenerFechaEntrega();