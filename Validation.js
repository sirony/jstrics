/**
 * This function is used for limit length of character in the form input field
 * @param el - the element of the form like (input, textarea etc.)
 * @param length - the maximum lenght of the form element
 * @returns the specified length of character 
 */
function lengthLimit(el, length){
    let str = $(el).val();

    let strLen = str.length;

    if(strLen > length){
        let tiledStr = str.substr(0, length - 1);
        $(el).val(tiledStr);
    }
}