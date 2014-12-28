{
    "metadata" : [
       { 
           "id" : "background.type",
           "description" : "Background Type",
           "dataType" : "SINGLE_LIST",
           "listValues":[{"id":"Image","value":"image"},{"id":"Gradient","value":"gradient"}],
           "showToUser" : "true",
           "required" : "false",
           "advanced" : "false",
           "unit" : "",
           "defaultValue" : {"id":"Image","value":"image"},
           "grouping" : "Background",
           "order" : "1"
        },
        { 
           "id" : "background.image",
           "description" : "Background Image",
           "dataType" : "IMAGE",
           "imageSize":"200",
           "fileType":["jpg","png"],
           "showToUser" : "true",
           "required" : "false",
           "advanced" : "false",
           "unit" : "",
           "defaultValue" : "bg.jpg",
           "grouping" : "Background",
           "order" : "2",
           "dependency":"@background.type.value == 'image'"
        },
        {
           "id" : "background.gradiant_start",
           "description" : "Gradiant start color for  background",
           "dataType" : "COLOR",
           "showToUser" : "true",
           "required" : "false",
           "advanced" : "false",
           "unit" : "",
           "defaultValue" : "#66297d",
           "grouping" : "Background",
           "order" : "3",
           "dependency":"@background.type.value != 'image'"
        },
        {
           "id" : "background.gradiant_end",
           "description" : "Gradiant end color for  background",
           "dataType" : "COLOR",
           "showToUser" : "true",
           "required" : "false",
           "advanced" : "false",
           "unit" : "",
           "defaultValue" : "#521070",
           "grouping" : "Background",
           "order" : "4",
           "dependency":"@background.type.value != 'image'"
        },
        {
           "id" : "header.show",
           "description" : "Show logo",
           "dataType" : "BOOLEAN",
           "showToUser" : "true",
           "required" : "false",
           "advanced" : "false",
           "unit" : "",
           "defaultValue" : "true",
           "grouping" : "Header",
           "order" : "1"
        },
        {
           "id" : "header.logo",
           "description" : "Your logo image",
           "tooltip" : "Place the logo of your company to show in header",
           "dataType" : "IMAGE",
           "imageSize":"200",
           "fileType":["jpg","png"],
           "showToUser" : "true",
           "required" : "false",
           "advanced" : "false",
           "unit" : "",
           "defaultValue" : "logo.png",
           "grouping" : "Header",
           "order" : "2",
           "dependency":"@header.show == 'true'"
        },
        {
           "id" : "header.align",
           "description" : "Align of logo image",
           "dataType" : "SINGLE_LIST",
           "listValues":[{"id":"RIGHT","value":"right"},{"id":"CENTER","value":"center"},{"id":"LEFT","value":"left"}],
           "showToUser" : "true",
           "required" : "false",
           "advanced" : "true",
           "unit" : "",
           "defaultValue" : {"id":"CENTER","value":"center"},
           "grouping" : "Header",
           "order" : "3",
           "dependency":"@header.show == 'true'"
        },
        {
           "id" : "footer.show",
           "description" : "Show footer below content ?",
           "dataType" : "BOOLEAN",
           "showToUser" : "true",
           "required" : "false",
           "advanced" : "false",
           "unit" : "",
           "defaultValue" : "true",
           "grouping" : "Footer",
           "order" : "1"
        },
        {
           "id" : "footer.type",
           "description" : "Footer type",
           "dataType" : "SINGLE_LIST",
           "listValues":[{"id":"Image","value":"image"},{"id":"Text","value":"text"}],
           "showToUser" : "true",
           "required" : "false",
           "advanced" : "false",
           "unit" : "",
           "defaultValue" : {"id":"Image","value":"image"},
           "grouping" : "Footer",
           "order" : "2",
           "dependency":"@footer.show == 'true'"
        },
        {
           "id" : "footer.image",
           "description" : "Image to appear in footer",
           "dataType" : "IMAGE",
           "imageSize":"200",
           "fileType":["jpg","png"],
           "showToUser" : "true",
           "required" : "false",
           "advanced" : "false",
           "unit" : "",
           "defaultValue" : "logo.png",
           "grouping" : "Footer",
           "order" : "3",
           "dependency":"@footer.show == 'true' && @footer.type.value == 'image'"
        } ,
        {
           "id" : "footer.text",
           "description" : "Text to appear in footer",
           "dataType" : "RTE",
           "showToUser" : "true",
           "required" : "false",
           "advanced" : "false",
           "unit" : "",
           "defaultValue" : "true",
           "grouping" : "Footer",
           "order" : "4",
           "dependency":"@footer.show == 'true' && @footer.type.value != 'image'"
        },
        {
           "id" : "footer.size",
           "description" : "Choose font size for footer text",
           "dataType" : "SINGLE_LIST",
           "listValues":[{"id":"Small","value":"0.7em"},{"id":"Normal","value":"0.8em"},{"id":"Medium","value":"0.9em"},{"id":"Large","value":"1em"}],
           "showToUser" : "true",
           "required" : "false",
           "advanced" : "true",
           "unit" : "",
           "defaultValue" : {"id":"Medium","value":"0.9em"},
           "grouping" : "Footer",
           "order" : "5",
           "dependency":"@footer.show == 'true'  && @footer.type.value != 'image'"
        },
        {
           "id" : "footer.align",
           "description" : "Align of title text/image",
           "dataType" : "SINGLE_LIST",
           "listValues":[{"id":"RIGHT","value":"right"},{"id":"CENTER","value":"center"},{"id":"LEFT","value":"left"}],
           "showToUser" : "true",
           "required" : "false",
           "advanced" : "true",
           "unit" : "",
           "defaultValue" : {"id":"CENTER","value":"center"},
           "grouping" : "Footer",
           "order" : "6",
           "dependency":"@footer.show == 'true'"
        },
        {
           "id" : "content.show",
           "description" : "Show content image?",
           "dataType" : "BOOLEAN",
           "showToUser" : "true",
           "required" : "false",
           "advanced" : "false",
           "unit" : "",
           "defaultValue" : "true",
           "grouping" : "Content",
           "order" : "1"
       },
       {
           "id" : "content.image",
           "description" : "Content image",
           "dataType" : "IMAGE",
           "imageSize":"200",
           "fileType":["jpg","png"],
           "showToUser" : "true",
           "required" : "false",
           "advanced" : "false",
           "unit" : "",
           "defaultValue" : "cat.png",
           "grouping" : "Content",
           "order" : "2",
           "dependency":"@content.show == 'true'"
       } 
    ]
	
} 