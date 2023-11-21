function aumenta(id) {
    var element = document.getElementById(id);
    var value = parseInt(element.value);
    if (isNumeric(value)) {
        value++;
        element.value = value;
    } else {
        value = 1;
        element.value = value;
    }
}

function diminui(id) {
    var element = document.getElementById(id);
    var value = parseInt(element.value);
    if (value > 0 && isNumeric(value)) {
        value--;
        element.value = value;
    } else {
        value = 0;
        element.value = value;
    }
}
function isNumeric(value) {
    if (!isNaN(value)) {
        return true;
    }
    return false;
}
