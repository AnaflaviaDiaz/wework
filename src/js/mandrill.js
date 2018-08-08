const sendDataMandrill = (email,name,call) => {
let dataEmail={
        'key': 'ZGiSDAUGJIgaCMIqm9ysPA',
    'message': {
        'html': `
            <div style='border:1px solid #777'>
                <h2 style='
                background:#072240;
                color: #fff;
                width: 100%;
                text-align: center;
                top:0;
                padding: 1em 0em;
                box-shadow: 0px 2px 10px 0px #c5c5c5;
                '>Nueva Visita</h2>
                <h3 style='text-align: center'>Hola ${name}</h3>
                <p style='text-align: center'><strong>${txtNameVisitor.value}</strong> esta en sala de espera. Dale la bienvenida!!</p>
                <p style='text-align: center'> o contáctate con su número de celular <strong'>${call}</strong> </p>
            <div>`,
        'text': 'de Visitor',
        'subject': 'Nueva visita',
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
        }
    }).done(function() {
      }).fail( function(e) {
    });
}