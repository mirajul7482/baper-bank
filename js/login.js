document.getElementById('login-submit').addEventListener('click', function(){
    //user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    //user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    // check eamil and password
    if(userEmail == 'miraj@gmail.com' && userPassword == 'miraj7482'){
        window.location.href = ('banking.html');
    }

})