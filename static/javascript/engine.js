function show(){
    const hamburger_menu=document.getElementsByClassName('hamburger');
    const mobile_nav=document.getElementsByClassName('menu');
    mobile_nav[0].classList.toggle('is-activemenu');
    hamburger_menu[0].classList.toggle('is-active');
}
function captureImage() {
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    // Get user media
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
            // Set video source
            video.srcObject = stream;
            video.play();
        });
    }

    // Capture image
    document.getElementById('path').value = '';
    document.getElementById('video').style.display = 'block';
    document.getElementById('canvas').style.display = 'none';

    document.getElementById('video').addEventListener('click', function() {
        // Draw image on canvas
        context.drawImage(video, 0, 0, 400, 300);
        var imageDataURL = canvas.toDataURL('image/png');

        // Set image data URL to input field
        document.getElementById('path').value = imageDataURL;

        // Stop video stream
        stream.getTracks().forEach(function(track) {
            track.stop();
        });

        // Hide video and display canvas
        document.getElementById('video').style.display = 'none';
        document.getElementById('canvas').style.display = 'block';
    });
}
