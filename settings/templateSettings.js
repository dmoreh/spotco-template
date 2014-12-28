templateSettings =
{
    "ctor": "Swiper",
    "scriptSource": "swiper.js",
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
        "logo": "up_arrow.png",
        "align": { "id": "CENTER", "value": "center" }
    },
    "footer":
    {
         "show": "true",
         "type": { "id": "Text", "value": "text" },
         "image":"title.png",
         "instructions_text": "<span id='instructions' style='font-family: Open Sans, sans-serif;color: #fff;'>Swipe up to make it rain and get a discount.</span>",
         "discount_text": "<span id='discount' style='font-family: Open Sans, sans-serif;color: #fff;'>0% off!</span>",
         "align": { "id": "CENTER", "value": "center" },
         "size": { "id": "Normal", "value": "0.8em" }
    },
    "content": {
        "show": "true",
        "image":"cat.png"
    },
    "customization":
    {
        "swipe_value": 1,
        "max_discount": 10
    }

};
