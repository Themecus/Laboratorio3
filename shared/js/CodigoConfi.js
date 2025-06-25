document.getElementById('guardarBtn').addEventListener('click', function() {
    
    const formData = {
        nombre: document.getElementById('nombreUsuario').value,
        fechaNacimiento: document.getElementById('nacimiento').value,
        genero: document.querySelector('input[name="genero"]:checked').value,
        colorFavorito: document.getElementById('colores').value,
        password: document.getElementById('pass').value,
        fotoPerfil: document.getElementById('foto perfil').files[0] ? 
                    document.getElementById('foto perfil').files[0].name : null,
        fechaRegistro: new Date().toLocaleString()
    };

   
    const registros = JSON.parse(localStorage.getItem('registrosUsuarios') || '[]');
    registros.push(formData);
    localStorage.setItem('registrosUsuarios', JSON.stringify(registros));

    
    alert('Datos guardados correctamente en localStorage');
});