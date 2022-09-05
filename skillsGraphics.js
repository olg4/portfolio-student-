$(function() {
    $('#contact-link').click(function() {
        $('#contact-selected').show();
        $('html,body').scrollTop(0);
        return false;
    }); 
    
    $('#contact').click(function() {
        $('#contact-selected').show();
        $('html,body').scrollTop(0);
        return false;
    }); 
    
    $('#contact-cancel').click(function() {
        $('#contact-selected').hide();
        $('#contact-form').trigger("reset");
        return false;
    });
});

let inViewportOther = false;
let inViewportMobile = false;
let inViewportWeb = false;

window.addEventListener('scroll', function() {
    let elementOther = document.querySelector('#other');
    let positionOther = elementOther.getBoundingClientRect();

    let elementMobile = document.querySelector('#mobile');
    let positionMobile = elementMobile.getBoundingClientRect();

    let elementWeb = document.querySelector('#web');
    let positionWeb = elementWeb.getBoundingClientRect();

    let elementInternship = document.querySelector('#experience-view');
    let positionInternship = elementInternship.getBoundingClientRect();

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

    if(positionInternship.top < window.innerHeight && positionInternship.bottom >= 0) {
        if (!inViewportWeb) slideLimeSurveyImage(true)
        inViewportWeb = true;
    } else {
        inViewportWeb = false;
        slideLimeSurveyImage(false)
    }
});

function slideLimeSurveyImage(isVisible) {

}

function animatedProgressBar(whichGraphic, isVisible) {
    let elements = document.getElementsByClassName(whichGraphic);
    for (const element of elements) {
        let status = element.getAttribute('data-width');
        if (isVisible) fill(status, element);
        else clear(element);
    }
}

function fill(status, progressBar) {
    let width = 1;
    let id = setInterval(frame, 1);
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