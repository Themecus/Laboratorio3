  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener los datos del formulario
    const formData = {
        nombre: document.getElementById('nombre').value,
        correo: document.getElementById('correo').value,
        informacion: document.getElementById('informacion').value,
        informacionEx: document.getElementById('informacion-ex').value
    };

    // Enviar la petición POST
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }
        return response.json();
    })
    .then(data => {
        // Almacenar en localStorage
        const storedData = JSON.parse(localStorage.getItem('formResponses') || '[]');
        storedData.push(data);
        localStorage.setItem('formResponses', JSON.stringify(storedData));
        
        // Mostrar mensaje de éxito
        const responseDiv = document.getElementById('responseMessage');
        responseDiv.textContent = '¡Datos enviados y almacenados correctamente!';
        responseDiv.style.display = 'block';
        responseDiv.style.backgroundColor = '#d4edda';
        responseDiv.style.color = '#155724';
        
        // Limpiar el formulario
        document.getElementById('contactForm').reset();
        
        // Ocultar el mensaje después de 5 segundos
        setTimeout(() => {
            responseDiv.style.display = 'none';
        }, 5000);
    })
    .catch(error => {
        console.error('Error:', error);
        const responseDiv = document.getElementById('responseMessage');
        responseDiv.textContent = 'Error al enviar los datos: ' + error.message;
        responseDiv.style.display = 'block';
        responseDiv.style.backgroundColor = '#f8d7da';
        responseDiv.style.color = '#721c24';
    });
});