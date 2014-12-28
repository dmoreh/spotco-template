var templateSettings =
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
        "logo": "up_arrow.png",
        "align": { "id": "CENTER", "value": "center" }
    },
    "footer":
    {
         "show": "true",
         "type": { "id": "Text", "value": "text" },
         "image":"title.png",
         "text": "<span id='text' style='z-index:3; font-family: Open Sans, sans-serif;color: #fff;'>Swipe up to make it rain and get a discount.</span>",
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


function ExternalTemplate(settings) {
    var settings = settings,
        gradientPrefix = getCssValuePrefix('backgroundImage', 'linear-gradient(left, #fff, #fff)'),
        basePath = spotgamesUtils.getScriptPath(),
        isMobile = spotgamesUtils.isMobile.any(),
        touchStartEvent = "mousedown",
        touchEndEvent = "mouseup",
        touchMoveEvent = "mousemove",
        imagesLoaded = false,
        styleLoaded = false,
        isEngaged = false,
        thisgame = this,
        detectStylesInterval, mainWrapper, btn,
        gameContainer = settings.container,
        stylesAmount, imagesForPreload = [],
        counter = 0,
        swipe_value = settings.customization.swipe_value,
        max_discount = settings.customization.max_discount,
        meta = '<meta name="viewport" content="user-scalable=no, initial-scale=1, width=device-width" />',
        style = ' body{overflow:hidden;}#main-container{width: 100%; height: 100%; position: absolute; text-align: center;}.hide{visibility: hidden;}#cont-box{z-index: 3; width: 100%; height: 70%;}#cont-box > div{z-index:3; height: 100%; width: 100%; vertical-align: middle;}#logo{height: 15%;}#logo img, #footer img{max-height: 70%; max-width: 100%; margin: 5% 0;}#footer{z-index:3; height: 5%;}.font-setter{width: 100%; height: 100%;}.image{ z-index:3; position:absolute; width:100%; transition: top 500ms;-webkit-transition: top 500ms; top: 200px;}.image.slide{top: -500px;}.image img{width: 51%; margin:-100px;}.hand{position:absolute; bottom: 0px; right: 0;width: 100%; }.hand img {width: 320px;}#btn{max-height: 100px; max-width: 300px; width: 40%; margin-top: 70px;}.image-last{ z-index:3; position:absolute; width:100%; top: 200px;}.image-last img {width: 50%;}' + addBackground(settings.background),
        html = setHeader(settings.header) + '<div id="cont-box"> <div>' + setMainImage(settings.content) + '</div> </div><div class="hand"><img src="images/hand1.png"/></div>' + setFooter(settings.footer);
    
       
    if (isMobile) {
        touchStartEvent = "touchstart";
        touchEndEvent = "touchend";
        touchMoveEvent = "touchmove";
    }

    /*first function that is called to template*/
    thisgame.init = function (preload) {
        if (html) {
            stylesAmount = document.styleSheets.length;
            document.head.innerHTML += meta;
            mainWrapper = document.createElement('div');
            mainWrapper.innerHTML += '<style>' + style + '</style>' + html;
            mainWrapper.className = "hide";
            mainWrapper.id = "main-container";
            gameContainer.appendChild(mainWrapper);
        }
        //preload is something decided in the editor,
        //if you need to preload content no mather what ignore this if statement
        if (preload == 'true') {
            detectStylesInterval = setInterval(function () {
                if (document.styleSheets.length > stylesAmount) {
                    clearInterval(detectStylesInterval);
                    styleLoaded = true;
                    if (imagesLoaded) {
                        spotgamesEventManager.dispatchEvent(spotgames.event_type.AD_INIT, thisgame.constructor.name);
                    }
                }
            }, 10);

            addImagesToArrayForLoading();
            preloadImages(imagesForPreload);

        }
        else {
            spotgamesEventManager.dispatchEvent(spotgames.event_type.AD_INIT, thisgame.constructor.name);
        }
    };


    /*this function changes frames regarding what frame was requested*/
    thisgame.changeFrame = function (frame) {
        switch (frame) {
            case spotgames.frame_state.START_FRAME:
                return false;
            case spotgames.frame_state.PLAY_FRAME:
                setFooterFontSize();
                break;
            case spotgames.frame_state.WIN_FRAME:
                return false;
            case spotgames.frame_state.LOSE_FRAME:
                return false;
        }
        spotgamesEventManager.dispatchEvent(spotgames.event_type.FRAME_CHANGED, thisgame.constructor.name);
    };

    thisgame.play = function () {
        mainWrapper.className = "";
        console.log("woot");
        var start,
            direction = 0;

        $('.image').on(touchStartEvent, function(event) {
            start = event.originalEvent.touches[0].pageY;
        });
        $('.image').on(touchMoveEvent, function(event) {
            direction = start - event.originalEvent.touches[0].pageY;
        });
        $('.image').on(touchEndEvent, function(event) {
            if (direction > 0 ) {
                //animate
                $(this).addClass('slide')
                updateText();
            }
        });
    }

    function updateText() {
        counter++;
        elm = document.getElementById("text")
        elm.innerHTML = counter + "% off!\n";
        elm.style.fontSize = "40px";
        
        if (counter == max_discount) {

            document.getElementById("logo").className = "hide";
            document.getElementById("text").innerHTML = counter + "% off! Aw yeah get dat money.\n";
            setTimeout(function() {
                requestWinFrame('http://www.google.com');
            }, 3000);
            
        }
    }

    function preloadBigImages() {
        var distinct = {};
        for (var i = 0; i < wheelItems.length; i++) {
            if (!distinct[wheelItems[i].win_item.image]) {
                var img = new Image();
                img.src = basePath + 'images/' + wheelItems[i].win_item.image;
                distinct[wheelItems[i].win_item.image] = true;
            }
        }
    }

    /*function in wich  images ,
    who are needed to be displayd and loaed,
    are added to array*/
    function addImagesToArrayForLoading() {
        if (settings.header.show == 'true')
        { imagesForPreload.push(settings.header.logo); }
    }

    /*the usual image preloader function*/
    function preloadImages(images) {
        imagesAmount = images.length;
        for (var i = 0; i < images.length; i++) {
            var img = new Image();
            img.addEventListener('load', imageLoadedCallback, false);
            img.src = basePath + 'images/' + images[i];
        }
    }

    /*the usual style preload function*/
    function imageLoadedCallback() {
        if (++imagesAmount >= imagesForPreload.length) {
            imagesLoaded = true;
            if (styleLoaded) {
                spotgamesEventManager.dispatchEvent(spotgames.event_type.AD_INIT, thisgame.constructor.name);
            }

        }
    }

    /*requests to change current frame */
    function requestPlayFrame() {
        spotgamesEventManager.dispatchEvent(spotgames.event_type.PLAY_FRAME_REQUESTED, thisgame.constructor.name);
    }

    /*requests to change current frame*/
    function requestWinFrame(link) {
        spotgamesEventManager.dispatchEvent(spotgames.event_type.AD_WIN, thisgame.constructor.name, { redirectUrl: link });
    }

    /*requests to change current frame*/
    function requestLoseFrame() {
        spotgamesEventManager.dispatchEvent(spotgames.event_type.AD_LOSE, thisgame.constructor.name);
    }

    function requestRedirect() {
        spotgamesEventManager.dispatchEvent(spotgames.event_type.REDIRECT, thisgame.constructor.name);
    }

    function sendEngage() {
        gameContainer.addEventListener(touchStartEvent, sendEngage, false);
        console.log('is engaged');
        if (!isEngaged) {
            isEngaged = true;
            spotgamesEventManager.dispatchEvent(spotgames.event_type.ENGAGE_START, thisgame.constructor.name);
        }
    }

    function getCssValuePrefix(name, value) {
        var prefixes = ['', '-o-', '-ms-', '-moz-', '-webkit-'];
        var dom = document.createElement('div');
        for (var i = 0; i < prefixes.length; i++) {
            dom.style[name] = prefixes[i] + value;
            if (dom.style[name]) {
                return prefixes[i];
            }
            dom.style[name] = '';
        }
    }


    //add background depending on settings
    function addBackground(stats) {
        var bg = '';
        if (stats.type.value == "image") {
            bg = '#main-container{background-image:' + 'url(' + basePath + 'images/' + stats.image + ');}';
        }
        else {
            bg = '#main-container{background:' + gradientPrefix + 'linear-gradient(' + stats.gradiant_start + ', ' + stats.gradiant_end + ');}';
        }
        return bg;
    }


    //add header content depending on settings
    function setHeader(stats) {
        var head = '';
        if (stats.show == 'true') {
            head = '<div id="logo" style="text-align:' + stats.align.value + ';"> <img src="' + basePath + 'images/' + stats.logo + '" style="margin:' + calculateMarginFromFreeSpace(0.15, 0.7) + 'px 0"/></div>';
        }
        return head;
    }
    
    //calculates marging from avaliable space
    function calculateMarginFromFreeSpace(boxHeightInPrecent,contentMaxHeight) {
        var allAviHeight = gameContainer.offsetHeight;
        var boxHeight = allAviHeight * boxHeightInPrecent;
        var contentHeight = boxHeight * contentMaxHeight;
        var freeSpace = boxHeight - contentHeight;
        return Math.floor(freeSpace/2) ;
    }

    //add footer content depending on settings
    function setFooter(stats) {
        var footer = '';
        if (stats.show == 'true') {
            if (stats.type.value == "image") {
                footer = '<div id="footer" style="z-index:30;text-align:' + stats.align.value + ';"> <img src="' + basePath + 'images/' + stats.logo + '" /></div>';
            }
            else {
                footer = '<div id="footer" style="z-index:3;position:absolute;width:100%;text-align:' + stats.align.value + ';"><div class="font-setter" style="z-index:3;font-size:' + stats.size.value + ';">' + stats.text + '</div></div>';
            }
        }
        return footer;
    }


    //add footer content depending on settings
    function setMainImage(stats) {
        var image = '';
        if (stats.show == 'true') {
            image = '<div class="image"> <img src="' + basePath + 'images/' + stats.image + '" /></div>';
        }

        var images = ''

        images += '<div class="image-last"> <img src="' + basePath + 'images/money-eyes.jpg" /></div>';

        console.log(max_discount);
        console.log(swipe_value);
        for (var i = 0; i < (max_discount / swipe_value); i++) {
            images += image;
            console.log(images);
        }



        return images;
    }

    function setFooterFontSize() {
        var footer = gameContainer.querySelector('#footer');
        footer.style.fontSize = Math.floor(gameContainer.offsetHeight *0.05 *0.8) + 'px';
    }
}
