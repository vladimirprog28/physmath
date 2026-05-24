function registor(){
    
    const data = {
        input_login: document.getElementById('login1').value,
        input_email: document.getElementById('email1').value,
        input_password: document.getElementById('password1').value,
    }
    if(input_email =="", input_login =="", input_password ==""){
        document.getElementById('error1').innerHTML = "все поля должны быть запонены"
    }
    else{
        document.getElementById('error1').innerHTML = "";
    }
}

function exit_on_main(){
    window.location.replace('index.html')
}