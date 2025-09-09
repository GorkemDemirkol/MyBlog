window.onload = function () {
    if (document.cookie.length != 0) {
        var nameValueArray = document.cookie.split("=");
        document.body.style.backgroundColor = nameValueArray[1];
        document.getElementById('select').value = nameValueArray[1];
    }
}
function setColorCookie() {
    var selectedColor = document.getElementById('select').value;
    if (selectedColor != "Select Color"){
        document.body.style.backgroundColor = selectedColor;
        document.cookie = "color=" + selectedColor + "; expires=Fri, 5 Aug 2025 01:00:00 UTC";
    }
}