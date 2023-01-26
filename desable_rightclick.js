
document.onkeydown = function (e) {
    if (e.ctrlKey && e.keyCode == 73) { // "Control + I"
        e.preventDefault();
    }
    if (e.ctrlKey && e.keyCode == 85) { // "Control + U"
        e.preventDefault();
    }
    if (e.ctrlKey && e.keyCode == 123) { // "Control + F12"
        e.preventDefault();
    }
};
