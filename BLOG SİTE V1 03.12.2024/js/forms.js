const init = function () {
    document.getElementById('button-cancel').addEventListener('click', reset);
    document.getElementById('button-send').addEventListener('click', send);
}
const reset = function(ev){
    ev.preventDefault();
    document.getElementById('form-user').reset();
}

const send = function(ev){
    ev.preventDefault();
    ev.stopPropagation();

    let ret = validate();
    if(ret) {
        document.getElementById('form-user').submit();        
    }
    else{
        let err = document.querySelector('.error');
        let input = err.querySelector('input');
        console.log(errorElement.textContent);
        err.setAttribute('data-errormsg',' missing ' + input.placeholder);                
    }
    

}

const validate = function(){
    let valid = true;
    let chk = document.getElementById('input-alive');
    if(!chk.checked){
        valid = false;
    }
    let select = document.getElementById('input-age');
    console.log(select);
    let first = document.getElementById('input-first');
    let email = document.getElementById('input-email');
    return true; 
}

document.addEventListener('DOMContentLoaded', init);