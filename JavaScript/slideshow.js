var i = 0;
var image = [];
var time = 3000;

image[0] = 'Image1.jpeg';
image[1] = 'Image2.jpeg';
image[2] = 'Image3.jpeg';
image[3] = 'Image4.jpeg';

function Image() {
    document.slide.src = image[i];

    if (i < image.length - 1) {
        i++;
    }
    else {
        i = 0;
    }

    setTimeout("Image()", time);
}

window.onload = Image;




