document.getElementById('header-name').textContent = localStorage['active_user'];
function regist() {
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    let passwordRepeat= $('#passwordRepeat').val();
    let name_length = $('#name').val().length;
    let password_length = $('#password').val().length;
    if (name_length < 2) {
        document.getElementById('error').textContent = "Ошибка: Введите имя больше двух символов";
    }
    else if (password_length < 8) {
        document.getElementById('error').textContent = "Ошибка: Введите пароль больше восьми символов";
    }
    else if (password != passwordRepeat) {
        document.getElementById('error').textContent = "Ошибка: Пароли не совпадают";
    }
    else if(localStorage.getItem(name)==null){
        let new_user = {
            user_name: name,
            user_password: password
        }
        document.getElementById('error').textContent = " ";
        localStorage.setItem(new_user.user_name, JSON.stringify(new_user));
        localStorage.setItem(new_user.user_password, JSON.stringify(new_user));
        localStorage.setItem("active_user", new_user.user_name)
        // localStorage.setItem("active_password", new_user.user_password)
        document.getElementById('info').textContent = "Новый пользователь добавлен";
        document.getElementById('header-name').textContent = localStorage['active_user'];
        $('.header-name').css('display', 'block');
        $('.header-cab').css('display', 'block');
        $('.header-logout').css('display', 'block');
        $('.header-log').css('display', 'none');
        $('.header-reg').css('display', 'none');
    }
    else{
        document.getElementById('error').textContent = " ";
        document.getElementById('info').textContent = "Такой пользователь уже есть!";
    }
}
function log() {
    let namelog = document.getElementById('namelog').value;
    let passwordlog = document.getElementById('passwordlog').value;
    if(localStorage.getItem(namelog) != null && localStorage.getItem(passwordlog) != null){
        alert('Вы вошли')
        localStorage.setItem("active_user", namelog)
        // localStorage.setItem("active_password", passwordlog)
        document.getElementById('header-name').textContent = localStorage['active_user']
        $('.header-name').css('display', 'block');
        $('.header-cab').css('display', 'block');
        $('.header-logout').css('display', 'block');
        $('.header-log').css('display', 'none');
        $('.header-reg').css('display', 'none');
    }
    else{
        document.getElementById('error').textContent = "Ошибка: такого пользователя нет";
    }
}

function logout() {
    localStorage.removeItem('active_user')
    document.getElementById("header-name").textContent = ' '
    $('.header-log').css('display', 'block');
    $('.header-reg').css('display', 'block');
    $('.header-name').css('display', 'none');
    $('.header-cab').css('display', 'none');
    $('.header-logout').css('display', 'none');
}
function input() {
    $('.profile-form').css('display', 'block');
    $('.profile-change__input').css('display', 'none');
}
function change() {
    let changePassword = document.getElementById('changePassword').value;
    let changePassword_length = $('#changePassword').val().length;
    if (changePassword_length < 8) {
        document.getElementById('error').textContent = "Ошибка: Введите пароль больше восьми символов";
    }
    else{
        let changePassword = document.getElementById('changePassword').value;
        let a = {
            user_name: localStorage.getItem('active_user'),
            user_password: changePassword

        }
        localStorage.setItem(a.user_password, JSON.stringify(a));
        // localStorage.setItem("active_user", a.user_name)
        document.getElementById('error').textContent = "Вы поменяли пароль, не забудьте его";

    }

}
