function fadeOut() {
    var fadeTarget = document.getElementById("alert");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity < 0.1) {
            clearInterval(fadeEffect);
        } else {
            fadeTarget.style.opacity -= 0.1;
        }
    }, 50);
}


document.addEventListener('DOMContentLoaded', function() {
    var element =  document.getElementById('alert');
    if (typeof(element) != 'undefined' && element != null)
    {
        setTimeout(function(){ fadeOut(); }, 3000);
    }


})