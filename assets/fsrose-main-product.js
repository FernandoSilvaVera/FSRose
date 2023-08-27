




        // Obtener una referencia al elemento con el ID "deliveryDate"
        var deliveryElement = document.getElementById('deliveryDate');
        
        // Crear el nuevo elemento <span> con estilo y salto de línea
        var newSpanElement = document.createElement('span');
        newSpanElement.style.color = '#007600';
        newSpanElement.style.fontSize = '90%';
        newSpanElement.innerHTML = '<br>Entrega más rápida. Haz el pedido antes de las 20:00';
        
        // Insertar el nuevo elemento <span> después del elemento con el ID "deliveryDate"
        deliveryElement.parentNode.insertBefore(newSpanElement, deliveryElement.nextSibling);