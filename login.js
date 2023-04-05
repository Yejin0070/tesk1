const idLogIn = document.getElementsByClassName("id");
const pwLogIn = document.getElementsByClassName("pw");
function loginBtnClick() {
  if (idLogIn.value == "") {
    alert("아이디를 입력해주세요.");
  } else if (pwLogIn.value == "비밀번호를 입력하세요.") {
    alert("비밀번호를 입력해주세요.");
  } else alert("로그인이 완료되었습니다.");
}
