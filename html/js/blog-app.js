function pwmsg(){
    var pwCheck = document.getElementById("password");
    var msg = "영문자 대/소문자, 특수문자, 숫자를 포함한 8 ~ 32 자";
    document.getElementById("pm").textContent = msg;
}