


/* ---------------------------- */
const btn = document.getElementById('button');

document.getElementById('form')
.addEventListener('submit', function(event) {

    event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'default_service';

    // Mail que recibís vos
    const templateConsulta = 'template_akyx4h4';

    // Mail de confirmación para el usuario
    const templateConfirmacion = 'template_tpkgveo';

    emailjs.sendForm(
        serviceID,
        templateConsulta,
        this
    )
    .then(() => {

        return emailjs.sendForm(
            serviceID,
            templateConfirmacion,
            this
        );

    })
    .then(() => {

        btn.value = 'Enviar Mail';
        alert('¡Consulta enviada correctamente!');

        document.getElementById('form').reset();

    })
    .catch((err) => {

        btn.value = 'Enviar Mail';
        console.error(err);
        alert('Error al enviar el formulario');

    });

});