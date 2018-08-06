const sendDataMandrill = (email) => {
let dataEmail={
        'key': 'ZGiSDAUGJIgaCMIqm9ysPA',
    'message': {
        'html': "<h1>hola estimado</h1><p>"+txtNameVisitor.value+" te quiere visitar</p>",
        'text': 'de visitor',
        'subject': 'nueva visita',
        'from_email': 'noely.alis209@laboratoria.la',
        'from_name': 'Visitor',
        'to': [
            {
                'email': email,
                'name': 'Recipient Name',
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