function registerUser() {
    var data = {
    username: document.getElementById('register-username').value,
    password: document.getElementById('register-password').value
    };
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/register', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 201) {
    window.location.href = 'login.html';
    }
    };
    xhr.send(JSON.stringify(data));
    }