// el nombre de la funcion tiene que ser comoel del html
function validarForm() {
    // valores de los campos del formulario
    var nombre = document.forms["myForm"]["nombre"].value;
    var apellido = document.forms["myForm"]["apellido"].value;
    var dni = document.forms["myForm"]["dni"].value;
    var email = document.forms["myForm"]["email"].value;
    var contraseña = document.forms["myForm"]["contraseña"].value;
    var rcontraseña = document.forms["myForm"]["rcontraseña"].value;    
//Nombre
    // verificamos que el campo del nombre tenga algo 
    if (nombre === "") {
        alert("Por favor, ingresa tu nombre");
      return false; // el "false" para detener el envío del formulario
    }
    else if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s]{1,21}$/.test(nombre)) {
        alert("Por favor, ingresa un nombre válido");
        return false;
    }
//Apellido
    if (apellido === "") {
        alert("Por favor, ingresa tu apellido");
        return false;
    }
    else if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s]{1,21}$/.test(apellido)) {
        alert("Por favor, ingresa un apellido válido");
        return false;
    }   
//DNI
    if (dni === "") {
        alert("Por favor, ingresa tu DNI");
        return false;
    }
    else if (!/^\d{7,8}$/.test(dni)) {
        alert("El DNI debe tener 7 u 8 caracteres numéricos únicamente");
        return false;
    }
//EMAIL
    if (email === "") {
        alert("Por favor, ingresa tu correo electrónico");
        return false;
    } 
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("El mail debe tener un formato correcto");
        return false;
    }
//Contraseña y repetir contraseña
if (contraseña === "") {
    alert("Por favor, ingresa tu contraseña");
    return false;
}
else if (!/^\d{7,8}$/.test(contraseña)) {
    alert("La contraseña debe tener 7 u 8 caracteres numéricos únicamente");
    return false;
}
else if (contraseña === dni) {
    alert("La contraseña debe ser diferente al DNI");
    return false;
}
else if (rcontraseña !== contraseña) {
    alert("Las contraseñas no coinciden");
    return false;
}

}