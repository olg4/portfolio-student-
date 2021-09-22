$(function() {
    $('#contact-link').click(function() {
        $('#contact-selected').show();
        return false;
    }); 
    
    $('#contact').click(function() {
        $('#contact-selected').show();
        return false;
    }); 
    
    $('#contact-cancel').click(function() {
        $('#contact-selected').hide();
        $('#contact-form').trigger("reset");
        return false;
    });
});

var inViewportOther = false;
var inViewportMobile = false;
var inViewportWeb = false;

window.addEventListener('scroll', function() {
    var elementOther = document.querySelector('#other');
    var positionOther = elementOther.getBoundingClientRect();

    var elementMobile = document.querySelector('#mobile');
    var positionMobile = elementMobile.getBoundingClientRect();

    var elementWeb = document.querySelector('#web');
    var positionWeb = elementWeb.getBoundingClientRect();

    // checking for partial visibility
    if(positionOther.top < window.innerHeight && positionOther.bottom >= 0) {
        if (!inViewportOther) animatedProgressBar("other-progress-bar", true);
        inViewportOther = true;
    } else {
        inViewportOther = false;
        animatedProgressBar("other-progress-bar", false);
    }

    if(positionMobile.top < window.innerHeight && positionMobile.bottom >= 0) {
        if (!inViewportMobile) animatedProgressBar("mobile-progress-bar", true);
        inViewportMobile = true;
    } else {
        inViewportMobile = false;
        animatedProgressBar("mobile-progress-bar", false);
    }

    if(positionWeb.top < window.innerHeight && positionWeb.bottom >= 0) {
        if (!inViewportWeb) animatedProgressBar("web-progress-bar", true);
        inViewportWeb = true;
    } else {
        inViewportWeb = false;
        animatedProgressBar("web-progress-bar", false);
    }
});

function animatedProgressBar(whichGraphic, isVisible) {
    var elements = document.getElementsByClassName(whichGraphic);
    for (var i = 0; i < elements.length; i++) {
        var status = elements[i].getAttribute('data-width');
        if (isVisible) fill(status, elements[i]);
        else clear(elements[i]);
    }
}

function fill(status, progressBar) {
    var width = 1;
    var id = setInterval(frame, 1);
    function frame() {
        if (width >= status) {
            clearInterval(id);
        } else {
            width ++;
            progressBar.style.width = width + "%";
        }
    }
}

function clear(progressBar) {
    progressBar.style.width = "0%";
}