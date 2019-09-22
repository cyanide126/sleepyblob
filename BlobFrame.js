var imageCollection = document.images;

    function createNewBlob(ID){

        //var blob = {};

        var currentImageIndex = -1,
            maxImageIndex = 0,
            images = [],
            changeInterval = 200;

        // prepares relevant variables to cycle throguh images
        var setUp = function() {

            for (i = (ID*10)-10; i < (ID*10)-1; i+=1){
                images.push(imageCollection[i]);
            }
            maxImageIndex = images.length;
            currentImageIndex = 0;
        };

        // changes the banner currently being displayed
        var changeBanner = function() {
            var i;

            // either re-set the index to 0 if the max length was reached or increase the index by 1
            currentImageIndex = (currentImageIndex >= maxImageIndex - 1) ? 0 : currentImageIndex += 1;

            for (i = 0; i < maxImageIndex; i += 1) {
                images[i].hidden = (i !== currentImageIndex);
            }
        };

        setUp();

        images[currentImageIndex].hidden = false; // show the first banner image;

        setInterval(changeBanner, changeInterval); // following a delay, keep changing the banner image by the specified interval
        // a function which is triggered following the `load` event 

        //return blob;

    }