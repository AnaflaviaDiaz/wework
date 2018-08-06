const sendDataMandrill=(email)=>{
    $.ajax({
        "key": "ZGiSDAUGJIgaCMIqm9ysPA",
    "message": {
        "html": "<p>wiwork HTML</p>",
        "text": "hola wiwork text content",
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
      });
}