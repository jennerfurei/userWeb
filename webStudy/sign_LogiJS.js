

// var txt = document.getElementById("sign_button");
// alert(txt)
var user = new loginUser()

class loginUser {
    userName
    password
    constructor() { }
}

function inputFocus(event) {
    var timeSpan = document.getElementById(event);

}

function loginButtonClick(event) {
    if (user.userName && user.password != null && user.password.length > 5) {
        alert("登陆成功")
    } else if (user.userName == null) {
        alert("请输入账号")
    } else {
        alert("请输入密码")
    }
}
function signButtonClick(event) {
    console.log(event)
}

function loginInputText(event) {
    var timeSpan = document.getElementById(event);
    if (timeSpan.value.length > 0) {
        if (event == 'login_userName') {
            user.userName = timeSpan.value
        } else if (event == 'login_password') {
            user.password = timeSpan.value
        }
    }
}

function signInputText(event) {
    console.log(event)
}


