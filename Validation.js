/**
 * This function is used for making group checkbox as rario behaviour 
 * @param container (string)  - the id of checkboxes container
 * @param el (dom) - current clicked checkbox
 * @param required (bool) - status the option is required or not. By default false (not required) 
 */

function checkBoxGroup(container, el, required = false){

  if(required){
    $("#"+container).find("input[type='checkbox']").prop('checked', false);

    if($(el).prop("checked") == true){
        $(el).prop("checked", false);
    }else{
        $(el).prop("checked", true);
    }
   }else{
        $(el).closest(".form-group").siblings().find("input[type='checkbox']").prop('checked', false);
   }
}

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

/**
*
*This code snippet is used for check non negative and non string input
*
*/
$(document).on("input", '.not_negative', function(){
    let el = $(this);

    let value = el.val();
    if (!$.isNumeric(value) || parseFloat(value) < 0 ) {
        el.val('');
    }

    // Check have any length limit for the input field
    let strLen = value.length;
        length = parseFloat(el.attr("data-length"));
    if(strLen > length){
        let tiledStr = str.substr(0, length - 1);
        $(el).val(tiledStr);
    }
});