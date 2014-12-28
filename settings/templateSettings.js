templateSettings =
{
    "ctor": "ExternalTemplate",
    "scriptSource": "global.js",
    "background":
    {
     "type": { "id": "Image", "value": "image" },
     "image": "bg.jpg",
     "gradiant_start": "#555354",
     "gradiant_end": "#000"
    },
    "header":
    {
        "show": "true",
        "logo": "logo.png",
        "align": { "id": "CENTER", "value": "center" }
    },
    "footer":
    {
         "show": "true",
         "type": { "id": "Text", "value": "text" },
         "image":"title.png",
         "text": "<span id='text' style='z-index:3;width:100%; font-family: Open Sans, sans-serif;color: #000;'>Swipe up to make it rain and get a discount.</span>",
         "align": { "id": "CENTER", "value": "center" },
         "size": { "id": "Normal", "value": "0.8em" }
    },
    "content": {
        "show": "true",
        "image":"dollar.png"
    },
    "customization":
    {
        "swipe_value": 1,
        "max_discount": 10
    }

};
