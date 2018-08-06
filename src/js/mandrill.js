/* var accountSid = 'ACc2c1e425cb5004b51de7149bc2c28188'; // Your Account SID from www.twilio.com/console
var authToken = '13d787ef680e6c5a430af3927de5abaf';   // Your Auth Token from www.twilio.com/console */
const sendDataMandrill = (email) => {
 /*    const  cliente  =  requieren ( 'Twilio' )(accountSid, authToken);
    client.messages.create({
        from: '(334)689-5709', body: 'body', to: '+51984076598'
     })
    .then((message) => console.log(message.sid))
    .done();; */
    console.log(email);
    let dataEmail={
        'key': 'ZGiSDAUGJIgaCMIqm9ysPA',
    'message': {
        'html': "<h1>hola estimado</h1><p> '"+txtNameVisitor.value+"' te quiere visitar</p><img src='https://k33.kn3.net/taringa/0/3/5/1/2/9/marceloceirano99/21E.png'>",
        'text': 'de visitor',
        'subject': 'asunto',
        'from_email': 'noely.alis209@laboratoria.la',
        'from_name': 'Noely',
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