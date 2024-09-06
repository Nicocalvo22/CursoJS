let usuarios = [];
let contraseñas = [];
let usuariosYcontras = [];
let comprobacion = true;
let usuario;
let contraseña;

const registrarUsuario = ()=> {
    do {
        alert("Usted esta por registrarse...");
        usuario = prompt("Ingrese su usuario: ");
        if (usuarios.includes(usuario) === true) {
            alert("Usuario ya existente, elija otro!");
            comprobacion = false;
        } else if (usuarios.includes(usuario) === false){
            alert("Usuario disponible, puede continuar");
            usuarios.push(usuario)
            comprobacion = true;
            return usuario;
        }
    } while (comprobacion === false)
}

const registrarContrseña = ()=> {
    do {
        alert(`Usted esta por crear su contraseña para su usuario "${usuario}"`);
        contraseña = prompt("Ingrese su nueva contraseña: ");
        contraseñas.push(contraseña);
        usuariosYcontras.push({usuario: usuario, contraseña: contraseña});
        return contraseña;
    } while (comprobacion === false)
}

const registrarse = ()=> {
    registrarUsuario();
    registrarContrseña();
    alert("Usted se ha registrado correctamente");
}

const iniciarSesion = ()=> {
    let encontrado = false;
    do {
        let ingresaUser = prompt("Ingrese su usuario");
        let ingresaContra = prompt("Ingrese su contraseña");
        for (let i = 0; i < usuariosYcontras.length; i++) {
            if (usuariosYcontras[i].usuario === ingresaUser && usuariosYcontras[i].contraseña === ingresaContra) {
                encontrado = true;
            }
        }
        if (encontrado === true) {
            alert(`Inicio de Sesion Correcto. Bienvenido ${ingresaUser}`);
        } else {
            alert("Nombre de usuario y/o contraseña incorrecto/s");
            encontrado = false;
        }
    } while (encontrado === false)
}

const comprarEntradas = ()=> {
    let precio2D = 8400;
    let precio3D = 10000;
    let precioEspecial = 600;
    let cantidadEntradas = prompt("¿Cuántas entradas desea comprar?");
    let entradas2D = 0;
    let entradas3D = 0;
    let entradas2DEspeciales = 0;
    let entradas3DEspeciales = 0; 

    for (let i = 1; i <= cantidadEntradas; i++) {
    let pantalla;
    
    do {
        pantalla = prompt(`La entrada N° ${i}, ¿será 2D o 3D?`);
        
        if (pantalla === "2D") {
        alert(`Su entrada N° ${i} es 2D`);
        entradas2D++;
        } else if (pantalla === "3D") {
        alert(`Su entrada N° ${i} es 3D`);
        entradas3D++;
        } else {
        alert("Entrada no comprada. Por favor, ingrese '2D' o '3D' respetando mayúsculas.");
        }
    } while (pantalla !== "2D" && pantalla !== "3D");
    }

    let precioFinal2D = 0;
    let precioFinal3D = 0;

    alert("Por favor, ingrese las edades de los que usarán los boletos el día de la película...");

    for (let i = 0; i < entradas2D; i++) {
        let edad = parseInt(prompt(`Ingrese la edad para la entrada 2D N° ${i + 1}:`));
        if (edad <= 13 || edad >= 65) {
            alert(`Como el usuario tiene ${edad} años, su entrada 2D costará $600.`);
            precioFinal2D += precioEspecial;
            entradas2DEspeciales++;
        } else {
            precioFinal2D += precio2D;
        }
    }

    for (let i = 0; i < entradas3D; i++) {
        let edad = parseInt(prompt(`Ingrese la edad para la entrada 3D N° ${i + 1}:`));
        if (edad <= 13 || edad >= 65) {
            alert(`Como el usuario tiene ${edad} años, su entrada 3D costará $600.`);
            precioFinal3D += precioEspecial;
            entradas3DEspeciales++;
        } else {
            precioFinal3D += precio3D;
        }
    }

    let descuentoAplicado = false;

    do {
    let ingresandoDescuento = prompt("En caso de tener, ingrese su código de descuento"); 
    if (ingresandoDescuento === "PROMO") {
        alert("Descuento aplicado correctamente");
        descuentoAplicado = true;

        let entradas2DSinEspecial = entradas2D - entradas2DEspeciales;
        let entradas3DSinEspecial = entradas3D - entradas3DEspeciales;

        precioFinal2D -= 1000 * entradas2DSinEspecial;
        precioFinal3D -= 1000 * entradas3DSinEspecial;
        
    } else {
        alert("Ingrese su código correctamente respetando mayúsculas y sin espacios");
    }
    } while (!descuentoAplicado);

    let dia = null;
    do {
    let pelicula = prompt("Ingrese el día de la película: 1-Lunes 2-Martes 3-Miércoles 4-Jueves 5-Viernes 6-Sábado 7-Domingo")
    if (pelicula == 1) {
        dia = "Lunes";
        alert("Día seleccionado correctamente");
    } else if (pelicula == 2){
        dia = "Martes";
        alert("Día seleccionado correctamente");
    } else if (pelicula == 3){
        dia = "Miércoles";
        alert("Día seleccionado correctamente");
    } else if (pelicula == 4){
        dia = "Jueves";
        alert("Día seleccionado correctamente");
    } else if (pelicula == 5){
        dia = "Viernes";
        alert("Día seleccionado correctamente");
    } else if (pelicula == 6){
        dia = "Sábado";
        alert("Día seleccionado correctamente");
    } else if (pelicula == 7){
        dia = "Domingo";
        alert("Día seleccionado correctamente");
    } else {
        alert("Por favor, seleccione un número correcto para el día de la película, vuelva a intentarlo a continuación...");
    }
    } while(dia == null);

    alert(`Se compraron ${cantidadEntradas} entradas!!`);
    if(entradas2D >= 1) {
    alert(`Entradas 2D total: $${precioFinal2D}`);
    } else {
    alert("No se adquirieron entradas 2D");
    }
    if(entradas3D >= 1) {
    alert(`Entradas 3D total: $${precioFinal3D}`);
    } else {
    alert("No se adquirieron entradas 3D");
    }
    alert(`Pelicula seleccionada para el día ${dia}`);
    alert("Muchas gracias por su compra vuelva pronto!!!");
}

const app = () => {
    let continuar = true;
    do {
        let confirmarSeguir = confirm("Desea ir al menú?");
        if (!confirmarSeguir) {
            alert("Gracias por usar Cines Nico. ¡Hasta luego!");
            continuar = false;
            break;
        }

        let accionValida = false;
        do {
            let accion = prompt("Bienvenido a Cines Nico, ¿qué desea hacer?\n1- Comprar entradas\n2- Registrarse\n3- Iniciar sesión\n4- Salir");
            
            if (accion === "1") {
                comprarEntradas();
                accionValida = true; // Acción válida, salimos del bucle.
            } else if (accion === "2") {
                registrarse();
                accionValida = true;
            } else if (accion === "3") {
                iniciarSesion();
                accionValida = true;
            } else if (accion === "4") {
                alert("Gracias por usar Cines Nico. ¡Hasta luego!")
                continuar = false;
                accionValida = true;
            } else {
                alert("Acción ingresada no válida, ingrese 1, 2 o 3 según corresponda...");
                accionValida = false; // Acción no válida, seguimos en el bucle.
            }
        } while (!accionValida); // Repetimos hasta que la acción sea válida.

    } while (continuar);
};

app();