// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
maxChar("abcccccccd") === "c"
maxChar("apple 1231111") === "1"

function maxChar(str) {
    var array = str.split("");

    var repeticion = 0;
    var caracter;

    for (i = 0; i < array.length; i++) {
        if (str.split(array[i]).length - 1 >= repeticion) {
            caracter = array[i - 1];
        }
    }
    return caracter;
}
