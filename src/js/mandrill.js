const sendDataMandrill = (email) => {
    console.log(email);
    $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
            "key": "ZGiSDAUGJIgaCMIqm9ysPA",
            "message": {
                "html": "<p>wiwork</p>",
                "text": "de visitor",
                "subject": "example subject",
                "from_email": "visitor@laboratoria.la",
                "from_name": "visitor",
                "to": [
                    {
                        "email": email,//"noely.alis209@gmail.com",
                        "name": "Recipient Name",
                        "type": "to"
                    }
                ],
                "headers": {
                    "Reply-To": "noely.alis209@laboratoria.la"
                },
            },
            "async": false,
            "ip_pool": "Main Pool",
            "send_at": "example send_at"
        },
        error: function(xhr, status, error){
            console.log("Error!" + xhr.status);
        },
    })
}