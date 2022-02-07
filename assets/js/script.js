var images = new Array();

function preloadImages(){

    for (i=0; i < preloadImages.arguments.length; i++){

         images[i] = new Image();

        images[i].src = preloadImages.arguments[i];

    }

}

preloadImages("pink-walls.jpg", "ki31X3k.jpg", "avatar2.jpg", "intro.jpg");
