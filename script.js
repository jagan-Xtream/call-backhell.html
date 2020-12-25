function script(secs, elem) {
    var element = document.getElementById(elem);
    element.innerHTML = "Please wait for " + secs + " seconds";
    if (secs < 1) {
        clearTimeout(timer);
        element.innerHTML = '<h2>HAPPY INDEPENDENCE DAY</h2>';

    }
    secs--;
    var timer = setTimeout('script(' + secs + ',"' + elem + '")', 1000);
}
