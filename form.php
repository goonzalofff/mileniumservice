<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoge los datos del formulario
    $nombre = htmlspecialchars(trim($_POST['nombre']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $mensaje = htmlspecialchars(trim($_POST['mensaje']));

    // Define el correo donde se enviará el mensaje
    $destinatario = "gonzalofff@gmail.com"; // Reemplaza con tu correo electrónico
    $asunto = "Nuevo mensaje de $nombre desde el formulario de contacto";

    // Formatea el mensaje
    $cuerpo = "Nombre: $nombre\n";
    $cuerpo .= "Correo Electrónico: $email\n\n";
    $cuerpo .= "Mensaje:\n$mensaje\n";

    // Configura los encabezados del correo
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Envía el correo
    if (mail($destinatario, $asunto, $cuerpo, $headers)) {
        echo "Gracias, tu mensaje ha sido enviado.";
    } else {
        echo "Lo sentimos, ocurrió un error al enviar tu mensaje.";
    }
} else {
    echo "Acceso no autorizado.";
}
?>