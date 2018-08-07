const sendDataMandrill = (email,name,call) => {
let dataEmail={
        'key': 'ZGiSDAUGJIgaCMIqm9ysPA',
    'message': {
        'html': `
            <div style='border:1px solid #777'>
                <h1 style='background:#072240; color: #fff; width: 100%; text-align: center;'>Nueva Visita</h1>
                <h3 style='text-align: center'>Hola ${name}</h3>
                <p style='text-align: center'>${txtNameVisitor.value}" te quiere visitar, puede ser importante</p>
                <p style='text-align: center'>Si deseas llámalo: Nro </p>
                <strong>${call}</strong>
            <div>`,
        'text': 'de Visitor',
        'subject': 'nueva visita',
        'from_email': 'noely.alis209@laboratoria.la',
        'from_name': 'Visitor',
        'to': [
            {
                'email': email,
                'name': name,
                'type': 'to'
            }
        ],
        'headers': {
            'Reply-To': 'noely.alis209@laboratoria.la'
        }
        },
    'async': false,
    'ip_pool': 'Main Pool',
    'send_at': '2018-08-06 10:00:00'
    };
    $.ajax({
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: dataEmail,
        success: function (msg) {
            console.log('se envio el email');
        }
    }).done(function() {
        console.log('enviado');
      }).fail( function(e) {
        console.log( 'Error!!: '+e );
    });
}